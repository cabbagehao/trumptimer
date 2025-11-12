import React from 'react';
import Layout from '../../components/Layout/Layout';
import TableOfContents from '../../components/TableOfContents/TableOfContents';
import PageContent from '../../components/PageContent/PageContent';
import RelatedPagesSection from '../../components/RelatedPagesSection';
import { speechesSections } from './sections';
import Statistics from './components/Statistics';
import Timeline from './components/Timeline';
import SpeechList from './components/SpeechList';
import References from './components/References';
import SEOHead from '../../components/SEO/SEOHead';
import { PAGE_SEO } from '../../constants/seo';
import { getArticleStructuredData, getBreadcrumbStructuredData } from '../../utils/structuredData';

export default function TrumpSpeeches() {
  const breadcrumbData = getBreadcrumbStructuredData([
    { name: "Home", url: "https://trumptimer.us/" },
    { name: "Trump Speeches", url: "https://trumptimer.us/speeches/" }
  ]);

  const articleData = getArticleStructuredData(
    PAGE_SEO.speeches.title,
    PAGE_SEO.speeches.description,
    "/speeches/"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      articleData,
      breadcrumbData
    ]
  };

  return (
    <Layout>
      <SEOHead
        title={PAGE_SEO.speeches.title}
        description={PAGE_SEO.speeches.description}
        keywords={PAGE_SEO.speeches.keywords}
        path="/speeches/"
        type="article"
        structuredData={structuredData}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          <TableOfContents sections={speechesSections} />
          <PageContent>
            <h1 className="text-3xl font-bold mb-8">Donald Trump's Notable Speeches</h1>
            <Statistics />
            <Timeline />
            <SpeechList />
            <References />
            <RelatedPagesSection current="speeches" className="mt-12" />
          </PageContent>
        </div>
      </div>
    </Layout>
  );
}
