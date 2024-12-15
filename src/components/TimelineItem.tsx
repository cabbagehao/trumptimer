import { CheckCircle, Clock } from 'lucide-react';
import type { TimelineEvent } from '../types';

interface TimelineItemProps {
  event: TimelineEvent;
  passed: boolean;
}

export default function TimelineItem({ event, passed }: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200" />

      <div className={`flex gap-2 sm:gap-4 mb-6 sm:mb-8 ${passed ? 'opacity-60' : ''}`}>
        <div className="flex-none z-10 bg-white rounded-full">
          {passed ? (
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          ) : (
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          )}
        </div>
        <div className="flex-grow">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {event.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
              {event.date.toLocaleDateString()}
            </p>
            <p className="text-sm sm:text-base text-gray-700">{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}