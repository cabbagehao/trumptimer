import { Flag } from 'lucide-react';
import { timelineEvents } from '../data/timelineEvents';
import { hasEventPassed } from '../utils/dateUtils';
import TimelineItem from './TimelineItem';

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-8">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Flag className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Key Events Timeline</h2>
      </div>
      <div className="relative pl-8 sm:pl-2">
        {timelineEvents.map((event) => (
          <TimelineItem
            key={event.title}
            event={event}
            passed={hasEventPassed(event.date)}
          />
        ))}
      </div>
    </div>
  );
}