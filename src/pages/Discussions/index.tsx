import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import { timelineEvents } from '../../data/timelineEvents';
import DiscussionList from './components/DiscussionList';
import EventDiscussion from './components/EventDiscussion';

export default function Discussions() {
  const { eventTitle } = useParams<{ eventTitle?: string }>();
  const decodedEventTitle = eventTitle ? decodeURIComponent(eventTitle) : undefined;
  const event = decodedEventTitle 
    ? timelineEvents.find(e => e.title === decodedEventTitle)
    : undefined;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {event ? (
          <EventDiscussion event={event} />
        ) : (
          <DiscussionList events={timelineEvents} />
        )}
      </div>
    </Layout>
  );
}