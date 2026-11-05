import { placeholder, type Maybe } from '@/lib/placeholder';

/**
 * Service areas: six counties, each with its major towns.
 *
 * Stored here (not as pages) so the same data can drive copy, structured data
 * (`areaServed`) and, later, one local landing page per county / town.
 * Location pages are deliberately NOT generated yet.
 *
 * Order = priority. `coverage: 'selected'` marks areas served for larger jobs only.
 *
 * TODO(business): the six counties and their towns have not been recorded in
 * this project yet. Replace each placeholder with the confirmed county and towns.
 */

export interface Town {
  name: Maybe<string>;
}

export interface ServiceArea {
  /** Stable id; becomes the URL slug for a future county page, e.g. "kildare". */
  id: string;
  /** Display name, e.g. "County Kildare". */
  county: Maybe<string>;
  coverage: 'full' | 'selected';
  towns: Town[];
}

export const serviceAreas: ServiceArea[] = [
  {
    id: 'county-1', // TODO: replace with county slug, e.g. 'kildare'
    county: placeholder('County 1 of 6 (1st priority)'),
    coverage: 'full',
    towns: [{ name: placeholder('Major towns in county 1') }],
  },
  {
    id: 'county-2', // TODO: replace with county slug, e.g. 'kildare'
    county: placeholder('County 2 of 6 (2nd priority)'),
    coverage: 'full',
    towns: [{ name: placeholder('Major towns in county 2') }],
  },
  {
    id: 'county-3', // TODO: replace with county slug, e.g. 'kildare'
    county: placeholder('County 3 of 6 (3rd priority)'),
    coverage: 'full',
    towns: [{ name: placeholder('Major towns in county 3') }],
  },
  {
    id: 'county-4', // TODO: replace with county slug, e.g. 'kildare'
    county: placeholder('County 4 of 6 (4th priority)'),
    coverage: 'full',
    towns: [{ name: placeholder('Major towns in county 4') }],
  },
  {
    id: 'county-5', // TODO: replace with county slug, e.g. 'kildare'
    county: placeholder('County 5 of 6 (5th priority)'),
    coverage: 'full',
    towns: [{ name: placeholder('Major towns in county 5') }],
  },
  {
    id: 'county-6', // TODO: replace with county slug, e.g. 'kildare'
    county: placeholder('County 6 of 6 (6th priority)'),
    coverage: 'full',
    towns: [{ name: placeholder('Major towns in county 6') }],
  },
];
