import type { LocationPage } from './types';
import { wall, climbing, tidy, conifer } from './photos';

/**
 * Tullamore: DRAFT (not in live.json) until the owner supplies a real local
 * job, photo or review.
 *
 * RESEARCH NOTES (checked Nov 2026):
 * - Charleville demesne, about a mile south of the town on the Birr road,
 *   is old oak woodland. The King Oak inside the main entrance is estimated
 *   at 400 to 800 years old and came third in European Tree of the Year
 *   2013. It was struck by lightning in 1963. In the Big Wind of 1839 about
 *   5,000 oaks were blown down in the Charleville woods.
 *   [Wikipedia; Offaly History blog no. 772]
 * - Storm Éowyn, 24 Jan 2025: trees down on Charleville Road near the
 *   Fingerboard, at Chancery Lane and Clonminch; the R420 to Clara blocked;
 *   about 4,400 premises in the town without power; the town park closed
 *   because of fallen trees. [Offaly Express; Offaly Independent]
 * - The Grand Canal runs through the town (general knowledge).
 * - Route from Athlone (about 40 km via Moate and Clara) is approximate:
 *   owner to confirm.
 * - No council content. No Cawley's job in Tullamore is claimed.
 */
export const tullamore: LocationPage = {
  slug: 'tree-surgeon-tullamore',
  town: 'Tullamore',
  seoTitle: "Tree Surgeons in Tullamore, Co. Offaly | Cawley's Tree Care",
  description:
    'Tree surgeons for Tullamore: oak, beech and lime pruned with care, removals, canal-side trees, hedges and storm damage. Over 15 years, insured. Free quotes.',

  hero: {
    eyebrow: 'Tullamore, Co. Offaly',
    title: 'Tree care in the town of the',
    accent: 'King Oak',
    intro:
      'Tullamore has an oak at its gate that was old when the town was built. Not every tree deserves that kind of patience, but more of them do than people think. We prune, reduce and remove trees around Tullamore, and we will tell you honestly which yours needs.',
    image: wall,
  },

  intro: {
    title: 'Four hundred years,',
    accent: 'at least',
    paragraphs: [
      'The King Oak stands just inside the gates of Charleville, a mile out the Birr road. Nobody knows its age for certain; the estimates run from four hundred to eight hundred years. Its lowest limbs reach so far they rest on the ground. It was split by lightning in 1963 and carried on. In 2013 it came third in the whole of Europe as Tree of the Year.',
      'The woods behind it tell the other half of the story. On the Night of the Big Wind in 1839, some five thousand oaks were flattened in Charleville forest in a few hours. Old trees are tougher than they look, and storms are stronger than we remember. Good tree work lives between those two facts.',
      'We are based in Athlone, about 40 km away through Moate and Clara. Over fifteen years in the trade, fully insured, and happy to look at one tree or twenty.',
    ],
    facts: [
      'About 40 km from our Athlone base',
      'Over 15 years of experience',
      'Fully insured',
      'Free quotations',
      'Monday to Saturday, 8am to 6pm',
      'Emergencies: call us 24/7',
    ],
  },

  local: {
    title: 'Hardwoods, canal banks',
    accent: 'and new estates',
    paragraphs: [
      'The country around Tullamore suits oak, and you find good ones well beyond Charleville: on old farm boundaries, in the grounds of older houses on the roads out of town, and left standing as features in newer estates built around them. An oak in a garden is an asset. It rarely needs more than the dead wood taken out and the odd low limb lifted, and it should never be topped.',
      'Beech and lime, the other big trees of the town, are less forgiving. Beech drops heavy limbs without much warning in old age. Lime throws up a thicket of shoots from the base and gets dense and top-heavy. Both respond well to a proper reduction by somebody who knows where to cut.',
      'Éowyn tested all of them. On 24 January 2025 there were trees down on Charleville Road near the Fingerboard, at Chancery Lane and at Clonminch. The Clara road was blocked, the town park was closed for fallen trees, and around 4,400 homes and businesses in the town had no power by midday.',
    ],
    points: [
      {
        title: 'Along the Grand Canal',
        text: 'Gardens backing onto the canal tend to have willow, alder and ash on the bank. They grow fast in the wet and need cutting back every few years.',
      },
      {
        title: 'Trees kept in new estates',
        text: 'A mature tree left standing when houses were built around it has often had its roots cut by services and driveways. If one near you is thinning at the top, have it checked.',
      },
      {
        title: 'Leylandii boundaries',
        text: 'Planted as a quick screen and now eight metres tall. They can be reduced, within limits: cut back too far into old wood and leylandii will not green up again.',
      },
    ],
  },

  services: {
    title: 'Our work',
    accent: 'in Tullamore',
    intro: 'Pruning where a tree can be kept, removal where it cannot.',
    items: [
      {
        title: 'Pruning and crown reduction',
        text: 'Oak, beech, lime and sycamore reduced, thinned and cleared of dead wood by climbers.',
        href: '/tree-pruning',
      },
      {
        title: 'Tree removal',
        text: 'Dead, diseased and unsafe trees taken down in sections and cleared.',
        href: '/tree-removal',
      },
      {
        title: 'Hedge cutting',
        text: 'Leylandii, laurel and beech hedges trimmed or brought back down in height.',
        href: '/hedge-cutting',
      },
      {
        title: 'Stump grinding',
        text: 'The stump ground below the surface where the site suits it.',
        href: '/stump-grinding',
      },
      {
        title: 'Emergency call-outs',
        text: 'Storm-damaged trees on houses, roads and driveways. Call 24/7.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Landscaping and fencing',
        text: 'The garden finished after the tree work, by the same team.',
        href: '/landscaping',
      },
    ],
  },

  jobsDone: {
    title: 'Completed',
    accent: 'in Tullamore',
    intro: 'Photos and a few words on real jobs around the town will appear here.',
    slots: [
      { title: 'Tullamore job to be added', photo: {} },
      { title: 'Tullamore job to be added', photo: {} },
      { title: 'Tullamore job to be added', photo: {} },
    ],
  },

  proof: {
    title: 'Careful work,',
    accent: 'shown honestly',
    intro: 'Our own photos of our own jobs.',
    photos: [climbing, conifer, tidy],
  },

  advice: {
    title: 'Tullamore',
    accent: 'tree questions',
    intro: 'Answers to what we are asked.',
    faqs: [
      {
        question: 'Why should a tree not be topped?',
        answer:
          'Topping means cutting the main stems straight across to shorten the tree. It leaves large wounds that rot, and the tree answers with a burst of weak, fast shoots that are more likely to break than the branches they replaced. A proper crown reduction shortens each branch back to a side branch, so the tree keeps its shape and heals. It takes more skill and more time, and it lasts.',
      },
      {
        question: 'When is the best time to prune?',
        answer:
          'Most trees can be pruned through late autumn and winter, when they are dormant and you can see the structure. Cherry and plum are better done in summer. Dead or dangerous wood can come out at any time. We will advise on your particular tree.',
      },
      {
        question: 'Can you reduce my leylandii hedge by half?',
        answer:
          'In height, usually yes. In width, only as far as there is green growth, because leylandii does not regrow from bare brown wood. If the hedge has got too wide to reduce, taking it out and putting up a fence is often the better money.',
      },
      {
        question: 'My oak has dead branches. Is it dying?',
        answer:
          'Probably not. Oaks shed branches they no longer need and can carry dead wood for years while being perfectly healthy. Have the dead wood removed if it is over a path, a road or a place people sit. Worry more if the leaves are sparse and small all over the crown.',
      },
      {
        question: 'Do you work outside the town?',
        answer:
          'Yes, across Offaly: Clara, Kilcormac, Daingean, Geashill, Killeigh, Mucklagh and on to Edenderry and Birr.',
      },
    ],
  },

  nearby: {
    title: 'Around',
    accent: 'Tullamore',
    intro: 'We work throughout Co. Offaly.',
    groups: [
      {
        county: 'Offaly',
        towns: ['Clara', 'Mucklagh', 'Killeigh', 'Geashill', 'Daingean', 'Kilcormac', 'Birr'],
      },
      { county: 'Westmeath', towns: ['Kilbeggan', 'Tyrrellspass'] },
    ],
  },

  cta: {
    title: 'A tree worth',
    accent: 'doing right?',
    text: 'Send us a few photos on WhatsApp, or ring. Quotations are free, and you can call 24/7 if a tree is down.',
  },
};
