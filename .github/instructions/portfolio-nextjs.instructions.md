---
name: "Portfolio Next.js Guidelines"
description: "Use when building, editing, or refactoring Argo Nurcahyo's portfolio website, homepage, About page, project showcase, resume-style sections, Next.js app structure, static export setup, or GitHub Pages deployment. Prefer Next.js as the default stack for this repo."
applyTo:
  - "app/**"
  - "src/**"
  - "components/**"
  - "pages/**"
  - "public/**"
  - "styles/**"
  - "next.config.*"
  - "package.json"
  - "tsconfig.json"
---
# Portfolio Next.js Guidelines

- Prefer Next.js as the default framework for this repository unless the user explicitly asks for a different stack.
- Keep the site compatible with GitHub Pages hosting. Favor static generation and static export friendly patterns over server-dependent features.
- Prefer a small, maintainable portfolio architecture rather than a large application structure.
- Treat this repository as Argo Nurcahyo's personal portfolio site, not a generic startup landing page or agency template.
- Present Argo accurately as an Indonesian civil servant at Statistics Indonesia and a software engineer whose strongest area is web development, with broader interests in AI, IoT, mobile apps, and data science.
- Do not invent biography details, awards, metrics, clients, or project outcomes that are not provided by the user or present in the repository.

## Implementation Rules

- Prefer modern Next.js patterns that work well for static hosting.
- Keep routing, content structure, and components simple and easy to extend.
- Avoid features that require a persistent backend, server runtime, or secrets unless the user explicitly asks for them and accepts the deployment change.
- Make responsive behavior, accessibility, and content clarity part of the default implementation rather than follow-up work.
- When adding styling, choose a clear visual direction and avoid generic default portfolio aesthetics.
- Keep copy concise, credible, and easy for the user to replace.

## Content Defaults

- Include a focused hero section with name, role, and technical identity.
- Include an About section that connects public-sector work with engineering practice.
- Include projects or work highlights only when there is enough concrete information to present them honestly.
- Include skills with web engineering first, then adjacent interests.
- Use placeholders only when needed, and make assumptions obvious.

## Delivery Rules

- When proposing or making stack decisions, default to Next.js first.
- When creating deployment-related files, preserve or improve GitHub Pages compatibility.
- When information is missing, state the assumption briefly instead of filling gaps with invented specifics.