import React from 'react';
import Layout from '../../components/Layout/Layout';
import TableOfContents from '../../components/TableOfContents/TableOfContents';
import PageContent from '../../components/PageContent/PageContent';
import RelatedPagesSection from '../../components/RelatedPagesSection';
import { policySections } from './sections';
import { Policy } from './Policy';
import SEOHead from '../../components/SEO/SEOHead';
import { PAGE_SEO } from '../../constants/seo';
import { getArticleStructuredData, getBreadcrumbStructuredData } from '../../utils/structuredData';

export default function TrumpPolicies() {
  const breadcrumbData = getBreadcrumbStructuredData([
    { name: "Home", url: "https://trumptimer.us/" },
    { name: "Trump Policies", url: "https://trumptimer.us/policies/" }
  ]);

  const articleData = getArticleStructuredData(
    PAGE_SEO.policies.title,
    PAGE_SEO.policies.description,
    "/policies/"
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
        title={PAGE_SEO.policies.title}
        description={PAGE_SEO.policies.description}
        keywords={PAGE_SEO.policies.keywords}
        path="/policies/"
        type="article"
        structuredData={structuredData}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          <TableOfContents sections={policySections} />
          <PageContent>
            <Policy />
            <RelatedPagesSection current="policies" className="mt-12" />
          </PageContent>
        </div>
      </div>
    </Layout>
  );
}
