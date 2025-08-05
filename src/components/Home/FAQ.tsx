import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INAUGURATION_DATE } from '../../constants/dates';

export default function FAQ() {
  const daysSinceInauguration = Math.floor(
    (new Date().getTime() - INAUGURATION_DATE.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-6 h-6 text-red-600" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Trump Inauguration Countdown FAQ</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            What time was Trump's inauguration countdown set for?
          </h3>
          <p className="text-gray-700">
            Our <strong>Trump inauguration countdown</strong> was precisely set for January 20, 2025, at 12:00 PM EST. 
            The countdown tracked every second leading up to the moment Trump took the presidential oath of office, 
            marking his return to the White House after four years.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            How many days has it been since Trump's inauguration?
          </h3>
          <p className="text-gray-700">
            It has been {daysSinceInauguration} days since Donald Trump's historic inauguration on January 20, 2025. 
            Our countdown timer has now switched to tracking the duration of his presidency, providing real-time 
            updates on his time in office.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            Why was the Trump inauguration countdown so significant?
          </h3>
          <p className="text-gray-700">
            The <strong>countdown to Trump inauguration</strong> represented more than just time tracking - it symbolized 
            one of the most remarkable political comebacks in American history. The countdown captured the anticipation 
            of Trump's supporters and marked the democratic transition of power in the United States.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            What happened during the final moments of the countdown?
          </h3>
          <div className="text-gray-700 space-y-4">
            <p>The final hours of our <strong>Trump inauguration countdown clock</strong> tracked these key moments:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Midnight EST:</strong> Final day begins with 12 hours remaining</li>
              <li><strong>6:00 AM EST:</strong> Pre-ceremony preparations begin</li>
              <li><strong>11:00 AM EST:</strong> Final hour countdown intensifies</li>
              <li><strong>12:00 PM EST:</strong> Trump takes the oath of office</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            Can I still access the inauguration countdown features?
          </h3>
          <p className="text-gray-700">
            While the original <strong>Trump inauguration time countdown</strong> has concluded, our site continues 
            to provide valuable content about Trump's presidency. Visit our{' '}
            <Link to="/term-countdown" className="text-red-600 hover:underline">
              presidency countdown
            </Link>{' '}
            to track his current term progress and explore historical data about the inauguration process.
          </p>
        </div>
      </div>
    </div>
  );
}