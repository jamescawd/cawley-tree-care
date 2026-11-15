import type { LocationPage } from './types';
import { pruning, laurel, uprooted, stacked } from './photos';

/**
 * Ballinasloe: DRAFT (not in live.json) until the owner supplies a real
 * local job, photo or review.
 *
 * RESEARCH NOTES (checked Nov 2026):
 * - Ballinasloe stands on the River Suck; the October horse fair is held on
 *   the Fair Green; Garbally, the former Clancarty demesne, has mature
 *   woodland and is home to Garbally College. (General knowledge; searches
 *   returned no detailed local tree sources, so claims are kept general.)
 * - Storm Éowyn, 24 Jan 2025: a 13-acre plantation near Ahascragh lost 85 to
 *   95 per cent of its trees. [Irish Farmers Journal]
 * - Distance from Athlone (about 25 km west on the M6) is approximate: owner
 *   to confirm.
 * - No council content. No Cawley's job in Ballinasloe is claimed.
 */
export const ballinasloe: LocationPage = {
  slug: 'tree-surgeon-ballinasloe',
  town: 'Ballinasloe',
  seoTitle: "Tree Surgeons in Ballinasloe | Cawley's Tree Care",
  description:
    'Tree surgeons for Ballinasloe and east Galway, from just over the Shannon: removals, pruning, hedges, stumps and storm work. No charge to quote.',

  hero: {
    eyebrow: 'Ballinasloe, Co. Galway',
    title: 'Just across the Shannon from',
    accent: 'Ballinasloe',
    intro:
      'We are in Athlone, twenty-five kilometres east on the motorway. For trees and hedges in Ballinasloe and the country around it, that makes us about as local as a tree surgeon gets.',
    image: pruning,
  },

  intro: {
    title: 'East Galway,',
    accent: 'from next door',
    paragraphs: [
      'People in Ballinasloe sometimes assume a firm with a Westmeath address is a long way off. It is not. From our base to the Fair Green is about 25 km, most of it motorway.',
      'We look after trees and hedges for householders, farmers and businesses: taking down what is dead or dangerous, cutting back what has got too big, grinding stumps and tidying up after storms. Over fifteen years at it, fully insured, and every job priced before it starts.',
    ],
    facts: [
      'About 25 km from Athlone on the M6',
      'Over 15 years in business',
      'Fully insured, for homes and farms',
      'Quotations at no cost',
      'Phone any time if a tree is down',
    ],
  },

  local: {
    title: 'Trees on the',
    accent: 'Suck',
    paragraphs: [
      'The River Suck makes Ballinasloe what it is, and it makes the ground what it is too. Along the river and out across the callows the land lies wet for a good part of the year. Trees rooted in ground like that never anchor deeply. They stand well enough in a normal winter and then go over, root plate and all, when a real storm arrives after weeks of rain.',
      'We saw how bad it can be in January 2025. A few miles up the road near Ahascragh, a farmer lost nearly every tree in a thirteen-acre plantation to Storm Éowyn in a single night. Garden trees and shelter belts on the same kind of ground went the same way all over east Galway.',
      'Then there is the old planting. Garbally, the Clancarty estate on the edge of town, left Ballinasloe with fine mature beech, oak and lime, and the big trees in older gardens nearby belong to the same era. They are worth minding. A beech that age needs looking at every few years, and usually needs less cutting than its owner fears.',
    ],
    points: [
      {
        title: 'If your ground floods',
        text: 'Keep trees on wet ground lower and lighter than you would elsewhere. Reducing the crown gives the wind less to push against.',
      },
      {
        title: 'Before the fair',
        text: 'If you want a hedge tidied before October, ask in good time: hedge cutting only opens up again in September, once the nesting months end.',
      },
    ],
  },

  services: {
    title: 'What we do',
    accent: 'in Ballinasloe',
    intro: 'The everyday jobs and the awkward ones.',
    items: [
      {
        title: 'Taking trees down',
        text: 'Dead, leaning and storm-thrown trees taken down and cleared, in sections where space is tight.',
        href: '/tree-removal',
      },
      {
        title: 'Pruning and reduction',
        text: 'Big trees made smaller and lighter; branches cleared from roofs, wires and driveways.',
        href: '/tree-pruning',
      },
      {
        title: 'Hedge work',
        text: 'Garden and boundary hedges trimmed, reduced or taken out.',
        href: '/hedge-cutting',
      },
      {
        title: 'Stumps and root plates out',
        text: 'Stumps and lifted root plates dealt with where the site suits it.',
        href: '/stump-grinding',
      },
      {
        title: 'Storm emergencies',
        text: 'A tree on a house, shed or road. We are close: ring any time.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Site and garden clearance',
        text: 'Overgrown ground cleared and chipped.',
        href: '/site-clearance',
      },
    ],
  },

  jobsDone: {
    title: 'Jobs done',
    accent: 'around Ballinasloe',
    intro: 'Real jobs from the town and east Galway will be added here.',
    slots: [
      { title: 'Ballinasloe job to be added', photo: {} },
      { title: 'Ballinasloe job to be added', photo: {} },
      { title: 'Ballinasloe job to be added', photo: {} },
    ],
  },

  proof: {
    title: 'From our',
    accent: 'own jobs',
    intro: 'Real photos from real jobs of ours.',
    photos: [uprooted, laurel, stacked],
  },

  advice: {
    title: 'Asked in',
    accent: 'Ballinasloe',
    intro: 'Quick answers.',
    faqs: [
      {
        question: 'A tree has blown over but is still half rooted. Can it be saved?',
        answer:
          'A small, young tree can sometimes be pulled upright and staked. A mature tree that has gone over almost never can: the roots that held it are broken. It is safer to remove it, and the root plate can be dropped back or ground out.',
      },
      {
        question: 'What can I plant on wet ground that will not fall over?',
        answer:
          'Alder, willow and birch are the natural choices and cope well with wet feet. Keep anything tall well back from the house, and avoid conifers as a shelter belt on soft ground.',
      },
      {
        question: 'Can you remove a stump as well as the tree?',
        answer:
          'Yes, where a grinder can get to it. Tell us when you ask for a price and we will include it.',
      },
      {
        question: 'Do you work on farms?',
        answer:
          'Yes. Trees over lanes, yards and sheds, fallen timber on fences, and overgrown boundaries are all work we take on.',
      },
      {
        question: 'How far into Galway do you go?',
        answer:
          'Right across the east of the county: Ahascragh, Ballygar, Mountbellew, Eyrecourt, Loughrea, Portumna and on to Athenry and Galway City.',
      },
    ],
  },

  nearby: {
    title: 'Around',
    accent: 'Ballinasloe',
    intro: 'East Galway and the Roscommon side of the Suck.',
    groups: [
      {
        county: 'Galway',
        towns: ['Ahascragh', 'Ballygar', 'Mountbellew', 'Eyrecourt', 'Loughrea', 'Portumna'],
      },
      { county: 'Roscommon', towns: ['Athleague'] },
      { county: 'Westmeath', towns: ['Athlone'] },
    ],
  },

  cta: {
    title: 'Need a tree surgeon',
    accent: 'close to Ballinasloe?',
    text: 'Phone, or WhatsApp a couple of pictures of the tree. A quotation is free. The number is answered 24/7 for emergencies.',
  },
};
