"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1692269725836-fbd72e98883f?auto=format&fit=crop&w=900&q=80',
    alt: 'Indian schoolchildren seated together in a classroom learning session',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1692269725911-87697c558be1?auto=format&fit=crop&w=900&q=80',
    alt: 'Two young Indian girls studying at a school desk with notebooks',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1692269725827-699e04a11cdf?auto=format&fit=crop&w=900&q=80',
    alt: 'Indian boys reading and studying together during an education support session',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=900&q=80',
    alt: 'Indian teacher volunteering at a chalkboard to guide students in class',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1759738098462-90ffac98c554?auto=format&fit=crop&w=900&q=80',
    alt: 'Rural Indian women engaged in a livelihood weaving and skill development program',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80',
    alt: 'Indian children learning outdoors during a community education outreach program',
  },
];

const ease = [0.22, 1, 0.36, 1];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const PhotoGallery = () => {
  return (
    <section className="home-photo-gallery" aria-label="Photo gallery">
      <div className="home-gallery-glow" aria-hidden="true" />
      <div className="home-gallery-blob home-gallery-blob-tr" aria-hidden="true" />
      <div className="home-gallery-blob home-gallery-blob-bl" aria-hidden="true" />

      <motion.div
        className="home-gallery-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.header className="home-gallery-header" variants={fadeUp}>
          <p className="home-gallery-eyebrow">PHOTO GALLERY</p>
          <h2 className="home-gallery-title">
            Capturing Moments of <span className="title-accent-blue">Impact</span>
          </h2>
          <div className="decorative-line-wrapper" aria-hidden="true">
            <span className="line-segment short" />
            <span className="line-segment long" />
            <span className="line-segment short" />
          </div>
          <p className="home-gallery-subtitle">
            A glimpse into our initiatives, volunteers, and the lives transformed through
            education, healthcare, skill development, and community empowerment.
          </p>
        </motion.header>

        <div className="home-gallery-grid">
          {GALLERY_IMAGES.map((item) => (
            <motion.figure
              key={item.id}
              className="home-gallery-card"
              variants={imageVariants}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="home-gallery-image"
                loading="lazy"
              />
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PhotoGallery;
