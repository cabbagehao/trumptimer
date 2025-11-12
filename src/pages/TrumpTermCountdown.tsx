import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Clock, Calendar, TrendingUp, Users, Globe, DollarSign, HelpCircle } from 'lucide-react';
import { INAUGURATION_DATE, TERM_END_DATE } from '../constants/dates';
import SEOHead from '../components/SEO/SEOHead';
import { PAGE_SEO } from '../constants/seo';
import { getEventStructuredData, getBreadcrumbStructuredData } from '../utils/structuredData';
import RelatedPagesSection from '../components/RelatedPagesSection';

const MS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * MINUTES_IN_HOUR;
const SECONDS_IN_DAY = HOURS_IN_DAY * SECONDS_IN_HOUR;
const TOTAL_TERM_SECONDS = Math.max(1, Math.floor((TERM_END_DATE.getTime() - INAUGURATION_DATE.getTime()) / MS_IN_SECOND));

type TimeBreakdown = {
  totalSeconds: number;
  totalDays: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type TermTiming = {
  elapsed: TimeBreakdown;
  remaining: TimeBreakdown;
  progressPercentage: number;
};

function decomposeTime(diffMs: number): TimeBreakdown {
  const totalSeconds = Math.max(0, Math.floor(diffMs / MS_IN_SECOND));
  const days = Math.floor(totalSeconds / SECONDS_IN_DAY);
  const hours = Math.floor((totalSeconds % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
  const minutes = Math.floor((totalSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  const seconds = totalSeconds % SECONDS_IN_MINUTE;

  return {
    totalSeconds,
    totalDays: Math.floor(totalSeconds / SECONDS_IN_DAY),
    days,
    hours,
    minutes,
    seconds,
  };
}

function getTermTiming(): TermTiming {
  const nowMs = Date.now();
  const elapsedMs = Math.max(0, nowMs - INAUGURATION_DATE.getTime());
  const remainingMs = Math.max(0, TERM_END_DATE.getTime() - nowMs);

  const elapsed = decomposeTime(elapsedMs);
  const remaining = decomposeTime(remainingMs);
  const progressPercentage = Math.min(100, Math.max(0, Math.round((elapsed.totalSeconds / TOTAL_TERM_SECONDS) * 100)));

  return {
    elapsed,
    remaining,
    progressPercentage,
  };
}

function formatWithPadding(value: number) {
  return value.toString().padStart(2, '0');
}

export default function TrumpTermCountdown() {
  const [timing, setTiming] = useState<TermTiming>(() => getTermTiming());

  useEffect(() => {
    const interval = setInterval(() => {
      setTiming(getTermTiming());
    }, MS_IN_SECOND);

    return () => clearInterval(interval);
  }, []);

  const { elapsed, remaining, progressPercentage } = timing;

  const countdownSegments = useMemo(() => ([
    { label: 'Days', value: remaining.days.toString() },
    { label: 'Hours', value: formatWithPadding(remaining.hours) },
    { label: 'Minutes', value: formatWithPadding(remaining.minutes) },
    { label: 'Seconds', value: formatWithPadding(remaining.seconds) },
  ]), [remaining]);

  const daysInOfficeDisplay = Math.max(0, elapsed.totalDays);
  const daysRemainingDisplay = Math.max(0, remaining.totalDays);

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
              Trump Term Countdown - When Does Trump's Presidency End?
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Track <strong>when Trump's term ends</strong> with our real-time countdown. Donald Trump's presidency ends on 
              <strong className="text-red-600"> January 20, 2029 at 12:00 PM EST</strong>. Follow the exact countdown to the 
              <strong> Trump presidency end date</strong> and monitor key milestones of his historic second term.
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

          <div className="bg-white rounded-lg p-6 mb-6 shadow-inner">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold">Live Countdown to Term End</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {countdownSegments.map((segment) => (
                <div key={segment.label} className="text-center min-w-[80px]">
                  <div className="text-4xl sm:text-5xl font-bold text-blue-600">
                    {segment.value}
                  </div>
                  <div className="text-sm uppercase tracking-wide text-gray-500 mt-1">
                    {segment.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center text-sm text-gray-600 mt-6">
              Until January 20, 2029 at 12:00 PM EST
            </div>
          </div>

          {/* Countdown Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600 mb-1">{daysInOfficeDisplay}</div>
              <div className="text-sm text-gray-600">Days in Office</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600 mb-1">{daysRemainingDisplay}</div>
              <div className="text-sm text-gray-600">Days Remaining</div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Trump Presidency End Date & Term Milestones
          </h2>
          
          <div className="prose max-w-none text-gray-700 mb-6">
            <p>
              Our <strong>Trump term countdown</strong> provides the exact timeline until Trump's presidency ends. 
              <strong> When does Trump's term end?</strong> Trump's second presidential term concludes on <strong className="text-red-600">January 20, 2029</strong>, 
              marking the end of his historic non-consecutive presidency. Track the <strong>Trump presidency end date</strong> 
              and monitor the final months of his transformative administration.
            </p>
            <p>
              Since taking office on January 20, 2025, Trump has initiated sweeping changes across domestic and foreign policy. 
              As we approach the <strong>Trump term end date</strong>, citizens can track the completion of major policy initiatives 
              and the transition process for the next administration.
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
          <h2 className="text-2xl font-bold mb-6">Trump Presidency End Date Analysis</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              The <strong>Trump presidency countdown</strong> reveals critical insights as we approach the 
              <strong className="text-red-600"> Trump term end date of January 20, 2029</strong>. This countdown tracks not just time remaining, 
              but the completion of ambitious policy goals and the unprecedented pace of executive action during Trump's second term.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">🗓️ Key Date: When Does Trump's Presidency End?</h3>
              <p className="text-blue-700 text-sm">
                <strong className="text-red-600">January 20, 2029 at 12:00 PM EST</strong> - This is the exact moment when Trump's second presidential 
                term officially ends, as mandated by the 20th Amendment to the U.S. Constitution. Our countdown tracks every 
                day, hour, and minute until this historic transition.
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Trump Term End Date: What to Expect</h3>
            
            <p>
              As we monitor the <strong>Trump presidency end date</strong>, several key developments are expected:
            </p>

            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📋 Final Policy Push (2028-2029)</h4>
                <p className="text-sm">
                  The final year before the <strong>Trump term end date</strong> will likely see accelerated implementation 
                  of remaining campaign promises and attempts to cement policy legacy.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🔄 Presidential Transition Planning</h4>
                <p className="text-sm">
                  Starting in late 2028, transition planning begins for the incoming administration. Our countdown 
                  tracks these crucial months leading to the <strong>Trump presidency end date</strong>.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📜 Legacy Cementing Actions</h4>
                <p className="text-sm">
                  Historical precedent shows presidents often issue final executive orders and pardons in their 
                  last days. Track these developments as we approach when Trump's term ends.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🏛️ Inauguration Day 2029</h4>
                <p className="text-sm">
                  <strong className="text-red-600">January 20, 2029</strong> marks both the <strong>Trump presidency end date</strong> and the inauguration 
                  of the 48th President of the United States.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Historical Significance of Trump's Term End</h3>
            
            <p>
              The <strong>Trump term end date</strong> will mark the conclusion of only the second non-consecutive 
              presidency in American history. This unique circumstance makes our countdown particularly significant 
              for political historians and constitutional scholars.
            </p>

            <p>
              <strong>When Trump's term ends</strong> on <strong className="text-red-600">January 20, 2029</strong>, it will complete a remarkable political 
              comeback story and conclude eight years of Trump presidency across two separate terms. Our countdown 
              documents every moment of this historic period.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
              <p className="font-semibold text-red-800 mb-2">⚖️ Constitutional Term Limits</p>
              <p className="text-red-700 text-sm">
                The <strong>Trump presidency end date</strong> of <strong className="text-red-600">January 20, 2029</strong>, represents Trump's final day 
                as president due to the 22nd Amendment's two-term limit. This countdown tracks the conclusion of 
                his constitutional eligibility to serve as president.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-6 h-6 text-red-600" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Trump Term End Date FAQ</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                When does Trump's term end exactly?
              </h3>
              <p className="text-gray-700">
                <strong>Trump's term ends on <span className="text-red-600">January 20, 2029, at 12:00 PM EST</span>.</strong> This is the exact moment when 
                his presidency officially concludes according to the 20th Amendment to the U.S. Constitution. Our countdown 
                tracks every day, hour, and minute until this <strong>Trump presidency end date</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Why can't Trump run for president again after 2029?
              </h3>
              <p className="text-gray-700">
                The 22nd Amendment to the U.S. Constitution limits presidents to two terms. Since Trump served as the 45th 
                President (2017-2021) and will serve as the 47th President (2025-2029), the <strong>Trump term end date</strong> 
                of <strong className="text-red-600">January 20, 2029</strong>, marks his final day as president. He cannot constitutionally serve a third term.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                How many days are left in Trump's presidency?
              </h3>
              <p className="text-gray-700">
                Our real-time counter shows exactly {daysRemainingDisplay} days remaining until the <strong>Trump presidency end date</strong>. 
                This countdown updates every second, providing the most accurate tracking of <strong>when Trump's term ends</strong>. 
                The countdown includes all remaining days, hours, minutes, and seconds of his presidency.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                What happens on Trump's last day as president?
              </h3>
              <div className="text-gray-700 space-y-2">
                <p>On the <strong>Trump term end date</strong> of <strong className="text-red-600">January 20, 2029</strong>, several key events will occur:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Trump's presidency officially ends at 12:00 PM EST</li>
                  <li>The 48th President is inaugurated immediately after</li>
                  <li>Trump becomes a former president with lifetime Secret Service protection</li>
                  <li>Presidential transition of power is completed</li>
                  <li>New administration takes control of federal agencies</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Will Trump be the oldest president when his term ends?
              </h3>
              <p className="text-gray-700">
                <strong>When Trump's term ends</strong> on <strong className="text-red-600">January 20, 2029</strong>, he will be 82 years old, making him one of the 
                oldest presidents to complete a full term. This adds historical significance to our <strong>Trump presidency 
                end date</strong> countdown, as it marks the conclusion of a presidency spanning two decades.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                How does Trump's term end compare to other presidents?
              </h3>
              <p className="text-gray-700">
                The <strong>Trump term end date</strong> is unique because it marks the conclusion of non-consecutive terms, 
                similar to Grover Cleveland in the 1890s. Our countdown tracks this historic precedent, making Trump only 
                the second president in American history to serve non-consecutive terms when his presidency ends in <strong className="text-red-600">2029</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                What legacy will Trump leave when his term ends?
              </h3>
              <p className="text-gray-700">
                As we approach the <strong>Trump presidency end date</strong>, historians will evaluate his impact across 
                domestic policy, foreign relations, and economic changes. Our countdown serves as a historical record of 
                his second term, documenting the final years of a presidency that spanned two separate four-year periods.
              </p>
            </div>
          </div>
        </div>

        <RelatedPagesSection current="termCountdown" />
      </div>
    </Layout>
  );
}
