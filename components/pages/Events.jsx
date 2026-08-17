import EventsHero from '@/components/events/EventsHero';
import FeaturedEvent from '@/components/events/FeaturedEvent';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import EventCategories from '@/components/events/EventCategories';
import EventTimeline from '@/components/events/EventTimeline';
import PastEventsGallery from '@/components/events/PastEventsGallery';
import VolunteerCTA from '@/components/events/VolunteerCTA';
import '@/styles/Events.css';

const Events = ({
  featuredEvents,
  upcomingEvents,
  pastEvents,
  upcomingVisible,
}) => {
  return (
    <div className="events-page-canvas">
      <EventsHero />
      <FeaturedEvent items={featuredEvents} />
      <UpcomingEvents events={upcomingEvents} isVisible={upcomingVisible} />
      <PastEventsGallery events={pastEvents} />
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
