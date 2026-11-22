/**
 * Job videos (Pat Premier's own, from TikTok and the owner's phone). Files
 * live in public/video/, compressed to 480px wide with the soundtrack removed.
 * They load nothing until a visitor presses play (preload="none" + a poster).
 */
export interface Video {
  src: string;
  poster: string;
  title: string;
  caption: string;
}

export const videos: Video[] = [
  {
    src: '/video/extension-build-finished.mp4',
    poster: '/video/extension-build-finished.webp',
    title: 'A finished extension',
    caption: 'Rendered walls, new door and windows, and the roof edge in place.',
  },
  {
    src: '/video/roof-deck-new-boards.mp4',
    poster: '/video/roof-deck-new-boards.webp',
    title: 'New roof deck going down',
    caption: 'New boards laid across the roof, ready for the next stage.',
  },
  {
    src: '/video/reroof-sagging-roof.mp4',
    poster: '/video/reroof-sagging-roof.webp',
    title: 'An old sagging roof, re-slated',
    caption: 'From stripped battens to a finished slate roof.',
  },
  {
    src: '/video/slates-loaded-out.mp4',
    poster: '/video/slates-loaded-out.webp',
    title: 'Slates loaded out on a new roof',
    caption: 'New membrane and battens, slates ready to fix.',
  },
];
