import React from 'react';
import Layout from '../../components/Layout/Layout';
import TableOfContents from '../../components/TableOfContents/TableOfContents';
import PageContent from '../../components/PageContent/PageContent';
import { inaugurationSections } from './sections';
import { Ceremony } from './Ceremony';
import SEOHead from '../../components/SEO/SEOHead';
import { PAGE_SEO } from '../../constants/seo';
import { getEventStructuredData, getBreadcrumbStructuredData } from '../../utils/structuredData';

export default function Inauguration() {
  const breadcrumbData = getBreadcrumbStructuredData([
    { name: "Home", url: "https://trumptimer.us/" },
    { name: "Trump Inauguration 2025", url: "https://trumptimer.us/inauguration/" }
  ]);

  const eventData = getEventStructuredData(
    "Donald Trump Inauguration 2025",
    "Presidential inauguration ceremony for Donald Trump as the 47th President of the United States",
    "2025-01-20T17:00:00.000Z",
    "2025-01-20T20:00:00.000Z",
    "Washington, DC, United States"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      eventData,
      breadcrumbData
    ]
  };

  return (
    <Layout>
      <SEOHead
        title={PAGE_SEO.inauguration.title}
        description={PAGE_SEO.inauguration.description}
        keywords={PAGE_SEO.inauguration.keywords}
        path="/inauguration/"
        type="article"
        structuredData={structuredData}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          <TableOfContents sections={inaugurationSections} />
          <PageContent>
            <Ceremony />
          </PageContent>
        </div>
      </div>
    </Layout>
  );
}