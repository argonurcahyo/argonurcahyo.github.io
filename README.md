# Argo Nurcahyo Portfolio

This repository powers Argo Nurcahyo's GitHub Pages portfolio. It uses Next.js App Router, TypeScript, Tailwind CSS 4, and static export mode so it can deploy directly to GitHub Pages.

The current portfolio version focuses on verified public repositories from `github.com/argonurcahyo`, with `wiryo`, `videostream-downloader`, and `nonton-apa-ya` as the main featured projects.

## Local Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build Checks

```bash
npm run lint
npm run build
```

`next build` writes the GitHub Pages-ready output into `out/` because `output: "export"` is enabled.

## Deployment

GitHub Pages deployment is handled by `.github/workflows/nextjs.yml`.

The workflow installs dependencies, runs `next build`, uploads the `out/` directory, and deploys on pushes to `main` or `master`.

## Content Policy

Portfolio copy should stay grounded in public repository evidence. Add new featured projects only when the public README or repository structure supports an honest, concrete summary.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
