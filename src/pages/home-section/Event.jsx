import  { useState, useEffect, useRef } from 'react';


const eventsData = [
  {
    id: 1,
    title: "Employability Training Programme (ETP)",
    description: "A comprehensive pre-employment preparation workshop focused on grooming young graduates. Enhance your skills in resume building, communication, and mock corporate interview execution.",
    speaker: "Mr. Tirmizi Ashrafi",
    date: "24 Jul 2026",
    venue: "Seminar Hall 2, Mumbai Campus",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=300&h=300&q=80",
    detailsLink: "#etp-details"
  },
  {
    id: 2,
    title: "National Mega Job Fair & Campus Placement Drive",
    description: "Bridging the gap between skilled, underprivileged youth and top-tier corporate employers. Open registration platform for multiple industrial and corporate sectors across India.",
    speaker: "Corporate HR Panel",
    date: "12 Aug 2026",
    venue: "Main Exhibition Grounds, Nagpada",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=300&h=300&q=80",
    detailsLink: "#job-fair"
  },
  {
    id: 3,
    title: "Skill Training & Vocational Orientation",
    description: "Specialized professional career guidance seminar meant to introduce self-employment micro-financing structures, small-scale business incubation, and vocational paths.",
    speaker: "AIF Mentorship Board",
    date: "05 Sep 2026",
    venue: "Centre of Excellence, Auditorium B",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=300&h=300&q=80",
    detailsLink: "#skill-training"
  }
];

const Event = () => {
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
                  <span className="meta-badge-item">
                    <span className="badge-icon">👤</span> {event.speaker}
                  </span>
                  <span className="meta-badge-item">
                    <span className="badge-icon">📅</span> {event.date}
                  </span>
                  <span className="meta-badge-item">
                    <span className="badge-icon">📍</span> {event.venue}
                  </span>
                </div>
              </div>

              {/* Right Action Button */}
              <div className="event-action-box">
                <a href={event.detailsLink} className="event-view-details-btn">
                  VIEW DETAILS
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* ================= NEW VIEW ALL EVENTS OPTION ================= */}
        <div className={`events-global-action-row spatial-reveal ${isRevealed ? 'active' : ''}`}>
          <a href="/events" className="events-view-all-link-lux">
            <span>View All Events</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lux-arrow-vector">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Event;