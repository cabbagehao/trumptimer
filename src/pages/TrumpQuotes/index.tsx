import React from 'react';
import Layout from '../../components/Layout/Layout';
import TableOfContents from '../../components/TableOfContents/TableOfContents';
import PageContent from '../../components/PageContent/PageContent';
import { quotesSections } from './sections';
import RandomQuote from './components/RandomQuote';
import QuoteCategories from './components/QuoteCategories';
import SEOHead from '../../components/SEO/SEOHead';
import { PAGE_SEO } from '../../constants/seo';
import { getArticleStructuredData, getBreadcrumbStructuredData } from '../../utils/structuredData';

export default function TrumpQuotes() {
  const breadcrumbData = getBreadcrumbStructuredData([
    { name: "Home", url: "https://trumptimer.us/" },
    { name: "Trump Quotes", url: "https://trumptimer.us/quotes/" }
  ]);

  const articleData = getArticleStructuredData(
    PAGE_SEO.quotes.title,
    PAGE_SEO.quotes.description,
    "/quotes/"
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
        title={PAGE_SEO.quotes.title}
        description={PAGE_SEO.quotes.description}
        keywords={PAGE_SEO.quotes.keywords}
        path="/quotes/"
        type="article"
        structuredData={structuredData}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          <TableOfContents sections={quotesSections} />
          <PageContent>
            <h1 className="text-3xl font-bold mb-8">Donald Trump's Notable Quotes</h1>
            <RandomQuote />
            <QuoteCategories />
          </PageContent>
        </div>
      </div>
    </Layout>
  );
}