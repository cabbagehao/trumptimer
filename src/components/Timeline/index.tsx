import TimelineHeader from './TimelineHeader';
import TimelineList from './TimelineList';

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-8">
      <TimelineHeader />
      <TimelineList />
    </div>
  );
}