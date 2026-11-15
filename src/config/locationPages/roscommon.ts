import type { LocationPage } from './types';
import { roof, stormBeech, lane, climbing } from './photos';

/**
 * Roscommon Town: DRAFT (not in live.json) until the owner supplies a real
 * local job, photo or review.
 *
 * RESEARCH NOTES (checked Nov 2026):
 * - Storm Éowyn, 24 Jan 2025: winds of up to about 160 km/h in parts of the
 *   county; up to 10,000 premises without power, some for close to three
 *   weeks. In the town, fallen trees blocked the entrance to the Abbey Hotel
 *   and a tree was uprooted beside the Arts Centre. Trees partly blocked the
 *   N61 between Athlone and Roscommon. [Roscommon Herald]
 * - Mote Park forest, just outside the town, was closed for weeks while
 *   fallen trees were cleared. [RTÉ; Shannonside; Roscommon Herald]
 * - Loughnaneane Park lies beside Roscommon Castle (general knowledge).
 * - Distance from Athlone (about 30 km on the N61 via Knockcroghery) is
 *   approximate: owner to confirm.
 * - No council content. No Cawley's job in Roscommon Town is claimed.
 */
export const roscommon: LocationPage = {
  slug: 'tree-surgeon-roscommon',
  town: 'Roscommon Town',
  seoTitle: "Tree Surgeons in Roscommon Town | Cawley's Tree Care",
  description:
    'Tree surgeons for Roscommon Town: storm-damaged and leaning trees made safe, removals, pruning, hedges and stumps. Over 15 years, fully insured. Free quotes.',

  hero: {
    eyebrow: 'Roscommon Town',
    title: 'Still looking at a tree the',
    accent: 'storm left behind?',
    intro:
      'Roscommon took as hard a hit from Storm Éowyn as anywhere in the country. If there is a tree in your garden that has not been right since, or one you have been meaning to sort for years, we are half an hour down the N61.',
    image: roof,
  },

  intro: {
    title: 'The morning of',
    accent: '24 January 2025',
    paragraphs: [
      'You will remember it. Winds of up to 160 km/h in parts of the county. Ten thousand homes and businesses without power, some of them for the guts of three weeks. In the town, trees down across the entrance to the Abbey Hotel and one torn out of the ground beside the Arts Centre. Mote Park shut for weeks while the fallen timber was cleared. The N61 to Athlone half blocked in places.',
      'The fallen trees have mostly been dealt with since. The damaged ones have not. All over Roscommon there are trees with a limb ripped out, a top snapped off, or a lean they did not have before, and each one is weaker than it was.',
      'We are based in Athlone, about 30 km down the N61 through Knockcroghery. We have been taking down difficult trees for over fifteen years, and storm-damaged trees are some of the most difficult there are.',
    ],
    facts: [
      'About 30 km from Athlone on the N61',
      'Storm-damaged trees made safe',
      'Over 15 years of experience',
      'Fully insured',
      'Free quotations',
      'Emergencies: call us 24/7',
    ],
  },

  local: {
    title: 'Why a damaged tree',
    accent: 'is not a job for the weekend',
    paragraphs: [
      'After the storm a lot of people did what people in Roscommon do: got out the chainsaw and helped the neighbours. Fair play to every one of them. But a tree that is hung up in another tree, or bent over under tension, or split down the stem, does not behave like a tree lying on the ground. The timber is loaded like a spring. Cut it in the wrong place and it kicks, rolls or drops in a direction nobody expected.',
      'That is work we have years of experience in, and are insured for. A hung-up tree is winched or dismantled from a safe position. A split stem is strapped before it is cut. A leaning tree near a house is taken down from the top in small pieces, with a rope on every one.',
    ],
    points: [
      {
        title: 'Lifted roots',
        text: 'A tree that rocked in the storm and settled back can look normal. Check the ground on the side the wind came from: a ridge, a crack or a gap under the roots means the anchor is broken.',
      },
      {
        title: 'Torn limbs',
        text: 'Where a big branch has ripped away, the wound lets rot into the trunk. The tree can often be saved with a clean cut and a lighter crown, if it is done soon.',
      },
      {
        title: 'Shelter belts with gaps',
        text: 'When half a row of conifers goes over, the rest are suddenly exposed to wind they never grew up with. They tend to follow, a few at a time, in ordinary winter gales.',
      },
      {
        title: 'The edge of town',
        text: 'Houses out the Athlone, Galway and Castlerea roads with mature trees on the boundary: have them looked at before this winter, not during it.',
      },
    ],
  },

  services: {
    title: 'What we can do',
    accent: 'for you',
    intro: 'Storm work and everything else.',
    items: [
      {
        title: 'Making a damaged tree safe',
        text: 'Hung-up, split and leaning trees dismantled or reduced. If it is urgent, ring; do not use the form.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Tree removal',
        text: 'Dead and unwanted trees taken down in sections and cleared away, with the timber left for you if you want it.',
        href: '/tree-removal',
      },
      {
        title: 'Crown reduction and pruning',
        text: 'A good tree made smaller and lighter so it stands up better to the next storm.',
        href: '/tree-pruning',
      },
      {
        title: 'Stump grinding',
        text: 'Storm-thrown stumps and old ones ground out where the site allows.',
        href: '/stump-grinding',
      },
      {
        title: 'Hedge cutting',
        text: 'Hedges and shelter belts trimmed, topped or removed.',
        href: '/hedge-cutting',
      },
      {
        title: 'Clearing up properly',
        text: 'Fallen timber, brash and scrub cleared from a garden or site and chipped.',
        href: '/site-clearance',
      },
    ],
  },

  jobsDone: {
    title: 'Work we have done',
    accent: 'in Roscommon',
    intro: 'Photos and details of real jobs in and near the town will be added here.',
    slots: [
      { title: 'Roscommon job to be added', photo: {} },
      { title: 'Roscommon job to be added', photo: {} },
      { title: 'Roscommon job to be added', photo: {} },
    ],
  },

  proof: {
    title: 'Storm work,',
    accent: 'from our own camera',
    intro: 'Photos from our storm call-outs. None are stock images.',
    photos: [stormBeech, lane, climbing],
  },

  advice: {
    title: 'Roscommon',
    accent: 'questions',
    intro: 'What people ask us most.',
    faqs: [
      {
        question: 'Will my house insurance pay for a storm-damaged tree?',
        answer:
          'It depends on the policy. Many cover the damage a fallen tree does to the house, and some cover removing it; few cover a tree that is damaged but has not hit anything. Ring your insurer before work starts and take photos first. We can give you a quotation to send them.',
      },
      {
        question: 'The tree fell from my neighbour’s side. Who deals with it?',
        answer:
          'Start by talking to the neighbour and both insurers. In practice the quickest fix is usually to agree on one firm to clear it from both sides. We are happy to price a job split between two households.',
      },
      {
        question: 'Is a leaning tree always dangerous?',
        answer:
          'No. Plenty of trees grow with a lean and stand for a century. The worrying ones are those that started leaning recently, especially with lifted or cracked ground at the base. If it moved in the storm, treat it as unsafe until someone has looked at it.',
      },
      {
        question: 'A branch is resting on an electricity wire. What do I do?',
        answer:
          'Stay well away from it and ring ESB Networks on their emergency line. Do not touch the tree, and do not let anyone else cut it. Once the line is made safe, we can deal with the tree.',
      },
      {
        question: 'Do you come to the villages around the town?',
        answer: 'Yes: Athleague, Knockcroghery, Strokestown, Ballyleague and the country between.',
      },
    ],
  },

  nearby: {
    title: 'Around',
    accent: 'Roscommon Town',
    intro: 'We work all through south and mid Roscommon.',
    groups: [
      {
        county: 'Roscommon',
        towns: ['Athleague', 'Knockcroghery', 'Strokestown', 'Ballyleague', 'Castlerea', 'Elphin'],
      },
    ],
  },

  cta: {
    title: 'Get it looked at',
    accent: 'before the next one',
    text: 'Send photos on WhatsApp or ring us. Quotations are free. If a tree is down or about to come down, call, day or night.',
  },
};
