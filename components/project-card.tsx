import { ArrowUpRight, GitFork, Sparkles } from "lucide-react";

import type { Project } from "@/app/portfolio-data";
import { TechIcon } from "@/components/tech-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-border/80 bg-card/95">
      <CardHeader className="gap-5 border-b border-border/80 bg-muted/30 p-6 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/80">
              <Badge
                variant="default"
                className="rounded-md border-primary/35 bg-primary/16 px-3 py-1.5 text-[0.68rem] text-foreground"
              >
                <Sparkles />
                <span>{project.status}</span>
              </Badge>
              <span className="rounded-md border border-border/80 bg-muted/35 px-3 py-1.5 text-xs font-medium text-foreground/90">
                {project.year}
              </span>
            </div>
            <div className="space-y-3">
              <CardTitle className="text-2xl sm:text-3xl">{project.title}</CardTitle>
              <p className="max-w-3xl text-base leading-7 text-foreground/80 sm:text-lg">
                {project.summary}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              variant="outline"
              className="border-primary/45 bg-primary/10 text-foreground hover:bg-primary/16"
            >
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                <GitFork />
                <span>Repository</span>
              </a>
            </Button>
            {project.liveUrl ? (
              <Button asChild className="shadow-[0_16px_34px_rgba(6,182,212,0.22)]">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ArrowUpRight />
                  <span>Live preview</span>
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 px-6 pb-8 pt-6 sm:px-8">
        <div className="flex flex-wrap gap-2.5">
          {project.stack.map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="rounded-md border-border/70 bg-muted/35 px-3 py-1.5 text-[0.68rem] text-foreground/85"
            >
              <TechIcon tech={item} className="size-3.5" />
              {item}
            </Badge>
          ))}
        </div>

        <ul className="grid gap-3 md:grid-cols-3">
          {project.highlights.map((item, index) => (
            <li
              key={item}
              className="rounded-xl border border-border/70 bg-muted/30 p-4 text-sm leading-7 text-foreground/80"
            >
              <div className="mb-3 flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <span className="text-xs font-bold">0{index + 1}</span>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}