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

/**
 * CMS payload is `null` until the client fetch finishes.
 * While pending: do not mount CMS sections (no FALLBACK → API flash).
 * homeEventsVisible is three-state once loaded: true | false
 * (unknown while pending because the whole payload is null).
 * Soft-nav stays non-blocking — pages do not await CMS on the server.
 */
const Home = () => {
  const [cms, setCms] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const data = await loadHomeCmsClient();
      if (!cancelled) setCms(data);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {cms ? <Hero slides={cms.heroBanners} /> : null}
      <Preview />
      <Impact />
      {cms ? <Projects projects={cms.homeProjects} /> : null}
      {cms?.homeEventsVisible === true ? (
        <Event events={cms.homeEvents} isVisible />
      ) : null}
      {cms ? <PhotoGallery images={cms.homeGallery} /> : null}
      {cms ? <Testimonial testimonials={cms.testimonials} /> : null}
    </>
  );
};

export default Home;
