import type { LocationPage } from './types';
import { dismantling, lane, stacked, pruning } from './photos';

import spruceStart from '@/assets/images/work/climber-starting-in-tall-spruce.jpg';
import spruceTop from '@/assets/images/work/climber-limbing-tall-spruce-to-the-top.jpg';
import spruceLast from '@/assets/images/work/last-section-of-spruce-stem-above-houses.jpg';
/**
 * Boyle: DRAFT (not in live.json) until the owner supplies a real local job,
 * photo or review.
 *
 * Local notes are kept to what affects tree work: tall conifers and shelter
 * belts near homes, exposed after storms Darragh and Éowyn (Shannonside; RTÉ
 * on Lough Key losses). No distance given (owner's instruction for far
 * towns). No council content. No Cawley's job in Boyle is claimed.
 */
export const boyle: LocationPage = {
  slug: 'tree-surgeon-boyle',
  town: 'Boyle',
  seoTitle: "Tree Surgeons in Boyle, Co. Roscommon | Cawley's Tree Care",
  description:
    'Tree surgery in Boyle: large tree removal, tall conifers near houses, crown reduction, storm clearance and site clearance. Quotes at no charge.',

  hero: {
    eyebrow: 'Boyle, Co. Roscommon',
    title: 'Tree surgeons serving',
    accent: 'Boyle',
    intro:
      'Large tree removal, crown reduction, storm clearance and site clearance for homes and properties in Boyle and north Roscommon. Fully insured, with a free quotation from your photos.',
    image: dismantling,
  },

  intro: {
    title: 'Large trees,',
    accent: 'handled safely',
    paragraphs: [
      'Tall conifers, shelter belts and mature hardwoods close to a house need careful planning. Where there is no room to fell a tree, it is dismantled from the top down, one section at a time.',
      'We bring more than fifteen years of experience and full insurance to every job. The easiest way to start is to send a few photos showing the whole tree and what is near it; for larger jobs we will arrange to see it.',
    ],
    facts: [
      'Large and awkward trees',
      'Estate hardwoods and tall conifers',
      'Over 15 years of climbing and felling',
      'Covered by full insurance',
      'A price from your photos, free',
      'Emergency line open 24/7',
    ],
  },

  services: {
    title: 'How we can',
    accent: 'help',
    intro: 'The larger jobs are where we are most use to you.',
    items: [
      {
        title: 'Taking down large trees',
        text: 'Tall conifers and mature hardwoods dismantled in sections where there is no room to fell them.',
        href: '/tree-removal',
      },
      {
        title: 'Windblown and hung-up trees',
        text: 'Storm-damaged, snapped and hung-up trees made safe and cleared. Ring at any hour.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Reducing and pruning',
        text: 'Old trees worth keeping made lighter and safer, with dead wood removed.',
        href: '/tree-pruning',
      },
      {
        title: 'Clearing ground',
        text: 'Fallen timber, scrub and overgrown boundaries cleared and chipped.',
        href: '/site-clearance',
      },
      {
        title: 'Not sure? Ask',
        text: 'Send photos and we will tell you what we think the tree needs.',
        href: '/tree-surgery',
      },
    ],
  },

  // One of the owner's own jobs (photos supplied Nov 2026). Its location was
  // not given, so it is NOT presented as a Boyle job.
  job: {
    eyebrow: 'From our jobs',
    title: 'A tall spruce,',
    accent: 'taken down between houses',
    intro:
      'This spruce stood in a back garden with houses and a shed on every side, so there was no room to fell it. Our climber worked up the stem removing the branches, then took the top and the trunk down in short sections, each one lowered on a rope. Nothing touched the roofs or the fences.',
    photos: [
      {
        src: spruceStart,
        alt: 'A climber in a harness and helmet starting work in the lower branches of a tall spruce in a back garden.',
        caption: '1. Starting in the lower crown',
        focus: '55% 40%',
      },
      {
        src: spruceTop,
        alt: 'The spruce stripped of its lower branches, with the climber working high on the stem below the top.',
        caption: '2. Limbed up to the top',
        focus: '50% 35%',
      },
      {
        src: spruceLast,
        alt: 'The climber at the top of the bare spruce stem, high above the roofs of the surrounding houses.',
        caption: '3. The stem coming down in sections',
        focus: '50% 30%',
      },
    ],
  },

  local: {
    title: 'Conifers and',
    accent: 'shelter belts',
    paragraphs: [
      'Around Boyle, many homes have tall spruce or a conifer shelter belt nearby, planted decades ago and never thinned. Where part of a belt has blown over, the trees left standing nearest the house are more exposed than they were. Those are the ones worth assessing first.',
    ],
  },

  jobsDone: {
    title: 'Jobs',
    accent: 'around Boyle',
    intro: 'Photos and notes from real jobs in the area will go here.',
    slots: [
      { title: 'Boyle job to be added', photo: {} },
      { title: 'Boyle job to be added', photo: {} },
    ],
  },

  proof: {
    title: 'Large trees,',
    accent: 'taken down safely',
    intro: 'Photographs of our own work on large trees.',
    photos: [lane, pruning, stacked],
  },

  advice: {
    title: 'Good to',
    accent: 'know',
    intro: 'Common questions about large trees.',
    faqs: [
      {
        question: 'Half my shelter belt blew down. Are the trees left standing safe?',
        answer:
          'Often not. Trees in a belt hold each other up, and the ones in the middle have weaker roots because they never had to stand alone. We would look at how tall they are, which way they lean and what they would hit, and usually recommend topping or removing the ones nearest the house.',
      },
      {
        question: 'How close to a house is too close for a tall conifer?',
        answer:
          'A simple guide: if the tree is taller than its distance from the house, it could reach the roof if it fell. That does not mean it must come down, but it should be checked, especially after nearby trees have blown over.',
      },
      {
        question: 'Do I need a felling licence?',
        answer:
          'Possibly. Felling generally needs a licence from the Department of Agriculture, Food and the Marine, but there are exemptions, including for some trees close to buildings and trees that are dangerous. Forestry plantations almost always need one. We will go through it with you before any work is booked.',
      },
    ],
  },

  nearby: {
    title: 'Around',
    accent: 'Boyle',
    intro: 'We also cover the rest of north Roscommon.',
    groups: [
      {
        county: 'Roscommon',
        towns: ['Keadue', 'Frenchpark', 'Elphin', 'Ballaghaderreen', 'Strokestown'],
      },
    ],
  },

  cta: {
    title: 'A tree too big',
    accent: 'to ignore?',
    text: 'Photos on WhatsApp, with a note of where you are, are all we need to begin. Pricing is free, and if a tree has already fallen, ring: the phone is answered around the clock.',
  },
};
