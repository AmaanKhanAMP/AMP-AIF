"use client";

import { useState, useEffect } from 'react';
import { LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal, {
  RevealGroup,
  RevealItem,
  HeroMotion,
  heroLeft,
  heroBadge,
  heroHeading,
  heroParagraph,
  heroButton,
  heroRight,
  timelineIconVariants,
  timelineLineVariants
} from '@/components/support/Reveal';

const btnHover = {
  scale: 1.02,
  y: -3,
  boxShadow: '0 14px 32px rgba(10, 102, 194, 0.22)'
};

const cardHover = {
  y: -6,
  scale: 1.02,
  transition: { duration: 0.28, ease: 'easeOut' }
};

const useStudioCounter = (targetMetric, runningDuration = 2000) => {
  const [currentDisplayVal, setCurrentDisplayVal] = useState(0);

  useEffect(() => {
    let trackingStartTime = null;
    const computeStep = (currentTimestamp) => {
      if (!trackingStartTime) trackingStartTime = currentTimestamp;
      const calculatedProgress = Math.min((currentTimestamp - trackingStartTime) / runningDuration, 1);
      const quadEasingPattern = calculatedProgress * (2 - calculatedProgress);

      setCurrentDisplayVal(Math.floor(quadEasingPattern * targetMetric));

      if (calculatedProgress < 1) {
        window.requestAnimationFrame(computeStep);
      }
    };
    window.requestAnimationFrame(computeStep);
  }, [targetMetric, runningDuration]);

  return currentDisplayVal.toLocaleString();
};

const Support = () => {
  const [copiedFieldToken, setCopiedFieldToken] = useState(null);
  const [copyToast, setCopyToast] = useState(false);

  const totalImpactMetrics = useStudioCounter(450000);
  const totalVerifiedSectors = useStudioCounter(120);

  const bankAccountMatrix = [
    { label: 'Bank', value: 'Kotak Mahindra', allowCopy: false },
    { label: 'Account Name', value: 'AMP India Foundation', allowCopy: false },
    { label: 'Account Number', value: '3114476665', allowCopy: true },
    { label: 'Account Type', value: 'Savings', allowCopy: false },
    { label: 'IFSC Code', value: 'KKBK0001348', allowCopy: true }
  ];

  const executeClipboardProtocol = (valueString, targetLabel) => {
    navigator.clipboard.writeText(valueString)
      .then(() => {
        setCopiedFieldToken(targetLabel);
        setCopyToast(true);
        setTimeout(() => setCopiedFieldToken(null), 1600);
        setTimeout(() => setCopyToast(false), 1800);
      })
      .catch((err) => console.error('Clipboard workflow exception: ', err));
  };

  return (
    <div className="premium-su-viewport">
      {copyToast && (
        <div className="su-copy-toast" role="status" aria-live="polite">
          Copied
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="premium-hero-container">
        <div className="premium-hero-mesh"></div>
        <div className="premium-hero-blob blob-position-1"></div>
        <div className="premium-hero-blob blob-position-2"></div>

        <div className="premium-hero-split-grid">
          <HeroMotion className="premium-hero-content" variants={heroLeft}>
            <motion.span className="premium-hero-badge" variants={heroBadge}>
              SUPPORT HOPE
            </motion.span>
            <motion.h1 className="premium-hero-heading" variants={heroHeading}>
              Support Hope.<br />
              <span>Change Lives.</span>
            </motion.h1>
            <motion.p className="premium-hero-subtext" variants={heroParagraph}>
              Every contribution helps us create structural opportunities through premium education, vocational training, industrial placement, and verified community empowerment.
            </motion.p>
            <motion.div variants={heroButton}>
              <motion.a
                href="#donation-gateway"
                className="premium-magnetic-cta su-donate-cta"
                whileHover={btnHover}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <span>Donate Now</span>
                <span className="cta-arrow-vector">➔</span>
              </motion.a>
            </motion.div>
          </HeroMotion>

          <HeroMotion className="premium-hero-visual-pane" variants={heroRight}>
            <div className="su-hero-ambient-blobs" aria-hidden="true">
              <span className="su-hero-ambient-blob su-hero-ambient-blob-a" />
              <span className="su-hero-ambient-blob su-hero-ambient-blob-b" />
              <span className="su-hero-ambient-blob su-hero-ambient-blob-c" />
            </div>

            <div className="support-hero-illustration-parallax">
              <img
                src="/images/support-hero-donate.png"
                alt="Hand placing a heart into a donate jar"
                className="support-hero-illustration"
              />
            </div>
          </HeroMotion>
        </div>
      </section>

      {/* ================= DONATION SECTION ================= */}
      <section id="donation-gateway" className="centerpiece-banking-wrapper">
        <div className="centerpiece-layout-intent">
          <div className="centerpiece-text-column">
            <Reveal>
              <span className="donation-mission-label">— SUPPORT OUR MISSION</span>
              <h2>Make a Donation</h2>
              <p className="donation-intro">
                Your generosity helps us create opportunities through education, healthcare, skill development, and community empowerment. Every contribution directly supports initiatives that create lasting impact.
              </p>
            </Reveal>

            <RevealGroup className="donation-timeline" stagger={0.14}>
              <RevealItem className="donation-timeline-item">
                <div className="donation-timeline-rail" aria-hidden="true">
                  <motion.div className="donation-timeline-dot su-timeline-icon" variants={timelineIconVariants}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </motion.div>
                  <motion.span
                    className="donation-timeline-line"
                    variants={timelineLineVariants}
                    style={{ originY: 0 }}
                  />
                </div>
                <div className="donation-timeline-body">
                  <h3>1. Online Donation</h3>
                  <p>Support AMP India Foundation through our secure online payment gateway.</p>
                  {/* TODO: Replace with Razorpay payment link once available */}
                  <motion.a
                    href="#"
                    className="donation-secure-btn su-interactive-btn"
                    whileHover={btnHover}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
                    </svg>
                    <span>Donate Securely</span>
                    <svg className="su-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </motion.a>
                </div>
              </RevealItem>

              <RevealItem className="donation-timeline-item">
                <div className="donation-timeline-rail" aria-hidden="true">
                  <motion.div className="donation-timeline-dot su-timeline-icon" variants={timelineIconVariants}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3h7a4.5 4.5 0 0 1 0 9H9" />
                      <path d="M9 12h5.5a4.5 4.5 0 0 1 0 9H6" />
                      <path d="M9 1v22" />
                    </svg>
                  </motion.div>
                  <motion.span
                    className="donation-timeline-line"
                    variants={timelineLineVariants}
                    style={{ originY: 0 }}
                  />
                </div>
                <div className="donation-timeline-body">
                  <h3>3. UPI Donation</h3>
                  <p className="donation-option-label">AMP UPI ID</p>
                  <div className="donation-upi-badge">
                    <span>AMPINDIA@KOTAK</span>
                    <button
                      type="button"
                      className={`donation-upi-copy su-copy-btn ${copiedFieldToken === 'UPI' ? 'success-state' : ''}`}
                      onClick={() => executeClipboardProtocol('AMPINDIA@KOTAK', 'UPI')}
                      title="Copy UPI ID"
                      aria-label="Copy UPI ID"
                    >
                      {copiedFieldToken === 'UPI' ? (
                        <span>✓</span>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </RevealItem>

              <RevealItem className="donation-timeline-item donation-timeline-item-last">
                <div className="donation-timeline-rail" aria-hidden="true">
                  <motion.div className="donation-timeline-dot su-timeline-icon" variants={timelineIconVariants}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M8 13h8" />
                      <path d="M8 17h5" />
                      <path d="M16 17.5l1.2 1.2 2.3-2.4" />
                    </svg>
                  </motion.div>
                </div>
                <div className="donation-timeline-body">
                  <h3>4. Cheque / DD</h3>
                  <p className="donation-cheque-line">
                    <span className="donation-cheque-label">Cheque/DD in favour of:</span>{" "}
                    <strong>Association of Muslim Professionals</strong>
                  </p>
                  <p className="donation-cheque-label">Mail to:</p>
                  <p className="donation-cheque-address">
                    Association of Muslim Professionals<br />
                    Room 8, 1st Floor, Halima Manzil<br />
                    Mirza Ghalib Marg<br />
                    Clare Road<br />
                    Nagpada, Mumbai – 400008
                  </p>
                </div>
              </RevealItem>
            </RevealGroup>

            <Reveal className="donation-confirm-box" delay={0.05}>
              <div className="donation-confirm-icon su-soft-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <div>
                <h4>After Your Donation</h4>
                <p>
                  Once you make a donation, please send a confirmation email to:{" "}
                  <a href="mailto:info@ampindia.org" className="su-email-link">info@ampindia.org</a>
                </p>
              </div>
            </Reveal>

            <Reveal className="donation-legal-note" delay={0.1}>
              <span className="donation-legal-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </span>
              <p>
                <strong>Note:</strong> We are a Section 8 Company (Non-Profit) registered under the Companies Act, 2013 with the Ministry of Corporate Affairs (MCA).
              </p>
            </Reveal>
          </div>

          <div className="centerpiece-card-column">
            <Reveal>
              <motion.div
                className="frosted-ledger-platform su-lift-card"
                whileHover={cardHover}
              >
                <div className="ledger-brand-header">
                  <div className="ledger-brand-icon-frame su-soft-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="2" y1="10" x2="22" y2="10"></line>
                    </svg>
                  </div>
                  <div className="ledger-brand-title-group">
                    <h4>Bank Account Details</h4>
                    <p>Official AMP Verification Registry</p>
                  </div>
                </div>

                <RevealGroup className="ledger-rows-container" stagger={0.08}>
                  {bankAccountMatrix.map((row, index) => (
                    <RevealItem className="ledger-interactive-row" key={index} y={16}>
                      <span className="ledger-row-lbl">{row.label}</span>
                      <div className="ledger-row-val-wrapper">
                        <span className="ledger-row-val">{row.value}</span>
                        {row.allowCopy && (
                          <button
                            type="button"
                            className={`ledger-copy-trigger su-copy-btn ${copiedFieldToken === row.label ? 'success-state is-pulse' : ''}`}
                            onClick={() => executeClipboardProtocol(row.value, row.label)}
                            title={`Copy ${row.label}`}
                            aria-label={`Copy ${row.label}`}
                          >
                            {copiedFieldToken === row.label ? (
                              <span className="ledger-copy-success-ticker">✓</span>
                            ) : (
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                              </svg>
                            )}
                          </button>
                        )}
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>

                <div className="ledger-footer-notice-bar">
                  <span className="ledger-notice-bullet-symbol">ℹ</span>
                  <p>Contributions can be made through online (NEFT / RTGS / IMPS) or offline transactions.</p>
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.08}>
              <motion.div
                className="donation-help-card su-lift-card"
                whileHover={cardHover}
              >
                <div className="donation-help-content">
                  <div className="donation-help-header">
                    <div className="donation-help-avatar su-soft-icon" aria-hidden="true">
                      <LifeBuoy size={22} strokeWidth={1.85} />
                    </div>
                    <div>
                      <h3>Need Help?</h3>
                      <p>We&apos;re here to assist you with your donation.</p>
                    </div>
                  </div>

                  <ul className="donation-help-list">
                    <li>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                      <a href="mailto:info@ampindia.org">info@ampindia.org</a>
                    </li>
                    <li>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2.1z" />
                      </svg>
                      <a href="tel:+912223002600">+91 22 2300 2600</a>
                    </li>
                    <li>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                      <span>Mon – Sat: 10:00 AM – 6:00 PM</span>
                    </li>
                  </ul>

                  <motion.a
                    href="/contact"
                    className="donation-help-btn su-interactive-btn"
                    whileHover={btnHover}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <span>Contact Us</span>
                    <svg className="su-btn-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </motion.a>
                </div>

                <div className="donation-help-art">
                  <img
                    src="/images/need-help-illustration.png"
                    alt=""
                    className="donation-help-illustration"
                  />
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <Reveal as="section" className="editorial-trust-wrapper">
        <div className="editorial-header-segment">
          <span className="editorial-mini-tag">— MEASURABLE REALITY</span>
          <h2 className="editorial-main-heading">Transparency. Accountability. Impact.</h2>
        </div>

        <RevealGroup className="editorial-asymmetric-grid" stagger={0.12}>
          <RevealItem
            className="editorial-panel-large su-lift-card"
            whileHover={cardHover}
          >
            <div className="panel-big-number">{totalImpactMetrics}+</div>
            <div className="panel-body-content">
              <h3>Verified Individuals Uplifted</h3>
              <p>We deploy rigorous reporting protocols to ensure every resource allocation correlates directly with sustainable family livelihood milestones.</p>
            </div>
          </RevealItem>

          <RevealItem
            className="editorial-panel-small su-lift-card"
            whileHover={cardHover}
          >
            <div className="panel-big-number">100%</div>
            <div className="panel-body-content">
              <h3>Accountability Standards</h3>
              <p>Publicly audited financial management ledgers guaranteeing total institutional operational clarity.</p>
            </div>
          </RevealItem>

          <RevealItem
            className="editorial-panel-alt-1 su-lift-card"
            whileHover={cardHover}
          >
            <div className="panel-big-number">{totalVerifiedSectors}</div>
            <div className="panel-body-content">
              <h3>Grassroots Centers Funded</h3>
              <p>Direct infrastructure pipelines feeding dynamic knowledge generation and technical workspaces inside multiple Indian states.</p>
            </div>
          </RevealItem>

          <RevealItem
            className="editorial-panel-alt-2 su-lift-card"
            whileHover={cardHover}
          >
            <div className="panel-big-number">01</div>
            <div className="panel-body-content">
              <h3>Unified Central Vision</h3>
              <p>Breaking generational cycles of systemic disadvantage by elevating localized human potential into professional assets.</p>
            </div>
          </RevealItem>
        </RevealGroup>
      </Reveal>

      {/* ================= EMOTIONAL ================= */}
      <Reveal as="section" className="emotional-immersive-layer">
        <div className="emotional-curtain-shade"></div>
        <div className="emotional-typography-hub">
          <h2 className="emotional-statement">
            &quot;Every contribution creates opportunities.
            <span>Every opportunity changes lives.&quot;</span>
          </h2>
          <div className="emotional-divider-line"></div>
          <span className="editorial-mini-tag su-emotional-tag">THE POWER OF INTERVENTION</span>
        </div>
      </Reveal>

      {/* ================= CLOSING CTA ================= */}
      <Reveal as="section" className="dramatic-closing-wrapper">
        <div className="su-cta-glow-mesh"></div>
        <div className="dramatic-closing-content">
          <h2>Be the Reason Someone Has a Better Tomorrow.</h2>
          <p>Your action today forms the foundation of someone else&apos;s achievement next season.</p>
          <motion.a
            href="#donation-gateway"
            className="premium-btn-white-lux su-interactive-btn"
            whileHover={btnHover}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <span>Support Us Today</span>
            <span className="cta-arrow-vector">➔</span>
          </motion.a>
        </div>
      </Reveal>
    </div>
  );
};

export default Support;
