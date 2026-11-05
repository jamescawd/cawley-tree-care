/**
 * Astro integration: prints outstanding placeholders after each build, and
 * FAILS a production build (ALLOW_INDEXING=true) if any remain, so the live
 * site can never launch with missing business information.
 */
import { findPlaceholders, formatReport } from './placeholders.mjs';

/** @returns {import('astro').AstroIntegration} */
export function placeholderReport() {
  return {
    name: 'cawleys:placeholder-report',
    hooks: {
      'astro:build:done': async ({ logger }) => {
        const items = await findPlaceholders();
        if (!items.length) return logger.info(formatReport(items));
        if (process.env.ALLOW_INDEXING === 'true') {
          throw new Error(`Cannot publish with placeholders.\n${formatReport(items)}`);
        }
        logger.warn(formatReport(items));
      },
    },
  };
}
