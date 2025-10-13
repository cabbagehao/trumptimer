import { SEO } from '../constants/seo';

export function getCanonicalUrl(path: string = ''): string {
  return `${SEO.url}${path}`;
}

export function getMetaTitle(pageTitle?: string): string {
  // For home page (when pageTitle matches base title prefix), use base title only
  if (pageTitle && SEO.title.startsWith(pageTitle)) {
    return SEO.title;
  }
  return pageTitle ? `${pageTitle} | ${SEO.title}` : SEO.title;
}

export function getOgImageUrl(imageUrl?: string): string {
  return imageUrl || SEO.ogImage;
}