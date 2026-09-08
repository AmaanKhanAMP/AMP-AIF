"use client";

import { useEffect, useLayoutEffect, useState } from 'react';
import ScrollToTop from '@/components/layout/ScrollToTop';
import EventsHero from '@/components/events/EventsHero';
import FeaturedEvent from '@/components/events/FeaturedEvent';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import EventCategories from '@/components/events/EventCategories';
import EventTimeline from '@/components/events/EventTimeline';
import PastEventsGallery from '@/components/events/PastEventsGallery';
import VolunteerCTA from '@/components/events/VolunteerCTA';
import { loadEventsCmsClient } from '@/lib/contentApi';
import { cmsSnapshotEqual, peekEventsCms } from '@/lib/cmsClientCache';
import '@/styles/Events.css';

const EMPTY_EVENTS_CMS = {
  featuredEvents: null,
  upcomingEvents: null,
  pastEvents: null,
  upcomingVisible: null,
};

/**
 * Soft-nav remounts this client page with empty state. Snapshot restore in
 * useLayoutEffect keeps Upcoming Events mounted across navigations; fetch
 * only replaces state when CMS data changed. No server CMS await on the route.
 */
const Events = () => {
  const [cms, setCms] = useState(EMPTY_EVENTS_CMS);

  useLayoutEffect(() => {
    const cached = peekEventsCms();
    if (cached) setCms(cached);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const data = await loadEventsCmsClient();
      if (cancelled) return;
      setCms((prev) => (cmsSnapshotEqual(prev, data) ? prev : data));
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="events-page-canvas">
      <ScrollToTop />
      <EventsHero />
      <FeaturedEvent items={cms.featuredEvents} />
      {cms.upcomingVisible === true && Array.isArray(cms.upcomingEvents) ? (
        <UpcomingEvents events={cms.upcomingEvents} isVisible />
      ) : null}
      <PastEventsGallery events={cms.pastEvents} />
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
