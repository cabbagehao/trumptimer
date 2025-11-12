import { SEO } from '../constants/seo';

export function getCanonicalUrl(path: string = ''): string {
  return `${SEO.url}${path}`;
}

export function getMetaTitle(pageTitle?: string): string {
  const MAX_LENGTH = 60;
  const baseTitle = SEO.title;

  if (!pageTitle) {
    return baseTitle.length <= MAX_LENGTH ? baseTitle : baseTitle.slice(0, MAX_LENGTH);
  }

  const combinedTitle = `${pageTitle} | ${baseTitle}`;

  if (combinedTitle.length <= MAX_LENGTH) {
    return combinedTitle;
  }

  if (pageTitle.length <= MAX_LENGTH) {
    return pageTitle;
  }

  return pageTitle.slice(0, MAX_LENGTH);
}

export function getOgImageUrl(imageUrl?: string): string {
  return imageUrl || SEO.ogImage;
}
