import React from 'react';
import { Flag, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Flag className="w-6 h-6 text-red-600" />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Trump's Presidential Term 2025-2029</h1>
      </div>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-4">
          Track Donald Trump's historic second presidential term with our real-time countdown and news updates. 
          Stay informed about major policy changes, executive orders, and key events that are shaping America's 
          future under Trump's leadership.
        </p>
        <p className="text-gray-600 mb-6">
          From executive orders to international relations, follow the latest developments of Trump's presidency. 
          Our timeline tracks significant policy changes, diplomatic events, and major announcements that define 
          this consequential period in American history.
        </p>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold mb-2">Official Resources:</h2>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.donaldjtrump.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline flex items-center gap-1"
              >
                Official Website <ExternalLink className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a 
                href="https://truthsocial.com/@realDonaldTrump"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline flex items-center gap-1"
              >
                Truth Social Updates <ExternalLink className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a 
                href="https://www.whitehouse.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline flex items-center gap-1"
              >
                White House Official Website <ExternalLink className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}