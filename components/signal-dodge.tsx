"use client";

import { ShieldAlert, Signal, Trophy } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type GameStatus = "idle" | "playing" | "game-over";

type Obstacle = {
  id: number;
  lane: number;
  row: number;
};

type GameState = {
  status: GameStatus;
  playerLane: number;
  obstacles: Obstacle[];
  score: number;
  bestScore: number;
};

const laneLabels = ["left", "center", "right"];
const laneCount = laneLabels.length;
const rowCount = 6;
const playerRow = rowCount - 1;
const initialGameState: GameState = {
  status: "idle",
  playerLane: 1,
  obstacles: [],
  score: 0,
  bestScore: 0,
};

function getSpawnChance(score: number) {
  return Math.min(0.72, 0.34 + score * 0.016);
}

function getTickDelay(score: number) {
  return Math.max(220, 520 - score * 11);
}

const SIGNAL_BEST_KEY = "signal-dodge-best";

function subscribeSignalBest(onChange: () => void) {
  window.addEventListener(SIGNAL_BEST_KEY, onChange);
  return () => window.removeEventListener(SIGNAL_BEST_KEY, onChange);
}

function getSignalBestSnapshot() {
  return Number(localStorage.getItem(SIGNAL_BEST_KEY) ?? "0") || 0;
}

function getSignalBestServerSnapshot() {
  return 0;
}

