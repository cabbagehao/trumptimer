import { useEffect, useState } from 'react';
import { Clock, Calendar } from 'lucide-react';
import { calculateTimeRemaining, isInaugurationPassed } from '../../utils/dateUtils/calculations';
import type { CountdownTime } from '../../types';
import CountdownDisplay from './CountdownDisplay';

export default function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState<CountdownTime>(calculateTimeRemaining());
  const isPassed = isInaugurationPassed();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-8 max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Trump 2.0 Timer
        </h2>
        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center">
        {(Object.keys(timeRemaining) as Array<keyof CountdownTime>).map((unit) => (
          <CountdownDisplay
            key={unit}
            label={unit.charAt(0).toUpperCase() + unit.slice(1)}
            value={timeRemaining[unit]}
            unit={unit}
          />
        ))}
      </div>
    </div>
  );
}