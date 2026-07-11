import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // 1. Imported NavLink
import img from "./../../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Safely closes the menu drawer when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="humanity-navbar">
      <div className="navbar-container">
        
        {/* AMP India Foundation Logo Section */}
        <div className="navbar-brand-amp">
          <NavLink to="/" onClick={handleLinkClick}>
            <img src={img} className="amp-logo" alt="AMP Logo" />
          </NavLink>
        </div>

        {/* Custom Text-Based Toggle for Mobile Menu */}
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
        </div>

        {/* Navigation Links */}
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><NavLink to="/home" onClick={handleLinkClick}>HOME</NavLink></li>
            <li><NavLink to="/about" onClick={handleLinkClick}>ABOUT US</NavLink></li>
       
            {/* Custom Hover/Click Dropdown Menu */}
            <li 
              className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {/* Note: Points to /projects to match your dropdown structure */}
              <NavLink to="/projects" className="dropdown-toggle" onClick={handleLinkClick}>
                PROJECTS <span className="arrow-down">▼</span>
              </NavLink>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <li><NavLink to="/projects/education" onClick={handleLinkClick}>Education</NavLink></li>
                <li><NavLink to="/projects/medical-relief" onClick={handleLinkClick}>Medical Relief</NavLink></li>
                <li><NavLink to="/projects/employment-support" onClick={handleLinkClick}>Employment Support</NavLink></li>
                <li><NavLink to="/projects/economic-empowerment" onClick={handleLinkClick}>Economic Empowerment</NavLink></li>
                <li><NavLink to="/projects/student-mentorship" onClick={handleLinkClick}>Student Mentorship</NavLink></li>
                <li><NavLink to="/projects/employment-training" onClick={handleLinkClick}>Employment Training</NavLink></li>
              </ul>
            </li>
   
            <li><NavLink to="/events" onClick={handleLinkClick}>EVENTS</NavLink></li>
            <li><NavLink to="/volunteer" onClick={handleLinkClick}>VOLUNTEER</NavLink></li>
            <li><NavLink to="/support-us" onClick={handleLinkClick}>SUPPORT US</NavLink></li>
            <li><NavLink to="/contact" onClick={handleLinkClick}>CONTACT</NavLink></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;