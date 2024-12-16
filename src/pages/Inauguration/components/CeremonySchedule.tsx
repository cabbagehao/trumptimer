import React from 'react';
import { Clock, Crown, Flag, Music } from 'lucide-react';
import EventSection from './EventSection';

export default function CeremonySchedule() {
  return (
    <div id="ceremony-schedule" data-section>
      <h1 className="text-3xl font-bold mb-8">2025 Inauguration Ceremony Schedule</h1>

      <EventSection
        id="morning-events"
        icon={<Clock className="w-6 h-6 text-red-600" />}
        title="Morning Events"
        time="9:00 AM - 11:30 AM EST"
        content={
          <>
            <p className="mb-4">The day begins with:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>VIP arrivals and seating</li>
              <li>Marine Band performances</li>
              <li>Inaugural gathering</li>
            </ul>
          </>
        }
      />

      <EventSection
        id="noon-ceremony"
        icon={<Crown className="w-6 h-6 text-red-600" />}
        title="Noon Ceremony"
        time="11:30 AM - 1:00 PM EST"
        content={
          <>
            <p className="mb-4">The main ceremony includes:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Vice President JD Vance's oath</li>
              <li>Donald Trump's presidential oath</li>
              <li>Inaugural address</li>
            </ul>
          </>
        }
      />

      <EventSection
        id="afternoon-events"
        icon={<Flag className="w-6 h-6 text-red-600" />}
        title="Afternoon Events"
        time="1:00 PM - 5:00 PM EST"
        content={
          <>
            <p className="mb-4">Afternoon activities feature:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Inaugural luncheon</li>
              <li>Inaugural parade</li>
              <li>White House arrival</li>
            </ul>
          </>
        }
      />

      <EventSection
        id="evening-events"
        icon={<Music className="w-6 h-6 text-red-600" />}
        title="Evening Events"
        time="7:00 PM - 11:00 PM EST"
        content={
          <>
            <p className="mb-4">The celebration continues with:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Inaugural balls</li>
              <li>Official celebrations</li>
              <li>Special performances</li>
            </ul>
          </>
        }
      />
    </div>
  );
}