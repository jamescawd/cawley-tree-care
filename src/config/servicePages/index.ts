/**
 * Dedicated service pages, in menu order (tree care first, landscaping
 * last). Each page's content lives in its own file in this folder; the
 * route src/pages/[service].astro builds one page per entry.
 */
import type { ServicePage } from './types';
import { treeRemoval } from './tree-removal';
import { treePruning } from './tree-pruning';
import { hedgeCutting } from './hedge-cutting';
import { stumpGrinding } from './stump-grinding';
import { emergencyTreeServices } from './emergency-tree-services';
import { treeSurgery } from './tree-surgery';
import { siteClearance } from './site-clearance';
import { landscaping } from './landscaping';
import { fencing } from './fencing';

export type { ServicePage } from './types';

export const servicePages: ServicePage[] = [
  treeSurgery,
  treeRemoval,
  treePruning,
  stumpGrinding,
  emergencyTreeServices,
  hedgeCutting,
  siteClearance,
  landscaping,
  fencing,
];

export const servicePageBySlug = (slug: string): ServicePage => {
  const p = servicePages.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown service page: ${slug}`);
  return p;
};
