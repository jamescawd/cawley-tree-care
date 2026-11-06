import type { Maybe } from '@/lib/placeholder';

/**
 * Homepage service summaries. Tree care leads; landscaping is secondary.
 *
 * All services are CONFIRMED by the business (Nov 2026). Descriptions are
 * plain summaries of each service. Each will later get its own page
 * (content/services/*.md).
 */

export interface ServiceSummary {
  name: Maybe<string>;
  description: Maybe<string>;
}

export interface ServiceCategory {
  id: 'tree-care' | 'landscaping';
  title: string;
  /** Planned landing page; not built yet. */
  href: string;
  services: ServiceSummary[];
}

/** CONFIRMED by the business (Nov 2026): the tree services offered. */
const confirmed = (name: string, description: string): ServiceSummary => ({ name, description });

export const treeCare: ServiceCategory = {
  id: 'tree-care',
  title: 'Tree care & tree surgery',
  href: '/tree-care',
  services: [
    confirmed(
      'Tree surgery',
      'Pruning and remedial work to keep trees healthy, safe and in shape.',
    ),
    confirmed(
      'Crown reduction',
      'Reducing the height and spread of a tree while keeping its natural form.',
    ),
    confirmed('Tree felling', 'Complete removal of trees that need to come down.'),
    confirmed(
      'Sectional dismantling',
      'Taking trees down piece by piece where space is tight, near houses, roads or buildings.',
    ),
    confirmed('Hedge cutting & reduction', 'Trimming, shaping and reducing the height of hedges.'),
    confirmed('Storm-damaged & dangerous trees', 'Making damaged, fallen or unsafe trees safe.'),
    confirmed(
      'Tree health inspections',
      'Checking the condition of trees and advising on what they need.',
    ),
  ],
};

/** CONFIRMED by the business (Nov 2026): the landscaping services offered. */
export const landscaping: ServiceCategory = {
  id: 'landscaping',
  title: 'Landscaping',
  href: '/landscaping',
  services: [
    confirmed('Garden design & planting', 'New borders, trees and planting schemes.'),
    confirmed('Lawns & turfing', 'New lawns, re-turfing and lawn renovation.'),
    confirmed('Patios & paving', 'Hard landscaping for terraces, paths and seating areas.'),
    confirmed('Fencing', 'New fencing and replacement of old or damaged fences.'),
    confirmed('Garden maintenance', 'Regular upkeep of gardens and grounds.'),
    confirmed('Garden clearance', 'Clearing overgrown or neglected gardens.'),
  ],
};
