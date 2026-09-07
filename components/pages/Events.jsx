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
 * Events paints immediately (existing section fallbacks), then swaps in CMS
 * data after mount — same non-blocking soft-nav pattern as Home.
 */
const Events = () => {
  const [cms, setCms] = useState({
    featuredEvents: null,
    upcomingEvents: null,
    pastEvents: null,
    upcomingVisible: true,
  });

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
      <FeaturedEvent items={cms.featuredEvents} />
      <UpcomingEvents events={cms.upcomingEvents} isVisible={cms.upcomingVisible} />
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
