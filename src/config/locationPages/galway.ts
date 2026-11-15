import type { LocationPage } from './types';
import { climbing, tripod, roof, dismantling } from './photos';

import cypressBefore from '@/assets/images/work/wind-bent-cypress-over-mobile-home-before.jpg';
import cypressDuring from '@/assets/images/work/cypress-stems-being-cut-back.jpg';
import cypressAfter from '@/assets/images/work/cypress-cut-back-to-low-stems.jpg';
/**
 * Galway City: DRAFT (not in live.json) until the owner supplies a real
 * local job, photo or review.
 *
 * Local notes are kept to what affects tree work: wind and salt exposure
 * near the bay, and limited garden access. No distance given (owner's
 * instruction for far towns). No council content. No Cawley's job in Galway
 * is claimed.
 */
export const galway: LocationPage = {
  slug: 'tree-surgeon-galway',
  town: 'Galway City',
  seoTitle: "Tree Surgeons in Galway City | Cawley's Tree Care",
  description:
    'Tree surgeons in Galway City: crown reductions, tree removal in tight spaces, hedges, stump grinding and storm damage. Insured. Free quote from photos.',

  hero: {
    eyebrow: 'Galway City',
    title: 'Tree surgeons in',
    accent: 'Galway City',
    intro:
      'Crown reduction, tree removal in tight spaces, hedge cutting and storm work for homes and businesses across Galway City. Experienced, fully insured, and happy to quote from photos.',
    image: climbing,
  },

  intro: {
    title: 'Built for',
    accent: 'awkward jobs',
    paragraphs: [
      'Many city gardens have limited access and buildings close on every side. Trees there are climbed and cut into manageable pieces, with each piece lowered on a rope so nothing lands on a roof, a shed or a fence.',
      'We have over fifteen years of experience working at height, and full insurance. Send a few photos and we will explain what the job involves and give you a clear price.',
    ],
    facts: [
      'Tight-access and exposed sites',
      'Salt- and wind-damaged trees and hedges',
      'Over 15 years working at height',
      'Full insurance',
      'A free quote from your photos',
      '24-hour emergency calls',
    ],
  },

  services: {
    title: 'Our services',
    accent: 'in Galway',
    intro: 'All of it priced clearly before we start.',
    items: [
      {
        title: 'Crown reduction',
        text: 'Height and spread taken off an exposed tree so the wind has less to work with.',
        href: '/tree-pruning',
      },
      {
        title: 'Removal in tight spaces',
        text: 'Trees dismantled piece by piece on ropes where nothing can be dropped.',
        href: '/tree-removal',
      },
      {
        title: 'Hedges',
        text: 'Tall and overgrown hedges, including leylandii, escallonia and griselinia, reduced and reshaped.',
        href: '/hedge-cutting',
      },
      {
        title: 'Storm-hit trees',
        text: 'Fallen and hanging trees made safe. Ring us 24/7 and we will tell you honestly how soon we can get to you.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Stump removal',
        text: 'Stumps ground out where a machine can reach them.',
        href: '/stump-grinding',
      },
    ],
  },

  // One of the owner's own jobs (photos supplied Nov 2026). Its location was
  // not given, so it is NOT presented as a Galway job.
  job: {
    eyebrow: 'From our jobs',
    title: 'Wind-bent cypress',
    accent: 'cut back from a home',
    intro:
      'A group of cypress, bent over by years of wind, was leaning over a mobile home, with overhead lines just beyond. The stems were cut back in stages to low, safe stumps, keeping everything clear of the home, and the brash was cleared from the garden.',
    photos: [
      {
        src: cypressBefore,
        alt: 'Tall wind-bent cypress trees leaning over the side of a mobile home, before the work.',
        caption: '1. Before: leaning over the home',
        focus: '45% 40%',
      },
      {
        src: cypressDuring,
        alt: 'The cypress partly cut back, with cut stems visible and branches on the ground beside a gravel path.',
        caption: '2. Stems cut back in stages',
        focus: '45% 45%',
      },
      {
        src: cypressAfter,
        alt: 'The cypress cut down to low stumps beside a stone wall, with the mobile home and overhead lines clear.',
        caption: '3. After: cut back to low stems',
        focus: '45% 55%',
      },
    ],
    link: { href: '/tree-pruning', label: 'More about cutting back trees' },
  },

  local: {
    title: 'Wind',
    accent: 'and salt',
    paragraphs: [
      'Trees and hedges near the bay take a lot of wind and salt spray. Reducing tall trees and conifers lowers their exposure, and a hedge that has gone brown on one side in a coastal garden is often salt damage rather than disease. A tree can also become exposed to wind it is not used to when a neighbouring tree or hedge is taken out, so it is worth having it looked at afterwards.',
    ],
  },

  jobsDone: {
    title: 'Our work',
    accent: 'in Galway',
    intro: 'Photos and notes on real jobs in the city will be added here.',
    slots: [
      { title: 'Galway job to be added', photo: {} },
      { title: 'Galway job to be added', photo: {} },
      { title: 'Galway job to be added', photo: {} },
    ],
  },

  proof: {
    title: 'Climbing work',
    accent: 'and storm work',
    intro: 'Climbing and storm jobs from our own files.',
    photos: [dismantling, tripod, roof],
  },

  advice: {
    title: 'Galway',
    accent: 'asks',
    intro: 'What city customers ask.',
    faqs: [
      {
        question: 'One side of my hedge has gone brown. Is it finished?',
        answer:
          'If it is the side facing the sea or the wind, and it happened after a winter gale, it is most likely salt and wind scorch, and many hedges grow out of it by summer. Leylandii is the exception: once it browns back to bare wood it does not recover.',
      },
      {
        question: 'How much can you take off a tree?',
        answer:
          'As a guide, up to about a third of the crown in one go for most healthy broadleaved trees. More than that stresses the tree and brings on weak regrowth. If a tree needs to be much smaller than that, it may be the wrong tree for the spot.',
      },
      {
        question: 'Do you take away all the waste?',
        answer:
          'Yes. Branches are chipped and removed, and timber is either left for you as logs or taken away. The garden is left tidy.',
      },
      {
        question: 'Do you cover areas outside the city?',
        answer:
          'Yes: Oranmore, Claregalway, Athenry, Craughwell, Loughrea and east along the motorway to Ballinasloe.',
      },
    ],
  },

  nearby: {
    title: 'Around',
    accent: 'Galway City',
    intro: 'Also covered, east of the city.',
    groups: [
      {
        county: 'Galway',
        towns: ['Oranmore', 'Claregalway', 'Athenry', 'Craughwell', 'Loughrea', 'Headford', 'Tuam'],
      },
    ],
  },

  cta: {
    title: 'Talk to a',
    accent: 'tree surgeon today',
    text: 'WhatsApp us photos and say which part of the city you are in, or ring. Pricing costs nothing, and if a tree has come down you can call any hour of the day or night.',
  },
};
