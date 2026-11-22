// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Environment
 * -----------
 * SITE_URL        Canonical origin, e.g. https://www.patpremier.ie (placeholder
 *                 until the domain is confirmed). Falls back to localhost.
 * ALLOW_INDEXING  "true" only on the approved live deployment. Anything else
 *                 makes every page `noindex` and robots.txt `Disallow: /`.
 */
const SITE_URL = process.env.SITE_URL?.replace(/\/$/, '') || 'http://localhost:4321';
const FONTS = {
  display: './node_modules/@fontsource-variable/archivo/files',
  body: './node_modules/@fontsource-variable/instrument-sans/files',
};

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  build: {
    format: 'file',
    // Inline the (single, small) stylesheet: no render-blocking CSS request.
    inlineStylesheets: 'always',
  },

  // Self-hosted variable fonts (no third-party requests).
  //   Archivo (width + weight axes): display headings
  //   Instrument Sans: body, navigation, buttons, forms
  fonts: [
    {
      name: 'Archivo',
      cssVariable: '--pp-font-display',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: [`${FONTS.display}/archivo-latin-wdth-normal.woff2`],
            weight: '100 900',
            stretch: '62% 125%',
            style: 'normal',
          },
        ],
      },
      fallbacks: ['Arial', 'sans-serif'],
      display: 'swap',
    },
    {
      name: 'Instrument Sans',
      cssVariable: '--pp-font-body',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            // Weight-only file (body text never changes width): 30 KB not 57 KB.
            src: [`${FONTS.body}/instrument-sans-latin-wght-normal.woff2`],
            weight: '400 700',
            style: 'normal',
          },
        ],
      },
      fallbacks: ['system-ui', 'sans-serif'],
      display: 'swap',
    },
  ],

  env: {
    schema: {
      ALLOW_INDEXING: envField.boolean({ context: 'server', access: 'public', default: false }),
    },
  },

  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },

  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },

  vite: { plugins: [tailwindcss()] },

  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        // Utility pages and demonstration projects are never listed.
        return !/^\/(enquiry-sent|enquiry-error|404|projects\/demo-)/.test(path);
      },
    }),
  ],
});
