import React from 'react';
import { Flag, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Flag className="w-6 h-6 text-red-600" />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Donald Trump's Historic Return</h1>
      </div>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-4">
          As America anticipates Donald Trump's potential return to the presidency in 2025, we stand at a historic moment 
          that could mirror Grover Cleveland's remarkable non-consecutive presidential terms. Trump's journey toward becoming 
          the 47th President of the United States represents a unique chapter in American political history.
        </p>
        <p className="text-gray-600 mb-6">
          Following the 2024 election results, this countdown tracks the timeline to Donald Trump's inauguration ceremony 
          scheduled for January 20, 2025. From Electoral College voting to the official transition of power, witness every 
          milestone in Trump's path to his second presidency.
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
                Official Campaign Website <ExternalLink className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a 
                href="https://www.inaugural.senate.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline flex items-center gap-1"
              >
                Joint Congressional Committee on Inaugural Ceremonies <ExternalLink className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a 
                href="https://truthsocial.com/@realDonaldTrump"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline flex items-center gap-1"
              >
                Follow Trump on Truth Social <ExternalLink className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}