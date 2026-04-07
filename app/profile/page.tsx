import {
  Briefcase,
  Building2,
  Calendar,
  ChevronRight,
  ExternalLink,
  GitFork,
  GraduationCap,
  Link as LinkIcon,
  MapPin,
  MessageCircle,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SiGmail } from "react-icons/si";

const profile = {
  fullName: "Argo Nurcahyo",
  handle: "@argonurcahyo",
  title: "Software Engineer",
  focus: "Web development with interests in AI, IoT, mobile apps, and data science",
  currentRole: "Civil Servant",
  currentOrg: "Statistics Indonesia (BPS)",
  location: "Jakarta",
  shortBio:
    "I build practical software focused on real-world workflows, especially in public-service environments. I value reliability, clarity, and continuous improvement over hype-driven development.",
};

const contactPoints = [
  {
    label: "Email",
    value: "argonurcahyo@gmail.com",
    href: "mailto:argonurcahyo@gmail.com",
    icon: SiGmail, //gmail icon?
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/argo-nurcahyo-6b2538170",
    href: "https://www.linkedin.com/in/argo-nurcahyo-6b2538170/",
    icon: LinkIcon,
  },
  {
    label: "GitHub",
    value: "github.com/argonurcahyo",
    href: "https://github.com/argonurcahyo",
    icon: GitFork,
  },
];

const personalHighlights = [
  "I like shipping useful features for real users, especially in public-service contexts.",
  "My default stack is Laravel + React/Next.js, with a strong focus on reliable web workflows.",
  "I care about clean interfaces, maintainable code, and products that feel simple to use.",
];

const nowItems = [
  "Strengthening web product quality and delivery speed for day-to-day systems.",
  "Exploring small AI-assisted workflows for practical productivity.",
];

const nextItems = ["Deeper experiments in IoT and mobile-connected product ideas."];

const focusTags = ["Web Engineering", "Laravel", "Next.js", "TypeScript", "Product Thinking"];

const workExperience = [
  {
    role: "IT Specialist",
    org: "Statistics Indonesia (BPS)",
    period: "2017 - Present",
    note: "Managing and developing IT systems supporting day-to-day statistical workflows and reporting operations.",
  },
];

const education = [
  {
    institution: "Statistics Polytechnic STIS",
    degree: "Diploma IV (D4)",
    field: "Computational Statistics",
    period: "2012 - 2016",
  },
];

const extras = [
  "I prefer building small, focused tools over waiting for the perfect big idea.",
  "I sometimes spend way too long thinking about variable names.",
  "Clean, minimal UI over flashy effects, every time.",
];

