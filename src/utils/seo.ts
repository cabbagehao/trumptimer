import { SEO } from '../constants/seo';

export function getCanonicalUrl(path: string = ''): string {
  return `${SEO.url}${path}`;
}

export function getMetaTitle(pageTitle?: string): string {
  return pageTitle ? `${pageTitle} | ${SEO.title}` : SEO.title;
}

export function getOgImageUrl(imageUrl?: string): string {
  return imageUrl || SEO.ogImage;
}