import type { LocationPage } from './types';
import { climbing, tripod, roof, dismantling } from './photos';

/**
 * Galway City: DRAFT (not in live.json) until the owner supplies a real
 * local job, photo or review.
 *
 * RESEARCH NOTES (checked Nov 2026):
 * - Storm Éowyn, 24 Jan 2025: a gust of 184 km/h at Mace Head in Connemara,
 *   the highest ever recorded in Ireland (previous record 182 km/h, Foynes,
 *   1945). [Met Éireann via Irish Times; Connacht Tribune]
 * - In the city: heavy tree fall at the entrance to the Riverside estate,
 *   trees down and houses damaged in Renmore, a tree down at the Browne
 *   roundabout, trees flattened near Pearse Stadium in Salthill. [Galway Bay
 *   FM; Irish Times]
 * - Merlin Woods was badly damaged and is to be restored as native woodland.
 *   Terryland Forest Park was opened in 2000. [galwaycity.ie; Wikipedia]
 * - Distance from Athlone (about 85 km on the M6) is approximate: owner to
 *   confirm, and to confirm how often the team works in the city.
 * - No council content. No Cawley's job in Galway is claimed.
 */
export const galway: LocationPage = {
  slug: 'tree-surgeon-galway',
  town: 'Galway City',
  seoTitle: "Tree Surgeons in Galway City | Cawley's Tree Care",
  description:
    'Tree surgery in Galway City: wind-exposed and coastal trees, tight city gardens, removals, reductions, hedges and storm damage. Fully insured. Free quotes.',

  hero: {
    eyebrow: 'Galway City',
    title: 'Trees that stand up to',
    accent: 'Galway weather',
    intro:
      'Atlantic wind, salt in the air and gardens with no room to swing a saw. Tree work in Galway asks more of a tree surgeon than most places. We take down, reduce and reshape trees and hedges across the city, from Salthill to Renmore.',
    image: climbing,
  },

  intro: {
    title: 'A hundred and eighty-four',
    accent: 'kilometres an hour',
    paragraphs: [
      'That was the gust measured at Mace Head, out in Connemara, on the morning of 24 January 2025. It is the strongest wind ever recorded in Ireland. The city did not get quite that, but it got enough: trees came down across the entrance to the Riverside estate, in Renmore, at the Browne roundabout and beside Pearse Stadium in Salthill. Merlin Woods lost so many that it is being replanted.',
      'Galway has always been a windy place for a tree. What has changed is how big some of them have been allowed to get in small gardens, and how hard the storms now hit.',
      'We are a tree surgery firm from Athlone, at the other end of the M6, about 85 km east. Galway is the western edge of the area we cover. Send us photos first and we will tell you plainly what the job involves and what it will cost.',
    ],
    facts: [
      'Covering Galway City from Athlone',
      'Tight-access and exposed sites',
      'Over 15 years of experience',
      'Fully insured',
      'Free quotations',
      'Emergencies: call us 24/7',
    ],
  },

  local: {
    title: 'What the wind does',
    accent: 'to a city tree',
    paragraphs: [
      'Look at any old hawthorn out towards Barna and you will see which way the weather comes from: the whole tree is combed over to the north-east. Trees near the bay grow up bracing against the prevailing south-westerly. They are built for it. The danger comes when the shelter around them changes, or the wind comes from a direction they are not braced against. A house is knocked, a neighbour takes out a hedge, a row of leylandii is thinned, and a tree that stood for fifty years is suddenly catching wind it never had to deal with.',
      'Salt is the other thing. Within a mile or so of the sea, salt spray scorches the windward side of many trees and hedges. Brown, one-sided conifers in Salthill and Knocknacarra are usually salt burn, not disease. Some plants shrug it off, sycamore, pine, escallonia and griselinia among them, which is why you see so much of them along the coast.',
      'The city gardens add the last difficulty. In the older terraces and estates the only way to the back is through the house or down a side passage a metre wide. A tree there has to be climbed, cut small and carried out by hand.',
    ],
    points: [
      {
        title: 'Salthill, Knocknacarra, Barna side',
        text: 'Exposed and salty. Keep trees and hedges lower and denser than you would inland, and reduce tall conifers before they become sails.',
      },
      {
        title: 'Renmore, Mervue, the east side',
        text: 'More shelter, bigger trees. Sycamore, ash and beech in gardens laid out decades ago, now over roofs and neighbours’ fences.',
      },
      {
        title: 'Along the river and the canals',
        text: 'Willow and alder by the Corrib and the waterways grow quickly and shed limbs. They are best cut back on a regular cycle.',
      },
      {
        title: 'Older houses with mature gardens',
        text: 'Large hardwoods and pines close to the house. These are jobs for climbers and careful rigging.',
      },
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
        title: 'Storm damage',
        text: 'Fallen and hanging trees made safe. Ring us 24/7 and we will tell you honestly how soon we can get to you.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Stump grinding',
        text: 'Stumps ground out where a machine can reach them.',
        href: '/stump-grinding',
      },
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
    intro: 'From our own jobs. No stock photos.',
    photos: [dismantling, tripod, roof],
  },

  advice: {
    title: 'Galway',
    accent: 'tree questions',
    intro: 'What city customers ask.',
    faqs: [
      {
        question: 'One side of my hedge has gone brown. Is it dying?',
        answer:
          'If it is the side facing the sea or the prevailing wind, and it happened after a winter gale, it is most likely salt and wind scorch. Many hedges grow out of it by summer. Leylandii is the exception: once it browns back to bare wood it does not recover, and the choice is to live with it or replace the hedge with something that tolerates salt.',
      },
      {
        question: 'The only way into my back garden is through the house. Is that a problem?',
        answer:
          'It is common in Galway and we plan for it. Everything is cut to a size that can be carried, and the work is done by climbing so no machinery comes through. It adds time, which we allow for in the quotation.',
      },
      {
        question: 'How much can you take off a tree?',
        answer:
          'As a guide, up to about a third of the crown in one go for most healthy broadleaved trees. More than that stresses the tree and brings on weak regrowth. If a tree needs to be much smaller than that allows, it may be the wrong tree for the spot.',
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
    title: 'A tree catching',
    accent: 'too much wind?',
    text: 'Send photos on WhatsApp and tell us where in the city you are. Quotations are free, and you can call 24/7 if a tree has come down.',
  },
};
