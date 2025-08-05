import { useEffect } from 'react';
import { getCanonicalUrl, getMetaTitle, getOgImageUrl } from '../../utils/seo';
import { SEO } from '../../constants/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  path?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

export default function SEOHead({
  title,
  description = SEO.description,
  keywords = SEO.keywords,
  image,
  path = '',
  type = 'website',
  structuredData
}: SEOHeadProps) {
  const fullTitle = getMetaTitle(title);
  const canonicalUrl = getCanonicalUrl(path);
  const ogImage = getOgImageUrl(image);

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta description
    updateMetaTag('name', 'description', description);
    
    // Update meta keywords
    updateMetaTag('name', 'keywords', keywords);
    
    // Update canonical URL
    updateLinkTag('canonical', canonicalUrl);

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:type', type);

    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:title', fullTitle);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);

    // Add structured data if provided
    if (structuredData) {
      addStructuredData(structuredData);
    }
  }, [fullTitle, description, keywords, canonicalUrl, ogImage, type, structuredData]);

  return null;
}

function updateMetaTag(attribute: string, selector: string, content: string) {
  let tag = document.querySelector(`meta[${attribute}="${selector}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, selector);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function updateLinkTag(rel: string, href: string) {
  let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!tag) {
    tag = document.createElement('link');
    tag.rel = rel;
    document.head.appendChild(tag);
  }
  tag.href = href;
}

function addStructuredData(data: object) {
  // Remove existing structured data script
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}