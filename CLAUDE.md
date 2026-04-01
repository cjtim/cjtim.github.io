# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (localhost:4321)
pnpm build      # Build for production → ./dist/
pnpm preview    # Preview production build locally
pnpm format     # Format all files with Prettier
```

No test suite is configured.

## Stack

- **Astro 6** — static site generator, file-based routing from `src/pages/`
- **React 19** and **Svelte 5** — both available as component islands
- **TailwindCSS 4** — utility styling with custom Quicksand font and animations
- **Vercel** — deployment target (adapter configured in `astro.config.mjs`)
- **pnpm** — package manager; node 24.14.0 (see `.nvmrc`)

## Architecture

### Content Collections

Content lives in `src/content/` and is defined in `src/content.config.ts` using Zod schemas:
- `projects/` — portfolio project markdown files (schema: title, pubDate, description, image, tags)
- `index/` — standalone pages like `/term-of-service`

### Routing

| Route | File | Source |
|-------|------|--------|
| `/` | `src/pages/index.astro` | Static |
| `/projects` | `src/pages/projects/index.astro` | Lists all `content/projects/` entries |
| `/projects/:slug` | `src/pages/projects/[...slug].astro` | `getStaticPaths()` from collection |
| `/:slug` | `src/pages/[...slug].astro` | `getStaticPaths()` from `index` collection |

### Adding a Project

Create a new `.md` or `.mdx` file in `src/content/projects/` with this frontmatter:

```yaml
title: string
pubDate: YYYY-MM-DD
description: string
image:
  url: string
  alt: string
tags: [string]
```

### Component Conventions

- `.astro` components are the default; use React (`.tsx`) or Svelte (`.svelte`) only when client-side interactivity is needed
- Layouts: `src/layouts/Layout.astro` wraps all pages (Navbar, Footer, dark mode, analytics)
- Path aliases: `@components`, `@pages`, `@layouts`, `@utils` (configured in `tsconfig.json`)
- Dark mode uses class strategy with localStorage persistence (handled in `Layout.astro`)
