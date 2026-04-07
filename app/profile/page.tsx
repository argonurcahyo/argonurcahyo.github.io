import {
  Briefcase,
  Building2,
  CalendarDays,
  CircleHelp,
  ExternalLink,
  GitFork,
  Globe,
  Link as LinkIcon,
  MapPin,
  Users,
} from "lucide-react";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const profile = {
  fullName: "Argo Nurcahyo",
  handle: "@argonurcahyo",
  title: "Software Engineer",
  focus: "Web development with interests in AI, IoT, mobile apps, and data science",
  currentRole: "Civil Servant",
  currentOrg: "Statistics Indonesia (BPS)",
  location: "Indonesia (city not publicly confirmed)",
  followers: "7",
  following: "6",
  contributionsLastYear: "31",
};

const verifiedSignals = [
  {
    label: "GitHub Profile",
    value: "github.com/argonurcahyo",
    href: "https://github.com/argonurcahyo",
    icon: GitFork,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/argo-nurcahyo-6b2538170",
    href: "https://www.linkedin.com/in/argo-nurcahyo-6b2538170/",
    icon: LinkIcon,
  },
  {
    label: "Public Website",
    value: "argonurcahyo.github.io",
    href: "https://argonurcahyo.github.io",
    icon: Globe,
  },
];

const activityHighlights = [
  "Created repositories in April 2026 including wiryo, videostream-downloader, and netflix-clone.",
  "Contributed recently to wiryo, videostream-downloader, argonurcahyo.github.io, and netflix-clone.",
  "Profile README states interests in web development and collaboration in React/Vue projects.",
];

const placeholders = [
  { label: "Detailed LinkedIn headline", value: "Placeholder: add exact current headline" },
  { label: "Work history timeline", value: "Placeholder: add previous roles and dates" },
  { label: "Education", value: "Placeholder: add degree, institution, and graduation year" },
  { label: "Certifications", value: "Placeholder: add certificate names and issuers" },
  { label: "Email / preferred contact", value: "Placeholder: add public contact email" },
  { label: "CV / resume link", value: "Placeholder: add downloadable resume URL" },
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
          <Link className="rounded-full px-3 py-1 font-mono text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground" href="/">
            home
          </Link>
          <a className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary" href="#details">
            details
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-5 pt-32 pb-20 sm:px-8">
        <AnimatedSection>
        <section className="grid gap-8 rounded-3xl border border-border/50 bg-card/70 p-7 shadow-[0_16px_50px_rgba(3,8,18,0.24)] sm:p-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-6">
            <Badge className="w-fit rounded-full bg-primary/15 text-primary">Detailed Profile</Badge>
            <div className="space-y-3">
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">{profile.fullName}</h1>
              <p className="font-mono text-sm text-muted-foreground">{profile.handle}</p>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                {profile.title}. {profile.focus}.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="rounded-full">Web Engineering</Badge>
              <Badge variant="secondary" className="rounded-full">Next.js</Badge>
              <Badge variant="secondary" className="rounded-full">Laravel</Badge>
              <Badge variant="secondary" className="rounded-full">TypeScript</Badge>
              <Badge variant="secondary" className="rounded-full">Data Projects</Badge>
            </div>
          </div>

          <Card className="border-border/50 bg-muted/20 shadow-none">
            <CardHeader>
              <CardTitle className="font-mono text-sm tracking-wide text-muted-foreground">Public Snapshot</CardTitle>
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
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>{profile.followers} followers · {profile.following} following (GitHub)</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span>{profile.contributionsLastYear} contributions in the last year (GitHub)</span>
              </div>
            </CardContent>
          </Card>
        </section>
        </AnimatedSection>

        <Separator className="my-10 border-dashed opacity-50" />

        <AnimatedSection delay={0.1}>
        <section id="details" className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/50 bg-muted/10 shadow-none">
            <CardHeader>
              <CardTitle className="text-xl">Verified Public Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {verifiedSignals.map((item) => {
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

          <Card className="border-border/50 bg-muted/10 shadow-none">
            <CardHeader>
              <CardTitle className="text-xl">Recent Activity Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {activityHighlights.map((item) => (
                  <li key={item} className="rounded-xl border border-border/35 bg-background/70 p-3 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
        <section className="mt-6">
          <Card className="border-dashed border-border/60 bg-transparent shadow-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <CircleHelp className="h-5 w-5 text-primary" />
                Placeholders For Unavailable Info
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {placeholders.map((item) => (
                <div key={item.label} className="rounded-xl border border-border/40 bg-muted/15 p-4">
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.value}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
        <section className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="rounded-full border border-border/60 bg-background px-5 py-2 font-mono text-xs font-medium hover:bg-muted/40">
            Back to homepage
          </Link>
          <a
            href="https://github.com/argonurcahyo"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border/60 bg-background px-5 py-2 font-mono text-xs font-medium hover:bg-muted/40"
          >
            Open GitHub Profile
          </a>
        </section>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
        <p className="mt-8 text-xs text-muted-foreground">
          Note: LinkedIn profile content is partially unavailable to automated public scraping, so detailed fields are intentionally marked as placeholders.
        </p>
        </AnimatedSection>
      </main>
    </div>
  );
}