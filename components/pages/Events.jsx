"use client";

import { useEffect, useState } from 'react';
import ScrollToTop from '@/components/layout/ScrollToTop';
import EventsHero from '@/components/events/EventsHero';
import FeaturedEvent from '@/components/events/FeaturedEvent';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import EventCategories from '@/components/events/EventCategories';
import EventTimeline from '@/components/events/EventTimeline';
import PastEventsGallery from '@/components/events/PastEventsGallery';
import VolunteerCTA from '@/components/events/VolunteerCTA';
import { loadEventsCmsClient } from '@/lib/contentApi';
import '@/styles/Events.css';

/**
 * CMS payload is `null` until the client fetch finishes.
 * While pending: do not mount CMS sections (no FALLBACK → API flash).
 * upcomingVisible is applied only after load: render only when === true.
 * Soft-nav stays non-blocking — pages do not await CMS on the server.
 */
const Events = () => {
  const [cms, setCms] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const data = await loadEventsCmsClient();
      if (!cancelled) setCms(data);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="events-page-canvas">
      <ScrollToTop />
      <EventsHero />
      {cms ? <FeaturedEvent items={cms.featuredEvents} /> : null}
      {cms?.upcomingVisible === true ? (
        <UpcomingEvents events={cms.upcomingEvents} isVisible />
      ) : null}
      {cms ? <PastEventsGallery events={cms.pastEvents} /> : null}
      <EventTimeline />
      <EventCategories />
      <VolunteerCTA
        title="Be Part of Our Next Event"
        text="Whether you are a student, volunteer, professional, institution or corporate partner, your participation helps create opportunities that transform lives. Together, we can make every event a step towards a stronger and more inclusive society."
        secondaryLabel="Partner With Us"
      />
    </div>
  );
};

export default Events;
