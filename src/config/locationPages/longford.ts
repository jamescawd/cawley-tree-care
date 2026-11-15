import type { LocationPage } from './types';
import { stormBeech, chipper, drive, cutting } from './photos';

/**
 * Longford Town: DRAFT (not in live.json) until the owner supplies a real
 * local job, photo or review.
 *
 * RESEARCH NOTES (checked Nov 2026):
 * - Storm Éowyn, 24 Jan 2025: falling trees disrupted traffic on Battery
 *   Road; The Mall park was badly damaged and partly closed into February;
 *   Longford Town FC's ground was damaged; thousands were without power.
 *   [Longford Leader; Shannonside]
 * - The sycamore at Ballinamuck associated with General George Blake and
 *   1798 was blown down. [Longford Leader]
 * - Afterwards there were public calls for landowners to deal with roadside
 *   trees. [Longford Leader]
 * - The Camlin river runs through the town and past The Mall (general
 *   knowledge).
 * - Route from Athlone (about 45 km via Ballymahon and Keenagh) is
 *   approximate: owner to confirm.
 * - No council content. No Cawley's job in Longford is claimed.
 */
export const longford: LocationPage = {
  slug: 'tree-surgeon-longford',
  town: 'Longford Town',
  seoTitle: "Tree Surgeons in Longford Town | Cawley's Tree Care",
  description:
    'Tree surgery in Longford Town: roadside and boundary trees, storm damage, removals, crown reductions, hedges and stump grinding. Fully insured; quotations free.',

  hero: {
    eyebrow: 'Longford Town',
    title: 'Sound advice on trees in',
    accent: 'Longford',
    intro:
      'Which trees are safe, which need work and which should come down: that is what most people in Longford want to know since the big storm. We will give you a straight answer and a free quotation.',
    image: stormBeech,
  },

  intro: {
    title: 'What Éowyn',
    accent: 'taught Longford',
    paragraphs: [
      'On the morning of 24 January 2025, trees fell across Battery Road and stopped the traffic. The Mall lost so many that part of the park was still closed weeks later. Up in Ballinamuck the old sycamore that had stood since the time of General Blake and 1798 went over. Thousands of homes across the county had no power.',
      'In the months after, the talk in Longford turned to the trees still standing along the roads, and whose job it is to mind them. The short answer is: whoever owns the land. If that is you, this page is meant to help.',
      'We are a tree surgery firm with over fifteen years behind us and full insurance, and Co. Longford is one of the five counties we cover.',
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

  local: {
    title: 'Which trees to',
    accent: 'worry about',
    paragraphs: [
      'Most trees are fine, and we do not go around telling people to cut down healthy ones. A tree becomes a concern when two things are true together: something is wrong with it, and there is something under it that matters. A dead ash in the middle of a field can stand until it falls. The same tree over the school run cannot.',
      'So start with what the tree could hit: a road, a footpath, a house, a neighbour’s garden, a power line. Then look at the tree itself. You do not need to be an expert to spot the main warning signs, and the list on this page covers them.',
    ],
    points: [
      {
        title: 'Dead wood in the top',
        text: 'Bare branches in summer, especially in ash. A few dead twigs are normal; whole limbs are not.',
      },
      {
        title: 'Fungus at the base',
        text: 'Brackets or clusters of toadstools on the trunk or roots usually mean decay inside, where it counts.',
      },
      {
        title: 'Cracks and splits',
        text: 'A crack running down from a fork, or a seam opening in the trunk. These fail suddenly.',
      },
      {
        title: 'Ivy to the top',
        text: 'Heavy ivy hides defects and acts like a sail in the wind. On a roadside tree it is worth having it cut at the base.',
      },
      {
        title: 'A new lean',
        text: 'A tree that has shifted, with the ground heaved or cracked on one side. Treat it as urgent.',
      },
    ],
  },

  services: {
    title: 'What we do',
    accent: 'in Longford',
    intro: 'From a single tree to a whole boundary.',
    items: [
      {
        title: 'An honest look at your trees',
        text: 'We tell you which are sound, which need work and which can be left alone.',
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
        text: 'Fallen and hanging trees cleared. Ring us any time, day or night.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Roadside and garden hedges',
        text: 'Roadside and garden hedges cut back and kept in order.',
        href: '/hedge-cutting',
      },
      {
        title: 'Stumps',
        text: 'Stumps ground out where the site suits it.',
        href: '/stump-grinding',
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
        question: 'Am I responsible for the trees along the road outside my land?',
        answer:
          'If they grow on your land, including on the ditch or hedge that bounds it, yes. The Roads Act requires landowners to take reasonable care that trees and hedges are not a danger to people using the public road. Looking them over once a year, and after storms, and acting on anything obviously wrong, is what reasonable care means in practice.',
      },
      {
        question: 'How much does it cost to take down a roadside tree?',
        answer:
          'It varies with the size of the tree, what is under it, whether there are wires, and how busy the road is. A row of trees done together costs less per tree than one at a time. Send us photos and the location and we will give you a free quotation.',
      },
      {
        question: 'Can a tree be made safe without removing it?',
        answer:
          'Often. Taking out dead wood and reducing the crown deals with most of the risk on a tree that is otherwise healthy. A tree with serious decay at the base is different, and we will say so.',
      },
      {
        question: 'There are wires through the tree. Can you still do it?',
        answer:
          'Do not touch a tree that is in contact with electricity lines. ESB Networks need to be told first, and they will advise on making the line safe. We then deal with the tree.',
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
          'Ballinamuck',
        ],
      },
    ],
  },

  cta: {
    title: 'Not sure about a tree',
    accent: 'on your boundary?',
    text: 'Take a photo of the tree and send it on WhatsApp, or ring and describe it. We will tell you what we think, free. For emergencies, call 24/7.',
  },
};
