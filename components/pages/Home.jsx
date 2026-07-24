import Hero from '@/components/home/Hero';
import Impact from '@/components/home/Impact';
import Preview from '@/components/home/Preview';
import Projects from '@/components/home/Projects';
import Testimonial from '@/components/home/Testimonial';
import Event from '@/components/home/Event';

const Home = () => {
  return (
    <>
      <Hero />
      <Preview/>
      <Impact/>
      <Projects/>
      <Event/>
      <Testimonial/>
  </>
  )
}

export default Home;
