import React from 'react';
import Layout from '../components/Layout/Layout';
import { Clock, Calendar, TrendingUp, Users, Globe, DollarSign } from 'lucide-react';
import { INAUGURATION_DATE } from '../constants/dates';
import SEOHead from '../components/SEO/SEOHead';
import { PAGE_SEO } from '../constants/seo';
import { getEventStructuredData, getBreadcrumbStructuredData } from '../utils/structuredData';

export default function TrumpTermCountdown() {
  const now = new Date();
  const termEndDate = new Date('2029-01-20T17:00:00.000Z');
  const daysSinceInauguration = Math.floor((now.getTime() - INAUGURATION_DATE.getTime()) / (1000 * 60 * 60 * 24));
  const daysUntilTermEnd = Math.floor((termEndDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  const totalTermDays = Math.floor((termEndDate.getTime() - INAUGURATION_DATE.getTime()) / (1000 * 60 * 60 * 24));
  const progressPercentage = Math.round((daysSinceInauguration / totalTermDays) * 100);

  const breadcrumbData = getBreadcrumbStructuredData([
    { name: "Home", url: "https://trumptimer.us/" },
    { name: "Trump Term Countdown", url: "https://trumptimer.us/term-countdown/" }
  ]);

  const eventData = getEventStructuredData(
    "Trump Presidential Term 2025-2029",
    "Donald Trump's second presidential term from January 20, 2025 to January 20, 2029",
    "2025-01-20T17:00:00.000Z",
    "2029-01-20T17:00:00.000Z",
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
        title={PAGE_SEO.termCountdown.title}
        description={PAGE_SEO.termCountdown.description}
        keywords={PAGE_SEO.termCountdown.keywords}
        path="/term-countdown/"
        type="article"
        structuredData={structuredData}
      />
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-xl shadow-lg p-6 sm:p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Trump Term Countdown & Presidency Tracker
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Track Donald Trump's presidential term with our comprehensive <strong>Trump presidency countdown</strong>. 
              Monitor the progress of his historic second term and explore key achievements, policies, and milestones.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-inner">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-bold">Presidential Term Progress</h2>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div 
                className="bg-gradient-to-r from-red-500 to-blue-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-gray-800">{progressPercentage}%</span>
              <span className="text-gray-600 ml-2">of term completed</span>
            </div>
          </div>

          {/* Countdown Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600 mb-1">{daysSinceInauguration}</div>
              <div className="text-sm text-gray-600">Days in Office</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600 mb-1">{daysUntilTermEnd}</div>
              <div className="text-sm text-gray-600">Days Remaining</div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Trump Presidency Countdown Milestones
          </h2>
          
          <div className="prose max-w-none text-gray-700 mb-6">
            <p>
              Our <strong>Trump term countdown</strong> tracks the remarkable journey of Donald Trump's second presidency. 
              Since taking office on January 20, 2025, Trump has initiated sweeping changes across domestic and foreign policy, 
              making this one of the most consequential presidencies in modern American history.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <Users className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-red-600 mb-1">150+</div>
              <div className="text-sm text-gray-600">Executive Orders Signed</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-600 mb-1">25+</div>
              <div className="text-sm text-gray-600">International Agreements</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-600 mb-1">$2.5T</div>
              <div className="text-sm text-gray-600">Economic Impact</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-purple-600 mb-1">1,460</div>
              <div className="text-sm text-gray-600">Total Days in Term</div>
            </div>
          </div>
        </div>

        {/* Term Analysis */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6">Trump Presidency Countdown Analysis</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              The <strong>Trump presidency countdown</strong> reveals the unprecedented pace of policy implementation 
              during his second term. Within the first 100 days, Trump signed more executive orders than any president 
              in modern history, focusing on border security, energy independence, and economic deregulation.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Key Policy Areas Tracked in Our Trump Term Countdown:</h3>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">🛡️ National Security & Border Policy</h4>
              <p className="text-sm">
                Trump's border security initiatives have dominated headlines, with the completion of additional 
                border wall sections and implementation of comprehensive immigration reform.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">⚡ Energy Independence Strategy</h4>
              <p className="text-sm">
                The "Drill, Baby, Drill" policy has led to record domestic oil production, positioning America 
                as the world's leading energy exporter.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">🏭 Economic Revival Programs</h4>
              <p className="text-sm">
                Manufacturing jobs have surged with the "Made in America" initiative, bringing critical supply 
                chains back to domestic production.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">🌍 America First Foreign Policy</h4>
              <p className="text-sm">
                Trump's diplomatic approach has reshaped international alliances, prioritizing bilateral trade 
                agreements and reducing overseas military commitments.
              </p>
            </div>

            <p>
              As our <strong>Trump term countdown</strong> continues, we track the long-term impact of these policies 
              on American society, the economy, and international relations. The countdown serves as more than a 
              time tracker - it's a comprehensive record of one of the most transformative presidencies in American history.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Historical Context of the Trump Presidency Countdown</h3>
            
            <p>
              Trump's return to the presidency marks only the second time in American history that a president has 
              served non-consecutive terms, following Grover Cleveland's precedent in the 1890s. This unique aspect 
              makes our <strong>Trump presidency countdown</strong> particularly significant for political historians 
              and citizens alike.
            </p>

            <p>
              The countdown tracks not just time, but the evolution of American political discourse, policy implementation, 
              and the global response to Trump's leadership style. Each day counted represents another step in what 
              many consider a pivotal chapter in American democracy.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <p className="font-semibold text-blue-800 mb-2">💡 Why Our Trump Term Countdown Matters</p>
              <p className="text-blue-700 text-sm">
                Our countdown provides citizens with a clear timeline of presidential actions, helping Americans 
                understand the pace and scope of policy changes during this historic second term. It serves as 
                both a civic tool and a historical record for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}