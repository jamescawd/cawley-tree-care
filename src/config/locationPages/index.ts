import type { LocationPage } from './types';
import { athlone } from './athlone';
import { mullingar } from './mullingar';
import { birr } from './birr';
import live from './live.json';

export type { LocationPage } from './types';

/** Town pages. Add one only when it has genuine local content (docs/LOCATION-PAGES.md). */
export const locationPages: LocationPage[] = [athlone, mullingar, birr];

/**
 * A town page goes live (indexable, in the sitemap and footer) only once it
 * is listed in live.json. List a town there when it has at least one genuine
 * local job, photo or review; until then it is a preview-only draft.
 */
export const isLiveLocation = (slug: string): boolean => (live as string[]).includes(slug);

export const locationPage = (slug: string): LocationPage => {
  const page = locationPages.find((p) => p.slug === slug);
  if (!page) throw new Error(`Unknown location page "${slug}"`);
  return page;
};
