"use client";

import { useEffect, useState } from 'react';
import Hero from '@/components/home/Hero';
import Impact from '@/components/home/Impact';
import Preview from '@/components/home/Preview';
import Projects from '@/components/home/Projects';
import PhotoGallery from '@/components/home/PhotoGallery';
import Testimonial from '@/components/home/Testimonial';
import Event from '@/components/home/Event';
import { loadHomeCmsClient } from '@/lib/contentApi';
import {
  cmsSnapshotEqual,
  mergeHomeCms,
  peekHomeCms,
  rememberHomeCms,
} from '@/lib/cmsClientCache';

const EMPTY_HOME_CMS = {
  heroBanners: null,
  homeProjects: null,
  homeEvents: null,
  homeGallery: null,
  testimonials: null,
  homeEventsVisible: null,
};

function seedHomeCms(initialCms) {
  if (initialCms && typeof initialCms === 'object') {
    if (typeof window !== 'undefined') rememberHomeCms(initialCms);
    return initialCms;
  }
  if (typeof window !== 'undefined') return peekHomeCms() ?? EMPTY_HOME_CMS;
  return EMPTY_HOME_CMS;
}

/**
 * SSR seeds the first paint. Client revalidation merges into existing state so
 * a failed /home-events request (null) cannot unmount Upcoming Events.
 */
const Home = ({ initialCms = null }) => {
  const [cms, setCms] = useState(() => seedHomeCms(initialCms));

  useEffect(() => {
    if (initialCms && typeof initialCms === 'object') {
      rememberHomeCms(initialCms);
      setCms((prev) => {
        const next = mergeHomeCms(prev, initialCms);
        return cmsSnapshotEqual(prev, next) ? prev : next;
      });
    }
  }, [initialCms]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const data = await loadHomeCmsClient();
      if (cancelled) return;
      setCms((prev) => {
        const next = mergeHomeCms(prev, data);
        return cmsSnapshotEqual(prev, next) ? prev : next;
      });
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
