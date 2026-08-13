"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';


const FALLBACK_EVENTS = [
  {
    id: 'kupwara-mega-job-fair',
    title: 'Kupwara Mega Job Fair',
    description:
      'A Mega Job Fair connecting job seekers with employers across multiple industries and creating opportunities for meaningful employment.',
    speaker: '',
    date: '22 August 2026',
    venue: 'Kupwara, Jammu & Kashmir',
    category: 'Employment',
    image: '/assets/kupwara-mega-job-fair.jpeg',
    detailsLink: '/events',
  },
  {
    id: 1,
    title: "Employability Training Programme (ETP)",
    description:
      "A practical training programme that prepares graduates for today's job market through resume writing, communication skills and interview preparation.",
    speaker: "",
    date: "24 July 2026",
    venue: "Mumbai",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=300&h=300&q=80",
    detailsLink: "#etp-details"
  },
  {
    id: 2,
    title: "Unity Mega Job Fair",
    description:
      "Meet leading employers, attend interviews and explore career opportunities across multiple industries at one of India's largest job fairs.",
    speaker: "",
    date: "12 August 2026",
    venue: "Mumbai",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=300&h=300&q=80",
    detailsLink: "#job-fair"
  }
];

const Event = ({ events }) => {
  const eventsData = Array.isArray(events) ? events : FALLBACK_EVENTS;
  const [hoveredEventId, setHoveredEventId] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="events-list-section">
      <div className="events-list-container">
        
        {/* Cinematic Header Reveal */}
        <div className={`events-section-header cinematic-fade-in ${isRevealed ? 'active' : ''}`}>
          <h2>
            UPCOMING <span className="text-blue-accent">EVENTS</span>
          </h2>
          <div className="decorative-line-wrapper">
            <span className="line-segment short"></span>
            <span className="line-segment long"></span>
            <span className="line-segment short"></span>
          </div>
        </div>

        {/* 3D Perspective Animation Wrapper */}
        <div 
          ref={sectionRef} 
          className={`events-vertical-stack perspective-stage ${isRevealed ? 'active' : ''}`}
        >
          {eventsData.map((event, index) => (
            <div 
              key={event.id} 
              className={`event-list-row-card sequential-card ${hoveredEventId === event.id ? 'card-focused' : ''}`}
              style={{ '--card-index': index }}
              onMouseEnter={() => setHoveredEventId(event.id)}
              onMouseLeave={() => setHoveredEventId(null)}
            >
              
              {/* Left Image Thumbnail */}
              <div className="event-thumbnail-box">
                <img src={event.image} alt={event.title} className="event-row-img" />
              </div>

              {/* Central Details */}
              <div className="event-details-column">
                <h3 className="event-row-title">{event.title}</h3>
                <p className="event-row-desc">{event.description}</p>
                
                <div className="event-metadata-row">
                  {event.speaker ? (
                    <span className="meta-badge-item">
                      <span className="badge-icon">👤</span> {event.speaker}
                    </span>
                  ) : null}
                  <span className="meta-badge-item">
                    <span className="badge-icon">📅</span> {event.date}
                  </span>
                  <span className="meta-badge-item">
                    <span className="badge-icon">📍</span> {event.venue}
                  </span>
                </div>
              </div>

              {/* Right Action Button */}
              {/* <div className="event-action-box">
                <a href={event.detailsLink} className="event-view-details-btn">
                  VIEW DETAILS
                </a>
              </div> */}

            </div>
          ))}
        </div>

        {/* View All Events CTA */}
        <div className={`events-global-action-row spatial-reveal ${isRevealed ? 'active' : ''}`}>
          <div className="events-view-all-cta-wrap">
            <Link href="/events" className="events-view-all-btn-premium">
              <span className="events-view-all-btn-text">View All Events</span>
              <ArrowRight className="events-view-all-arrow" size={20} aria-hidden="true" />
            </Link>
            {/* <p className="events-view-all-subtext">
              Explore all upcoming programs, workshops, and community initiatives.
            </p> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Event;