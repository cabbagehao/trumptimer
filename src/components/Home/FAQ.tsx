import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INAUGURATION_DATE } from '../../constants/dates';

export default function FAQ() {
  const daysUntilTermEnd = Math.ceil(
    (INAUGURATION_DATE.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-6 h-6 text-red-600" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            How long until Trump's presidential term ends?
          </h3>
          <p className="text-gray-700">
            There are approximately {daysUntilTermEnd} days remaining in President Trump's second term, 
            which ends on January 20, 2029. Follow our{' '}
            <Link to="/" className="text-red-600 hover:underline">
              live countdown timer
            </Link>{' '}
            to track the exact time remaining.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            What major events can we expect during Trump's term?
          </h3>
          <p className="text-gray-700">
            President Trump's second term is expected to include significant policy changes and executive 
            actions. Our{' '}
            <Link to="/policies" className="text-red-600 hover:underline">
              policy tracker
            </Link>{' '}
            provides real-time updates on major decisions, international agreements, and domestic policy changes.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            How can I stay updated on Trump's presidential actions?
          </h3>
          <div className="text-gray-700 space-y-4">
            <p>Follow our live updates through multiple channels:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Real-time news updates on major policy changes</li>
              <li>Executive order tracking and analysis</li>
              <li>International relations developments</li>
              <li>Domestic policy implementation updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}