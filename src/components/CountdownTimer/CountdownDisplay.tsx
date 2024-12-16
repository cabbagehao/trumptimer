import { formatTimeUnit } from '../../utils/dateUtils';
import type { TimeUnit } from '../../types';

interface CountdownDisplayProps {
  label: string;
  value: number;
  unit: TimeUnit;
}

export default function CountdownDisplay({ label, value, unit }: CountdownDisplayProps) {
  return (
    <div className="bg-gray-50 p-2 sm:p-4 rounded-lg">
      <div className="text-2xl sm:text-4xl font-bold text-red-600 mb-1 sm:mb-2">
        {formatTimeUnit(value)}
      </div>
      <div className="text-sm sm:text-base text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
}