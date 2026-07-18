import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const slidesData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80',
    titleStart: 'Empowering Youth Through',
    titleAccent: 'Education',
    subtitle: 'Every brilliant mind deserves an opportunity. We build impactful educational paths to secure sustainable futures for underprivileged students.',
    primaryBtnText: 'READ MORE',
    secondaryBtnText: 'OUR PROJECTS',
    primaryLink: '/about',
    secondaryLink: '/projects'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1920&q=80',
    titleStart: 'Bridging the Gap to Rightful',
    titleAccent: 'Employment',
    subtitle: 'Transforming potential into professions. Our structured training modules open direct job avenues for deserving job seekers.',
    primaryBtnText: 'JOIN US',
    secondaryBtnText: 'VIEW IMPACT',
    primaryLink: '/volunteer',
    secondaryLink: '/about'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80',
    titleStart: 'Sustaining Growth via Economic',
    titleAccent: 'Empowerment',
    subtitle: 'Uplifting grassroots communities by fostering self-reliance, practical skill development setups, and small-scale business incubation.',
    primaryBtnText: 'SUPPORT US',
    secondaryBtnText: 'OUR MISSION',
    primaryLink: '/support-us',
    secondaryLink: '/what-we-do'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  const triggerAnimation = (callback) => {
    if (animating) return;
    setAnimating(true);
    callback();
    setTimeout(() => setAnimating(false), 800); 
  };

  const handlePrev = () => {
    triggerAnimation(() => {
      setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
    });
  };

  const handleNext = () => {
    triggerAnimation(() => {
      setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, animating]);

  return (
    <div className="hero-carousel-wrapper">
      {slidesData.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(11, 44, 72, 0.65), rgba(6, 24, 40, 0.75)), url(${slide.image})` }}
        >
          <div className="carousel-content-container">
            <div className="carousel-text-block">
              <h1 className="carousel-title">
                {slide.titleStart} <span className="title-blue-accent">{slide.titleAccent}</span>
              </h1>
              <p className="carousel-subtitle">{slide.subtitle}</p>
              
              <div className="carousel-btn-group">
                <NavLink to={slide.primaryLink} className="btn-primary-blue">{slide.primaryBtnText}</NavLink>
                <NavLink to={slide.secondaryLink} className="btn-outline-white">{slide.secondaryBtnText}</NavLink>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="nav-arrow arrow-left" onClick={handlePrev} aria-label="Previous slide">
        <span>‹</span>
      </button>
      <button className="nav-arrow arrow-right" onClick={handleNext} aria-label="Next slide">
        <span>›</span>
      </button>

      <div className="carousel-indicators">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => triggerAnimation(() => setCurrentSlide(index))}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
