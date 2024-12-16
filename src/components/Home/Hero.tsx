import React from 'react';
import { Flag } from 'lucide-react';

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
        <p className="text-gray-600 mb-4">
          Following the 2024 election results, this countdown tracks the timeline to Donald Trump's inauguration ceremony 
          scheduled for January 20, 2025. From Electoral College voting to the official transition of power, witness every 
          milestone in Trump's path to his second presidency.
        </p>
      </div>
    </div>
  );
}