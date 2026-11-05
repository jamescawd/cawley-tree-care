import { ALLOW_INDEXING } from 'astro:env/server';
import { business } from '@/config/business';

/** Site-wide technical settings. Business facts live in `business.ts`. */
export const site = {
  name: business.tradingName,
  /** BCP 47. Irish English: drives `lang`, spell-check and search locale. */
  lang: 'en-IE',
  /** Open Graph locale. */
  ogLocale: 'en_IE',
  titleSeparator: ' | ',
  /** Used for the browser UI colour on mobile. */
  themeColor: '#171717',
  /** Master switch: false → every page noindex + robots.txt disallows all. */
  allowIndexing: ALLOW_INDEXING,
} as const;