export function SignalDodge() {
  const [game, setGame] = useState<GameState>(initialGameState);
  const storedBest = useSyncExternalStore(subscribeSignalBest, getSignalBestSnapshot, getSignalBestServerSnapshot);
  const nextObstacleId = useRef(1);
  const displayBest = Math.max(game.bestScore, storedBest);

  useEffect(() => {
    if (game.bestScore <= 0) return;
    localStorage.setItem(SIGNAL_BEST_KEY, String(game.bestScore));
    window.dispatchEvent(new Event(SIGNAL_BEST_KEY));
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

        const movedObstacles = current.obstacles.map((obstacle) => ({
          ...obstacle,
          row: obstacle.row + 1,
        }));

        const collided = movedObstacles.some(
          (obstacle) => obstacle.lane === current.playerLane && obstacle.row >= playerRow,
        );
        const clearedCount = movedObstacles.filter((obstacle) => obstacle.row > playerRow).length;
        const remainingObstacles = movedObstacles.filter((obstacle) => obstacle.row <= playerRow);

        if (collided) {
          return {
            ...current,
            obstacles: remainingObstacles,
            status: "game-over",
          };
        }

        if (Math.random() < getSpawnChance(current.score)) {
          remainingObstacles.push({
            id: nextObstacleId.current,
            lane: Math.floor(Math.random() * laneCount),
            row: 0,
          });
          nextObstacleId.current += 1;
        }

        const nextScore = current.score + clearedCount;

        return {
          ...current,
          obstacles: remainingObstacles,
          score: nextScore,
          bestScore: Math.max(current.bestScore, nextScore),
        };
      });
    }, getTickDelay(game.score));

    return () => window.clearInterval(timer);
  }, [game.score, game.status]);

  const selectLane = (lane: number) => {
    setGame((current) => ({
      ...current,
      playerLane: lane,
    }));
  };

  const startGame = () => {
    setGame({
      ...game,
      obstacles: [],
      playerLane: 1,
      score: 0,
      status: "playing",
    });
    nextObstacleId.current = 1;
  };

  const isPlaying = game.status === "playing";
  const isGameOver = game.status === "game-over";

  return (
    <Card className="overflow-hidden border-border/70 bg-card/88 shadow-[0_18px_38px_rgba(3,8,18,0.24)]">
      <CardContent className="space-y-5 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-2">
            <Badge className="w-fit rounded-full px-3 py-1 text-[0.62rem] tracking-[0.22em]">
              <Signal className="size-3.5" />
              <span>Signal Dodge</span>
            </Badge>
            <div>
              <p className="text-sm font-semibold text-foreground">Tap a lane before the glitch drops.</p>
              <p className="text-xs leading-6 text-muted-foreground">
                Built for thumbs: no keyboard, no drag, just survive.
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
            <div className="relative grid h-70 grid-cols-3 grid-rows-6 gap-2 rounded-[1.6rem] border border-border/70 bg-[linear-gradient(180deg,rgba(14,165,233,0.08),rgba(15,23,42,0.1))] p-2 touch-manipulation sm:h-74">
              {Array.from({ length: rowCount * laneCount }).map((_, index) => {
                const row = Math.floor(index / laneCount);
                const lane = index % laneCount;
                const isPlayer = row === playerRow && lane === game.playerLane;
                const hasObstacle = game.obstacles.some(
                  (obstacle) => obstacle.row === row && obstacle.lane === lane,
                );
                const isCollisionCell = isPlayer && hasObstacle;

                return (
                  <button
                    key={`${row}-${lane}`}
                    type="button"
                    onClick={() => selectLane(lane)}
                    className={[
                      "relative flex items-center justify-center rounded-2xl border text-[10px] transition-colors",
                      "border-border/60 bg-background/60 text-muted-foreground",
                      lane === game.playerLane ? "border-primary/40" : "hover:border-border/85 hover:bg-background/80",
                      isCollisionCell ? "bg-rose-500/20 text-rose-700 dark:text-rose-200" : "",
                    ].join(" ")}
                    aria-label={`Move to ${laneLabels[lane]} lane`}
                  >
                    {hasObstacle ? (
                      <span className="absolute inset-x-3 inset-y-2 rounded-[0.9rem] bg-orange-400/90 shadow-[0_0_28px_rgba(251,146,60,0.45)]" />
                    ) : null}
                    {isPlayer ? (
                      <span className="absolute inset-x-2 inset-y-3 rounded-[0.9rem] border border-primary/40 bg-primary/85 shadow-[0_0_26px_rgba(14,165,233,0.35)]" />
                    ) : null}
                    <span className="relative z-10 font-mono uppercase tracking-[0.18em]">
                      {row === playerRow ? laneLabels[lane] : hasObstacle ? "!" : "·"}
                    </span>
                  </button>
                );
              })}

              {!isPlaying ? (
                <div className="absolute inset-2 flex flex-col items-center justify-center rounded-[1.3rem] border border-border/60 bg-background/78 px-5 text-center backdrop-blur-sm">
                  <ShieldAlert className="mb-3 size-8 text-primary" />
                  <p className="text-sm font-semibold text-foreground">
                    {isGameOver ? "Signal lost." : "Ready to route around the noise?"}
                  </p>
                  <p className="mt-2 max-w-xs text-xs leading-6 text-muted-foreground">
                    Tap left, center, or right. Each orange block you avoid adds to the score.
                  </p>
                  <Button type="button" onClick={startGame} className="mt-4 h-10 px-5 text-xs">
                    {isGameOver ? "Play again" : "Start run"}
                  </Button>
                </div>
              ) : null}
            </div>

            <div className="grid grid-cols-3 gap-2 touch-manipulation">
              {laneLabels.map((label, lane) => (
                <Button
                  key={label}
                  type="button"
                  variant={lane === game.playerLane ? "default" : "outline"}
                  onClick={() => selectLane(lane)}
                  className="h-11 rounded-2xl text-[0.68rem] uppercase tracking-[0.24em]"
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:grid-cols-1 sm:gap-3">
            <div className="rounded-2xl border border-border/60 bg-muted/25 px-3 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">score</p>
              <p className="mt-1 text-2xl font-semibold text-foreground">{game.score}</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-muted/25 px-3 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">speed</p>
              <p className="mt-1 text-2xl font-semibold text-foreground">
                {game.score < 6 ? "low" : game.score < 14 ? "mid" : "max"}
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