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
 * Home paints immediately (existing section fallbacks), then swaps in CMS
 * data after mount. Soft navigation must not await Render/localhost CMS.
 */
const Home = () => {
  const [cms, setCms] = useState({
    heroBanners: null,
    homeProjects: null,
    homeEvents: null,
    homeGallery: null,
    testimonials: null,
    homeEventsVisible: true,
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
      <Event events={cms.homeEvents} isVisible={cms.homeEventsVisible} />
      <PhotoGallery images={cms.homeGallery} />
      <Testimonial testimonials={cms.testimonials} />
    </>
  );
};

export default Home;
