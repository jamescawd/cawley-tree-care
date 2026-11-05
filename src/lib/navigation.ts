import { getCollection } from 'astro:content';
import { primaryNav, type NavItem } from '@/config/navigation';
import { site } from '@/config/site';

/**
 * Navigation items that currently have somewhere to go. Items that depend
 * on content (e.g. "Our Work" needs published projects) are dropped in
 * production until that content exists, so no link ever leads nowhere.
 */
export async function getNavigation(): Promise<NavItem[]> {
  if (site.showPreviewContent) return primaryNav;
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return primaryNav.filter((item) => item.requires !== 'projects' || projects.length > 0);
}
