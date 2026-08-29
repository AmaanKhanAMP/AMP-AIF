"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { fallbackByTitle, useCmsImageSrc } from '@/lib/cmsImage';

import communityImpactBanner from '@/src/assets/hero-community-impact.png';
import educationBanner from '@/src/assets/hero-education.png';
import employmentBanner from '@/src/assets/hero-employment.png';

const assetSrc = (image) => (typeof image === 'string' ? image : image?.src);

const communityImpactImage = assetSrc(communityImpactBanner);
const educationBannerImage = assetSrc(educationBanner);
const employmentBannerImage = assetSrc(employmentBanner);

const FALLBACK_SLIDES = [
  {
    id: 1,
    image: educationBannerImage,
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
    image: employmentBannerImage,
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
    image: communityImpactImage,
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

const HeroSlide = ({ slide, isActive }) => {
  const fallbackSrc = fallbackByTitle(FALLBACK_SLIDES, slide.titleStart);
  const { src, onError } = useCmsImageSrc(slide.image, fallbackSrc);
  const isEducationSlide =
    src === educationBannerImage ||
    (typeof src === 'string' && src.includes('hero-education'));
  const isEmploymentSlide =
    src === employmentBannerImage ||
    (typeof src === 'string' && src.includes('hero-employment'));

  return (
    <div
      className={`carousel-slide ${isActive ? 'active' : ''} ${isEducationSlide ? 'carousel-slide-education' : ''} ${isEmploymentSlide ? 'carousel-slide-employment' : ''}`}
      style={{ backgroundImage: `linear-gradient(rgba(11, 44, 72, 0.65), rgba(6, 24, 40, 0.75)), url(${src})` }}
    >
      {slide.image ? (
        <img src={slide.image} alt="" onError={onError} hidden />
      ) : null}
      <div className="carousel-content-container">
        <div className="carousel-text-block">
          <h1 className="carousel-title">
            {slide.titleStart?.endsWith(' Through') ? (
              <>
                {slide.titleStart.slice(0, -8)}
                <br aria-hidden="true" />
                {' Through '}
                <span className="title-blue-accent">{slide.titleAccent}</span>
              </>
            ) : (
              <>
                {slide.titleStart}{' '}
                <span className="title-blue-accent">{slide.titleAccent}</span>
              </>
            )}
          </h1>
          <p className="carousel-subtitle">{slide.subtitle}</p>

          <div className="carousel-btn-group">
            <Link href={slide.primaryLink} className="btn-primary-blue">{slide.primaryBtnText}</Link>
            <Link href={slide.secondaryLink} className="btn-outline-white">{slide.secondaryBtnText}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

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
        <HeroSlide
          key={slide.id}
          slide={slide}
          isActive={index === currentSlide}
        />
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
