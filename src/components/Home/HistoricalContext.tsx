import React from 'react';
import { History } from 'lucide-react';

export default function HistoricalContext() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <History className="w-6 h-6 text-red-600" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Presidential Term Impact</h2>
      </div>
      <div className="prose max-w-none">
        <p className="text-gray-700 mb-4">
          Donald Trump's second presidential term represents a pivotal period in American history. 
          As the first president to serve non-consecutive terms since Grover Cleveland, Trump's 
          return to office brings significant policy changes and executive actions that are 
          reshaping America's domestic and international landscape.
        </p>
        <p className="text-gray-600">
          Follow our real-time updates as we track major policy implementations, executive orders, 
          and significant events that define this historic presidency. From international relations 
          to domestic policy changes, stay informed about the developments that are transforming 
          America under Trump's leadership.
        </p>
      </div>
    </div>
  );
}