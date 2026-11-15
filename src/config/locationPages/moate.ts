import type { LocationPage } from './types';
import { snapped, drive, tripod, stacked } from './photos';
import laneBefore from '@/assets/images/work/trees-along-rural-boundary-fence-before.jpg';
import laneAfter from '@/assets/images/work/boundary-opened-up-after-tree-removal.jpg';
import laneClear from '@/assets/images/work/lane-clear-after-boundary-trees-removed.jpg';

/**
 * Moate: has a genuine local job (see jobsDone).
 *
 * Local notes are kept to what affects tree work. Sources (checked Nov 2026):
 * at least 15 trees down on the R446 between Kilbeggan and Moate in Storm
 * Éowyn (Midlands 103, quoting Gardaí). Distance (about 16 km) to be confirmed
 * by the owner. No council content.
 */
export const moate: LocationPage = {
  slug: 'tree-surgeon-moate',
  town: 'Moate',
  seoTitle: "Tree Surgeons in Moate, Co. Westmeath | Cawley's Tree Care",
  description:
    'Tree surgeons for Moate, from nearby Athlone: roadside and boundary trees, removals, pruning, hedge cutting and storm call-outs. Quotes cost nothing.',

  hero: {
    eyebrow: 'Moate, Co. Westmeath',
    title: 'Tree surgeons near',
    accent: 'Moate',
    intro:
      'Tree removal, pruning, hedge and ditch cutting and storm call-outs for homes, farms and businesses in and around Moate. We are based in Athlone, about 16 km away, and every job gets a free quotation.',
    image: snapped,
  },

  intro: {
    title: 'Close by,',
    accent: 'when it matters',
    paragraphs: [
      'Being nearby means we can come out and look at a job without delay, and get to you quickly when a tree comes down. You will get a straight opinion on what the tree needs and a clear price before any work starts.',
      'We have over fifteen years of experience and are fully insured, and we work on garden trees, roadside trees and farm boundaries alike.',
    ],
    facts: [
      'About 16 km from our Athlone base',
      '15+ years of tree work',
      'Insured',
      'Householders, farmers and businesses',
      'Free to quote',
      'Emergency calls taken 24/7',
    ],
  },

  services: {
    title: 'The work we do',
    accent: 'around Moate',
    intro: 'For householders, farmers and businesses.',
    items: [
      {
        title: 'Roadside and boundary trees',
        text: 'Dead, leaning or overhanging trees along a road or lane taken down safely, in sections where they hang over the road.',
        href: '/tree-removal',
      },
      {
        title: 'When a tree comes down',
        text: 'A tree across a gateway, lane or shed. Ring at any hour and we will tell you honestly how soon we can be there.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Hedges and ditches',
        text: 'Garden hedges trimmed and overgrown ones reduced. Tall conifer hedges brought down to a height you can manage.',
        href: '/hedge-cutting',
      },
      {
        title: 'Pruning',
        text: 'Branches lifted off a roof or clear of a driveway, crowns thinned to let light back into the garden.',
        href: '/tree-pruning',
      },
      {
        title: 'Clearing an overgrown plot',
        text: 'Scrub, brambles and old hedging cleared and chipped, ready for building, fencing or grass.',
        href: '/site-clearance',
      },
    ],
  },

  local: {
    title: 'Roadside',
    accent: 'and boundary trees',
    paragraphs: [
      'Much of the tree work around Moate involves mature ash, sycamore and beech on farm ditches and road boundaries. Many of them are ash, and dieback has left a lot of those dead or dying.',
      'If a tree on your land overhangs a road, lane or yard, it is your responsibility. We can walk the boundary with you and recommend which trees need work, and in what order.',
    ],
  },

  // Genuine job in Moate (photos supplied and location confirmed by
  // the owner, Nov 2026).
  jobsDone: {
    title: 'Recent work',
    accent: 'in Moate',
    intro: 'Boundary trees cleared beside a country lane in the Moate area.',
    slots: [
      {
        title: 'Before: trees on the boundary',
        summary:
          'A row of trees had grown up along the fence of the house, crowding the lane and the overhead wires.',
        photo: {
          src: laneBefore,
          alt: 'Tall bare trees growing along a black timber boundary fence beside a lawn and a lane, before the work.',
          focus: '50% 45%',
        },
      },
      {
        title: 'After: the boundary opened up',
        summary:
          'The trees were taken out and the boundary cleared, opening the garden back up to the fields.',
        photo: {
          src: laneAfter,
          alt: 'The same corner of the garden after the trees were removed, open to the fields beyond.',
          focus: '50% 55%',
        },
      },
      {
        title: 'The lane left clear',
        summary:
          'The lane beside the house, clear of overhanging branches, with the site tidied before we left.',
        photo: {
          src: laneClear,
          alt: 'The country lane beside the house, clear of the trees, under a blue sky.',
          focus: '40% 55%',
        },
      },
    ],
  },

  proof: {
    title: 'Our own',
    accent: 'photos',
    intro: 'Taken on our own jobs, not bought from a picture library.',
    photos: [drive, tripod, stacked],
  },

  advice: {
    title: 'Asked',
    accent: 'around Moate',
    intro: 'The questions that come up most.',
    faqs: [
      {
        question: 'Who is responsible for a tree that overhangs the public road?',
        answer:
          'The owner of the land it grows on. Landowners have to take reasonable care that their trees and hedges are not a danger to road users. If one of yours looks dead, is leaning out, or has a heavy limb over the road, have it looked at.',
      },
      {
        question: 'I have a row of dying ash along a field. Do they all have to go at once?',
        answer:
          'No. We would sort them with you: the ones over a road, wires or buildings first, the ones in the middle of a field last, or not at all. Doing several in one visit costs less per tree than coming back for each.',
      },
      {
        question: 'Will you keep the timber for me?',
        answer:
          'Yes. Ash and beech make good firewood and it is yours. We can leave it in lengths, cut it into rings for splitting, or take it away if you have no use for it.',
      },
      {
        question: 'Can I have a field hedge cut in summer?',
        answer:
          'Generally not. Hedges and ditches are off limits by law between 1 March and 31 August because of nesting birds, unless there is a genuine road-safety reason. Book ordinary hedge cutting for September to February.',
      },
    ],
  },

  nearby: {
    title: 'Around',
    accent: 'Moate',
    intro: 'We cover the villages and country all around the town.',
    groups: [
      { county: 'Westmeath', towns: ['Athlone', 'Kilbeggan', 'Ballymore', 'Glasson'] },
      { county: 'Offaly', towns: ['Clara', 'Ferbane'] },
    ],
  },

  cta: {
    title: 'A tree in Moate',
    accent: 'that needs sorting?',
    text: 'Give us a ring or WhatsApp a photo. We are only out the road and a price costs you nothing. If a tree is down, phone at any hour.',
  },
};
