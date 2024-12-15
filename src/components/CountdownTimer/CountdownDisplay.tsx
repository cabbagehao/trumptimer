import { formatTimeUnit } from '../../utils/dateUtils';
import type { CountdownTime } from '../../types';

interface CountdownDisplayProps {
  timeUnit: keyof CountdownTime;
  value: number;
}

export default function CountdownDisplay({ timeUnit, value }: CountdownDisplayProps) {
  return (
    <div className="bg-gray-50 p-2 sm:p-4 rounded-lg">
      <div className="text-2xl sm:text-4xl font-bold text-red-600 mb-1 sm:mb-2">
        {formatTimeUnit(value)}
      </div>
      <div className="text-sm sm:text-base text-gray-600 font-medium">
        {timeUnit.charAt(0).toUpperCase() + timeUnit.slice(1)}
      </div>
    </div>
  );
}