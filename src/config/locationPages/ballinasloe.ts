import type { LocationPage } from './types';
import { pruning, laurel, uprooted, stacked } from './photos';
import blE1 from '@/assets/images/work/ballinasloe-large-tree-felled-in-lawn.jpg';
import blE2 from '@/assets/images/work/ballinasloe-stump-cut-low-and-tidy.jpg';
import blF1 from '@/assets/images/work/ballinasloe-row-of-tall-conifers-by-wall-before.jpg';
import blF2 from '@/assets/images/work/ballinasloe-conifers-removed-wall-clear.jpg';
import blBefore from '@/assets/images/work/tall-ivy-covered-trees-before-work.jpg';
import blAfter from '@/assets/images/work/ivy-covered-trees-reduced-to-main-stems.jpg';

/**
 * Ballinasloe: has a genuine local job (see jobsDone).
 *
 * Local notes are kept to what affects tree work: wet ground near the River
 * Suck and shallow-rooted trees. Distance (about 25 km on the M6) to be
 * confirmed by the owner. No council content.
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
      'We have more than fifteen years of experience in tree surgery and full insurance, and the timber is cut up, stacked or taken away, whichever you prefer.',
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
    accent: 'around Ballinasloe',
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

  // Genuine jobs in and around Ballinasloe (photos supplied and locations
  // confirmed by the owner, Nov 2026).
  jobsDone: {
    title: 'Jobs done',
    accent: 'around Ballinasloe',
    intro:
      'Jobs in and around Ballinasloe, from tall trees cut back from a platform to a row of conifers cleared from a garden.',
    slots: [
      {
        title: 'Before: two tall, ivy-covered trees',
        summary:
          'Two big trees, their trunks thick with ivy, standing close to a shed and the buildings around it.',
        photo: {
          src: blBefore,
          alt: 'Two tall bare trees with ivy covering their trunks, against a blue sky, before work began.',
          focus: '50% 45%',
        },
      },
      {
        title: 'Crowns off, piece by piece',
        summary:
          'Working from an access platform, the crowns were cut away in sections, bringing both trees down to their main stems.',
        photo: {
          src: blAfter,
          alt: 'The same two trees with their crowns removed, cut back to their ivy-covered main stems.',
          focus: '50% 40%',
        },
      },
      {
        title: 'A large tree felled in a lawn',
        summary:
          'A big tree taken down in the middle of an open lawn, with the brash cleared and the grass left tidy.',
        photo: {
          src: blE1,
          alt: 'An open lawn with a cut stump where a large tree stood, with tall trees and conifers behind.',
          focus: '50% 45%',
        },
      },
      {
        title: 'The stump cut low',
        summary: 'The stump cut low and clean, with the area raked over.',
        photo: {
          src: blE2,
          alt: 'A close view of the large, freshly cut stump in the lawn, cut low and level.',
          focus: '50% 45%',
        },
      },
      {
        title: 'Before: a row of tall conifers',
        summary:
          'A row of tall conifers along the garden wall, blocking the light and towering over the garden.',
        photo: {
          src: blF1,
          alt: 'A row of tall conifers along a garden wall behind a lawn and a shed.',
          focus: '50% 45%',
        },
      },
      {
        title: 'After: the wall and garden clear',
        summary:
          'The whole row taken down, the stumps cut low and the garden opened up to the light.',
        photo: {
          src: blF2,
          alt: 'The same garden with the conifers gone, the wall clear and the lawn open.',
          focus: '50% 45%',
        },
      },
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
