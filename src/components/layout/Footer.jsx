import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="amp-footer">
      
      {/* Top Banner Call-to-Action */}
      <div className="footer-cta-bar">
        <div className="footer-cta-container">
          <h2>Join Our Mission to Empower Lives Through Education & Employment.</h2>
          <NavLink to="/volunteer" className="cta-button">BECOME A VOLUNTEER</NavLink>
        </div>
      </div>
      
      {/* Main 4-Column Grid Section */}
      <div className="footer-main-content">
        <div className="footer-grid-container">
          
          {/* Column 1: About Us */}
          <div className="footer-column about-col">
            <h3>ABOUT US</h3>
            <p>
              AMP India Foundation is a non-profit organization dedicated to regularise 
              and scale up socio-economic development welfare activities. We empower 
              underprivileged youth through sustainable educational models, rigorous training, 
              and professional mentorship.
            </p>
            <NavLink to="/about" className="read-more-link">READ MORE →</NavLink>
          </div>

          {/* Column 2: Useful Links */}
          <div className="footer-column links-col">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li><NavLink to="/"><span>▶</span> Home</NavLink></li>
              <li><NavLink to="/about"><span>▶</span> About Us</NavLink></li>
              <li><NavLink to="/what-we-do"><span>▶</span> What We Do</NavLink></li>
              <li><NavLink to="/projects"><span>▶</span> Projects</NavLink></li>
              <li><NavLink to="/events"><span>▶</span> Events</NavLink></li>
              <li><NavLink to="/volunteer"><span>▶</span> Join Us / Volunteer</NavLink></li>
              <li><NavLink to="/support-us"><span>▶</span> Support Us</NavLink></li>
              <li><NavLink to="/contact"><span>▶</span> Contact</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Recent Focus/Posts */}
          <div className="footer-column post-col">
            <h3>RECENT FOCUS</h3>
            <div className="post-item">
              <NavLink to="/projects/education">National Talent Search Examination</NavLink>
              <span className="post-date">July 2026</span>
            </div>
            <div className="post-item">
              <NavLink to="/projects/training">Employability Training Programs</NavLink>
              <span className="post-date">June 2026</span>
            </div>
            <div className="post-item">
              <NavLink to="/projects/education">Higher Education Scholarship Distribution</NavLink>
              <span className="post-date">May 2026</span>
            </div>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="footer-column touch-col">
            <h3>GET IN TOUCH</h3>
            <div className="contact-info-item">
              <span className="contact-label">📍 Address:</span>
              <p>AMP India Foundation, Mumbai, Maharashtra, India.</p>
            </div>
            <div className="contact-info-item">
              <span className="contact-label">📞 Phone:</span>
              <p>+91 93200 60093</p>
            </div>
            <div className="contact-info-item">
              <span className="contact-label">✉️ Email:</span>
              <p>info@ampindia.org</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            Copyrights © 2026 All Rights Reserved. Powered by <span className="highlight-text">AMP India Foundation</span>
          </p>
          <NavLink to="/volunteer" className="join-now-link">Join Us Now!</NavLink>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
