import type { Maybe } from '@/lib/placeholder';

/**
 * Service areas: counties and their major towns.
 *
 * Stored here (not as pages) so the same data drives homepage copy,
 * structured data (`areaServed`) and, later, local landing pages.
 * Location pages are deliberately NOT generated yet.
 *
 * CONFIRMED by the business (Nov 2026): the complete service area is the
 * five counties below, with their major towns, in the order supplied.
 */

export interface ServiceArea {
  /** Stable id; becomes the URL slug for a future county page, e.g. "westmeath". */
  id: string;
  /** County name without prefix, e.g. "Westmeath". Display as "Co. Westmeath". */
  county: Maybe<string>;
  coverage: 'full' | 'selected';
  towns: Maybe<string>[];
}

export const serviceAreas: ServiceArea[] = [
  {
    id: 'westmeath',
    county: 'Westmeath',
    coverage: 'full',
    towns: [
      'Mullingar',
      'Athlone',
      'Moate',
      'Kinnegad',
      'Castlepollard',
      'Kilbeggan',
      'Rochfortbridge',
    ],
  },
  {
    id: 'roscommon',
    county: 'Roscommon',
    coverage: 'full',
    towns: ['Roscommon Town', 'Boyle', 'Castlerea', 'Ballaghaderreen', 'Strokestown', 'Elphin'],
  },
  {
    id: 'longford',
    county: 'Longford',
    coverage: 'full',
    towns: ['Longford Town', 'Edgeworthstown', 'Granard', 'Ballymahon', 'Lanesborough'],
  },
  {
    id: 'offaly',
    county: 'Offaly',
    coverage: 'full',
    towns: ['Tullamore', 'Birr', 'Edenderry', 'Clara', 'Kilcormac', 'Banagher', 'Ferbane'],
  },
  {
    id: 'galway',
    county: 'Galway',
    coverage: 'full',
    towns: [
      'Galway City',
      'Tuam',
      'Ballinasloe',
      'Loughrea',
      'Athenry',
      'Oranmore',
      'Gort',
      'Portumna',
      'Clifden',
    ],
  },
];

/** Formatted county name, e.g. "Co. Westmeath". */
export const countyLabel = (county: string): string => `Co. ${county}`;

/** Total confirmed towns across all counties. */
export const townCount = serviceAreas.reduce((n, area) => n + area.towns.length, 0);
