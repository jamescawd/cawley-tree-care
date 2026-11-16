import type { LocationPage } from './types';
import { dismantling, stormBeech, uprooted, conifer } from './photos';
import mgCherryBefore from '@/assets/images/work/overgrown-cherry-tree-in-back-garden-before.jpg';
import mgCherryAfter from '@/assets/images/work/cherry-tree-crown-cut-back.jpg';
import mgFallen from '@/assets/images/work/fallen-tree-across-garden-path.jpg';
import mgClear from '@/assets/images/work/garden-path-clear-after-fallen-tree-removed.jpg';

/**
 * Mullingar: has genuine local work (see jobsDone).
 *
 * Local notes are kept to what affects tree work. Sources (checked Nov 2026):
 * Storm Éowyn brought trees down across Mullingar on 24 Jan 2025 (Westmeath
 * Examiner live blog). No council content (owner's instruction).
 */
export const mullingar: LocationPage = {
  slug: 'tree-surgeon-mullingar',
  town: 'Mullingar',
  seoTitle: "Tree Surgeons in Mullingar | Cawley's Tree Care",
  description:
    'Tree surgeons in Mullingar: tree removal, pruning, hedge cutting, stump grinding and storm call-outs. Experienced and fully insured. Free quotations.',

  hero: {
    eyebrow: 'Mullingar, Co. Westmeath',
    title: 'Tree surgeons for',
    accent: 'Mullingar',
    intro:
      'Tree removal, pruning, hedge cutting, stump grinding and storm work for homes and businesses in Mullingar and the villages around it. Experienced, fully insured, and a free quotation before anything is cut.',
    image: dismantling,
  },

  intro: {
    title: 'Experienced tree care,',
    accent: 'priced up front',
    paragraphs: [
      'Whether it is one tree that has outgrown the garden or a boundary of overgrown leylandii, we look at the job, explain what we would do and give you a clear price. If a tree does not need any work, we will tell you that too.',
      'We have more than fifteen years of experience in tree surgery and carry full insurance. Trees close to houses, sheds and boundaries are taken down in controlled sections, and the site is cleaned up before we leave.',
    ],
    facts: [
      'A Westmeath firm',
      'Fifteen years and more in the trade',
      'Insured for all our tree work',
      'No charge for a quotation',
      'Storm call-outs: phone day or night',
    ],
  },

  services: {
    title: 'What people in Mullingar',
    accent: 'ring us about',
    intro: 'The most common jobs, with a page on each if you want the detail.',
    items: [
      {
        title: 'Trees hit by a storm',
        text: 'A tree down on a fence, shed or driveway, or one left cracked and hanging. Ring at any hour and we will tell you honestly how soon we can be with you.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Taking a tree down',
        text: 'Dead, leaning or simply too big for the garden. Close to a house or boundary it comes down in sections on ropes, not in one piece.',
        href: '/tree-removal',
      },
      {
        title: 'Reducing a big tree',
        text: 'For a tree you want to keep: weight taken out of the crown and long limbs shortened, so it catches less wind and lets in more light.',
        href: '/tree-pruning',
      },
      {
        title: 'Hedges that got away',
        text: 'Leylandii, laurel and beech hedges brought back to a height you can manage, or removed and replaced with a fence.',
        href: '/hedge-cutting',
      },
      {
        title: 'Stumps',
        text: 'Ground out below the surface where the site suits it, so the lawn can go back.',
        href: '/stump-grinding',
      },
      {
        title: 'Not sure what it needs?',
        text: 'We look at the tree, what is near it and what you want from it, and give you an honest opinion.',
        href: '/tree-surgery',
      },
    ],
  },

  local: {
    title: 'Worth knowing',
    accent: 'in Mullingar',
    paragraphs: [
      'In many of the estates around Mullingar, trees and hedges that were planted small when the houses were built are now up against gutters, walls and neighbours’ fences. Most can be reduced and kept in check rather than removed.',
      'Ash dieback is also widespread in the hedgerows around the town. A dead ash next to a road, house or shed turns brittle and becomes harder to take down safely, so it is better dealt with early.',
    ],
  },

  // Genuine jobs in and just outside Mullingar (photos supplied and location confirmed by the owner, Nov 2026).
  jobsDone: {
    title: 'Jobs we have done',
    accent: 'around Mullingar',
    intro:
      'A cherry tree cut back in a back garden in Mullingar, and a fallen tree cleared just outside the town.',
    slots: [
      {
        title: 'Before: a cherry tree taking over',
        summary:
          'A big cherry tree filling the end of a back garden, over the fence, the shed and the gravel area behind.',
        photo: {
          src: mgCherryBefore,
          alt: 'A large, dense cherry tree at the end of a back garden, behind a wooden arch and beside a shed.',
          focus: '50% 35%',
        },
      },
      {
        title: 'After: crown cut back',
        summary:
          'The crown brought back hard all round, so the tree is a manageable size again and lets the light back into the garden.',
        photo: {
          src: mgCherryAfter,
          alt: 'The same cherry tree with its crown cut back, much smaller and lighter, behind the garden arch.',
          focus: '50% 35%',
        },
      },
      {
        title: 'Before: a tree down across the path',
        summary:
          'Just outside Mullingar, a tree had come down across the garden and the path beside the house.',
        photo: {
          src: mgFallen,
          alt: 'A fallen tree lying across a lawn and garden path beside a white house.',
          focus: '50% 50%',
        },
      },
      {
        title: 'After: path and garden clear',
        summary:
          'The tree cut up and cleared away, with the path and lawn left clean and usable again.',
        photo: {
          src: mgClear,
          alt: 'The same garden after the fallen tree was removed, with the path, lawn and bench clear.',
          focus: '50% 55%',
        },
      },
    ],
  },

  proof: {
    title: 'The kind of work',
    accent: 'we mean',
    intro: 'Storm call-outs and garden jobs, photographed by us on the day.',
    photos: [
      stormBeech,
      uprooted,
      { ...conifer, caption: 'A tall conifer hedge back under control' },
    ],
  },

  advice: {
    title: 'Questions we get',
    accent: 'from Mullingar',
    intro: 'Short, straight answers.',
    faqs: [
      {
        question: 'A tree is growing too close to the house. Does it have to come down?',
        answer:
          'Not always. Many trees can be reduced and the branches cut back clear of the roof and gutters, which keeps the tree at a size that suits the spot. If it is a fast-growing species that will keep pushing against the house, or its roots are lifting paths or drains, removal may be the better long-term answer. We will give you both options and a price for each.',
      },
      {
        question: 'How do I know if my ash tree has dieback?',
        answer:
          'Look at the top of the tree in summer. Bare tips, thin leaf cover and clumps of new shoots lower down the trunk are the usual signs, along with dark patches on the bark. An ash that is mostly bare by July is badly affected and, near a road or building, should be dealt with soon.',
      },
      {
        question: 'My neighbour’s leylandii is blocking my light. What can be done?',
        answer:
          'Talk to the neighbour first; it is their hedge. You can generally cut back what overhangs your side as far as the boundary, but not reduce its height. Often the neighbour is as tired of it as you are, and one job that brings the whole hedge down, with the cost shared, is the best result. We are happy to price it that way.',
      },
      {
        question: 'Do you cover the villages around Mullingar?',
        answer:
          'Yes: Multyfarnham, Killucan, Ballynacarrigy, Castlepollard, Kinnegad, Rochfortbridge, Delvin and the country in between.',
      },
    ],
  },

  nearby: {
    title: 'Around',
    accent: 'Mullingar',
    intro: 'We also work in the towns and villages around Mullingar and across north Westmeath.',
    groups: [
      {
        county: 'Westmeath',
        towns: [
          'Multyfarnham',
          'Castlepollard',
          'Killucan',
          'Kinnegad',
          'Ballynacarrigy',
          'Rochfortbridge',
          'Delvin',
        ],
      },
      { county: 'Longford', towns: ['Edgeworthstown'] },
    ],
  },

  cta: {
    title: 'Need a tree surgeon',
    accent: 'in Mullingar?',
    text: 'Send a couple of photos on WhatsApp or give us a call. You will get an honest opinion and a free, no-obligation quotation, and if a tree has come down you can ring us any time.',
  },
};
