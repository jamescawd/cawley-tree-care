import type { LocationPage } from './types';
import { roof, stormBeech, lane, climbing } from './photos';

/**
 * Roscommon Town: DRAFT (not in live.json) until the owner supplies a real
 * local job, photo or review.
 *
 * Local notes are kept to what affects tree work: lasting storm damage after
 * Storm Éowyn, Jan 2025 (Roscommon Herald). Distance (about 30 km on the N61)
 * to be confirmed by the owner. No council content. No Cawley's job in
 * Roscommon is claimed.
 */
export const roscommon: LocationPage = {
  slug: 'tree-surgeon-roscommon',
  town: 'Roscommon Town',
  seoTitle: "Tree Surgeons in Roscommon Town | Cawley's Tree Care",
  description:
    'Tree surgeons for Roscommon Town: storm-damaged trees made safe, removals, pruning, hedges and stump grinding. Over 15 years, fully insured. Quotes free.',

  hero: {
    eyebrow: 'Roscommon Town',
    title: 'Tree surgeons for',
    accent: 'Roscommon Town',
    intro:
      'Storm-damaged trees made safe, tree removal, pruning, hedge cutting and stump grinding in Roscommon Town and the surrounding area. Experienced, fully insured, and free to quote.',
    image: roof,
  },

  intro: {
    title: 'Damaged trees need',
    accent: 'careful handling',
    paragraphs: [
      'A tree that is split, leaning or hung up in another tree is under tension, and the timber can move suddenly when it is cut. That makes it work for trained, insured tree surgeons rather than a weekend job with a chainsaw.',
      'We have over fifteen years of experience taking down difficult trees in sections, close to houses and outbuildings. We will assess the tree, explain what is needed and give you a clear price before starting.',
    ],
    facts: [
      'About 30 km from Athlone on the N61',
      'Storm-damaged trees made safe',
      'In business over 15 years',
      'Insurance in place on every job',
      'You pay nothing for a quotation',
      'Urgent? Phone, day or night',
    ],
  },

  services: {
    title: 'What we can do',
    accent: 'for you',
    intro: 'Storm work, and everything else a tree might need.',
    items: [
      {
        title: 'Making a damaged tree safe',
        text: 'Hung-up, split and leaning trees dismantled or reduced. If it is urgent, ring rather than using the form.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Taking a tree out altogether',
        text: 'Dead and unwanted trees taken down in sections and cleared away, with the timber left for you if you want it.',
        href: '/tree-removal',
      },
      {
        title: 'Lightening a tree you want to keep',
        text: 'A good tree made smaller and lighter so it stands up better to the next storm.',
        href: '/tree-pruning',
      },
      {
        title: 'Stumps and root plates',
        text: 'Storm-thrown stumps and old ones ground out where the site allows.',
        href: '/stump-grinding',
      },
      {
        title: 'Hedges and shelter belts',
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

  local: {
    title: 'Storm damage',
    accent: 'that is easy to miss',
    paragraphs: [
      'A tree can come through a storm looking fine and still be weakened. If one near your home has taken a battering, these are the signs worth checking:',
    ],
    points: [
      {
        title: 'Lifted roots',
        text: 'A ridge, crack or gap in the ground on one side of the tree means the roots have moved.',
      },
      {
        title: 'Torn limbs',
        text: 'Where a big branch ripped away, rot can get into the trunk. A clean cut and a lighter crown, done soon, can often save the tree.',
      },
      {
        title: 'Gaps in a shelter belt',
        text: 'When part of a row of conifers goes over, the rest are exposed to wind they never had to stand up to.',
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
    intro: 'Pictures from our own storm call-outs.',
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
          'It depends on the policy. Check with your insurer before work starts and take photos first. We can give you a quotation to send them.',
      },
      {
        question: 'The tree fell from my neighbour’s side. Who deals with it?',
        answer:
          'Start by talking to the neighbour and both insurers. In practice the quickest fix is usually to agree on one firm to clear it from both sides. We are happy to price a job split between two households.',
      },
      {
        question: 'Is a leaning tree always dangerous?',
        answer:
          'No. Plenty of trees grow with a lean and stand for a century. The worrying ones are those that started leaning recently, especially with lifted or cracked ground at the base. If it moved in a storm, treat it as unsafe until someone has looked at it.',
      },
      {
        question: 'A branch is resting on an electricity wire. What do I do?',
        answer:
          'Stay well away and ring ESB Networks on their emergency line. Do not touch the tree or let anyone else cut it. Once the line is made safe, we can deal with the tree.',
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
    title: 'Get a damaged tree',
    accent: 'looked at',
    text: 'WhatsApp us photos or ring. We do not charge to quote. If a tree is down or about to go, phone straight away, whatever the hour.',
  },
};
