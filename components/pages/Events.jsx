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
import {
  cmsSnapshotEqual,
  mergeEventsCms,
  peekEventsCms,
  rememberEventsCms,
} from '@/lib/cmsClientCache';
import '@/styles/Events.css';

const EMPTY_EVENTS_CMS = {
  featuredEvents: null,
  upcomingEvents: null,
  pastEvents: null,
  upcomingVisible: null,
};

function seedEventsCms(initialCms) {
  if (initialCms && typeof initialCms === 'object') {
    if (typeof window !== 'undefined') rememberEventsCms(initialCms);
    return initialCms;
  }
  if (typeof window !== 'undefined') return peekEventsCms() ?? EMPTY_EVENTS_CMS;
  return EMPTY_EVENTS_CMS;
}

/**
 * Paints immediately on soft-nav. CMS is loaded client-side so Vercel
 * navigation is not blocked on Render. Session snapshot seeds return visits;
 * merge keeps published lists from being wiped by a failed revalidation.
 */
const Events = ({ initialCms = null }) => {
  const [cms, setCms] = useState(() => seedEventsCms(initialCms));

  useEffect(() => {
    if (initialCms && typeof initialCms === 'object') {
      rememberEventsCms(initialCms);
      setCms((prev) => {
        const next = mergeEventsCms(prev, initialCms);
        return cmsSnapshotEqual(prev, next) ? prev : next;
      });
    }
  }, [initialCms]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const data = await loadEventsCmsClient();
      if (cancelled) return;
      setCms((prev) => {
        const next = mergeEventsCms(prev, data);
        if (cmsSnapshotEqual(prev, next)) return prev;
        rememberEventsCms(next);
        return next;
      });
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
