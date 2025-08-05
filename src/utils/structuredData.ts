import { SEO } from '../constants/seo';

export function getOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trump Term Timer",
    "url": SEO.url,
    "logo": `${SEO.url}/favicon-192x192.png`,
    "description": SEO.description,
    "sameAs": [
      `https://twitter.com/${SEO.twitterHandle.replace('@', '')}`
    ]
  };
}

export function getWebSiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Trump Term Timer",
    "url": SEO.url,
    "description": SEO.description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SEO.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function getBreadcrumbStructuredData(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function getArticleStructuredData(title: string, description: string, path: string, datePublished?: string, dateModified?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": `${SEO.url}${path}`,
    "datePublished": datePublished || "2025-01-20",
    "dateModified": dateModified || new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "name": "Trump Term Timer"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Trump Term Timer",
      "logo": {
        "@type": "ImageObject",
        "url": `${SEO.url}/favicon-192x192.png`
      }
    },
    "image": SEO.ogImage
  };
}

export function getEventStructuredData(name: string, description: string, startDate: string, endDate?: string, location?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "description": description,
    "startDate": startDate,
    "endDate": endDate || startDate,
    "location": location || "United States",
    "organizer": {
      "@type": "Organization",
      "name": "Trump Administration"
    },
    "url": SEO.url
  };
}

export function getPersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Donald Trump",
    "jobTitle": "47th President of the United States",
    "description": "The 47th President of the United States, serving from 2025-2029",
    "url": `${SEO.url}/about`,
    "sameAs": [
      "https://en.wikipedia.org/wiki/Donald_Trump",
      "https://www.whitehouse.gov"
    ]
  };
}