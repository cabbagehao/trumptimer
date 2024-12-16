import { timelineEvents } from '../../data/timelineEvents';
import { hasEventPassed } from '../../utils/dateUtils';
import TimelineItem from './TimelineItem';

export default function TimelineList() {
  return (
    <div className="relative pl-8 sm:pl-2">
      {timelineEvents.map((event) => (
        <TimelineItem
          key={event.title}
          event={event}
          passed={hasEventPassed(event.date)}
        />
      ))}
    </div>
  );
}