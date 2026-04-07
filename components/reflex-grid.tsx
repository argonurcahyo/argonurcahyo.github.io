"use client";

import { Gauge, Timer, Trophy } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ReflexStatus = "idle" | "playing" | "game-over";

type ReflexState = {
  status: ReflexStatus;
  score: number;
  timeLeft: number;
  targetCell: number;
  bestScore: number;
};

const gridSize = 9;
const gameDuration = 20;

function randomCell(except?: number) {
  const next = Math.floor(Math.random() * gridSize);
  return next === except ? (next + 1) % gridSize : next;
}

const REFLEX_BEST_KEY = "reflex-grid-best";

function subscribeReflexBest(onChange: () => void) {
  window.addEventListener(REFLEX_BEST_KEY, onChange);
  return () => window.removeEventListener(REFLEX_BEST_KEY, onChange);
}

function getReflexBestSnapshot() {
  return Number(localStorage.getItem(REFLEX_BEST_KEY) ?? "0") || 0;
}

function getReflexBestServerSnapshot() {
  return 0;
}

const initialReflexState: ReflexState = {
  status: "idle",
  score: 0,
  timeLeft: gameDuration,
  targetCell: 0,
  bestScore: 0,
};

export function ReflexGrid() {
  const [game, setGame] = useState<ReflexState>(initialReflexState);
  const storedBest = useSyncExternalStore(subscribeReflexBest, getReflexBestSnapshot, getReflexBestServerSnapshot);
  const nextShiftAt = useRef(0);
  const displayBest = Math.max(game.bestScore, storedBest);

  useEffect(() => {
    if (game.bestScore <= 0) return;
    localStorage.setItem(REFLEX_BEST_KEY, String(game.bestScore));
    window.dispatchEvent(new Event(REFLEX_BEST_KEY));
  }, [game.bestScore]);

  useEffect(() => {
    if (game.status !== "playing") {
      return;
    }

    const timer = window.setInterval(() => {
      setGame((current) => {
        if (current.status !== "playing") {
          return current;
        }

        const now = Date.now();
        let nextTargetCell = current.targetCell;

        if (now >= nextShiftAt.current) {
          nextTargetCell = randomCell(current.targetCell);
          nextShiftAt.current = now + 900;
        }

        const nextTimeLeft = Math.max(0, Number((current.timeLeft - 0.1).toFixed(1)));

        if (nextTimeLeft <= 0) {
          return {
            ...current,
            status: "game-over",
            timeLeft: 0,
          };
        }

        return {
          ...current,
          targetCell: nextTargetCell,
          timeLeft: nextTimeLeft,
        };
      });
    }, 100);

    return () => window.clearInterval(timer);
  }, [game.status]);

  const startGame = () => {
    nextShiftAt.current = Date.now() + 900;
    setGame((current) => ({
      ...current,
      status: "playing",
      score: 0,
      timeLeft: gameDuration,
      targetCell: randomCell(),
    }));
  };

  const tapCell = (cell: number) => {
    setGame((current) => {
      if (current.status !== "playing") {
        return current;
      }

      const hit = cell === current.targetCell;
      const nextScore = hit ? current.score + 1 : Math.max(0, current.score - 1);

      return {
        ...current,
        score: nextScore,
        bestScore: Math.max(current.bestScore, nextScore),
        targetCell: hit ? randomCell(current.targetCell) : current.targetCell,
      };
    });
  };

  const isPlaying = game.status === "playing";

  return (
    <Card className="overflow-hidden border-border/70 bg-card/88 shadow-[0_18px_38px_rgba(3,8,18,0.24)]">
      <CardContent className="space-y-5 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-2">
            <Badge className="w-fit rounded-full px-3 py-1 text-[0.62rem] tracking-[0.22em]">
              <Gauge className="size-3.5" />
              <span>Reflex Grid</span>
            </Badge>
            <div>
              <p className="text-sm font-semibold text-foreground">Hit the glowing tile as fast as possible.</p>
              <p className="text-xs leading-6 text-muted-foreground">
                20 seconds. Correct tap +1, wrong tap -1.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-border/70 bg-muted/30 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <Trophy className="size-3.5 text-primary" />
            <span>best {displayBest}</span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2 rounded-[1.6rem] border border-border/70 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(15,23,42,0.1))] p-2 touch-manipulation">
              {Array.from({ length: gridSize }).map((_, index) => {
                const isTarget = index === game.targetCell;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => tapCell(index)}
                    className={[
                      "h-22 rounded-2xl border transition-colors",
                      "border-border/60 bg-background/60",
                      isTarget && isPlaying
                        ? "border-cyan-300/70 bg-cyan-300/30 shadow-[0_0_28px_rgba(34,211,238,0.35)]"
                        : "hover:border-border/85 hover:bg-background/80",
                    ].join(" ")}
                    aria-label={`Tap cell ${index + 1}`}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {isTarget && isPlaying ? "hit" : "tap"}
                    </span>
                  </button>
                );
              })}
            </div>

            <Button type="button" onClick={startGame} className="h-11 w-full rounded-2xl text-xs uppercase tracking-[0.22em]">
              {game.status === "game-over" ? "Play again" : isPlaying ? "Restart run" : "Start run"}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:grid-cols-1 sm:gap-3">
            <div className="rounded-2xl border border-border/60 bg-muted/25 px-3 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">score</p>
              <p className="mt-1 text-2xl font-semibold text-foreground">{game.score}</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-muted/25 px-3 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">timer</p>
              <p className="mt-1 flex items-center gap-1 text-2xl font-semibold text-foreground">
                <Timer className="size-4 text-primary" />
                {game.timeLeft.toFixed(1)}
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-muted/25 px-3 py-3 sm:min-w-30">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">status</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                {game.status === "idle" ? "standby" : game.status === "playing" ? "live" : "retry"}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}