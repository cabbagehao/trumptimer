import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import { timelineEvents } from '../../data/timelineEvents';
import DiscussionList from './components/DiscussionList';
import EventDiscussion from './components/EventDiscussion';
import SEOHead from '../../components/SEO/SEOHead';
import { PAGE_SEO } from '../../constants/seo';
import { getArticleStructuredData, getBreadcrumbStructuredData } from '../../utils/structuredData';

export default function Discussions() {
  const { eventTitle } = useParams<{ eventTitle?: string }>();
  const decodedEventTitle = eventTitle ? decodeURIComponent(eventTitle) : undefined;
  const event = decodedEventTitle 
    ? timelineEvents.find(e => e.title === decodedEventTitle)
    : undefined;

  const breadcrumbData = getBreadcrumbStructuredData([
    { name: "Home", url: "https://trumptimer.us/" },
    { name: "Discussions", url: "https://trumptimer.us/discussions/" }
  ]);

  const articleData = getArticleStructuredData(
    event ? `Discussion: ${event.title}` : PAGE_SEO.discussions.title,
    event ? `Join the discussion about ${event.title}` : PAGE_SEO.discussions.description,
    event ? `/discussions/event/${encodeURIComponent(event.title)}` : "/discussions/"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      articleData,
      breadcrumbData
    ]
  };

  return (
    <Layout>
      <SEOHead
        title={event ? `Discussion: ${event.title}` : PAGE_SEO.discussions.title}
        description={event ? `Join the discussion about ${event.title}` : PAGE_SEO.discussions.description}
        keywords={PAGE_SEO.discussions.keywords}
        path={event ? `/discussions/event/${encodeURIComponent(event.title)}` : "/discussions/"}
        type="article"
        structuredData={structuredData}
      />
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