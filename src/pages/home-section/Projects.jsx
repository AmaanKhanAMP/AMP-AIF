import { useState, useRef} from 'react';


const projectsData = [
  {
    id: 1,
    // Unique Image 1: Modern group competitive learning environment
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80',
    title: 'ACE - Academy for Competitive Exams',
    link: '#ace-project'
  },
  {
    id: 2,
    // Unique Image 2: Professional networking / corporate hiring setup
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    title: 'AMP Employment Assistance Cell',
    link: '#employment-cell'
  },
  {
    id: 3,
    // Unique Image 3: Focused students writing a national evaluation exam
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
    title: 'National Talent Search (NTS)',
    link: '#nts-exam'
  },
  {
    id: 4,
    // Unique Image 4: Group celebration / graduation mentorship support
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    title: 'AMP Higher Education Scholarship',
    link: '#scholarships'
  }
];

const Projects = () => {
  const [isPaused, setIsPaused] = useState(false);
  const sliderTrackRef = useRef(null);

  // Duplicating the dataset lists for a seamless infinite loop animation effect
  const duplicatedProjects = [...projectsData, ...projectsData];

  return (
    <section className="latest-projects-section">
      <div className="projects-container">
        
        {/* Section Title Header */}
        <div className="projects-header">
          <h2>
            LATEST <span className="text-blue-accent">PROJECTS</span>
          </h2>
          <div className="decorative-line-wrapper">
            <span className="line-segment short"></span>
            <span className="line-segment long"></span>
            <span className="line-segment short"></span>
          </div>
        </div>

        {/* Carousel Outer Viewing Window */}
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
                
                {/* Hover Reveal Card Overlay Details */}
                <div className="project-hover-overlay">
                  <div className="overlay-content">
                    <a href={project.link} className="view-project-btn">
                      VIEW PROJECT
                    </a>
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