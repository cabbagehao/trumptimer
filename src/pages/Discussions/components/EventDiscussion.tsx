import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import type { TimelineEvent } from '../../../types';

interface EventDiscussionProps {
  event: TimelineEvent;
}

export default function EventDiscussion({ event }: EventDiscussionProps) {
  return (
    <div className="space-y-6">
      <Link 
        to="/discussions"
        className="inline-flex items-center text-red-600 hover:text-red-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Discussions
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <Calendar className="w-4 h-4" />
          {event.date.toLocaleDateString()}
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-600 hover:underline ml-2"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Source
            </a>
          )}
        </div>
        <p className="text-gray-700 mb-6">{event.description}</p>

        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Discussion</h2>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-gray-600">
              Discussion feature coming soon! Stay tuned for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}