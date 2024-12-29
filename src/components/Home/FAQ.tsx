import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INAUGURATION_DATE } from '../../constants/dates';

export default function FAQ() {
  const daysUntilInauguration = Math.ceil(
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
            How many days until the next presidential inauguration 2025?
          </h3>
          <p className="text-gray-700">
            There are approximately {daysUntilInauguration} days until the next presidential 
            inauguration on January 20, 2025. You can follow our{' '}
            <Link to="/" className="text-red-600 hover:underline">
              live countdown timer
            </Link>{' '}
            to track the exact time remaining until this historic event.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            What happens on Trump's Inauguration Day?
          </h3>
          <p className="text-gray-700">
            Inauguration Day is filled with ceremonial events including the presidential oath of 
            office, inaugural address, and celebratory parade. Visit our detailed{' '}
            <Link to="/inauguration" className="text-red-600 hover:underline">
              inauguration ceremony guide
            </Link>{' '}
            to learn about the full schedule of events, key participants, and historical significance 
            of this momentous occasion.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            How to get Trump Inauguration 2025 tickets?
          </h3>
          <div className="text-gray-700 space-y-4">
            <div>
              <p className="font-medium mb-1">Ticket Distribution:</p>
              <p>
                Through Congressional Offices: Inauguration tickets are typically distributed for free 
                by the offices of U.S. Senators and Representatives. You should contact your local 
                congressional representative as soon as possible to request tickets.
              </p>
            </div>
            
            <div>
              <p className="font-medium mb-1">Inauguration Ticket Quantity and Price:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Limited Availability: Each congressional office has a limited number of tickets to distribute, which are usually given out on a first-come, first-served basis.</li>
                <li>Free of Charge: Tickets to the official swearing-in ceremony are free and are not sold to the public.</li>
              </ul>
            </div>

            <div>
              <p className="font-medium mb-1">Viewing Inauguration Without Tickets:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>National Mall: Although you won't be directly at the swearing-in, you can watch it live on large screens set up along the National Mall, no ticket required.</li>
                <li>Parade Route: Parts of the inauguration parade are accessible to the public without tickets. You can view the parade from various points along the route without a ticket.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}