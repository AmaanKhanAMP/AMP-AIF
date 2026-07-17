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
  },
  {
    id: 4,
    name: 'Aisha Khan',
    role: 'Scholarship Recipient',
    location: 'Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80',
    quote: '"AIF\'s higher education scholarship changed my life. As a meritorious student from an underprivileged family, I could never afford college fees. AMP India Foundation funded my degree and connected me with mentors who guided me through every academic challenge. Today, I am the first graduate in my family."',
  },
  {
    id: 5,
    name: 'Rahul Sharma',
    role: 'Software Engineer',
    location: 'Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80',
    quote: '"After attending AMP\'s Employability Training Programme, I gained real confidence in interviews and resume building. The national job fair organized by AIF connected me directly with recruiters. Within weeks, I secured a role as a Software Engineer. Their structured approach turned my potential into a lasting profession."',
  },
  {
    id: 6,
    name: 'Fatima Shaikh',
    role: 'Volunteer',
    location: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300&q=80',
    quote: '"Volunteering with AMP India Foundation has been deeply fulfilling. I helped coordinate medical relief camps and education workshops across Maharashtra. The professionalism and transparency of the team inspired me to contribute more. Serving underserved communities through AIF gave my skills a meaningful purpose beyond the corporate world."',
  },
  {
    id: 7,
    name: 'Imran Siddiqui',
    role: 'Entrepreneur',
    location: 'Ahmedabad',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80',
    quote: '"AIF\'s vocational training and economic empowerment program helped me launch my small tailoring business. They provided skill development workshops, micro-financing guidance, and mentorship on setting up self-help groups. What started as a single sewing machine is now a livelihood supporting my entire family."',
  },
  {
    id: 8,
    name: 'Neha Patel',
    role: 'Parent',
    location: 'Pune',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80',
    quote: '"As a parent, I was worried about my daughter\'s future until we discovered AMP\'s Centres of Excellence. The career counselling and scholarship support she received transformed her academic journey. AIF bridges the opportunity gap for deserving children — I am forever grateful for their unbiased approach."',
  },
  {
    id: 9,
    name: 'Mohammed Arif',
    role: 'Career Guidance Participant',
    location: 'Lucknow',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80',
    quote: '"The career guidance sessions conducted by AIF professionals opened doors I never knew existed. From choosing the right vocational path to preparing for employment drives, every step was supported. Their pan-India network of volunteers truly empowers youth who lack access to quality mentorship and corporate exposure."',
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

  // Always show: far-left, near-left, active, near-right, far-right (wraps with modular arithmetic)
  const getCardPositionClass = (index) => {
    const total = testimonialsData.length;
    const raw = ((index - activeIndex) % total + total) % total;
    const offset = raw <= Math.floor(total / 2) ? raw : raw - total;

    switch (offset) {
      case 0:
        return 'position-center';
      case -1:
        return 'position-left-1';
      case -2:
        return 'position-left-2';
      case 1:
        return 'position-right-1';
      case 2:
        return 'position-right-2';
      default:
        return 'position-hidden';
    }
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