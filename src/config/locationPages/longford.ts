import type { LocationPage } from './types';
import { stormBeech, chipper, drive, cutting } from './photos';

/**
 * Longford Town: DRAFT (not in live.json) until the owner supplies a real
 * local job, photo or review.
 *
 * Local notes are kept to what affects tree work: a short checklist of
 * warning signs on trees near roads and houses. No distance given (owner's
 * instruction for far towns). No council content. No Cawley's job in
 * Longford is claimed.
 */
export const longford: LocationPage = {
  slug: 'tree-surgeon-longford',
  town: 'Longford Town',
  seoTitle: "Tree Surgeons in Longford Town | Cawley's Tree Care",
  description:
    'Tree surgery in Longford Town: tree safety checks, removals, crown reductions, hedge cutting, stump grinding and storm clear-ups. Insured. Free quotes.',

  hero: {
    eyebrow: 'Longford Town',
    title: 'Tree surgeons in',
    accent: 'Longford',
    intro:
      'Tree checks, removal, crown reduction, hedge cutting, stump grinding and storm clear-ups across Longford Town and the county. Experienced, insured and honest about what a tree really needs.',
    image: stormBeech,
  },

  intro: {
    title: 'A clear answer',
    accent: 'on every tree',
    paragraphs: [
      'Most people who contact us want to know whether a tree is safe. We look at its condition and at what it could fall on, then tell you whether it needs pruning, removal or nothing at all.',
      'With over fifteen years of experience and full insurance, we take down roadside and boundary trees in controlled sections, and the site is left clean afterwards.',
    ],
    facts: [
      'All of Co. Longford covered',
      'Honest advice on which trees need work',
      '15 years plus in tree surgery',
      'Insurance cover in place',
      'Free, no-obligation quotes',
      'Round-the-clock emergency number',
    ],
  },

  services: {
    title: 'What we do',
    accent: 'in Longford',
    intro: 'From a single tree to a whole boundary.',
    items: [
      {
        title: 'An honest look at your trees',
        text: 'Which are sound, which need work and which can be left alone.',
        href: '/tree-surgery',
      },
      {
        title: 'Removing roadside and boundary trees',
        text: 'Dead and dangerous trees taken down in sections, safely, beside roads and buildings.',
        href: '/tree-removal',
      },
      {
        title: 'Reducing and thinning',
        text: 'Mature trees made lighter and less exposed to wind, so they can be kept.',
        href: '/tree-pruning',
      },
      {
        title: 'Storm clear-ups',
        text: 'Fallen and hanging trees cleared. Ring us at any time of day or night.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Roadside and garden hedges',
        text: 'Hedges cut back and kept in order.',
        href: '/hedge-cutting',
      },
      {
        title: 'Stumps',
        text: 'Ground out where the site suits it.',
        href: '/stump-grinding',
      },
    ],
  },

  local: {
    title: 'Warning signs',
    accent: 'to look for',
    paragraphs: [
      'Since Storm Éowyn, many people in Longford have been looking harder at the trees along their roads and boundaries. If a tree is near a road, a house or a power line, these are the signs worth acting on:',
    ],
    points: [
      {
        title: 'Dead wood in the top',
        text: 'Bare branches in summer, especially in ash. A few dead twigs are normal; whole limbs are not.',
      },
      {
        title: 'Fungus at the base',
        text: 'Brackets or clusters of toadstools on the trunk or roots usually mean decay inside.',
      },
      {
        title: 'Cracks and splits',
        text: 'A crack running down from a fork, or a seam opening in the trunk.',
      },
      {
        title: 'Heavy ivy',
        text: 'Ivy to the top hides defects and catches the wind. On a roadside tree, have it cut at the base.',
      },
    ],
  },

  jobsDone: {
    title: 'Our jobs',
    accent: 'in Longford',
    intro: 'Real work from in and around the town, added as we go.',
    slots: [
      { title: 'Longford job to be added', photo: {} },
      { title: 'Longford job to be added', photo: {} },
      { title: 'Longford job to be added', photo: {} },
    ],
  },

  proof: {
    title: 'Boundaries and',
    accent: 'big trees',
    intro: 'Our own pictures, from jobs like these.',
    photos: [chipper, drive, cutting],
  },

  advice: {
    title: 'Longford',
    accent: 'asks',
    intro: 'Plain answers.',
    faqs: [
      {
        question: 'How much does it cost to take down a roadside tree?',
        answer:
          'It depends on the size of the tree, what is under it, whether there are wires and how busy the road is. Several trees done together cost less per tree than one at a time. Send us photos and the location for a free quotation.',
      },
      {
        question: 'Can a tree be made safe without removing it?',
        answer:
          'Often. Taking out dead wood and reducing the crown deals with most of the risk on a tree that is otherwise healthy. A tree with serious decay at the base is a different matter, and we will tell you so.',
      },
      {
        question: 'Can you cut ivy off a big tree?',
        answer:
          'Yes. The usual way is to cut through the ivy stems at the base and let the growth above die back, which is safer for the tree than pulling it off. Once it has died back, the tree’s condition is easier to see.',
      },
      {
        question: 'Which parts of Longford do you cover?',
        answer:
          'The whole county: the town, Edgeworthstown, Newtownforbes, Drumlish, Ballinalee, Lanesborough, Ballymahon, Granard and the country between.',
      },
    ],
  },

  nearby: {
    title: 'Around',
    accent: 'Longford Town',
    intro: 'We cover the whole of Co. Longford.',
    groups: [
      {
        county: 'Longford',
        towns: [
          'Newtownforbes',
          'Edgeworthstown',
          'Drumlish',
          'Ballinalee',
          'Lanesborough',
          'Keenagh',
          'Ballymahon',
          'Granard',
        ],
      },
    ],
  },

  cta: {
    title: 'Unsure about',
    accent: 'a tree?',
    text: 'Take a photo and send it on WhatsApp, or ring and describe it. We will tell you what we think and give you a free quotation. For emergencies, call 24/7.',
  },
};
