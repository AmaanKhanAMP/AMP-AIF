"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const DEFAULT_DESCRIPTION =
  'A memorable AMP India Foundation event bringing communities together for lasting impact.';

const EventCard = ({
  event,
  index = 0,
  buttonLabel = 'Register Now',
  showButton = false,
  /** When true, empty CMS descriptions use a short fallback so cards never look blank. */
  useDescriptionFallback = true,
}) => {
  const href = event.ctaHref || null;
  const fromApi = event.description?.trim() || '';
  const description = fromApi || (useDescriptionFallback ? DEFAULT_DESCRIPTION : '');

  const hasMeta = Boolean(event.date || event.venue);

  return (
    <motion.article
      className="event-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="event-card-image">
        <img src={event.image} alt={event.title} loading="lazy" />
        {event.category ? (
          <span className="event-card-category">{event.category}</span>
        ) : null}
      </div>

      <div className="event-card-body">
        <h3 className="event-card-title">{event.title}</h3>

        {hasMeta ? (
          <div className="event-card-meta">
            {event.date ? (
              <span>
                <Calendar aria-hidden="true" />
                {event.date}
              </span>
            ) : null}
            {event.venue ? (
              <span>
                <MapPin aria-hidden="true" />
                {event.venue}
              </span>
            ) : null}
          </div>
        ) : null}

        {description ? <p className="event-card-desc">{description}</p> : null}

        {showButton && href ? (
          <a href={href} className="event-card-cta">
            {buttonLabel}
          </a>
        ) : null}
      </div>
    </motion.article>
  );
};

export default EventCard;
