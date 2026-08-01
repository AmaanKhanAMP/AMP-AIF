import Hero from '@/components/home/Hero';
import Impact from '@/components/home/Impact';
import Preview from '@/components/home/Preview';
import Projects from '@/components/home/Projects';
import PhotoGallery from '@/components/home/PhotoGallery';
import Testimonial from '@/components/home/Testimonial';
import Event from '@/components/home/Event';

const Home = ({
  heroBanners,
  homeProjects,
  homeEvents,
  homeGallery,
  testimonials,
}) => {
  return (
    <>
      <Hero slides={heroBanners} />
      <Preview/>
      <Impact/>
      <Projects projects={homeProjects} />
      <Event events={homeEvents} />
      <PhotoGallery images={homeGallery} />
      <Testimonial testimonials={testimonials} />
  </>
  )
}

export default Home;
