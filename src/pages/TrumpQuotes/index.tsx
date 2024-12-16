import React from 'react';
import Layout from '../../components/Layout/Layout';
import TableOfContents from '../../components/TableOfContents/TableOfContents';
import PageContent from '../../components/PageContent/PageContent';
import { quotesSections } from './sections';
import RandomQuote from './components/RandomQuote';
import QuoteCategories from './components/QuoteCategories';

export default function TrumpQuotes() {
  return (
    <Layout>
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