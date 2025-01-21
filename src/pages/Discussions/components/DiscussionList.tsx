import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Calendar } from 'lucide-react';
import type { TimelineEvent } from '../../../types';

interface DiscussionListProps {
  events: TimelineEvent[];
}

export default function DiscussionList({ events }: DiscussionListProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-8">Event Discussions</h1>
      
      {events.map((event, index) => (
        <Link
          key={index}
          to={`/discussions/event/${encodeURIComponent(event.title)}`}
          className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                {event.date.toLocaleDateString()}
              </div>
            </div>
            <div className="flex items-center gap-1 text-red-600">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Join Discussion</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}