/**
 * Job videos (Pat Premier's own, from TikTok). Files live in public/video/,
 * compressed to 480px wide with the soundtrack removed. They load nothing
 * until a visitor presses play (preload="none" + a small poster image).
 */
export interface Video {
  src: string;
  poster: string;
  title: string;
  caption: string;
}

export const videos: Video[] = [
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
