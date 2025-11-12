import React from 'react';
import { Crown, Award, Landmark } from 'lucide-react';
import Layout from '../components/Layout/Layout';
import SEOHead from '../components/SEO/SEOHead';
import RelatedPagesSection from '../components/RelatedPagesSection';
import { PAGE_SEO } from '../constants/seo';
import { getPersonStructuredData, getBreadcrumbStructuredData } from '../utils/structuredData';

export default function President47() {
  const breadcrumbData = getBreadcrumbStructuredData([
    { name: "Home", url: "https://trumptimer.us/" },
    { name: "The 47th President", url: "https://trumptimer.us/president47/" }
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
        title={PAGE_SEO.president47.title}
        description={PAGE_SEO.president47.description}
        keywords={PAGE_SEO.president47.keywords}
        path="/president47/"
        type="article"
        structuredData={structuredData}
      />
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <Crown className="w-8 h-8 text-red-600" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">The 47th President</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Donald J. Trump's anticipated return as the 47th President of the United States marks a pivotal moment 
              in American political history. Following his successful 2024 campaign and election victory over incumbent 
              Joe Biden, Trump is poised to become only the second president to serve non-consecutive terms.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-red-600" />
                Historical Achievement
              </h2>
              <p className="text-gray-700">
                Trump's return to the White House echoes the historic precedent set by Grover Cleveland, who served as 
                both the 22nd and 24th president. This rare achievement in American presidential history demonstrates 
                the unique nature of the upcoming 2025 inauguration ceremony.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Landmark className="w-6 h-6 text-red-600" />
                The Road to Inauguration
              </h2>
              <p className="text-gray-700">
                The path to Trump's second presidency includes several key milestones:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                <li>Electoral College confirmation of Trump's victory</li>
                <li>Congressional certification of electoral votes</li>
                <li>Transition process and cabinet formation</li>
                <li>Inauguration ceremony planning and preparations</li>
                <li>Official swearing-in as the 47th President</li>
              </ul>
            </div>
          </div>
        </div>
        <RelatedPagesSection current="president47" />
      </div>
    </Layout>
  );
}
