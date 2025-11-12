import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

export type PageKey =
  | 'home'
  | 'termCountdown'
  | 'policies'
  | 'quotes'
  | 'speeches'
  | 'inauguration'
  | 'about'
  | 'president47'
  | 'trumpDie';

type PageDetails = {
  title: string;
  description: string;
  path: string;
};

const PAGE_DETAILS: Record<PageKey, PageDetails> = {
  home: {
    title: "Live Inauguration Timer",
    description: "Track every second since Donald Trump retook office in January 2025.",
    path: "/",
  },
  termCountdown: {
    title: "Presidential Term Countdown",
    description: "See the precise time left until Trump's term ends on January 20, 2029.",
    path: "/term-countdown/",
  },
  policies: {
    title: "Trump Policies 2025-2029",
    description: "Review the major initiatives and executive actions of Trump's second term.",
    path: "/policies/",
  },
  quotes: {
    title: "Notable Trump Quotes",
    description: "Explore Trump's most memorable quotes, statements, and viral moments.",
    path: "/quotes/",
  },
  speeches: {
    title: "Trump Speeches",
    description: "Dive into transcripts and analysis of Trump's key speeches and addresses.",
    path: "/speeches/",
  },
  inauguration: {
    title: "Inauguration Day 2025",
    description: "Relive the ceremony, schedule, and highlights from Trump's inauguration.",
    path: "/inauguration/",
  },
  about: {
    title: "About Donald Trump",
    description: "Get the essential biography, career timeline, and background on Trump.",
    path: "/about/",
  },
  president47: {
    title: "Trump as the 47th President",
    description: "Understand the historical significance of Trump's non-consecutive terms.",
    path: "/president47/",
  },
  trumpDie: {
    title: "Is Trump Dead?",
    description: "Check the latest rumors, speculation, and health updates about Trump.",
    path: "/trump-die/",
  },
};

const RELATED_PAGE_MAP: Partial<Record<PageKey, PageKey[]>> = {
  home: ['termCountdown', 'trumpDie', 'policies'],
  termCountdown: ['home', 'trumpDie', 'inauguration'],
  policies: ['termCountdown', 'trumpDie', 'speeches'],
  quotes: ['speeches', 'trumpDie', 'policies'],
  speeches: ['quotes', 'trumpDie', 'termCountdown'],
  inauguration: ['termCountdown', 'home', 'trumpDie'],
  about: ['home', 'trumpDie', 'president47'],
  president47: ['home', 'trumpDie', 'termCountdown'],
  trumpDie: ['termCountdown', 'home', 'about'],
};

function getRelatedPages(current: PageKey): PageDetails[] {
  const desiredOrder = RELATED_PAGE_MAP[current] ?? [];
  const allPages = (Object.keys(PAGE_DETAILS) as PageKey[]).filter((key) => key !== current);

  const orderedKeys: PageKey[] = [];
  [...desiredOrder, ...allPages].forEach((key) => {
    if (key !== current && !orderedKeys.includes(key)) {
      orderedKeys.push(key);
    }
  });

  return orderedKeys.slice(0, 3).map((key) => PAGE_DETAILS[key]);
}

type RelatedPagesSectionProps = {
  current: PageKey;
  className?: string;
};

export default function RelatedPagesSection({ current, className }: RelatedPagesSectionProps) {
  const relatedPages = useMemo(() => getRelatedPages(current), [current]);

  if (relatedPages.length === 0) {
    return null;
  }

  return (
    <section
      className={`bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-6 sm:p-8 shadow-sm ${
        className ?? ''
      }`}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">
        Explore More Trump Resources
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Continue your deep dive with more timelines, policies, and analysis.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {relatedPages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className="group block bg-white border border-gray-100 rounded-lg p-5 shadow hover:shadow-md transition-shadow duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-red-600">
              {page.title}
            </h3>
            <p className="text-sm text-gray-600">
              {page.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-red-600">
              Explore
              <span aria-hidden>{'>'}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
