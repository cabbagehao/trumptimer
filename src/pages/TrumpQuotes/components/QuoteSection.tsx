import React from 'react';
import { Quote } from 'lucide-react';

interface QuoteSectionProps {
  id: string;
  title: string;
  quotes: string[];
}

export default function QuoteSection({ id, title, quotes }: QuoteSectionProps) {
  return (
    <section id={id} data-section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Quote className="w-6 h-6 text-red-600" />
        {title}
      </h2>
      <div className="space-y-4">
        {quotes.map((quote, index) => (
          <div 
            key={index} 
            className="bg-white border-l-4 border-red-600 p-4 rounded-r-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <blockquote className="text-gray-700 italic">"{quote}"</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}