// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { placeholderReport } from './scripts/placeholder-report-integration.mjs';

/**
 * Environment
 * -----------
 * SITE_URL        Canonical origin (e.g. https://www.example.ie). Required for
 *                 production; falls back to localhost so local builds work.
 * ALLOW_INDEXING  "true" only on the live production deployment. Anything else
 *                 makes every page `noindex` and robots.txt `Disallow: /`.
 */
const FONTS = {
  serif: './node_modules/@fontsource-variable/fraunces/files',
  sans: './node_modules/@fontsource-variable/inter/files',
};

const SITE_URL = process.env.SITE_URL?.replace(/\/$/, '') || 'http://localhost:4321';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  build: {
    // `/services/tree-surgery` is served from `services/tree-surgery.html`,
    // which Cloudflare Pages resolves without a trailing-slash redirect.
    format: 'file',
  },

  // Self-hosted fonts (agreed brand decision):
  //   Fraunces: headings      Inter: body, navigation, buttons
  // Files come from the pinned @fontsource packages in node_modules, Latin
  // subset (includes Irish fadas). Astro copies them into the build, writes
  // the @font-face rules, generates metric-matched fallbacks to minimise
  // layout shift, and exposes each family as a CSS variable.
  // No third-party font requests, at build time or in the browser (GDPR).
  fonts: [
    {
      name: 'Fraunces',
      cssVariable: '--font-heading',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: [`${FONTS.serif}/fraunces-latin-wght-normal.woff2`],
            weight: '100 900',
            style: 'normal',
          },
          {
            src: [`${FONTS.serif}/fraunces-latin-wght-italic.woff2`],
            weight: '100 900',
            style: 'italic',
          },
        ],
      },
      fallbacks: ['Georgia', 'serif'],
      display: 'swap',
    },
    {
      name: 'Inter',
      cssVariable: '--font-body',
      provider: fontProviders.local(),
      options: {
        variants: [
          // Variable font: one file covers every weight, 100–900.
          {
            src: [`${FONTS.sans}/inter-latin-wght-normal.woff2`],
            weight: '100 900',
            style: 'normal',
          },
          {
            src: [`${FONTS.sans}/inter-latin-wght-italic.woff2`],
            weight: '100 900',
            style: 'italic',
          },
        ],
      },
      fallbacks: ['system-ui', 'sans-serif'],
      display: 'swap',
    },
  ],

  // Typed, validated environment variables (import from 'astro:env/server').
  env: {
    schema: {
      ALLOW_INDEXING: envField.boolean({ context: 'server', access: 'public', default: false }),
    },
  },

  image: {
    // Responsive images by default: srcset + sizes generated for every <Image>.
    layout: 'constrained',
    responsiveStyles: true,
  },

  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },

  integrations: [
    sitemap({
      // Internal tooling routes are never listed.
      filter: (page) => !new URL(page).pathname.startsWith('/styleguide'),
    }),
    placeholderReport(),
  ],
});
