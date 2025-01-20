import { timelineEvents } from '../../data/timelineEvents';
import TimelineItem from './TimelineItem';

export default function TimelineList() {
  // Sort events in reverse chronological order
  const sortedEvents = [...timelineEvents].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="relative pl-8 sm:pl-2">
      {sortedEvents.map((event) => (
        <TimelineItem
          key={event.title}
          event={event}
        />
      ))}
    </div>
  );
}