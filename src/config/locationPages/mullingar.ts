import type { LocationPage } from './types';
import hero from '@/assets/images/work/sectional-dismantling-beside-building.jpg';
import stormBeech from '@/assets/images/work/storm-fallen-beech-chainsaw-clearance.jpg';
import uprooted from '@/assets/images/work/uprooted-tree-across-garden.jpg';
import hedge from '@/assets/images/work/conifer-hedge-trimmed-beside-lawn.jpg';

/**
 * Mullingar: DRAFT (not in live.json) until the owner supplies a real local
 * job, photo or review.
 *
 * RESEARCH NOTES (checked Nov 2026; sources in brackets):
 * - Royal Canal loops the north side of the town; fed by a 3.2 km feeder from
 *   Lough Owel. Lough Ennell lies south, Lough Owel north. [Wikipedia;
 *   irishwaterwayshistory.com]
 * - Belvedere's woods line Lough Ennell and were planted with beech in the
 *   18th century. [belvedere-house.ie]
 * - Old Rail Trail: 43 km greenway, Athlone to Mullingar. [Wikipedia]
 * - Storm Éowyn, 24 Jan 2025: gusts over 100 km/h locally; trees down in
 *   Ballinderry, Petitswood, Woodlands and on the Dublin Road.
 *   [Westmeath Examiner live blog]
 * - The owner asked for no council content on town pages.
 * - No Cawley's job in Mullingar is claimed anywhere: photos are genuine
 *   Cawley's work with captions that do not name a place.
 */
