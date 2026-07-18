import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const MotionNavLink = motion.create(NavLink);


const About = () => {
  const [activeBadge, setActiveBadge] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const avenues = [
    { id: 1, title: 'Economic Empowerment', desc: 'Providing financial literacy, micro-grants, and self-help group setups.' },
    { id: 2, title: 'Employment Support', desc: 'Connecting job seekers with career opportunities and job fairs.' },
    { id: 3, title: 'Skill Development', desc: 'Vocational training programs tailored for modern industry needs.' },
    { id: 4, title: 'Medical Relief', desc: 'Emergency medical funds, health camps, and critical care access.' },
    { id: 5, title: 'Student Mentorship', desc: 'Guiding youth through career counseling and academic pathways.' },
  ];

  const features = [
    {
      id: "feat-1",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Trusted Professional Philanthropy",
      desc: "Managed voluntarily by verified industry professionals applying advanced corporate workflows to maximize community progress."
    },
    {
      id: "feat-2",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round"/>
        </svg>
      ),
      title: "Good Will Volunteers",
      desc: "A powerful, nationwide human logistics network prepared to distribute critical care resources dynamically on the ground."
    },
    {
      id: "feat-3",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Centres of Excellence",
      desc: "Establishing state-of-the-art incubation hubs where under-served students receive targeted professional guidance and scholarships."
    }
  ];

  const objectives = [
    {
      num: "01",
      title: "Education & Skills Training",
      desc: "Promoting education, including special education and employment enhancing vocation skills training for a sustainable future.",
      highlighted: false
    },
    {
      num: "02",
      title: "Scholarships & Financial Support",
      desc: "Exclusive fund for Higher Education scholarships, Orphans' Basic Education support, Self-Employment assistance, critical illness support and medical services.",
      highlighted: true 
    },
    {
      num: "03",
      title: "Centres of Excellence",
      desc: "Mentoring, coaching and Professional & Career guidance for meritorious but underprivileged students to bridge the opportunity gap.",
      highlighted: false
    },
    {
      num: "04",
      title: "Crowd Funding Platform",
      desc: "Online platforms bringing together Donors and Help-seekers for Medical Relief, Education and Livelihoods, powered by community trust.",
      highlighted: true
    },
    {
      num: "05",
      title: "Community Upliftment",
      desc: "Activities towards upliftment of the underprivileged without any bias of Caste, Community, Creed and Religion.",
      highlighted: false
    }
  ];

  const faqData = [
    {
      id: 1,
      q: "What is the primary mission of AMP India Foundation?",
      a: "AMP India Foundation is dedicated to promoting inclusive social progression by bridging structural development gaps for the under-served and needy all over India, entirely managed through professional volunteer resources."
    },
    {
      id: 2,
      q: "How can I apply for an AMP scholarship or financial support?",
      a: "Deserving students can apply through our designated online crowdfunding and welfare application portals. Submissions are transparently verified based strictly on merit and economic need criteria."
    },
    {
      id: 3,
      q: "How do I become a volunteer with the foundation?",
      a: "Professionals and student mentors can sign up voluntarily through our network platform. You can offer specialized career guidance, training, or local field execution support based on your skill sets."
    },
    {
      id: 4,
      q: "Does the foundation have any regional or religious bias?",
      a: "No. All social development models, financial support distributions, and skill training workflows are executed completely irrespective of caste, community, creed, or religion."
    },
    {
      id: 5,
      q: "What are the key focus execution areas for the organization?",
      a: "Our core pillars target Economic Empowerment, Employment support channels, Vocational Skill Development, Medical relief, and specialized Student Mentorship paradigms."
    },
    {
      id: 6,
      q: "How does the online Crowd Funding platform function?",
      a: "It acts as a direct verification bridge matching philanthropic donors securely with help-seekers for medical crisis emergencies, educational institutional funding, and essential livelihoods support."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 16 } }
  };

  const leftPanelVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, damping: 15 } }
  };

  return (
    <div className="about-page-canvas">
      {/* ================= HERO BANNER ================= */}
      <header className="about-hero-banner">
        <div className="hero-overlay-mesh"></div>
        <div className="hero-content-wrapper">
          <span className="hero-subtitle-tag">Empowering Lives</span>
          <h1 className="hero-title">
            About <span className="hero-gradient-text">AMP India Foundation</span>
          </h1>
          <div className="hero-divider"></div>
        </div>
      </header>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <motion.section 
        className="about-content-sec"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="about-max-wrapper">
          <motion.div className="image-canvas-column" variants={itemVariants}>
            <div className="image-base-accent-box" />
            <div className="overlap-frame-card frame-top-left">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" alt="Education" />
              <div className="image-overlay-gradient"></div>
            </div>
            <div className="overlap-frame-card frame-bottom-right">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" alt="Mentorship" />
              <div className="image-overlay-gradient"></div>
            </div>
          </motion.div>

          <motion.div className="text-editorial-column" variants={itemVariants}>
            <span className="editorial-tag">Who We Are</span>
            <h2 className="editorial-heading">
              Uplifting Communities Through <span className="gradient-text">Sustainable Development</span>
            </h2>

            <div className="editorial-stats-bar">
              <div className="stat-item">
                <span className="stat-value">5+</span>
                <span className="stat-label">Core Initiatives</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">Pan-India</span>
                <span className="stat-label">Program Scope</span>
              </div>
            </div>

            <div className="editorial-description-wrapper">
              <p className="paragraph-lead">
                <strong>AMP India Foundation (AIF)</strong> is a registered not-for-profit organisation dedicated to providing structured social services aimed completely at meeting the crucial needs of underprivileged masses.
              </p>
              <p className="paragraph-body">
                We strive to ignite sustainable progression by bridging structural gaps for the under-served and needy throughout the country.
              </p>

              <div className="capsule-container">
                <p className="capsule-instruction">Click an initiative to explore our scope:</p>
                <div className="capsule-row">
                  {avenues.map((item) => (
                    <button
                      key={item.id}
                      className={`capsule-badge ${activeBadge?.id === item.id ? 'active' : ''}`}
                      onClick={() => setActiveBadge(activeBadge?.id === item.id ? null : item)}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
                <div className={`badge-description-panel ${activeBadge ? 'visible' : ''}`}>
                  {activeBadge && <p><strong>{activeBadge.title}:</strong> {activeBadge.desc}</p>}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= 3-COLUMN BANNER: WHY CHOOSE AIF ================= */}
      <motion.section 
        className="why-choose-banner-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="banner-container">
          <motion.div className="banner-intro-header" variants={itemVariants}>
            <span className="section-mini-tag text-center">Our Core Values</span>
            <h2 className="section-main-heading text-center">Why Choose AIF?</h2>
          </motion.div>

          <div className="banner-features-grid">
            {features.map((feat, index) => (
              <motion.div 
                key={feat.id} 
                className="banner-feature-item"
                variants={itemVariants}
                style={{ '--card-idx': index }}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="banner-item-icon-box">
                  {feat.icon}
                </div>
                <h3 className="banner-item-title">{feat.title}</h3>
                <p className="banner-item-desc">{feat.desc}</p>
                <div className="banner-item-animated-underline"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= ASYMMETRIC SPLIT: WHAT WE DO SECTION ================= */}
      <section className="wwd-canvas">
        <motion.div 
          className="wwd-max-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {/* LEFT SIDEBAR PANEL */}
          <motion.div className="wwd-left-sidebar" variants={leftPanelVariants}>
            <div className="wwd-sticky-box">
              <span className="wwd-mini-tag">Overview</span>
              <h2 className="wwd-main-heading">What We Do</h2>
              <p className="wwd-intro-text">
                AMP India Foundation is engaged in Social Services rendered by Professionals voluntarily to meet the needs of under privileged individuals all over India, without any regional or parochial bias.
              </p>
              <div className="wwd-badge-row">
                <span className="wwd-line-accent"></span>
                <span className="wwd-badge-text">Non-profit organization</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE ALTERNATING STRIPS */}
          <div className="wwd-right-content">
            {objectives.map((item) => (
              <motion.div 
                key={item.num} 
                className={`wwd-item-row ${item.highlighted ? 'shaded-bg' : ''}`}
                variants={itemVariants}
                whileHover={{ x: 12 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="wwd-num-col">
                  <span>{item.num}</span>
                </div>
                <div className="wwd-text-col">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* <div className="wwd-blueprint-footer">
          <span className="wwd-copyright">© AMP INDIA FOUNDATION</span>
          <div className="wwd-deco-dots">
            <span></span><span></span><span></span><span></span>
          </div>
        </div> */}
      </section>

      {/* ================= FAQ SECTION ================= */}
      <motion.section 
        className="faq-section-canvas"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <div className="faq-main-wrapper">
          
          <div className="faq-header-split-block">
            <div className="faq-header-left">
              <span className="faq-pill-tag">Frequently Asked Questions</span>
              <h2 className="faq-section-title">Helping you Understand Our Work Better</h2>
            </div>
            <div className="faq-header-right">
              <p className="faq-header-intro">
                We've gathered answers to the questions we hear most, making it easy for you to learn about our work, values, and the structural impact we create together.
              </p>
              <MotionNavLink
                to="/contact"
                className="faq-cta-btn"
                whileHover={{ y: -2, boxShadow: "0 6px 20px rgba(30, 74, 138, 0.25)" }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us Now ↗
              </MotionNavLink>
            </div>
          </div>

          <div className="faq-accordion-grid">
            {faqData.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <motion.div 
                  key={faq.id} 
                  className={`faq-accordion-card ${isOpen ? 'card-expanded' : ''}`}
                  variants={itemVariants}
                  layout
                >
                  <button 
                    className="faq-trigger-bar" 
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">
                      <span className="faq-q-prefix">Q{faq.id}.</span> {faq.q}
                    </span>
                    <motion.div 
                      className="faq-icon-circle"
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        className="faq-answer-dropdown"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: "easeInOut" }}
                      >
                        <p className="faq-answer-text">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </motion.section>
    </div>
  );
};

export default About;