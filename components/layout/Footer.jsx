"use client";

import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="amp-footer">
      
      {/* Top Banner Call-to-Action */}
      <div className="footer-cta-bar">
        <div className="footer-cta-container">
          <h2>Join Our Mission to Empower Lives Through Education & Employment.</h2>
          <Link href="/volunteer" className="cta-button">BECOME A VOLUNTEER</Link>
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
            <Link href="/about" className="read-more-link">READ MORE →</Link>
          </div>

          {/* Column 2: Useful Links */}
          <div className="footer-column links-col">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li><Link href="/"><span>▶</span> Home</Link></li>
              <li><Link href="/about"><span>▶</span> About Us</Link></li>
              <li><Link href="/what-we-do"><span>▶</span> What We Do</Link></li>
              <li><Link href="/projects"><span>▶</span> Projects</Link></li>
              <li><Link href="/events"><span>▶</span> Events</Link></li>
              <li><Link href="/volunteer"><span>▶</span> Join Us / Volunteer</Link></li>
              <li><Link href="/support-us"><span>▶</span> Support Us</Link></li>
              <li><Link href="/contact"><span>▶</span> Contact</Link></li>
              <li><Link href="/terms-and-conditions"><span>▶</span> Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Column 3: Recent Focus/Posts */}
          <div className="footer-column post-col">
            <h3>RECENT FOCUS</h3>
            <div className="post-item">
              <Link href="/projects/education">National Talent Search Examination</Link>
              <span className="post-date">July 2026</span>
            </div>
            <div className="post-item">
              <Link href="/projects/training">Employability Training Programs</Link>
              <span className="post-date">June 2026</span>
            </div>
            <div className="post-item">
              <Link href="/projects/education">Higher Education Scholarship Distribution</Link>
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

            <div className="footer-follow-us">
              <h3>FOLLOW US</h3>
              <div className="footer-social-icons">
                <a
                  href="https://www.facebook.com/ampindiafoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="https://www.instagram.com/ampindiafoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
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
        </div>
      </div>

    </footer>
  );
};

export default Footer;
