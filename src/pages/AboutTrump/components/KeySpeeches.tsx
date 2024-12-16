import React from 'react';
import { MessageSquare, Flag, Award } from 'lucide-react';

export default function KeySpeeches() {
  return (
    <div id="key-speeches" data-section className="mt-12">
      <h2 className="text-3xl font-bold mb-8">Key Speeches</h2>

      <div id="presidential-speeches" data-section className="mb-8">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-red-600" />
          Presidential Speeches
        </h3>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">2017 Inaugural Address</h4>
            <p className="text-gray-700">Emphasized "America First" policy and returning power to the people</p>
            <a href="https://www.whitehouse.gov/briefings-statements/the-inaugural-address/" 
               className="text-red-600 hover:underline text-sm">View Speech</a>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">2020 State of the Union</h4>
            <p className="text-gray-700">Highlighted economic achievements and policy successes</p>
            <a href="https://www.whitehouse.gov/briefings-statements/remarks-president-trump-state-union-address-3/" 
               className="text-red-600 hover:underline text-sm">View Speech</a>
          </div>
        </div>
      </div>

      <div id="campaign-speeches" data-section className="mb-8">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Flag className="w-6 h-6 text-red-600" />
          Campaign Speeches
        </h3>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">2015 Campaign Announcement</h4>
            <p className="text-gray-700">First introduced "Make America Great Again" slogan</p>
            <a href="https://time.com/3923128/donald-trump-announcement-speech/" 
               className="text-red-600 hover:underline text-sm">View Speech</a>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">2024 Campaign Launch</h4>
            <p className="text-gray-700">Outlined vision for second term and policy priorities</p>
            <a href="https://www.donaldjtrump.com/media/speeches/" 
               className="text-red-600 hover:underline text-sm">View Speech</a>
          </div>
        </div>
      </div>

      <div id="other-events" data-section>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-red-600" />
          Other Major Events
        </h3>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">UN General Assembly 2019</h4>
            <p className="text-gray-700">Address on international relations and America's role</p>
            <a href="https://www.un.org/en/ga/74/meetings/" 
               className="text-red-600 hover:underline text-sm">View Speech</a>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Mount Rushmore 2020</h4>
            <p className="text-gray-700">Independence Day speech on American heritage</p>
            <a href="https://www.whitehouse.gov/briefings-statements/" 
               className="text-red-600 hover:underline text-sm">View Speech</a>
          </div>
        </div>
      </div>
    </div>
  );
}