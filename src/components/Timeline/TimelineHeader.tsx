import { Flag } from 'lucide-react';

export default function TimelineHeader() {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      <Flag className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Key Events Timeline</h2>
    </div>
  );
}