import React, { useState, useEffect } from 'react';
import { Quote, RefreshCw } from 'lucide-react';
import trumpQuotes from '../../../data/trump_quotes';

export default function RandomQuote() {
  const [quote, setQuote] = useState('');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * trumpQuotes.length);
    setQuote(trumpQuotes[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="bg-red-600 text-white p-6 rounded-xl shadow-lg mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Quote className="w-5 h-5" />
          Quote of the Moment
        </h2>
        <button 
          onClick={getRandomQuote}
          className="p-2 hover:bg-red-500 rounded-full transition-colors"
          aria-label="Get new quote"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>
      <blockquote className="text-lg italic">"{quote}"</blockquote>
    </div>
  );
}