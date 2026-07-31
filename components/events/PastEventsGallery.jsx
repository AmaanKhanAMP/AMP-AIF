"use client";

import EventSection from './EventSection';
import usePublishedContent from '@/hooks/usePublishedContent';
import { mapPastEvent } from '@/lib/contentApi';

const FALLBACK_PAST = [
  {
    id: 1,
    title: 'National Job Fair 2025',
    category: 'Employment',
    date: '15 Mar 2025',
    time: '9:00 AM – 5:00 PM',
    venue: 'Mumbai',
    description:
      'A large-scale placement drive connecting skilled youth with corporate employers across manufacturing, IT, and services.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    registrationLink: null,
  },
  {
    id: 2,
    title: 'Medical Relief Camp',
    category: 'Medical Camp',
    date: '22 Jun 2025',
    time: '8:00 AM – 2:00 PM',
    venue: 'Hyderabad',
    description:
      'Free health check-ups, screenings, and medical relief support delivered to underserved neighbourhoods.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    registrationLink: null,
  },
  {
    id: 3,
    title: 'Scholarship Distribution Ceremony',
    category: 'Education',
    date: '10 Dec 2024',
    time: '11:00 AM – 1:00 PM',
    venue: 'Delhi',
    description:
      'Recognising meritorious students and awarding scholarships to support higher education pathways.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    registrationLink: null,
  },
  {
    id: 4,
    title: 'Skill Training Graduation',
    category: 'Skill Development',
    date: '18 Sep 2024',
    time: '10:00 AM – 12:30 PM',
    venue: 'Bengaluru',
    description:
      'Celebrating graduates of vocational programs in digital skills, tailoring, and entrepreneurship.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    registrationLink: null,
  },
  {
    id: 5,
    title: 'Mentorship Summit',
    category: 'Career Guidance',
    date: '05 Aug 2024',
    time: '10:00 AM – 4:00 PM',
    venue: 'Pune',
    description:
      'Industry mentors guided students through academic choices, resume building, and career planning.',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    registrationLink: null,
  },
  {
    id: 6,
    title: 'Community Upliftment Drive',
    category: 'Community Outreach',
    date: '12 Nov 2023',
    time: '9:30 AM – 1:30 PM',
    venue: 'Kolkata',
    description:
      'Grassroots outreach with essential supplies, financial literacy workshops, and self-help group support.',
    image:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    registrationLink: null,
  },
];

const PastEventsGallery = () => {
  const pastEvents = usePublishedContent(
    'gallery-items',
    FALLBACK_PAST,
    mapPastEvent
  );

  return (
    <EventSection
      id="past-events"
      tag="Our Legacy"
      title="Past Events"
      subtitle="Celebrating years of transformative impact across communities throughout India."
      events={pastEvents}
      ariaLabel="Past events"
      className="past-events-listing"
    />
  );
};

export default PastEventsGallery;
