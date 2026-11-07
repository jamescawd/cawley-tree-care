import type { Maybe } from '@/lib/placeholder';

/**
 * Service areas: counties and their major towns.
 *
 * Stored here (not as pages) so the same data drives homepage copy,
 * structured data (`areaServed`) and, later, local landing pages.
 * Location pages are deliberately NOT generated yet.
 *
 * CONFIRMED by the business (Nov 2026): the complete service area is the
 * five counties below. Each list starts with the 34 major towns in the order
 * first supplied, followed by the 40 towns and villages added in Nov 2026.
 * The area map (src/data/ireland-map.json) still marks the original 34.
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
      'Glasson',
      'Delvin',
      'Tyrrellspass',
      'Ballymore',
      'Ballynacarrigy',
      'Multyfarnham',
      'Killucan',
      'Milltownpass',
    ],
  },
  {
    id: 'roscommon',
    county: 'Roscommon',
    coverage: 'full',
    towns: [
      'Roscommon Town',
      'Boyle',
      'Castlerea',
      'Ballaghaderreen',
      'Strokestown',
      'Elphin',
      'Athleague',
      'Ballygar',
      'Knockcroghery',
      'Frenchpark',
      'Roosky',
      'Ballyleague',
      'Ballinlough',
      'Keadue',
    ],
  },
  {
    id: 'longford',
    county: 'Longford',
    coverage: 'full',
    towns: [
      'Longford Town',
      'Edgeworthstown',
      'Granard',
      'Ballymahon',
      'Lanesborough',
      'Drumlish',
      'Newtownforbes',
      'Keenagh',
      'Ballinalee',
      'Ardagh',
      'Abbeyshrule',
      'Ballinamuck',
      'Newtowncashel',
    ],
  },
  {
    id: 'offaly',
    county: 'Offaly',
    coverage: 'full',
    towns: [
      'Tullamore',
      'Birr',
      'Edenderry',
      'Clara',
      'Kilcormac',
      'Banagher',
      'Ferbane',
      'Daingean',
      'Kinnitty',
      'Geashill',
      'Killeigh',
      'Shinrone',
      'Cloghan',
      'Shannonbridge',
      'Mucklagh',
    ],
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
      'Mountbellew',
      'Glenamaddy',
      'Ahascragh',
      'Dunmore',
      'Eyrecourt',
      'Claregalway',
      'Craughwell',
      'Headford',
    ],
  },
];

/** Formatted county name, e.g. "Co. Westmeath". */
export const countyLabel = (county: string): string => `Co. ${county}`;

/** Total confirmed towns across all counties. */
export const townCount = serviceAreas.reduce((n, area) => n + area.towns.length, 0);
