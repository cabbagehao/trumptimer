import React from 'react';
import Layout from '../../components/Layout/Layout';
import TableOfContents from '../../components/TableOfContents/TableOfContents';
import PageContent from '../../components/PageContent/PageContent';
import RelatedPagesSection from '../../components/RelatedPagesSection';
import { aboutSections } from './sections';
import BasicInfo from './components/BasicInfo';
import PoliticalCareer from './components/PoliticalCareer';
import KeySpeeches from './components/KeySpeeches';
import AdditionalResources from './components/AdditionalResources';
import SEOHead from '../../components/SEO/SEOHead';
import { PAGE_SEO } from '../../constants/seo';
import { getPersonStructuredData, getBreadcrumbStructuredData } from '../../utils/structuredData';

export default function AboutTrump() {
  const breadcrumbData = getBreadcrumbStructuredData([
    { name: "Home", url: "https://trumptimer.us/" },
    { name: "About Donald Trump", url: "https://trumptimer.us/about/" }
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      getPersonStructuredData(),
      breadcrumbData
    ]
  };

  return (
    <Layout>
      <SEOHead
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        keywords={PAGE_SEO.about.keywords}
        path="/about/"
        type="article"
        structuredData={structuredData}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          <TableOfContents sections={aboutSections} />
          <PageContent>
            <BasicInfo />
            <PoliticalCareer />
            <KeySpeeches />
            <AdditionalResources />
            <RelatedPagesSection current="about" className="mt-12" />
          </PageContent>
        </div>
      </div>
    </Layout>
  );
}
