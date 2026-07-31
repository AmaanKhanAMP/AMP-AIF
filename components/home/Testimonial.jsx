"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import usePublishedContent from '@/hooks/usePublishedContent';
import { mapTestimonial } from '@/lib/contentApi';

const AUTO_SCROLL_MS = 5000;
const SWIPE_THRESHOLD_PX = 48;
const EASE = [0.45, 0, 0.2, 1];

const FALLBACK_TESTIMONIALS = [
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
  },
];

const Testimonial = () => {
  const testimonialsData = usePublishedContent(
    'testimonials',
    FALLBACK_TESTIMONIALS,
    mapTestimonial
  );
  const total = testimonialsData.length;

  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const pointerRef = useRef({ tracking: false, startX: 0, startY: 0 });
  const resumeTimerRef = useRef(null);

  const clearResumeTimer = useCallback(() => {
    if (resumeTimerRef.current != null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const pauseAutoplay = useCallback(() => {
    clearResumeTimer();
    setIsPaused(true);
  }, [clearResumeTimer]);

  const resumeAutoplay = useCallback(
    (delayMs = 0) => {
      clearResumeTimer();
      if (delayMs > 0) {
        resumeTimerRef.current = window.setTimeout(() => {
          setIsPaused(false);
          resumeTimerRef.current = null;
        }, delayMs);
        return;
      }
      setIsPaused(false);
    },
    [clearResumeTimer]
  );

  const goTo = useCallback(
    (index, dir = 1) => {
      if (total <= 0) return;
      const next = ((index % total) + total) % total;
      setDirection(dir);
      setActiveIndex(next);
    },
    [total]
  );

  const handlePrev = useCallback(() => {
    goTo(activeIndex - 1, -1);
  }, [activeIndex, goTo]);

  const handleNext = useCallback(() => {
    goTo(activeIndex + 1, 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused || total <= 1) return undefined;

    const id = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(id);
  }, [isPaused, total, activeIndex]);

  useEffect(() => () => clearResumeTimer(), [clearResumeTimer]);

  const getCardPositionClass = (index) => {
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

  const onPointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointerRef.current = {
      tracking: true,
      startX: event.clientX,
      startY: event.clientY,
    };
    if (event.pointerType !== 'mouse') {
      pauseAutoplay();
    }
  };

  const onPointerUp = (event) => {
    if (!pointerRef.current.tracking) return;

    const dx = event.clientX - pointerRef.current.startX;
    const dy = event.clientY - pointerRef.current.startY;
    const isSwipe =
      Math.abs(dx) >= SWIPE_THRESHOLD_PX && Math.abs(dx) > Math.abs(dy);

    pointerRef.current.tracking = false;

    if (isSwipe) {
      if (dx < 0) handleNext();
      else handlePrev();
    }

    if (event.pointerType !== 'mouse') {
      resumeAutoplay(900);
    }
  };

  const onPointerCancel = () => {
    pointerRef.current.tracking = false;
    resumeAutoplay(600);
  };

  const active = testimonialsData[activeIndex];
  if (!active) return null;

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <header className="testimonials-header">
          <h2>
            WORDS FROM <span className="text-blue-accent">PEOPLE</span>
          </h2>
          <div className="decorative-line-wrapper" aria-hidden="true">
            <span className="line-segment short" />
            <span className="line-segment long" />
            <span className="line-segment short" />
          </div>
        </header>

        <div
          className="testimonial-slider-window"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={() => resumeAutoplay(0)}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
        >
          <div className="testimonial-avatar-band">
            <button
              type="button"
              className="slider-arrow left-arrow is-desktop-arrow"
              onClick={() => {
                pauseAutoplay();
                handlePrev();
                resumeAutoplay(1400);
              }}
              aria-label="Previous testimonial"
            >
              <span aria-hidden="true">‹</span>
            </button>

            <div className="avatar-stage-row">
              {testimonialsData.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  className={`avatar-card-node ${getCardPositionClass(index)}`}
                  onClick={() => {
                    pauseAutoplay();
                    const raw = ((index - activeIndex) % total + total) % total;
                    const offset = raw <= Math.floor(total / 2) ? raw : raw - total;
                    goTo(index, offset >= 0 ? 1 : -1);
                    resumeAutoplay(1400);
                  }}
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                >
                  <img src={item.avatar} alt="" className="testimonial-avatar" />
                </button>
              ))}
            </div>

            <button
              type="button"
              className="slider-arrow right-arrow is-desktop-arrow"
              onClick={() => {
                pauseAutoplay();
                handleNext();
                resumeAutoplay(1400);
              }}
              aria-label="Next testimonial"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>

          <div className="testimonial-text-viewport">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={active.id}
                className="testimonial-text-block"
                custom={direction}
                variants={{
                  enter: (dir) => ({ opacity: 0, x: 28 * dir }),
                  center: { opacity: 1, x: 0 },
                  exit: (dir) => ({ opacity: 0, x: -28 * dir }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: EASE }}
              >
                <p className="testimonial-quote">{active.quote}</p>
                <h3 className="testimonial-author-name">{active.name}</h3>
                <p className="testimonial-author-meta">
                  {active.role} &bull;{' '}
                  <span className="meta-location">{active.location}</span>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonial-mobile-nav">
            <button
              type="button"
              className="slider-arrow left-arrow"
              onClick={() => {
                pauseAutoplay();
                handlePrev();
                resumeAutoplay(1400);
              }}
              aria-label="Previous testimonial"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              className="slider-arrow right-arrow"
              onClick={() => {
                pauseAutoplay();
                handleNext();
                resumeAutoplay(1400);
              }}
              aria-label="Next testimonial"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
