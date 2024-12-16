import React from 'react';
import { Users, Globe, Users2 } from 'lucide-react';
import EventSection from './EventSection';

export default function KeyParticipants() {
  return (
    <div id="key-participants" data-section>
      <h2 className="text-3xl font-bold mb-8">Key Participants</h2>

      <EventSection
        id="political-figures"
        icon={<Users className="w-6 h-6 text-red-600" />}
        title="Political Figures"
        time="Key Officials"
        content={
          <>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Donald J. Trump - 47th President</li>
              <li>JD Vance - 50th Vice President</li>
              <li>Chief Justice John Roberts - Oath Administrator</li>
              <li>Congressional Leadership</li>
            </ul>
          </>
        }
      />

      <EventSection
        id="international-guests"
        icon={<Globe className="w-6 h-6 text-red-600" />}
        title="International Guests"
        time="Foreign Dignitaries"
        content={
          <>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>President Xi Jinping (China)</li>
              <li>Prime Minister Viktor Orbán (Hungary)</li>
              <li>Prime Minister Giorgia Meloni (Italy)</li>
              <li>President Javier Milei (Argentina)</li>
            </ul>
          </>
        }
      />

      <EventSection
        id="public-protesters"
        icon={<Users2 className="w-6 h-6 text-red-600" />}
        title="Public and Protesters"
        time="Public Participation"
        content={
          <>
            <p className="mb-4">Expected attendance includes:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Trump supporters from across the nation</li>
              <li>Organized protest groups</li>
              <li>Media representatives</li>
              <li>General public spectators</li>
            </ul>
          </>
        }
      />
    </div>
  );
}