import { ExternalLink } from 'lucide-react';
import type { TimelineEvent } from '../types';

interface TimelineItemProps {
  event: TimelineEvent;
}

export default function TimelineItem({ event }: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200" />

      <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8">
        <div className="flex-none z-10 bg-white rounded-full">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded-full" />
        </div>
        <div className="flex-grow">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
              {event.title}
            </h3>
            <p className="text-xs sm:text-sm text-red-600 mb-1 sm:mb-2">
              {event.date.toLocaleDateString()}
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              {event.description}
              {event.link && (
                <a 
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:underline ml-2"
                  title="Read more"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}