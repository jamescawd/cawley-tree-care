import type { LocationPage } from './types';
import { pruning, laurel, uprooted, stacked } from './photos';

/**
 * Ballinasloe: DRAFT (not in live.json) until the owner supplies a real
 * local job, photo or review.
 *
 * Local notes are kept to what affects tree work: wet ground near the River
 * Suck and shallow-rooted trees. Distance (about 25 km on the M6) to be
 * confirmed by the owner. No council content. No Cawley's job in
 * Ballinasloe is claimed.
 */
export const ballinasloe: LocationPage = {
  slug: 'tree-surgeon-ballinasloe',
  town: 'Ballinasloe',
  seoTitle: "Tree Surgeons in Ballinasloe | Cawley's Tree Care",
  description:
    'Tree surgeons for Ballinasloe and east Galway: tree removal, pruning, hedges, stump grinding and storm work, from nearby Athlone. No charge to quote.',

  hero: {
    eyebrow: 'Ballinasloe, Co. Galway',
    title: 'Tree care for',
    accent: 'Ballinasloe',
    intro:
      'Tree removal, pruning, hedge cutting, stump grinding and storm work in Ballinasloe and east Galway, from our base about 25 km away in Athlone. Experienced, insured, and free to quote.',
    image: pruning,
  },

  intro: {
    title: 'Local, reliable',
    accent: 'tree care',
    paragraphs: [
      'We work for householders, farmers and businesses, from a single overgrown tree to a full boundary. You get a clear explanation of what we recommend, a price before work begins, and a tidy site afterwards.',
      'We have more than fifteen years of experience in tree surgery and full insurance, and windblown and storm-damaged trees are part of what we deal with.',
    ],
    facts: [
      'About 25 km from Athlone on the M6',
      'Over 15 years in business',
      'Fully insured, for homes and farms',
      'Quotations at no cost',
      'Phone any time if a tree is down',
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
        text: 'A tree on a house, shed or road. Ring us any time.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Site and garden clearance',
        text: 'Overgrown ground cleared and chipped.',
        href: '/site-clearance',
      },
    ],
  },

  local: {
    title: 'Trees on',
    accent: 'wet ground',
    paragraphs: [
      'Ground near the River Suck lies wet for much of the year, so trees there often have shallow roots and are more likely to blow over in a storm that follows heavy rain. Keeping them lower and lighter with a crown reduction lowers that risk.',
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
          'A small, young tree can sometimes be pulled upright and staked. A mature tree that has gone over almost never can, because the roots that held it are broken. It is safer to remove it, and the root plate can be dropped back or ground out.',
      },
      {
        question: 'What can I plant on wet ground that will not fall over?',
        answer:
          'Alder, willow and birch cope well with wet ground. Keep anything tall well back from the house, and avoid conifers as a shelter belt on soft ground.',
      },
      {
        question: 'Do you work on farms?',
        answer:
          'Yes. Trees over lanes, yards and sheds, fallen timber on fences and overgrown boundaries are all work we take on.',
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
    title: 'Looking for a tree surgeon',
    accent: 'near Ballinasloe?',
    text: 'Phone us, or WhatsApp a couple of pictures of the tree. A quotation is free, and the number is answered 24/7 for emergencies.',
  },
};
