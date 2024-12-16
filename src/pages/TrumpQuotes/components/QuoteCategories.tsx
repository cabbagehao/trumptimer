import React from 'react';
import QuoteSection from './QuoteSection';
import trumpQuotes from '../../../data/trump_quotes';

// Categorize quotes
const categories = {
  campaign: trumpQuotes.slice(0, 3),
  presidential: trumpQuotes.slice(3, 6),
  foreignPolicy: trumpQuotes.slice(6, 9),
  controversial: trumpQuotes.slice(9, 12),
  humor: trumpQuotes.slice(12, 15),
  socialMedia: trumpQuotes.slice(15),
};

export default function QuoteCategories() {
  return (
    <div className="space-y-8">
      <QuoteSection
        id="campaign-quotes"
        title="Campaign Quotes"
        quotes={categories.campaign}
      />
      <QuoteSection
        id="presidential-quotes"
        title="Presidential Term"
        quotes={categories.presidential}
      />
      <QuoteSection
        id="foreign-policy-quotes"
        title="Foreign Policy"
        quotes={categories.foreignPolicy}
      />
      <QuoteSection
        id="controversial-quotes"
        title="Controversial Statements"
        quotes={categories.controversial}
      />
      <QuoteSection
        id="humor-quotes"
        title="Humorous Remarks"
        quotes={categories.humor}
      />
      <QuoteSection
        id="social-media-quotes"
        title="Social Media"
        quotes={categories.socialMedia}
      />
    </div>
  );
}