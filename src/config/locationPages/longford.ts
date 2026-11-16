import type { LocationPage } from './types';
import { stormBeech, chipper, drive, cutting } from './photos';
import lfA1 from '@/assets/images/work/longford-tall-trees-among-conifers-before.jpg';
import lfA2 from '@/assets/images/work/longford-tall-trees-removed-timber-in-rounds.jpg';
import lfB1 from '@/assets/images/work/longford-two-conifers-in-back-garden-before.jpg';
import lfB2 from '@/assets/images/work/longford-taller-conifer-removed-one-kept.jpg';
import lfC1 from '@/assets/images/work/longford-tall-conifer-in-garden-before.jpg';
import lfC2 from '@/assets/images/work/longford-conifer-down-logs-stacked.jpg';
import lfD1 from '@/assets/images/work/longford-climber-in-tall-tree-beside-house.jpg';
import lfD2 from '@/assets/images/work/longford-tall-tree-gone-garden-clear.jpg';

/**
 * Longford Town: has genuine local work (see jobsDone).
 *
 * Local notes are kept to what affects tree work: a short checklist of
 * warning signs on trees near roads and houses. No distance given (owner's
 * instruction for far towns). No council content.
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
      'If a tree on your property is near a road, a house or a power line, these are the signs worth acting on:',
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

  // Genuine jobs in and around Longford (photos supplied and locations
  // confirmed by the owner, Nov 2026).
  jobsDone: {
    title: 'Our jobs',
    accent: 'around Longford',
    intro: 'Trees taken down and cleared in and around Longford, before and after.',
    slots: [
      {
        title: 'Before: tall trees among the conifers',
        summary:
          'Tall broadleaf trees growing up through a belt of conifers at the edge of a large garden.',
        photo: {
          src: lfA1,
          alt: 'Tall broadleaf trees standing among dark conifers at the edge of a sunny lawn.',
          focus: '50% 45%',
        },
      },
      {
        title: 'After: taken down, timber in rounds',
        summary:
          'The tall trees climbed and taken down in sections, with the timber cut into rounds and stacked.',
        photo: {
          src: lfA2,
          alt: 'The same edge of the garden with the tall trees gone and cut timber stacked in rounds on the ground.',
          focus: '50% 45%',
        },
      },
      {
        title: 'Before: two conifers in a back garden',
        summary:
          'Two large conifers beside the garden path, the taller one towering over the garden and the houses around it.',
        photo: {
          src: lfB1,
          alt: 'Two large conifers in a back garden beside a stepping-stone path, with a climber getting ready below.',
          focus: '50% 45%',
        },
      },
      {
        title: 'After: one removed, one kept',
        summary:
          'The taller conifer taken down and the shapely one kept, so the garden keeps its feature tree.',
        photo: {
          src: lfB2,
          alt: 'The same garden with the taller conifer gone and the rounded conifer kept beside the path.',
          focus: '50% 45%',
        },
      },
      {
        title: 'Before: a tall conifer in the corner',
        summary:
          'A tall, dense conifer in the corner of a back garden, close to the fence and the houses behind.',
        photo: {
          src: lfC1,
          alt: 'A tall, dense conifer in the corner of a back garden beside a timber fence.',
          focus: '50% 45%',
        },
      },
      {
        title: 'After: down and stacked',
        summary:
          'The conifer taken down and the timber cut into logs and stacked neatly on the lawn.',
        photo: {
          src: lfC2,
          alt: 'A neat stack of cut logs on a lawn, with the corner of the garden now clear.',
          focus: '50% 45%',
        },
      },
      {
        title: 'During: climbing a tall tree',
        summary:
          'Our climber working high in a tall tree growing right beside the house, taking it down piece by piece.',
        photo: {
          src: lfD1,
          alt: 'A climber in orange high in a tall tree beside a house, above a garden full of shrubs and flowers.',
          focus: '50% 45%',
        },
      },
      {
        title: 'After: the tree gone',
        summary: 'The tree removed without harming the shrubs and flower beds below it.',
        photo: {
          src: lfD2,
          alt: 'The same garden corner after the tall tree was removed, with the shrubs and flowers left in place.',
          focus: '50% 45%',
        },
      },
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
