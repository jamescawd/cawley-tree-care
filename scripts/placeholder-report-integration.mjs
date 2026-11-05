/**
 * Astro integration: prints outstanding placeholders after each build, and
 * FAILS a production build (ALLOW_INDEXING=true) if any remain, so the live
 * site can never launch with missing business information or without a
 * confirmed domain (SITE_URL).
 */
import { findPlaceholders, formatReport } from './placeholders.mjs';

/** @returns {import('astro').AstroIntegration} */
export function placeholderReport() {
  return {
    name: 'cawleys:placeholder-report',
    hooks: {
      'astro:build:done': async ({ logger }) => {
        const production = process.env.ALLOW_INDEXING === 'true';
        if (production && !process.env.SITE_URL) {
          throw new Error('Cannot publish: SITE_URL must be set when ALLOW_INDEXING=true.');
        }
        const items = await findPlaceholders();
        if (!items.length) return logger.info(formatReport(items));
        if (production) {
          throw new Error(`Cannot publish with placeholders.\n${formatReport(items)}`);
        }
        logger.warn(formatReport(items));
      },
    },
  };
}
