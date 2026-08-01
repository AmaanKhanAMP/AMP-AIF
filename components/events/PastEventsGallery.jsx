"use client";

import EventSection from './EventSection';

/**
 * Past Events grid — CMS data is loaded on the server and passed as props.
 * Description comes from the API; a short fallback is used only when DB text is empty.
 */
const PastEventsGallery = ({ events }) => {
  const pastEvents = Array.isArray(events) ? events : [];

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
