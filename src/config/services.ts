import { placeholder, type Maybe } from '@/lib/placeholder';

/**
 * Homepage service summaries. Tree care leads; landscaping is secondary.
 *
 * TODO(business): the individual services below are EXAMPLES awaiting the
 * confirmed service list. Each is a placeholder, so they render with a
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

export const treeCare: ServiceCategory = {
  id: 'tree-care',
  title: 'Tree care & tree surgery',
  href: '/tree-care',
  services: [
    example('Tree surgery', 'Pruning and remedial work on trees of all sizes.'),
    example(
      'Crown reduction & thinning',
      'Reducing size and density while keeping a natural shape.',
    ),
    example('Tree felling & dismantling', 'Controlled removal, including in confined spaces.'),
    example('Hedge cutting & management', 'Shaping, height reduction and ongoing maintenance.'),
    example('Stump grinding', 'Removing stumps below ground level.'),
    example('Storm-damaged trees', 'Making damaged or fallen trees safe.'),
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
