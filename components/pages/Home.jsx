"use client";

import { useEffect, useLayoutEffect, useState } from 'react';
import Hero from '@/components/home/Hero';
import Impact from '@/components/home/Impact';
import Preview from '@/components/home/Preview';
import Projects from '@/components/home/Projects';
import PhotoGallery from '@/components/home/PhotoGallery';
import Testimonial from '@/components/home/Testimonial';
import Event from '@/components/home/Event';
import { loadHomeCmsClient } from '@/lib/contentApi';
import { cmsSnapshotEqual, peekHomeCms } from '@/lib/cmsClientCache';

const EMPTY_HOME_CMS = {
  heroBanners: null,
  homeProjects: null,
  homeEvents: null,
  homeGallery: null,
  testimonials: null,
  homeEventsVisible: null,
};

/**
 * Soft-nav remounts this client page with empty state. A CMS snapshot is
 * restored in useLayoutEffect (before paint) so Hero / Upcoming Events do
 * not FALLBACK→live or unmount→remount flicker. Background fetch updates
 * only when the payload actually changed. Routes stay free of server CMS awaits.
 */
const Home = () => {
  const [cms, setCms] = useState(EMPTY_HOME_CMS);

  useLayoutEffect(() => {
    const cached = peekHomeCms();
    if (cached) setCms(cached);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const data = await loadHomeCmsClient();
      if (cancelled) return;
      setCms((prev) => (cmsSnapshotEqual(prev, data) ? prev : data));
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Hero slides={cms.heroBanners} />
      <Preview />
      <Impact />
      <Projects projects={cms.homeProjects} />
      {cms.homeEventsVisible === true && Array.isArray(cms.homeEvents) ? (
        <Event events={cms.homeEvents} isVisible />
      ) : null}
      <PhotoGallery images={cms.homeGallery} />
      <Testimonial testimonials={cms.testimonials} />
    </>
  );
};

export default Home;
