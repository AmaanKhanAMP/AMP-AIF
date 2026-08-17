"use client";

import Link from 'next/link';
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const FALLBACK_FOOTER = {
  cta_heading: 'Join Our Mission to Empower Lives Through Education & Employment.',
  cta_button_text: 'BECOME A VOLUNTEER',
  cta_button_link: '/volunteer',
  about_heading: 'ABOUT US',
  about_text:
    'AMP India Foundation is a non-profit organization dedicated to regularise and scale up socio-economic development welfare activities. We empower underprivileged youth through sustainable educational models, rigorous training, and professional mentorship.',
  about_link_text: 'READ MORE →',
  about_link_href: '/about',
  useful_links_heading: 'USEFUL LINKS',
  recent_focus_heading: 'RECENT FOCUS',
  contact_heading: 'GET IN TOUCH',
  address_label: 'Address:',
  address_text: 'Room 9, 1st Floor, Halima Manzil, Mirza Ghalib Marg, A Clare Road, Nagpada, Mumbai - 400008',
  phone_label: 'Phone:',
  phone_text: '+91 8291101312',
  email_label: 'Email:',
  email_text: 'contact@ampindiafoundation.org',
  follow_heading: 'FOLLOW US',
  facebook_url: 'https://www.facebook.com/ampindiafoundation/',
  instagram_url: 'https://www.instagram.com/ampindiafoundation/',
  copyright_text: 'Copyrights © 2026 All Rights Reserved. Powered by ',
  copyright_highlight: 'AMP India Foundation',
};

const FALLBACK_LINKS = [
  { id: 1, label: 'Home', href: '/', order: 1 },
  { id: 2, label: 'About Us', href: '/about', order: 2 },
  { id: 3, label: 'What We Do', href: '/what-we-do', order: 3 },
  { id: 4, label: 'Projects', href: '/projects', order: 4 },
  { id: 5, label: 'Events', href: '/events', order: 5 },
  { id: 6, label: 'Join Us / Volunteer', href: '/volunteer', order: 6 },
  { id: 7, label: 'Support Us', href: '/support-us', order: 7 },
  { id: 8, label: 'Contact', href: '/contact', order: 8 },
  { id: 9, label: 'Terms & Conditions', href: '/terms-and-conditions', order: 9 },
];

const FALLBACK_FOCUS = [
  {
    id: 1,
    title: 'National Talent Search Examination',
    href: '/projects/education',
    dateLabel: 'July 2026',
    order: 1,
  },
  {
    id: 2,
    title: 'Employability Training Programs',
    href: '/projects/training',
    dateLabel: 'June 2026',
    order: 2,
  },
  {
    id: 3,
    title: 'Higher Education Scholarship Distribution',
    href: '/projects/education',
    dateLabel: 'May 2026',
    order: 3,
  },
];

/** Strip leading emoji / symbols from CMS labels (e.g. "📍 Address:" → "Address:"). */
function labelText(value, fallback) {
  const raw = String(value || fallback || '').trim();
  const cleaned = raw.replace(/^[^\p{L}\p{N}]+/u, '').trim();
  return cleaned || fallback;
}

const Footer = ({ settings: settingsProp, links: linksProp, focusItems: focusProp }) => {
  const settings = settingsProp
    ? { ...FALLBACK_FOOTER, ...settingsProp }
    : FALLBACK_FOOTER;
  const links = Array.isArray(linksProp) ? linksProp : FALLBACK_LINKS;
  const focusItems = Array.isArray(focusProp) ? focusProp : FALLBACK_FOCUS;

  return (
    <footer className="amp-footer">
      {/* Top Banner Call-to-Action */}
      <div className="footer-cta-bar">
        <div className="footer-cta-container">
          <h2>{settings.cta_heading}</h2>
          <Link href={settings.cta_button_link || '/volunteer'} className="cta-button">
            {settings.cta_button_text}
          </Link>
        </div>
      </div>

      {/* Main 4-Column Grid Section */}
      <div className="footer-main-content">
        <div className="footer-grid-container">
          
          {/* Column 1: About Us */}
          <div className="footer-column about-col">
            <h3>{settings.about_heading}</h3>
            <p>{settings.about_text}</p>
            <Link href={settings.about_link_href || '/about'} className="read-more-link">
              {settings.about_link_text}
            </Link>
          </div>

          {/* Column 2: Useful Links */}
          <div className="footer-column links-col">
            <h3>{settings.useful_links_heading}</h3>
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <Link href={link.href || '/'}>
                    <span>▶</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recent Focus/Posts */}
          <div className="footer-column post-col">
            <h3>{settings.recent_focus_heading}</h3>
            {focusItems.map((item) => (
              <div className="post-item" key={item.id}>
                <Link href={item.href || '/'}>{item.title}</Link>
                <span className="post-date">{item.dateLabel}</span>
              </div>
            ))}
          </div>

          {/* Column 4: Get In Touch */}
          <div className="footer-column touch-col">
            <h3>{settings.contact_heading}</h3>
            <div className="contact-info-item">
              <span className="contact-label">
                <FaMapMarkerAlt className="contact-label-icon" aria-hidden="true" size={13} />
                {labelText(settings.address_label, 'Address:')}
              </span>
              <p>{settings.address_text}</p>
            </div>
            <div className="contact-info-item">
              <span className="contact-label">
                <FaPhoneAlt className="contact-label-icon" aria-hidden="true" size={12} />
                {labelText(settings.phone_label, 'Phone:')}
              </span>
              <p>{settings.phone_text}</p>
            </div>
            <div className="contact-info-item">
              <span className="contact-label">
                <FaEnvelope className="contact-label-icon" aria-hidden="true" size={13} />
                {labelText(settings.email_label, 'Email:')}
              </span>
              <p>{settings.email_text}</p>
            </div>

            <div className="footer-follow-us">
              <h3>{settings.follow_heading}</h3>
              <div className="footer-social-icons">
                <a
                  href={settings.facebook_url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href={settings.instagram_url || '#'}
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
            {settings.copyright_text}
            <span className="highlight-text">{settings.copyright_highlight}</span>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
