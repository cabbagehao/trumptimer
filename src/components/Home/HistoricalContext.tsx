import React from 'react';
import { History } from 'lucide-react';

export default function HistoricalContext() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <History className="w-6 h-6 text-red-600" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Historical Significance</h2>
      </div>
      <div className="prose max-w-none">
        <p className="text-gray-700 mb-4">
          Donald Trump's potential second term marks only the second time in U.S. history that a president would serve 
          non-consecutive terms, following Grover Cleveland's precedent from 1885 and 1893. This rare occurrence in 
          American presidential history adds significant weight to the 2025 inauguration ceremony.
        </p>
        <p className="text-gray-600">
          The transition process, from election victory to inauguration day, involves crucial events including Electoral 
          College voting, congressional certification, and the formal transition of executive power. Each step in this 
          timeline represents a vital component of American democracy.
        </p>
      </div>
    </div>
  );
}