"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';


const FALLBACK_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80',
    titleStart: 'Empowering Lives Through',
    titleAccent: 'Education',
    subtitle:
      'Every child deserves the opportunity to learn, grow and succeed. We support underprivileged students through scholarships, mentoring, career guidance and skill development to help them build a brighter future.',
    primaryBtnText: 'Learn More',
    secondaryBtnText: 'Our Projects',
    primaryLink: '/about',
    secondaryLink: '/projects',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1920&q=80',
    titleStart: 'Creating Opportunities Through',
    titleAccent: 'Employment',
    subtitle:
      "A good job can transform a family's future. Through employability training, career guidance, job fairs and placement support, we help young people become job-ready and connect them with meaningful employment opportunities.",
    primaryBtnText: 'Join Us',
    secondaryBtnText: 'Our Impact',
    primaryLink: '/volunteer',
    secondaryLink: '/#impact',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80',
    titleStart: 'Building Stronger',
    titleAccent: 'Communities',
    subtitle:
      'We empower individuals and families through skill development, entrepreneurship support, healthcare initiatives and community development programs, enabling them to become self-reliant and lead dignified lives.',
    primaryBtnText: 'Support Us',
    secondaryBtnText: 'Our Mission',
    primaryLink: '/support-us',
    secondaryLink: '/what-we-do',
  },
];

const HeroCarousel = ({ slides }) => {
  // Server-provided CMS data (array, possibly empty). Fallback only when fetch failed (null/undefined).
  const slidesData = Array.isArray(slides) ? slides : FALLBACK_SLIDES;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (currentSlide >= slidesData.length) setCurrentSlide(0);
  }, [slidesData.length, currentSlide]);

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
    if (!slidesData.length) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, animating, slidesData.length]);

  if (!slidesData.length) return null;

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
                <Link href={slide.primaryLink} className="btn-primary-blue">{slide.primaryBtnText}</Link>
                <Link href={slide.secondaryLink} className="btn-outline-white">{slide.secondaryBtnText}</Link>
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
