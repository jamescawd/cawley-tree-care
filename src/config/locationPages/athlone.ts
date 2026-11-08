import type { LocationPage } from './types';
import cutting from '@/assets/images/work/arborist-cutting-trunk-section.jpg';
import before from '@/assets/images/work/mature-tree-before-removal.jpg';
import during from '@/assets/images/work/mature-tree-reduced-to-trunk.jpg';
import dismantling from '@/assets/images/work/sectional-dismantling-beside-building.jpg';

/**
 * Athlone: the business's home town and the master template for town pages.
 *
 * Facts used here are all confirmed in config/business.ts (based in Athlone,
 * over 15 years, fully insured, domestic and commercial, hours, 24/7
 * emergency calls, free quotations) or are public geography (Athlone sits on
 * the Shannon, split between Co. Westmeath and Co. Roscommon).
 *
 * NOT YET AVAILABLE (add when the owner supplies them): photos or short
 * write-ups of specific jobs in or around Athlone. Until then the photos are
 * genuine Cawley's work with captions that do not claim a location.
 */
export const athlone: LocationPage = {
  slug: 'tree-surgeon-athlone',
  town: 'Athlone',
  seoTitle: "Tree Surgeons in Athlone | Cawley's Tree Care & Landscaping",
  description:
    "Athlone-based tree surgeons: removal, pruning, stump grinding, hedge cutting and 24/7 emergency calls. Over 15 years' experience, fully insured. Free quotes.",

  hero: {
    eyebrow: 'Based in Athlone',
    title: 'Professional tree surgery in',
    accent: 'Athlone',
    intro:
      'Cawley’s is an Athlone business. We look after trees and hedges for homes and businesses in the town and the countryside around it, and every job starts with a free quotation.',
    image: {
      src: cutting,
      alt: "A Cawley's arborist in a harness and visor cutting a section from a tree trunk against a clear blue sky.",
      caption: 'Cawley’s at work, in harness and visor',
      focus: '50% 28%',
    },
  },

  intro: {
    title: 'A local firm,',
    accent: 'not a long drive away',
    paragraphs: [
      'When you ring about a tree in Athlone, you are ringing a business that is based here. Coming out to look at the job is a short trip, not a day’s travel, and we are easy to get hold of when you have a question afterwards.',
      'Gardens around the town differ a great deal: mature trees in long-established gardens, boundary hedges that have been left to grow, and trees on open ground that take the full force of the wind. Each needs a different approach, so we look at the tree, what is close to it and what you want from it before recommending anything, and we will tell you if the honest answer is to leave it alone.',
      'We have been doing this work for over 15 years, we are fully insured, and we work for householders and businesses alike.',
    ],
    facts: [
      'Based in Athlone, Co. Westmeath',
      'Over 15 years of experience',
      'Fully insured',
      'Homes and businesses',
      'Monday to Saturday, 8am to 6pm',
      'Emergencies: call us 24/7',
    ],
  },

  services: {
    title: 'What we can',
    accent: 'help with',
    intro:
      'A quick guide to which service fits your problem. Each one has its own page with the detail.',
    items: [
      {
        title: 'Tree surgery',
        text: 'The place to start if you are not sure what a tree needs. We check its health, its size and what it is close to, then recommend what it actually needs.',
        href: '/tree-surgery',
      },
      {
        title: 'Tree removal',
        text: 'For a tree that is dead, dangerous or simply in the wrong place. Close to a house, shed or boundary, it comes down in controlled sections rather than in one piece.',
        href: '/tree-removal',
      },
      {
        title: 'Pruning & crown reduction',
        text: 'For a tree you want to keep that has outgrown its space: bringing down the height and spread, thinning it to let light through, or lifting branches clear of a drive.',
        href: '/tree-pruning',
      },
      {
        title: 'Stump grinding',
        text: 'For the stump left behind after a tree comes down. Where the site suits it, the stump is ground down below ground level so the area can be levelled and used again.',
        href: '/stump-grinding',
      },
      {
        title: 'Emergency tree services',
        text: 'For a tree or limb down on a house, car, road or driveway, or one left split and hanging after a storm. You can ring us 24/7, and we will tell you honestly how soon we can get to you.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Hedge cutting',
        text: 'Regular trims, overgrown hedges brought back down to a manageable size, or a hedge taken out completely. Laurel, beech and conifer hedges included.',
        href: '/hedge-cutting',
      },
      {
        title: 'Site clearance',
        text: 'For an overgrown garden, plot or site. Scrub, brambles and old hedging are cleared, branches chipped and green waste taken away.',
        href: '/site-clearance',
      },
      {
        title: 'Landscaping',
        text: 'For what comes after the tree work: lawns, planting, paving and fencing, from the same team.',
        href: '/landscaping',
      },
    ],
  },

  proof: {
    title: 'In a customer’s',
    accent: 'own words',
    intro:
      'A review sent to us by a customer in Athlone, published exactly as written. The photos are from our own jobs; none are stock images.',
    testimonial: '01-sean-murphy',
    photos: [
      {
        src: before,
        alt: 'A large mature tree beside a stone wall and a timber cabin, before work began.',
        caption: 'Before: a mature tree between a wall and a cabin',
        focus: '50% 40%',
      },
      {
        src: during,
        alt: 'The same tree reduced to its main trunk, with rigging ropes in place and cut logs on the ground.',
        caption: 'During: reduced in sections on rigging ropes',
        focus: '50% 40%',
      },
      {
        src: dismantling,
        alt: 'A tree being taken down in sections right beside a building.',
        caption: 'Taking a tree down in sections beside a building',
      },
    ],
  },

  advice: {
    title: 'Useful to know',
    accent: 'before you book',
    intro: 'Worth knowing before any work is booked.',
    faqs: [
      {
        question: 'Do I need permission to cut or remove a tree?',
        answer:
          'It depends on the tree, and there are three separate things to check. First, a felling licence: under the Forestry Act 2014 many trees need a licence from the Department of Agriculture, Food and the Marine before they are felled, but there are exemptions, including trees in urban areas (in Athlone, the area of the former Athlone Town Council) and trees within 30 metres of a building, unless the building is newer than the tree. Second, a tree preservation order: the county council can protect individual trees or groups of trees, and the licence exemptions do not override one. Third, planning: a tree can be protected by a condition of a planning permission or because it stands in an architectural conservation area. Athlone is split between Westmeath County Council, east of the Shannon, and Roscommon County Council, on the west side. We will help you work out what applies to your tree before any work is booked, and if there is any doubt, check with the council or the Department first.',
      },
      {
        question: 'When can hedges be cut back?',
        answer:
          'Under Section 40 of the Wildlife Acts, cutting, grubbing or burning vegetation in hedges and ditches, and on uncultivated land, is restricted from 1 March to 31 August. There are limited legal exemptions, for example for public health and safety, for road safety, and for some work in the ordinary course of agriculture or forestry, so not every piece of hedge work is ruled out. Separately, nesting birds and their nests are protected all year round. If a hedge needs work during the restricted months, ask us first and we will tell you honestly whether it can be done now or should wait.',
      },
      {
        question: 'What helps you give an accurate quote?',
        answer:
          'A few photos of the tree or hedge, sent by WhatsApp, and a rough idea of its height. Tell us what is near it (the house, a shed, wires, a road) and how we would get to it, for example through a side gate. Let us know too whether you would like the timber left as logs or taken away. Quotations are free.',
      },
      {
        question: 'Is it an emergency, or can it wait?',
        answer:
          'Ring straight away if a tree or branch has come down on a house, car, road or driveway, if a limb is cracked and hanging, or if a tree has started to lean after a storm. Keep everyone well back, and if it is touching overhead electricity lines, stay clear and contact the network operator first. Anything less urgent can go through the quote form.',
      },
      {
        question: 'What happens to the timber and branches?',
        answer:
          'That is your choice. Timber can be cut into logs and stacked for you, and branches chipped. Anything you do not want is taken away, so the garden is left tidy.',
      },
    ],
  },

  nearby: {
    title: 'Around',
    accent: 'Athlone',
    intro:
      'We also work in the towns and villages around Athlone, on both sides of the Shannon, and across the rest of our five counties.',
    groups: [
      { county: 'Westmeath', towns: ['Moate', 'Glasson', 'Ballymore', 'Kilbeggan'] },
      { county: 'Roscommon', towns: ['Knockcroghery', 'Athleague'] },
      { county: 'Longford', towns: ['Ballymahon'] },
      { county: 'Offaly', towns: ['Clara', 'Ferbane', 'Shannonbridge'] },
      { county: 'Galway', towns: ['Ballinasloe', 'Ahascragh', 'Ballygar'] },
    ],
  },

  cta: {
    title: 'A tree that needs',
    accent: 'looking at?',
    text: 'Ring, send a few photos on WhatsApp, or ask for a free quote. We are Monday to Saturday, 8am to 6pm, and you can call us 24/7 about emergencies.',
  },
};
