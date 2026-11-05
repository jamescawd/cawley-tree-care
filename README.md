# Cawley's Tree Care & Landscaping: website

Bespoke, static-first marketing site. Tree care and tree surgery lead the
positioning, with landscaping second.

**Status:** technical foundation only. No public pages yet.

## Stack

| Concern   | Choice                                                                    |
| --------- | ------------------------------------------------------------------------- |
| Framework | [Astro 7](https://astro.build), static output, zero JS by default         |
| Language  | TypeScript (strictest)                                                    |
| Styling   | Hand-written CSS with design tokens and cascade layers (no CSS framework) |
| Fonts     | Fraunces (headings) + Inter (body, navigation, buttons), self-hosted      |
| Content   | Markdown content collections with build-time schema validation            |
| Hosting   | Cloudflare Pages                                                          |
| Quality   | ESLint (incl. accessibility), Prettier, `astro check`, Playwright + axe   |

## Getting started

Requires Node 22.23+ and pnpm 10 (`corepack enable` will provide pnpm).

```bash
pnpm install
pnpm dev            # http://localhost:4321/styleguide
```

| Command             | Does                                                            |
| ------------------- | --------------------------------------------------------------- |
| `pnpm dev`          | Local development server                                        |
| `pnpm build`        | Production build into `dist/`                                   |
| `pnpm preview`      | Serve the built site                                            |
| `pnpm verify`       | Everything CI runs: format, lint, types, build, tests           |
| `pnpm test`         | Accessibility / SEO / responsive tests (phone, tablet, desktop) |
| `pnpm placeholders` | List business details still awaiting confirmation               |

## Project structure

```
src/
  config/       business facts, service areas, navigation, site settings
  styles/       tokens.css (design tokens) and global layers
  components/   ui/ (Button…), seo/ (meta, JSON-LD); sections/ added with designs
  layouts/      BaseLayout: <head>, fonts, SEO, skip link
  content/      Markdown collections; copy each _template file to add entries
  lib/          SEO, schema.org and placeholder helpers
  pages/        routes (only the internal /styleguide so far)
  assets/       images processed by Astro (AVIF/WebP, responsive sizes)
public/         served as-is (_headers for Cloudflare)
scripts/        placeholder reporting
tests/          Playwright tests
docs/           architecture, design system, content checklist
```

## Deployment (Cloudflare Pages)

| Setting           | Value        |
| ----------------- | ------------ |
| Framework preset  | Astro        |
| Build command     | `pnpm build` |
| Output directory  | `dist`       |
| Production branch | `main`       |

Environment variables (production only, set at launch):

- `SITE_URL`: canonical origin, e.g. `https://www.your-domain.ie`
- `ALLOW_INDEXING`: `true` (anything else keeps the site hidden from search engines)

A production build **fails** while any business placeholder remains, or if
`SITE_URL` is missing, so the site cannot launch with unconfirmed information.

## Documentation

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): decisions and why
- [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md): colour, type, spacing, contrast rules
- [docs/CONTENT-CHECKLIST.md](docs/CONTENT-CHECKLIST.md): information needed from the business
