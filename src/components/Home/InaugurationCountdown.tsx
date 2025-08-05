import React from 'react';
import { Clock, Calendar, Flag } from 'lucide-react';

export default function InaugurationCountdown() {
  const inaugurationDate = new Date('2025-01-20T17:00:00.000Z');
  const now = new Date();
  const daysSinceInauguration = Math.floor((now.getTime() - inaugurationDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flag className="w-8 h-8 text-red-600" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Trump Inauguration Countdown
          </h1>
          <Flag className="w-8 h-8 text-blue-600" />
        </div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Donald Trump's historic inauguration as the 47th President of the United States took place on January 20, 2025. 
          Our Trump inauguration countdown tracked every moment leading up to this pivotal day in American history.
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 mb-6 shadow-inner">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-red-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Days Since Trump's Inauguration
          </h2>
        </div>
        <div className="text-center">
          <div className="text-5xl sm:text-6xl font-bold text-red-600 mb-2">
            {daysSinceInauguration}
          </div>
          <div className="text-lg text-gray-600">
            Days since January 20, 2025
          </div>
        </div>
      </div>

      <div className="prose max-w-none text-gray-700">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-blue-600" />
          Trump Inauguration Timeline
        </h2>
        
        <p className="mb-4">
          The <strong>Trump inauguration countdown</strong> captured the anticipation leading to one of the most 
          significant political comebacks in American history. What time was the Trump inauguration? The ceremony 
          began at 12:00 PM EST on January 20, 2025, marking the official start of Trump's second presidency.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">Key Inauguration Moments:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>12:00 PM EST:</strong> Presidential oath administered by Chief Justice</li>
            <li><strong>12:15 PM EST:</strong> Trump's inaugural address to the nation</li>
            <li><strong>1:00 PM EST:</strong> Congressional luncheon ceremony</li>
            <li><strong>3:00 PM EST:</strong> Presidential parade down Pennsylvania Avenue</li>
          </ul>
        </div>

        <p className="mb-4">
          Our <strong>countdown to Trump inauguration</strong> tracked not just the final moments, but the entire 
          transition period. The <strong>Trump inauguration countdown timer</strong> became a focal point for 
          millions of Americans eager to witness this historic transfer of power.
        </p>

        <p className="mb-4">
          The <strong>Trump inauguration time countdown</strong> revealed the precise moment when Trump would 
          reclaim the presidency, ending a four-year hiatus from the White House. This 
          <strong> Trump inauguration countdown clock</strong> marked more than just time - it represented 
          America's democratic process in action.
        </p>

        <div className="bg-red-50 p-4 rounded-lg">
          <p className="font-semibold mb-2">Why the Trump Inauguration Countdown Mattered:</p>
          <p className="text-sm">
            The countdown served as a unifying moment for supporters and a reminder of the peaceful transfer 
            of power that defines American democracy. Each tick of our countdown clock brought the nation 
            closer to witnessing Trump's return to the presidency and the implementation of his America First agenda.
          </p>
        </div>
      </div>
    </div>
  );
}