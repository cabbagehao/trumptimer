import React from 'react';
import Layout from '../components/Layout/Layout';
import InaugurationCountdown from '../components/Home/InaugurationCountdown';
import Timeline from '../components/Timeline';
import SocialShare from '../components/SocialShare';
import FAQ from '../components/Home/FAQ';
import SEOHead from '../components/SEO/SEOHead';
import { PAGE_SEO } from '../constants/seo';
import { getOrganizationStructuredData, getWebSiteStructuredData } from '../utils/structuredData';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationStructuredData(),
      getWebSiteStructuredData()
    ]
  };

  return (
    <Layout>
      <SEOHead
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        keywords={PAGE_SEO.home.keywords}
        path="/"
        structuredData={structuredData}
      />
      <div className="max-w-4xl mx-auto space-y-12">
        <InaugurationCountdown />
        <Timeline />
        <FAQ />
        <SocialShare />
      </div>
    </Layout>
  );
}