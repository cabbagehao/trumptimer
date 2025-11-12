import React, { useEffect, useMemo, useState } from 'react';
import { Clock, Calendar, Flag } from 'lucide-react';
import { INAUGURATION_DATE } from '../../constants/dates';

type ElapsedTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const MS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * MINUTES_IN_HOUR;
const SECONDS_IN_DAY = HOURS_IN_DAY * SECONDS_IN_HOUR;

function getElapsedTime(): ElapsedTime {
  const now = new Date();
  const diffInSeconds = Math.max(0, Math.floor((now.getTime() - INAUGURATION_DATE.getTime()) / MS_IN_SECOND));

  const days = Math.floor(diffInSeconds / SECONDS_IN_DAY);
  const hours = Math.floor((diffInSeconds % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
  const minutes = Math.floor((diffInSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  const seconds = diffInSeconds % SECONDS_IN_MINUTE;

  return { days, hours, minutes, seconds };
}

function formatWithPadding(value: number) {
  return value.toString().padStart(2, '0');
}

export default function InaugurationCountdown() {
  const [elapsedTime, setElapsedTime] = useState<ElapsedTime>(() => getElapsedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(getElapsedTime());
    }, MS_IN_SECOND);

    return () => clearInterval(interval);
  }, []);

  const timeSegments = useMemo(() => ([
    { label: 'Days', value: elapsedTime.days.toString() },
    { label: 'Hours', value: formatWithPadding(elapsedTime.hours) },
    { label: 'Minutes', value: formatWithPadding(elapsedTime.minutes) },
    { label: 'Seconds', value: formatWithPadding(elapsedTime.seconds) },
  ]), [elapsedTime]);

  return (
    <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flag className="w-8 h-8 text-red-600" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Time Since Trump's 2025 Inauguration
          </h1>
          <Flag className="w-8 h-8 text-blue-600" />
        </div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Donald Trump took the oath of office for his second term on January 20, 2025 at 12:00 PM EST.
          This live tracker shows exactly how long he has been in office, updating every second.
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 mb-6 shadow-inner">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-red-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Trump Time in Office
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {timeSegments.map((segment) => (
            <div key={segment.label} className="text-center min-w-[80px]">
              <div className="text-4xl sm:text-5xl font-bold text-red-600">
                {segment.value}
              </div>
              <div className="text-sm uppercase tracking-wide text-gray-500 mt-1">
                {segment.label}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-sm text-gray-600 mt-6">
          Since January 20, 2025 at 12:00 PM EST
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
