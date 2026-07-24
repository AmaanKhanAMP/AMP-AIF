"use client";

import  { useState, useEffect } from 'react';
const volunteer = '/assets/download.jpg'; // Ensure the path is correct based on your project structure

// Custom lightweight counter hook for smooth UI performance
const useCounter = (endValue, duration = 2000, suffix = '') => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth slowing down at the end (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [endValue, duration]);

  return count.toLocaleString() + suffix;
};

const Volunteer = () => {
  // Setup automated counting states mapped to your layouts
  const totalDonors = useCounter(195000, 2000, '+'); 
  const liveVolunteers = useCounter(874, 1800);
  const partnerNgos = useCounter(38, 1500);
  const statesCovered = useCounter(16, 1200);

  return (
    <div className="volunteer-page-container">
      
      {/* ---------------- SECTION 1: HERO SHOWCASE ---------------- */}
      <section className="volunteer-hero-section">
        <div className="volunteer-grid-overlay"></div>
        
        <div className="volunteer-hero-left">
          <div className="volunteer-program-badge">
            <span className="volunteer-badge-icon">✦</span> VOLUNTEER PROGRAM · 2026
          </div>
          <h1 className="volunteer-hero-title">
            Do work <br />
            <span className="volunteer-italic-text">that matters.</span>
          </h1>
          <p className="volunteer-hero-subtitle">
            A quiet, skilled volunteer network — plugged into grassroots programs <br />
            across India. Real hours. Real projects. Real people.
          </p>
          
          <div className="volunteer-hero-actions">
            <a href="#registration-form" className="volunteer-btn-white">
              Become a Volunteer 
              <span className="volunteer-arrow-circle">➔</span>
            </a>
            <button className="volunteer-btn-text">
              See how it works ↓
            </button>
          </div>
        </div>

        <div className="volunteer-hero-right">
          <div className="volunteer-floating-impact">
            <span className="volunteer-mini-tag">IMPACT</span>
            <div className="volunteer-stat-large">{totalDonors}</div>
            <span className="volunteer-stat-sublabel">lives reached</span>
          </div>

          <div className="volunteer-image-card">
            <img 
              src={volunteer}
              alt="AIF Volunteer Cohort Team" 
              className="volunteer-main-photo"
              loading="lazy"
            />
          </div>

          <div className="volunteer-floating-cohort">
            <div>
              <span className="volunteer-mini-tag">LIVE COHORT</span>
              <div className="volunteer-cohort-count">{liveVolunteers} volunteers</div>
            </div>
            <div className="volunteer-avatar-row">
              <div className="volunteer-avatar avatar-blue-1"></div>
              <div className="volunteer-avatar avatar-blue-2"></div>
              <div className="volunteer-avatar avatar-blue-3"></div>
              <div className="volunteer-avatar avatar-blue-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: OUR MISSION (With Updated Copywriting) ---------------- */}
      <section className="volunteer-mission-section">
        <div className="volunteer-mission-left">
          <div className="volunteer-section-line-tag">— OUR MISSION</div>
          <h2 className="volunteer-mission-title">
            Skills applied <br />
            where they <br />
            <span className="volunteer-italic-blue">matter.</span>
          </h2>
          
          <p className="volunteer-mission-callout" style={{ marginTop: '32px', fontSize: '18px', fontWeight: '500', color: '#1d52d4', lineHeight: '1.5' }}>
            "Join us today as a Volunteer and become the Change that you want to see around you."
          </p>
        </div>

        <div className="volunteer-mission-right">
          <div className="volunteer-mission-desc-container">
            <p className="volunteer-mission-desc" style={{ marginBottom: '20px' }}>
              Participate in Nation-Building and take your Fellow-Indians especially the underprivileged and the under-served to respectable level where you feel proud of the Country and its Citizens.
            </p>
            <p className="volunteer-mission-desc" style={{ fontSize: '16px', color: '#718096', marginBottom: '48px' }}>
              Register yourself as a Volunteer to help the needy with your Talent and get valuable experience in the Social Development sector and also earn Blessings from the needy.
            </p>
          </div>

          <div className="volunteer-metric-grid">
            <div className="volunteer-metric-card">
              <div className="volunteer-metric-value">{liveVolunteers}</div>
              <div className="volunteer-metric-label">ACTIVE VOLUNTEERS</div>
            </div>
            <div className="volunteer-metric-card metric-border-sides">
              <div className="volunteer-metric-value">{partnerNgos}</div>
              <div className="volunteer-metric-label">PARTNER NGOS</div>
            </div>
            <div className="volunteer-metric-card">
              <div className="volunteer-metric-value">{statesCovered}</div>
              <div className="volunteer-metric-label">STATES COVERED</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: GATEWAY SPLIT ---------------- */}
      <section id="registration-form" className="volunteer-portal-section">
        <div className="volunteer-portal-left">
          <div className="volunteer-line-tag-white">— READY?</div>
          <h2 className="volunteer-portal-title">
            Register as an <br />
            <span className="volunteer-italic-blue-light">AIF volunteer.</span>
          </h2>
          <p className="volunteer-portal-desc">
            Please fill the form below to register through our external secure portal gateway.
          </p>
          
          <div className="volunteer-portal-meta">
            <span className="volunteer-meta-item">
              <span style={{ marginRight: '6px' }}>🔒</span> VERIFIED PORTAL
            </span>
            <span className="volunteer-meta-item">~2 MIN</span>
            <span className="volunteer-meta-item">REPLY IN 5 DAYS</span>
          </div>
        </div>

        <div className="volunteer-portal-right">
          <a 
            href="https://tinyurl.com/AIFVolunteerRegn" 
            target="_blank" 
            rel="noreferrer"
            className="volunteer-white-card"
          >
            <div className="volunteer-card-meta">REGISTRATION FORM</div>
            
            <div className="volunteer-card-body">
              <div className="volunteer-card-heading">
                Launch <br />
                the form
              </div>
              <div className="volunteer-blue-action-circle">
                <span className="volunteer-arrow-diagonal">➔</span>
              </div>
            </div>
            
            <div className="volunteer-card-divider"></div>
            
            <div className="volunteer-card-url">
              TINYURL.COM/AIFVOLUNTEERREGN
            </div>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Volunteer;