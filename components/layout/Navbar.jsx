"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const img = '/assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => {
      if (open) setIsProjectsExpanded(false);
      return !open;
    });
  };

  // Safely closes the menu drawer when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsProjectsExpanded(false);
  };

  const handleProjectsToggle = (e) => {
    // Mobile: expand/collapse submenu instead of navigating
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches) {
      e.preventDefault();
      setIsProjectsExpanded((open) => !open);
      return;
    }
    handleLinkClick();
  };

  return (
    <nav className="humanity-navbar">
      <div className="navbar-container">
        
        {/* AMP India Foundation Logo Section */}
        <div className="navbar-brand-amp">
          <Link href="/" onClick={handleLinkClick}>
            <img src={img} className="amp-logo" alt="AMP Logo" />
          </Link>
        </div>

        {/* Animated hamburger ↔ close toggle (mobile only) */}
        <button
          type="button"
          className={`mobile-menu-btn${isMobileMenuOpen ? ' is-open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-mobile-nav"
        >
          <span className="mobile-menu-icon" aria-hidden="true">
            <Menu className="mobile-icon mobile-icon--menu" size={22} strokeWidth={2.25} />
            <X className="mobile-icon mobile-icon--close" size={22} strokeWidth={2.25} />
          </span>
        </button>

        {/* Navigation Links */}
        <div
          id="primary-mobile-nav"
          className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}
        >
          <ul className="nav-links">
            <li><Link href="/home" onClick={handleLinkClick}>HOME</Link></li>
            <li><Link href="/about" onClick={handleLinkClick}>ABOUT US</Link></li>
       
            {/* Projects: hover on desktop, tap-to-expand on mobile */}
            <li 
              className={`dropdown${isProjectsExpanded ? ' is-expanded' : ''}`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                href="/projects/education"
                className="dropdown-toggle"
                onClick={handleProjectsToggle}
                aria-expanded={isProjectsExpanded}
                aria-controls="projects-submenu"
              >
                PROJECTS{' '}
                <span
                  className={`arrow-down projects-chevron${isProjectsExpanded ? ' is-open' : ''}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </Link>
              <ul
                id="projects-submenu"
                className={`dropdown-menu ${isDropdownOpen || isProjectsExpanded ? 'show' : ''}`}
              >
                <li><Link href="/projects/education" onClick={handleLinkClick}>Education</Link></li>
                <li><Link href="/projects/medical" onClick={handleLinkClick}>Medical Relief</Link></li>
                <li><Link href="/projects/employment" onClick={handleLinkClick}>Employment Support</Link></li>
                <li><Link href="/projects/empowerment" onClick={handleLinkClick}>Economic Empowerment</Link></li>
                <li><Link href="/projects/mentorship" onClick={handleLinkClick}>Student Mentorship</Link></li>
                <li><Link href="/projects/training" onClick={handleLinkClick}>Employment Training</Link></li>
              </ul>
            </li>
   
            <li><Link href="/events" onClick={handleLinkClick}>EVENTS</Link></li>
            <li><Link href="/volunteer" onClick={handleLinkClick}>VOLUNTEER</Link></li>
            <li><Link href="/support-us" onClick={handleLinkClick}>SUPPORT US</Link></li>
            <li><Link href="/contact" onClick={handleLinkClick}>CONTACT</Link></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
