import { useState } from 'react';


const testimonialsData = [
  {
    id: 1,
    name: 'Aamir Malik',
    role: 'ACE Alumnus / UPSC Aspirant',
    location: 'New Delhi',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&h=300&q=80',
    quote: '"AMP India Foundations Academy for Competitive Exams provided me with not just premium resources, but unmatched mentorship from industry experts. It broke down financial barriers for my civil services preparation."',
  },
  {
    id: 2,
    name: 'Sana Khan',
    role: 'Placed Candidate',
    location: 'Mumbai Cell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80',
    quote: '"Through AMPs Employment Assistance Cell, I attended a mega job fair and secured a position as a Software Engineer. Their mock interviews and soft-skill bootcamps completely changed my career trajectory."',
  },
  {
    id: 3,
    name: 'Imran Shaikh',
    role: 'Active Chapter Volunteer',
    location: 'Pune Chapter',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
    quote: '"Volunteering with the National Talent Search (NTS) projects has given me immense purpose. Seeing grassroots students get access to higher education scholarships is the ultimate reward."',
  }
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Defaults to the center card (Sana Khan)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  // Helper calculation to determine position shifts dynamically
  const getCardPositionClass = (index) => {
    if (index === activeIndex) return 'position-center';
    if ((activeIndex === 0 && index === testimonialsData.length - 1) || index === activeIndex - 1) {
      return 'position-left';
    }
    return 'position-right';
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Section Heading */}
        <div className="testimonials-header">
          <h2>
            WORDS FROM <span className="text-blue-accent">PEOPLE</span>
          </h2>
          <div className="decorative-line-wrapper">
            <span className="line-segment short"></span>
            <span className="line-segment long"></span>
            <span className="line-segment short"></span>
          </div>
        </div>

        {/* Shifting Carousel Window Block */}
        <div className="testimonial-slider-window">
          
          {/* Left Arrow Button */}
          <button className="slider-arrow left-arrow" onClick={handlePrev} aria-label="Previous testimonial">
            <span>‹</span>
          </button>
          
          {/* Right Arrow Button */}
          <button className="slider-arrow right-arrow" onClick={handleNext} aria-label="Next testimonial">
            <span>›</span>
          </button>

          <div className="shifting-stage-container">
            
            {/* 3D Dynamic Shifting Avatar Track on Top */}
            <div className="avatar-stage-row">
              {testimonialsData.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`avatar-card-node ${getCardPositionClass(index)}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                </div>
              ))}
            </div>

            {/* Content Display Grid for Active Highlighting Card below */}
            <div className="testimonial-text-block">
              <p className="testimonial-quote">
                {testimonialsData[activeIndex].quote}
              </p>
              <h3 className="testimonial-author-name">
                {testimonialsData[activeIndex].name}
              </h3>
              <p className="testimonial-author-meta">
                {testimonialsData[activeIndex].role} &bull; <span className="meta-location">{testimonialsData[activeIndex].location}</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonial;