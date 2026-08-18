"use client";

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { fallbackByTitle, useCmsImageSrc } from '@/lib/cmsImage';

const FALLBACK_FEATURED = {
  title: 'Kupwara Mega Job Fair',
  date: '22 August 2026',
  venue: 'Kupwara, Jammu & Kashmir',
  category: 'Employment',
  description:
    'A Mega Job Fair connecting job seekers with employers across multiple industries and creating opportunities for meaningful employment.',
  image: '/assets/kupwara-mega-job-fair.jpeg',
  imageFit: 'contain',
};

const FeaturedEventCard = ({ featuredEvent }) => {
  const fallbackSrc = fallbackByTitle([FALLBACK_FEATURED], featuredEvent.title);
  const { src: imageSrc, onError: onImageError } = useCmsImageSrc(
    featuredEvent.image,
    fallbackSrc
  );
  const imageContain = featuredEvent.imageFit === 'contain';

  return (
    <section className="featured-event-section" aria-label="Featured event">
      <motion.article
        className="featured-event-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`featured-event-image-wrap${imageContain ? ' featured-event-image-wrap--contain' : ''}`}
        >
          <img
            src={imageSrc}
            alt={featuredEvent.title}
            loading="lazy"
            onError={onImageError}
            style={
              imageContain
                ? { objectFit: 'contain', objectPosition: 'center' }
                : undefined
            }
          />
          <span className="featured-event-badge">{featuredEvent.category}</span>
        </div>

        <div className="featured-event-body">
          <span className="featured-event-label">Featured Event</span>
          <h2 className="featured-event-title">{featuredEvent.title}</h2>
          <p className="featured-event-desc">{featuredEvent.description}</p>

          <div className="featured-event-meta">
            <span className="featured-meta-item">
              <Calendar size={16} aria-hidden="true" />
              {featuredEvent.date}
            </span>
            {featuredEvent.time ? (
              <span className="featured-meta-item">
                <Clock size={16} aria-hidden="true" />
                {featuredEvent.time}
              </span>
            ) : null}
            <span className="featured-meta-item">
              <MapPin size={16} aria-hidden="true" />
              {featuredEvent.venue}
            </span>
          </div>
        </div>
      </motion.article>
    </section>
  );
};

const FeaturedEvent = ({ items: itemsProp }) => {
  const items = Array.isArray(itemsProp) ? itemsProp : [FALLBACK_FEATURED];
  const featuredEvent = items[0];

  // No published featured event — do not resurrect hardcoded fallback
  if (!featuredEvent) return null;

  return <FeaturedEventCard featuredEvent={featuredEvent} />;
};

export default FeaturedEvent;
