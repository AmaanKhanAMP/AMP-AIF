"use client";

import EventSection from './EventSection';
import usePublishedContent from '@/hooks/usePublishedContent';
import { mapPastEvent } from '@/lib/contentApi';

/**
 * Past Events grid — content from CMS (`gallery-items`).
 * Description comes from the API; a short fallback is used only when DB text is empty.
 */
const PastEventsGallery = () => {
  const pastEvents = usePublishedContent('gallery-items', [], mapPastEvent);

  return (
    <EventSection
      id="past-events"
      tag="Our Legacy"
      title="Past Events"
      subtitle="Celebrating years of transformative impact across communities throughout India."
      events={pastEvents}
      ariaLabel="Past events"
      className="past-events-listing"
      useDescriptionFallback
    />
  );
};

export default PastEventsGallery;
