import { useEffect, useState } from 'react';
import { Clock, Calendar } from 'lucide-react';
import { calculateTimeRemaining, formatTimeUnit } from '../utils/dateUtils';
import type { CountdownTime } from '../types';

export default function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState<CountdownTime>(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Countdown to Inauguration</h2>
        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center">
        {[
          { label: 'Days', value: timeRemaining.days },
          { label: 'Hours', value: timeRemaining.hours },
          { label: 'Minutes', value: timeRemaining.minutes },
          { label: 'Seconds', value: timeRemaining.seconds },
        ].map(({ label, value }) => (
          <div key={label} className="bg-gray-50 p-2 sm:p-4 rounded-lg">
            <div className="text-2xl sm:text-4xl font-bold text-red-600 mb-1 sm:mb-2">
              {formatTimeUnit(value)}
            </div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}