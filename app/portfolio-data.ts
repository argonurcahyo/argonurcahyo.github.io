export type Project = {
  title: string;
  year: string;
  summary: string;
  repoUrl: string;
  liveUrl?: string;
  stack: string[];
  highlights: string[];
  status: string;
};

export type WorkSnapshot = {
  title: string;
  summary: string;
  url?: string;
  stack: string[];
};

export type PlaceholderAsset = {
  title: string;
  note: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Wiryo",
    year: "2026",
    summary:
      "A family tree app built with Next.js App Router. It is one of the clearest examples of me shipping a polished product, not just a quick prototype.",
    repoUrl: "https://github.com/argonurcahyo/wiryo",
    liveUrl: "https://mbahwiryo.vercel.app/",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Turso/libSQL"],
    highlights: [
      "Interactive tree view with search, fullscreen mode, and root filtering.",
      "CRUD flows for family data with relationship validation.",
      "Export support so the result is easy to share, not stuck in the UI.",
    ],
    status: "Polished product build",
  },
  {
    title: "Video Stream Detector + Downloader",
    year: "2026",
    summary:
      "A browser-tooling side project that captures stream URLs and hands them off to a lightweight dashboard for download workflows.",
    repoUrl: "https://github.com/argonurcahyo/videostream-downloader",
    stack: ["TypeScript", "Chrome Extension", "Next.js 15", "JavaScript", "Python"],
    highlights: [
      "Combines a Manifest V3 extension with a Next.js dashboard.",
      "Covers capture, listing, logging, and download flows in one toolchain.",
      "Also experiments with Python-based download flows outside the UI.",
    ],
    status: "Browser tooling experiment",
  },
  {
    title: "Nonton Apa Ya",
    year: "2022-2026",
    summary:
      "A movie catalog app powered by TMDB API. This is the project I keep coming back to when I want to refine browsing and UI flows.",
    repoUrl: "https://github.com/argonurcahyo/nonton-apa-ya",
    liveUrl: "http://nonton-apa-ya.vercel.app/",
    stack: ["React", "JavaScript", "Tailwind CSS", "TMDB API"],
    highlights: [
      "Started from training, then kept evolving as a real side project.",
      "Improved responsiveness, image fallbacks, and watchlist-style flows over time.",
      "Shows how I iterate on a familiar product instead of leaving it at v1.",
    ],
    status: "Personal movie catalog",
  },
];

export const supportingProjects: Project[] = [
  {
    title: "House Price Scraper",
    year: "2025",
    summary:
      "A Python notebook workflow for scraping and cleaning Indonesian housing price data.",
    repoUrl: "https://github.com/argonurcahyo/house-price",
    stack: ["Python", "BeautifulSoup", "pandas", "Jupyter Notebook"],
    highlights: ["Scraping", "Data cleaning", "Region-focused analysis"],
    status: "Data notebook",
  },
  {
    title: "Football Viz",
    year: "2024",
    summary:
      "A football analytics sandbox for charts, exploration, and quick data experiments.",
    repoUrl: "https://github.com/argonurcahyo/football-viz",
    stack: ["Jupyter Notebook", "Data Visualization"],
    highlights: ["Analytics experiments", "Custom figures", "Notebook workflow"],
    status: "Football data sandbox",
  },
  {
    title: "Vokedex",
    year: "2022",
    summary:
      "A Vue and Vite Pokedex project that shows I do not stay inside one front-end stack only.",
    repoUrl: "https://github.com/argonurcahyo/vokedex",
    stack: ["Vue 3", "Vite", "JavaScript"],
    highlights: ["Component UI", "Alternative framework", "Client-side app"],
    status: "Vue side experiment",
  },
];

export const dailyWork: WorkSnapshot[] = [
  {
    title: "perpustakaan.bps.go.id",
    summary: "A Laravel-based library app and one of the clearest examples of my day-to-day product work.",
    url: "https://perpustakaan.bps.go.id",
    stack: ["PHP", "Laravel", "Production app"],
  },
  {
    title: "pojokstatistik.bps.go.id",
    summary: "A Laravel app for public statistical outreach, content flow, and service-facing features.",
    url: "https://pojokstatistik.bps.go.id",
    stack: ["PHP", "Laravel", "Public-facing app"],
  },
  {
    title: "edupromstat.bps.go.id",
    summary: "Another Laravel-based product where the work is more about keeping useful services running well than making noise about them.",
    url: "https://edupromstat.bps.go.id",
    stack: ["PHP", "Laravel", "Maintenance and delivery"],
  },
];

export const sideQuests: WorkSnapshot[] = [
  {
    title: "Movie catalog",
    summary: "A personal app space for trying browsing, filtering, and small UX refinements around movie data.",
    stack: ["React", "Catalog UI", "Personal project"],
  },
  {
    title: "Football kit archive",
    summary: "A side idea around football kits, visual references, and archive-style browsing. Still growing, still rough, still fun.",
    stack: ["Archive concept", "Football", "Personal project"],
  },
];

export const placeholderAssets: PlaceholderAsset[] = [
  {
    title: "Profile photo placeholder",
    note: "Drop your headshot or casual workspace photo here later.",
  },
  {
    title: "Project screenshot placeholder",
    note: "Use this for app screenshots, UI previews, or a collage later.",
  },
];

export const skillGroups = [
  {
    title: "Web Engineering",
    items: ["PHP", "Laravel", "Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Experiments Beyond Web",
    items: ["AI exploration", "IoT curiosity", "Browser extensions", "Mobile ideas", "PWA patterns"],
  },
  {
    title: "Data and Automation",
    items: ["Python", "Jupyter Notebook", "Web scraping", "Data processing", "Charts and notebooks"],
  },
];

export const workingPrinciples = [
  "Ship something useful first, make it prettier after.",
  "Keep the stack practical enough to maintain without drama.",
  "Let the code and the product do the talking.",
];