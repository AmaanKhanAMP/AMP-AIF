"use client";

import { useState, useRef } from 'react';

const FALLBACK_PROJECTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80',
    title: 'ACE - Academy for Competitive Exams',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    title: 'AMP Employment Assistance Cell',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
    title: 'National Talent Search (NTS)',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    title: 'AMP Higher Education Scholarship',
  },
];

const Projects = ({ projects }) => {
  const projectsData = Array.isArray(projects) ? projects : FALLBACK_PROJECTS;
  const [isPaused, setIsPaused] = useState(false);
  const sliderTrackRef = useRef(null);

  const duplicatedProjects = [...projectsData, ...projectsData];

  return (
    <section className="latest-projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>
            OUR <span className="text-blue-accent">PROJECTS</span>
          </h2>
          <div className="decorative-line-wrapper">
            <span className="line-segment short"></span>
            <span className="line-segment long"></span>
            <span className="line-segment short"></span>
          </div>
          <p className="section-intro-text">
            Through our various initiatives, we work towards creating opportunities in education,
            employment, healthcare, skill development and community empowerment.
          </p>
        </div>

        <div className="projects-carousel-window">
          <div
            ref={sliderTrackRef}
            className={`projects-slider-track ${isPaused ? 'paused' : ''}`}
          >
            {duplicatedProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="project-card"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-hover-overlay">
                  <div className="overlay-content">
                    <p className="project-description-text">{project.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
