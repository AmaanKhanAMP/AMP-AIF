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
 * homeEventsVisible starts as `null` (unknown) — not `true`.
 * Gated sections mount only after CMS returns a real boolean so a
 * CMS-hidden section never paints during the first-load fetch window.
 * Soft-nav stays non-blocking (pages do not await CMS on the server).
 */
const Home = () => {
  const [cms, setCms] = useState({
    heroBanners: null,
    homeProjects: null,
    homeEvents: null,
    homeGallery: null,
    testimonials: null,
    homeEventsVisible: null,
  });

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
      <Hero slides={cms.heroBanners} />
      <Preview />
      <Impact />
      <Projects projects={cms.homeProjects} />
      {cms.homeEventsVisible === true ? (
        <Event events={cms.homeEvents} isVisible />
      ) : null}
      <PhotoGallery images={cms.homeGallery} />
      <Testimonial testimonials={cms.testimonials} />
    </>
  );
};

export default Home;
