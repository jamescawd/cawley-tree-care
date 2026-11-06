import { placeholder, type Maybe } from '@/lib/placeholder';

/**
 * Homepage service summaries. Tree care leads; landscaping is secondary.
 *
 * Tree services are CONFIRMED. TODO(business): the landscaping services
 * below are still EXAMPLES awaiting the confirmed list. Each is a placeholder, so they render with a
 * visible "To confirm" marker and block a production build until replaced.
 * Once confirmed, each will also get its own page (content/services/*.md).
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

const example = (name: string, description: string): ServiceSummary => ({
  name: placeholder(`Service name to confirm: "${name}"`, name),
  description: placeholder(`Service description to confirm for "${name}"`, description),
});

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

export const landscaping: ServiceCategory = {
  id: 'landscaping',
  title: 'Landscaping',
  href: '/landscaping',
  services: [
    example('Garden design & planting', 'New borders, trees and planting schemes.'),
    example('Lawns & turfing', 'New lawns, re-turfing and lawn renovation.'),
    example('Patios & paving', 'Hard landscaping for terraces, paths and driveways.'),
    example('Fencing & boundaries', 'Fencing, gates and boundary planting.'),
    example('Site clearance', 'Clearing overgrown gardens and sites.'),
    example('Garden maintenance', 'Regular upkeep of gardens and grounds.'),
  ],
};
