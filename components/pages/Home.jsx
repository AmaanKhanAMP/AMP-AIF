"use client";

import { useEffect, useState } from 'react';
import Hero from '@/components/home/Hero';
import Impact from '@/components/home/Impact';
import Preview from '@/components/home/Preview';
import Projects from '@/components/home/Projects';
import PhotoGallery from '@/components/home/PhotoGallery';
import Testimonial from '@/components/home/Testimonial';
import Event from '@/components/home/Event';
import { loadHomeCms } from '@/lib/loadCms';

const Home = () => {
  const [cms, setCms] = useState(null);

  useEffect(() => {
    let cancelled = false;
    loadHomeCms().then((data) => {
      if (!cancelled) setCms(data);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Hero slides={cms?.heroBanners} />
      <Preview />
      <Impact />
      <Projects projects={cms?.homeProjects} />
      <Event events={cms?.homeEvents} />
      <PhotoGallery images={cms?.homeGallery} />
      <Testimonial testimonials={cms?.testimonials} />
    </>
  );
};

export default Home;
