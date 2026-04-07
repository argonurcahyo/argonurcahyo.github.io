import {
  ArrowRight,
  Boxes,
  Braces,
  ChartColumnBig,
  Database,
  FolderKanban,
  GitFork,
  Globe2,
  ImageOff,
  Map,
  RadioTower,
  Send,
  Smartphone,
  Sparkles,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  dailyWork,
  featuredProjects,
  projectImageMap,
  sideQuests,
  skillGroups,
  supportingProjects,
} from "@/app/portfolio-data";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { TechIcon } from "@/components/tech-icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const profileLinks =[
  {
    label: "GitLab",
    href: "https://gitlab.com/argonurcahyo",
    description: "Additional portfolio repositories.",
    icon: FolderKanban,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/argo-nurcahyo-6b2538170/",
    description: "Career profile.",
    icon: Globe2,
  },
  {
    label: "X / @argonurcahyo",
    href: "https://twitter.com/argonurcahyo",
    description: "Quick updates.",
    icon: Send,
  },
  {
    label: "Archive",
    href: "https://github.com/argonurcahyo?tab=repositories",
    description: "All repositories.",
    icon: FolderKanban,
  },
];

const skillIcons =[Braces, Map, Smartphone, Database, RadioTower, ChartColumnBig];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Subtle Dot Pattern Background */}
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-[radial-gradient(rgba(148,163,184,0.24)_1px,transparent_1px)] bg-size-[16px_16px] opacity-45" />

      {/* Floating Pill Navigation */}
      <header className="fixed inset-x-0 top-6 z-50 mx-auto flex w-fit max-w-[90vw] items-center justify-between rounded-full border border-border/70 bg-background/78 px-4 py-2 shadow-[0_10px_28px_rgba(3,8,18,0.45)] backdrop-blur-md">
        <a href="#top" className="mr-6 flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Terminal size={14} />
          </div>
          <span className="font-mono text-sm font-semibold tracking-tight">argo.dev</span>
        </a>
        <nav className="flex items-center gap-1 sm:gap-4">
          <Link className="rounded-full px-3 py-1 font-mono text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground" href="/profile">
            profile
          </Link>
          <a className="rounded-full px-3 py-1 font-mono text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground" href="#about">
            _about
          </a>
          <a className="rounded-full px-3 py-1 font-mono text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground" href="#projects">
            _work
          </a>
          <a className="hidden rounded-full px-3 py-1 font-mono text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground sm:block" href="#skills">
            _skills
          </a>
          <a className="rounded-full px-3 py-1 font-mono text-xs font-medium text-primary transition-colors hover:bg-primary/10" href="#contact">
            contact()
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-5 pt-32 pb-20 sm:px-8">
        
        {/* Hero Section (Asymmetric) */}
        <section id="top" className="grid gap-12 pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  System Online
                </p>
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                I build web products and side projects.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                I mainly work on <span className="font-medium text-foreground">Laravel</span> apps.
                I also build with <span className="font-medium text-foreground">Next.js</span>,
                TypeScript, and browser tooling.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="rounded-full px-6 font-mono text-xs">
                <a href="#projects">
                  Explore work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" className="rounded-full px-6 font-mono text-xs">
                <Link href="/profile">
                  Profile
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-dashed px-6 font-mono text-xs">
                <a href="https://github.com/argonurcahyo" target="_blank" rel="noreferrer">
                  <GitFork className="mr-2 h-4 w-4" /> github
                </a>
              </Button>
            </div>
          </div>

          {/* Right side sticker panel */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2 relative py-2">
              <div className="pointer-events-none absolute -right-8 top-0 size-44 rounded-full border border-primary/20 opacity-60 animate-spin [animation-duration:16s]" />
              <div className="pointer-events-none absolute -left-4 bottom-0 size-40 rounded-full bg-primary/10 blur-2xl" />

              <div className="relative z-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="relative w-fit animate-pulse">
                  <Image
                    src="/argo-sticker.webp"
                    alt="Argo sticker"
                    width={220}
                    height={220}
                    className="h-32 w-32 rounded-2xl border border-border/80 bg-background object-cover shadow-[0_12px_28px_rgba(3,8,18,0.45)] sm:h-36 sm:w-36"
                  />
                  <span className="absolute -right-3 -top-3 rounded-full border border-primary/35 bg-primary/20 px-2 py-0.5 font-mono text-[10px] text-primary">
                    live
                  </span>
                </div>
                <p className="max-w-xs text-sm text-foreground/85">GAME ON!</p>
              </div>
            </div>

            <div className="sm:col-span-2 rounded-xl border border-dashed border-border/60 bg-transparent p-5">
              <p className="mb-3 font-mono text-xs text-muted-foreground">{"// Current stack focus"}</p>
              <div className="flex flex-wrap gap-2">
                {["Laravel", "Next.js", "TypeScript", "React", "Python"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/35 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground">
                    <TechIcon tech={tag} className="size-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12 border-dashed opacity-50" />

        {/* About Section (Bento Layout) */}
        <section id="about" className="py-12">
          <SectionHeading
            eyebrow="sys.info"
            icon={Boxes}
            title="What I work on"
            description="Short summary of my day-to-day work and side projects."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card className="border-border/50 bg-muted/10 shadow-none md:col-span-2">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary">
                  <Braces size={18} />
                </div>
                <h3 className="mb-2 text-xl font-semibold tracking-tight">The main lane</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I build web apps with React, Next.js, PHP, and Laravel.
                  Focus: useful features and stable delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-muted/10 shadow-none">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary">
                  <RadioTower size={18} />
                </div>
                <h3 className="mb-2 text-xl font-semibold tracking-tight">Side signals</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I also explore browser extensions, notebooks, and small automation ideas.
                </p>
              </CardContent>
            </Card>

            <div className="md:col-span-3 rounded-2xl border border-dashed border-border/60 bg-background/50 p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Daily operations</h3>
                <span className="font-mono text-xs text-muted-foreground">./work</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {dailyWork.map((item) => (
                  <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="group block space-y-3 rounded-xl border border-border/40 bg-muted/20 p-4 transition-colors hover:bg-muted/40">
                    <div className="relative overflow-hidden rounded-lg border border-border/60 bg-muted/35">
                      {projectImageMap[item.title] ? (
                        <Image
                          src={projectImageMap[item.title]}
                          alt={`${item.title} screenshot`}
                          width={1200}
                          height={675}
                          className="aspect-video h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex aspect-video items-center justify-center">
                          <span className="font-mono text-[10px] text-muted-foreground">Image placeholder</span>
                        </div>
                      )}
                    </div>
                    <h4 className="font-medium group-hover:text-primary">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.stack.map((s) => (
                        <span key={s} className="inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground before:content-['#']">
                          <TechIcon tech={s} className="size-3" />
                          {s}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12 border-dashed opacity-50" />

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <SectionHeading
            eyebrow="repositories"
            icon={Sparkles}
            title="Selected projects"
            description="Polished and experimental work from real repositories."
          />

          <div className="mt-10 space-y-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                imageSrc={project.imageSrc}
                imageAlt={`${project.title} project screenshot`}
              />
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Card className="border-border/50 bg-muted/10 shadow-none">
              <CardContent className="p-6">
                <div className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {"// Side quests"}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {sideQuests.map((item) => (
                    <div key={item.title} className="space-y-2 rounded-xl border border-border/40 bg-background/50 p-4">
                      <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-border/60 bg-muted/20">
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                          <ImageOff className="size-3.5" />
                          add image later
                        </span>
                      </div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.summary}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed border-border/60 bg-transparent shadow-none">
              <CardContent className="p-6">
                <div className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {"// Experiments"}
                </div>
                <div className="flex flex-col gap-4">
                  {supportingProjects.map((project) => (
                    <a key={project.title} href={project.repoUrl} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-lg p-2 hover:bg-muted/30">
                      <div className="flex items-center gap-3">
                        <div className="relative h-14 w-20 overflow-hidden rounded-md border border-border/60 bg-muted/25">
                          {projectImageMap[project.title] ? (
                            <Image
                              src={projectImageMap[project.title]}
                              alt={`${project.title} screenshot`}
                              width={320}
                              height={180}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <ImageOff className="size-4 text-muted-foreground/75" />
                            </div>
                          )}
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-medium group-hover:underline">{project.title}</h4>
                          <div className="flex gap-2 font-mono text-[10px] text-muted-foreground">
                            <span>{project.status}</span>
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground/50 transition-transform group-hover:-translate-x-1" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 border-dashed opacity-50" />

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <SectionHeading
            eyebrow="tech.stack"
            icon={ChartColumnBig}
            title="Tech stack"
            description="Web-first stack with supporting tools for data and experiments."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = skillIcons[index] ?? Braces;
              return (
                <div key={group.title} className="rounded-2xl border border-border/50 bg-muted/10 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-mono text-sm font-medium">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground">
                        <TechIcon tech={item} className="size-3.5" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer / Contact */}
        <section id="contact" className="mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 sm:p-12">
            {/* Decorative background blur */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            
            <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  EOF
                </span>
                <h2 className="text-3xl font-bold tracking-tight">
                  Start with the code.
                </h2>
                <p className="max-w-sm text-muted-foreground leading-relaxed">
                  GitLab for projects, LinkedIn for profile.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {profileLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col justify-between rounded-xl border border-border/40 bg-muted/20 p-5 transition-colors hover:bg-muted/50"
                    >
                      <Icon className="mb-4 h-5 w-5 text-muted-foreground group-hover:text-primary" />
                      <div>
                        <p className="font-mono text-xs font-semibold">{link.label}</p>
                        <p className="mt-1 text-[10px] text-muted-foreground line-clamp-2">
                          {link.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}