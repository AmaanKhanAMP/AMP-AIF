import EventsHero from '@/components/events/EventsHero';
import FeaturedEvent from '@/components/events/FeaturedEvent';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import EventCategories from '@/components/events/EventCategories';
import EventTimeline from '@/components/events/EventTimeline';
import PastEventsGallery from '@/components/events/PastEventsGallery';
// import ImpactStats from '@/components/events/ImpactStats';
import VolunteerCTA from '@/components/events/VolunteerCTA';
// import FAQ from '@/components/events/FAQ';
import '@/styles/Events.css';

const Events = () => {
  return (
    <div className="events-page-canvas">
      <EventsHero />
      <FeaturedEvent />
      <UpcomingEvents />
      <EventCategories />
      <EventTimeline />
      <PastEventsGallery />
      {/* <ImpactStats /> */}
      <VolunteerCTA />
      {/* <FAQ /> */}
    </div>
  );
};

export default Events;
