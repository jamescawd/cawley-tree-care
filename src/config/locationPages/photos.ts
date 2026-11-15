/**
 * Genuine Cawley's photos reused on draft town pages. Captions describe the
 * work only and never claim a location.
 */
import type { Photo } from '@/config/servicePages/types';
import climbingImg from '@/assets/images/work/arborist-climbing-reduced-tree.jpg';
import cuttingImg from '@/assets/images/work/arborist-cutting-trunk-section.jpg';
import pruningImg from '@/assets/images/work/arborist-pruning-at-height.jpg';
import laneImg from '@/assets/images/work/lane-cleared-of-storm-fallen-trees.jpg';
import snappedImg from '@/assets/images/work/storm-snapped-beech-over-lane.jpg';
import roofImg from '@/assets/images/work/storm-tree-fallen-on-house-roof.jpg';
import stormBeechImg from '@/assets/images/work/storm-fallen-beech-chainsaw-clearance.jpg';
import uprootedImg from '@/assets/images/work/uprooted-tree-across-garden.jpg';
import driveImg from '@/assets/images/work/beech-hedge-after-reduction.jpg';
import tripodImg from '@/assets/images/work/hedge-trimming-from-tripod-ladder.jpg';
import chipperImg from '@/assets/images/work/overgrown-beech-hedge-with-wood-chipper.jpg';
import laurelImg from '@/assets/images/work/laurel-hedge-after-cutting.jpg';
import tidyImg from '@/assets/images/work/garden-tidy-after-tree-removal.jpg';
import dismantlingImg from '@/assets/images/work/sectional-dismantling-beside-building.jpg';
import stackedImg from '@/assets/images/work/timber-stacked-after-dismantling.jpg';
import coniferImg from '@/assets/images/work/conifer-hedge-trimmed-beside-lawn.jpg';
import wallImg from '@/assets/images/work/climber-in-mature-tree-by-stone-wall.jpg';

export const climbing: Photo = {
  src: climbingImg,
  alt: 'An arborist in orange chainsaw trousers climbing a tall tree that has been carefully reduced.',
  caption: 'Climbing a tree after reduction',
  focus: '50% 35%',
};
export const cutting: Photo = {
  src: cuttingImg,
  alt: "A Cawley's arborist in a harness and visor cutting a section from a tree trunk against a clear blue sky.",
  caption: 'Working at height in harness and visor',
  focus: '50% 28%',
};
export const pruning: Photo = {
  src: pruningImg,
  alt: 'An arborist in a harness and helmet pruning among the upper branches of a tree.',
  caption: 'Pruning in the upper crown',
  focus: '50% 40%',
};
export const lane: Photo = {
  src: laneImg,
  alt: 'A worker in orange protective kit walking along a lane cleared through storm-fallen conifers.',
  caption: 'A lane cleared through fallen trees',
};
export const snapped: Photo = {
  src: snappedImg,
  alt: 'A large beech limb snapped in a storm and hanging low across a rural lane.',
  caption: 'A storm-snapped beech over a lane',
};
export const roof: Photo = {
  src: roofImg,
  alt: 'A storm-felled tree leaning across a wet driveway and onto the roof of a white house.',
  caption: 'A storm-felled tree resting on a house roof',
};
export const stormBeech: Photo = {
  src: stormBeechImg,
  alt: 'A large beech brought down by a storm being cut up with a chainsaw.',
  caption: 'A storm-fallen beech being cleared',
};
export const uprooted: Photo = {
  src: uprootedImg,
  alt: 'A tree uprooted by wind lying across a garden, its root plate lifted out of the ground.',
  caption: 'Uprooted: the root plate lifted clean out',
};
export const drive: Photo = {
  src: driveImg,
  alt: 'A gravel driveway after an overgrown beech hedge was cleared, opening the boundary to the road.',
  caption: 'A boundary cleared along a driveway',
};
export const tripod: Photo = {
  src: tripodImg,
  alt: 'A worker on a tripod ladder trimming the top of a tall conifer hedge, with overhead lines above.',
  caption: 'Trimming a tall conifer hedge from a tripod ladder',
};
export const chipper: Photo = {
  src: chipperImg,
  alt: 'An overgrown beech hedge along a gravel driveway with a wood chipper parked ready to work.',
  caption: 'An overgrown boundary, ready for clearance',
};
export const laurel: Photo = {
  src: laurelImg,
  alt: 'A laurel hedge cut back to a tidy, even shape.',
  caption: 'A laurel hedge cut back to shape',
};
export const tidy: Photo = {
  src: tidyImg,
  alt: 'A garden after tree removal: lawn clear, logs stacked by a pond and the seating area tidy under a blue sky.',
  caption: 'The garden left clear after removal',
  focus: '50% 70%',
};
export const dismantling: Photo = {
  src: dismantlingImg,
  alt: 'A climber roped high in a large tree, taking it down in sections right beside a timber building.',
  caption: 'Taking a tree down in sections beside a building',
  focus: '50% 35%',
};
export const stacked: Photo = {
  src: stackedImg,
  alt: 'Cut timber stacked neatly after a tree was dismantled.',
  caption: 'Timber stacked, site left clean',
};
export const conifer: Photo = {
  src: coniferImg,
  alt: 'A long conifer hedge trimmed to an even line beside a lawn.',
  caption: 'A conifer hedge back under control',
  focus: '50% 60%',
};
export const wall: Photo = {
  src: wallImg,
  alt: 'A climber high in a large mature tree beside a stone wall, with a ground worker below.',
  caption: 'Climbing a mature tree beside a stone wall',
  focus: '50% 35%',
};
