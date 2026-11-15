import type { LocationPage } from './types';
import { dismantling, lane, stacked, pruning } from './photos';

/**
 * Boyle: DRAFT (not in live.json) until the owner supplies a real local job,
 * photo or review.
 *
 * RESEARCH NOTES (checked Nov 2026):
 * - Boyle lies at the foot of the Curlew Mountains beside Lough Key; the
 *   Boyle River runs through it; the N4 skirts the town. The Pleasure
 *   Grounds (town park) are beside King House. [Wikipedia]
 * - Lough Key Forest Park (the old Rockingham estate): storms Darragh (Dec
 *   2024) and Éowyn (Jan 2025) cost the amenity area an estimated three
 *   acres of trees, with far more lost in the surrounding forest; attractions
 *   were closed and jetties damaged. [Shannonside; RTÉ]
 * - Distance from Athlone (about 75 km via the N61) is approximate: owner to
 *   confirm, and to confirm how often the team works this far north.
 * - No council content. No Cawley's job in Boyle is claimed.
 */
export const boyle: LocationPage = {
  slug: 'tree-surgeon-boyle',
  town: 'Boyle',
  seoTitle: "Tree Surgeons in Boyle, Co. Roscommon | Cawley's Tree Care",
  description:
    'Tree surgery in Boyle and around Lough Key: tall conifers and old estate trees near houses, removals, pruning and storm clearance. Quotes at no charge.',

  hero: {
    eyebrow: 'Boyle, Co. Roscommon',
    title: 'Big trees are normal in',
    accent: 'Boyle',
    intro:
      'Between the Curlews, the river and the woods of Lough Key, Boyle is one of the most heavily wooded corners of our area. We take on the large trees that come with that: tall conifers beside houses, old estate hardwoods, and whatever the last storm left hanging.',
    image: dismantling,
  },

  intro: {
    title: 'Start with',
    accent: 'a few photos',
    paragraphs: [
      'North Roscommon is big-tree country, and big trees are the work we like best. We cover Boyle and the villages around it as part of our Roscommon area.',
      'The easiest way to start is with photos. Send a few on WhatsApp, showing the whole tree and what it is standing beside, and tell us where you are. For most jobs we can give you a clear price from that, and for the bigger ones we will arrange to come and walk it with you.',
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

  local: {
    title: 'Living beside',
    accent: 'the woods',
    paragraphs: [
      'Rockingham was one of the great wooded estates of the west, and as Lough Key Forest Park it still frames the town. The estate planting spilled well beyond the demesne walls. You see it in the beech and lime along the approach roads and in the size of the trees in older gardens around Boyle, which are a good deal bigger than you would find in most towns of its size.',
      'Then there is the forestry. A lot of houses outside the town have a block of spruce or a tall shelter belt close by, planted forty or fifty years ago and never thinned. Conifers like that grow thin and top-heavy, and on the wet ground at the foot of the Curlews their roots stay shallow.',
      'The winter of 2024 to 2025 showed what follows. Storm Darragh in December and Storm Éowyn in January between them took an estimated three acres of trees out of the amenity area of the forest park alone, and far more from the forest around it. The park was closed, the canopy walk was shut and the jetties were wrecked. Private gardens and farm shelter belts around Boyle went the same way, with less notice taken.',
    ],
    points: [
      {
        title: 'Conifers within falling distance of the house',
        text: 'The rule of thumb is simple. If a spruce, fir or leylandii is taller than its distance from your roof, and its neighbours have already blown down, it should be reduced or removed.',
      },
      {
        title: 'Old beech',
        text: 'Estate-era beech is reaching the end of its natural span. Look for bracket fungus at the base and large dead limbs in the top. Some can be kept safely with a reduction; some cannot.',
      },
      {
        title: 'By the river',
        text: 'Along the Boyle River and down towards the lake, alder and willow in soft ground lean and drop limbs. Regular cutting back keeps them in check.',
      },
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
        text: 'Windblown, hung-up and snapped trees made safe and cleared. Ring at any hour.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Reducing and pruning',
        text: 'Old trees worth keeping made lighter and safer, and dead wood removed.',
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
    intro: 'Common questions from this end of the county.',
    faqs: [
      {
        question: 'Half my shelter belt blew down. Are the trees left standing safe?',
        answer:
          'Often not. Trees in a belt hold each other up, and the ones in the middle have weak roots because they never had to stand alone. Once the row is broken they are exposed. We would look at how tall they are, which way they lean and what they would hit, and usually recommend topping or removing the ones nearest the house.',
      },
      {
        question: 'Do I need a felling licence?',
        answer:
          'Possibly. Felling generally needs a licence from the Department of Agriculture, Food and the Marine, but there are exemptions, including for trees within 30 metres of a building (unless the building was put up after the trees were planted) and for trees that are a danger. Forestry plantations are a different matter and almost always need one. We will go through it with you before any work is booked.',
      },
      {
        question: 'Can you give a price without seeing it in person?',
        answer:
          'For most garden jobs, yes, from good photos. For a number of large trees, or anything with awkward access, we would want to see it first.',
      },
      {
        question: 'What happens to all the timber?',
        answer:
          'It is yours if you want it. Hardwood can be cut for firewood; conifer timber burns too once seasoned. Otherwise we take it away, and branches are chipped.',
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
    text: 'Photos on WhatsApp, with a note of where you are, is all we need to begin. Pricing is free. If a tree has already fallen, ring: the phone is answered around the clock.',
  },
};