export default function ProfilePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-[radial-gradient(rgba(148,163,184,0.22)_1px,transparent_1px)] bg-size-[16px_16px] opacity-45" />

      <header className="fixed inset-x-0 top-6 z-50 mx-auto flex w-fit max-w-[90vw] items-center justify-between rounded-full border border-border/70 bg-background/78 px-4 py-2 shadow-[0_10px_28px_rgba(3,8,18,0.45)] backdrop-blur-md">
        <Link href="/" className="mr-6 flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Users size={14} />
          </div>
          <span className="font-mono text-sm font-semibold tracking-tight">argo.profile</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-3">
          <Link
            className="rounded-full px-3 py-1 font-mono text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
            href="/"
          >
            goHome()
          </Link>
          <a className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary" href="#details">
            profile()
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-5 pb-20 pt-32 sm:px-8">
        <AnimatedSection>
          <section className="grid gap-8 rounded-3xl border border-border/50 bg-card/70 p-7 shadow-[0_16px_50px_rgba(3,8,18,0.24)] sm:p-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-6">
              <Badge className="w-fit rounded-full bg-primary/15 text-primary">Personal Profile</Badge>
              <div className="space-y-3">
                <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">{profile.fullName}</h1>
                <p className="font-mono text-sm text-muted-foreground">{profile.handle}</p>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {profile.title}. {profile.focus}. {profile.shortBio}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {focusTags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Card className="border-border/50 bg-muted/20 shadow-none">
              <CardHeader>
                <CardTitle className="font-mono text-sm tracking-wide text-muted-foreground">Current Context</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span>{profile.currentRole}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span>{profile.currentOrg}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{profile.location}</span>
                </div>
                {personalHighlights.map((item) => (
                  <div key={item} className="rounded-xl border border-border/35 bg-background/70 p-3 text-muted-foreground">
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </AnimatedSection>

        <Separator className="my-10 border-dashed opacity-50" />

        <AnimatedSection delay={0.1}>
          <section id="details" className="grid gap-6 lg:grid-cols-2">
            <Card className="border-border/50 bg-muted/10 shadow-none">
              <CardHeader>
                <CardTitle className="text-xl">Where to Find Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactPoints.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-border/40 bg-background/70 p-4 transition-colors hover:bg-muted/40"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="font-mono text-xs text-muted-foreground">{item.value}</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-linear-to-br from-primary/10 via-background to-cyan-500/10 shadow-[0_18px_40px_rgba(6,182,212,0.14)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Now / Next
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <section className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-4">
                    <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 px-2.5 py-1 font-mono text-xs font-semibold text-cyan-700 dark:text-cyan-300">
                      <Briefcase className="h-3.5 w-3.5" />
                      NOW
                    </p>
                    <ul className="space-y-2">
                      {nowItems.map((item) => (
                        <li key={item} className="rounded-lg border border-cyan-500/25 bg-background/85 p-3 text-sm leading-relaxed text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="rounded-2xl border border-fuchsia-500/25 bg-fuchsia-500/10 p-4">
                    <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-fuchsia-500/15 px-2.5 py-1 font-mono text-xs font-semibold text-fuchsia-700 dark:text-fuchsia-300">
                      <Rocket className="h-3.5 w-3.5" />
                      NEXT
                    </p>
                    <ul className="space-y-2">
                      {nextItems.map((item) => (
                        <li key={item} className="rounded-lg border border-fuchsia-500/20 bg-background/85 p-3 text-sm leading-relaxed text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </CardContent>
            </Card>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card className="border-border/50 bg-muted/10 shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {workExperience.map((item) => (
                  <div key={`${item.role}-${item.org}`} className="rounded-xl border border-border/40 bg-background/70 p-4">
                    <p className="font-medium">{item.role}</p>
                    <p className="mt-0.5 text-sm text-primary">{item.org}</p>
                    <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {item.period}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-muted/10 shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((item) => (
                  <div
                    key={`${item.institution}-${item.degree}-${item.period}`}
                    className="rounded-xl border border-border/40 bg-background/70 p-4"
                  >
                    <p className="font-medium">{item.institution}</p>
                    <p className="mt-0.5 text-sm text-primary">
                      {item.degree} · {item.field}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {item.period}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <section className="mt-6">
            <Card className="border-border/60 bg-muted/10 shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Sparkles className="h-5 w-5 text-primary" />
                  A Few More Things
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="flex flex-col gap-2">
                  {extras.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Separator className="border-dashed opacity-50" />
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MessageCircle className="h-4 w-4 shrink-0 text-primary/60" />
                  If you have a project idea or want to collaborate, feel free to reach out.
                </p>
              </CardContent>
            </Card>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <section className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full border border-border/60 bg-background px-5 py-2 font-mono text-xs font-medium hover:bg-muted/40"
            >
              goHome()
            </Link>
            <a
              href="https://www.linkedin.com/in/argo-nurcahyo-6b2538170/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border/60 bg-background px-5 py-2 font-mono text-xs font-medium hover:bg-muted/40"
            >
              openLinkedIn()
            </a>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.45}>
          <p className="mt-8 text-xs text-muted-foreground">A personal profile draft designed for ongoing updates.</p>
        </AnimatedSection>
      </main>
    </div>
  );
}