export const mullingar: LocationPage = {
  slug: 'tree-surgeon-mullingar',
  town: 'Mullingar',
  seoTitle: "Tree Surgeons in Mullingar | Cawley's Tree Care",
  description:
    'Tree surgery in Mullingar and around the lakes: storm-damaged trees, removals, pruning, hedges and stumps. Westmeath firm, fully insured. Free quotes.',

  hero: {
    eyebrow: 'Mullingar, Co. Westmeath',
    title: 'Tree surgeons for',
    accent: 'Mullingar',
    end: 'and the lakes',
    intro:
      'From the estates inside the canal to the houses out along Lough Ennell and Lough Owel, we take down, prune and tidy trees and hedges around Mullingar. A Westmeath firm, with a free quotation before anything is cut.',
    image: {
      src: hero,
      alt: 'A climber roped high in a large tree, taking it down in sections right beside a timber building.',
      caption: 'Taking a tree down in sections beside a building',
      focus: '50% 35%',
    },
  },

  intro: {
    title: 'Same county,',
    accent: 'down the road',
    paragraphs: [
      'We are based in Athlone, at the other end of the Old Rail Trail. By road Mullingar is about 50 km: out the M6 to Kilbeggan and up the N52. It is a straightforward run, so coming to look at your tree is no trouble.',
      'Mullingar is an easy town to describe to a tree surgeon. The canal wraps around the north of it, there is a lake on either side, and between them is a mix of old gardens with big trees and newer estates where the planting from the Celtic Tiger years has now grown up. Most of what we are asked about comes from one of those two things: a mature tree that has got too big or too tired for where it stands, or a hedge that was a few feet high when the house was bought.',
      'Tell us where you are and send a photo or two. We will tell you straight what we think it needs, including when the answer is nothing.',
    ],
    facts: [
      'Westmeath firm, based in Athlone',
      'About 50 km from Mullingar by the N52',
      'Over 15 years of experience',
      'Fully insured',
      'Free quotations',
      'Emergencies: call us 24/7',
    ],
  },

  local: {
    title: 'Trees in a town',
    accent: 'between two lakes',
    paragraphs: [
      'Wind is the thing to understand about trees around Mullingar. Lough Owel to the north and Lough Ennell to the south are both wide, open water, and a tree on the shore side of a garden gets none of the shelter a tree in the middle of town does. The woods along Lough Ennell at Belvedere were planted with beech back in the 1700s, and beech of that age is typical of the old properties on this side of the county: magnificent, heavy in the crown and shallow in the root.',
      'Anyone who was in Mullingar on 24 January 2025 knows what that means. Storm Éowyn brought gusts of over 100 km/h and trees came down in Ballinderry, in Petitswood, in Woodlands and across the Dublin Road. Plenty of the trees that fell that morning had looked fine the week before. Many more were left standing but damaged: a limb torn out, a crack in a fork, a root plate that has lifted and settled back. Those are the ones worth having looked at now, in calm weather, because they do not get better.',
      'The other quiet problem is ash. Ash dieback is all through the hedgerows of the Midlands, and a dead ash on a boundary beside a road or a neighbour’s shed turns brittle fast. It is safer and cheaper to take one down while there is still some life in it than to wait until nobody can climb it.',
    ],
    points: [
      {
        title: 'Along the canal',
        text: 'Houses that back onto the Royal Canal and its feeder from Lough Owel often have alder, willow and sycamore along the bank side. They grow fast in the damp ground and lean out for the light, usually over somebody’s fence.',
      },
      {
        title: 'The lake roads',
        text: 'Out towards Lough Ennell and Lough Owel the gardens are bigger and so are the trees. Old beech, lime and Scots pine close to a house want a proper look every few years, and after any big storm.',
      },
      {
        title: 'The estates',
        text: 'In the estates that went up through the 1990s and 2000s, the usual call is a leylandii or laurel hedge that has got away, or a birch or cherry planted too near the house that is now at the gutters.',
      },
    ],
  },

  services: {
    title: 'What people in Mullingar',
    accent: 'ring us about',
    intro: 'The common jobs, and where to read more about each.',
    items: [
      {
        title: 'Storm-damaged trees',
        text: 'A tree down on a fence, shed or driveway, or one left cracked and hanging. Ring any time; we will tell you honestly how soon we can be with you.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Taking a tree down',
        text: 'Dead ash, a leaning conifer, or a tree that has simply outgrown the garden. Close to a house or boundary it comes down in sections on ropes, not in one piece.',
        href: '/tree-removal',
      },
      {
        title: 'Reducing a big tree',
        text: 'For a beech, lime or sycamore you want to keep: weight taken out of the crown and long limbs shortened, so it catches less wind and lets in more light.',
        href: '/tree-pruning',
      },
      {
        title: 'Hedges that got away',
        text: 'Leylandii, laurel and beech hedges brought back down to a height you can keep, or taken out altogether and replaced with a fence.',
        href: '/hedge-cutting',
      },
      {
        title: 'Stumps',
        text: 'The stump ground out below the surface where the site suits it, so you can put the lawn back.',
        href: '/stump-grinding',
      },
      {
        title: 'Not sure what it needs?',
        text: 'Start here. We look at the tree, what is near it and what you want, and give you an honest opinion.',
        href: '/tree-surgery',
      },
    ],
  },

  jobsDone: {
    title: 'Jobs we have done',
    accent: 'around Mullingar',
    intro:
      'Photos and a few lines on real jobs in and around the town will go here as we add them.',
    slots: [
      { title: 'Mullingar job to be added', photo: {} },
      { title: 'Mullingar job to be added', photo: {} },
      { title: 'Mullingar job to be added', photo: {} },
    ],
  },

  proof: {
    title: 'The kind of work',
    accent: 'we mean',
    intro: 'These are our own photos from storm call-outs and garden jobs. None are stock images.',
    photos: [
      {
        src: stormBeech,
        alt: 'A large beech brought down by a storm being cut up with a chainsaw.',
        caption: 'A storm-fallen beech being cleared',
      },
      {
        src: uprooted,
        alt: 'A tree uprooted by wind lying across a garden, its root plate lifted out of the ground.',
        caption: 'Uprooted: the root plate lifted clean out',
      },
      {
        src: hedge,
        alt: 'A long conifer hedge trimmed to an even line beside a lawn.',
        caption: 'A conifer hedge back under control',
        focus: '50% 60%',
      },
    ],
  },

  advice: {
    title: 'Questions we get',
    accent: 'from Mullingar',
    intro: 'Short, straight answers.',
    faqs: [
      {
        question: 'A tree in my garden survived Storm Éowyn. Should I still have it checked?',
        answer:
          'If it lost a big limb, if you can see a split where two stems meet, or if the ground on one side of it has lifted or cracked, yes. Those are signs of damage that the next strong wind will find. If it came through with nothing more than small twigs down, it is probably fine. Send us a photo and we will tell you which it looks like.',
      },
      {
        question: 'How do I know if my ash tree has dieback?',
        answer:
          'Look at the top of the tree in summer. Bare tips, thin leaf cover and clumps of new shoots lower down the trunk are the usual signs, along with dark, sunken patches on the bark. A tree that is mostly bare by July is far gone. The sooner a badly affected ash near a road, house or boundary comes down, the safer the job is.',
      },
      {
        question: 'My neighbour’s leylandii is blocking my light. What can be done?',
        answer:
          'Talk to the neighbour first; it is their hedge. You are generally entitled to cut back what overhangs your side as far as the boundary, but not to reduce the height. Very often the neighbour is as tired of it as you are and the best result is one job that brings the whole hedge down, with the cost shared. We are happy to price it that way.',
      },
      {
        question: 'Do you come out to the villages around Mullingar?',
        answer:
          'Yes. Multyfarnham, Killucan, Ballynacarrigy, Castlepollard, Kinnegad, Rochfortbridge and the country in between are all part of our normal area.',
      },
      {
        question: 'When can hedges be cut?',
        answer:
          'Hedge cutting is restricted by law from 1 March to 31 August to protect nesting birds, with some exceptions such as road safety. Most garden hedges are best done from September through February in any case. If you are not sure whether yours can be cut now, ask us.',
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
    title: 'A tree in Mullingar that needs',
    accent: 'looking at?',
    text: 'Send a couple of photos on WhatsApp or ring us. Quotations are free, and you can call 24/7 if a tree is down.',
  },
};
