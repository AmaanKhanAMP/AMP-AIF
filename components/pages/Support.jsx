"use client";

import  { useState, useEffect } from 'react';


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
        setTimeout(() => setCopiedFieldToken(null), 2000);
      })
      .catch((err) => console.error('Clipboard workflow exception: ', err));
  };

  return (
    <div className="premium-su-viewport">
      
      {/* ================= 1. CINEMATIC LIGHT HERO LAYER ================= */}
      <section className="premium-hero-container">
        <div className="premium-hero-mesh"></div>
        <div className="premium-hero-blob blob-position-1"></div>
        <div className="premium-hero-blob blob-position-2"></div>

        <div className="premium-hero-split-grid">
          {/* Left Column: Balanced Typography Block */}
          <div className="premium-hero-content">
            <h1 className="premium-hero-heading">
              Support Hope.<br />
              <span>Change Lives.</span>
            </h1>
            <p className="premium-hero-subtext">
              Every contribution helps us create structural opportunities through premium education, vocational training, industrial placement, and verified community empowerment.
            </p>
            <a href="#donation-gateway" className="premium-magnetic-cta">
              <span>Donate Now</span>
              <span className="cta-arrow-vector">➔</span>
            </a>
          </div>

          {/* Right Column: Premium Visual Glass Panel (Eliminates Empty Space) */}
          <div className="premium-hero-visual-pane">
            <div className="hero-glass-dashboard">
              <div className="dashboard-metric-card">
                <span className="metric-card-tag">LIVE FUND DISTRIBUTION</span>
                <div className="metric-card-large-row">
                  <span className="metric-card-num">87.4%</span>
                  <span className="metric-card-trend">↑ 2.4% this quarter</span>
                </div>
                <div className="metric-visual-progress-track">
                  <div className="metric-visual-progress-bar" style={{ width: '87.4%' }}></div>
                </div>
                <p className="metric-card-desc">Directly directed towards academic sponsorships and digital tooling systems across grassroots hubs.</p>
              </div>

              <div className="dashboard-floating-badge badge-top-right">
                <div className="floating-badge-icon">✓</div>
                <div>
                  <h6>100% Secure</h6>
                  <p>Direct Bank Clearing</p>
                </div>
              </div>

              <div className="dashboard-floating-badge badge-bottom-left">
                <div className="floating-badge-icon blue-theme">✦</div>
                <div>
                  <h6>Real Impact</h6>
                  <p>Transparent Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. ELEGANT EDITORIAL TRUST BLOCK SYSTEM ================= */}
      <section className="editorial-trust-wrapper">
        <div className="editorial-header-segment">
          <span className="editorial-mini-tag">— MEASURABLE REALITY</span>
          <h2 className="editorial-main-heading">Transparency. Accountability. Impact.</h2>
        </div>

        <div className="editorial-asymmetric-grid">
          <div className="editorial-panel-large">
            <div className="panel-big-number">{totalImpactMetrics}+</div>
            <div className="panel-body-content">
              <h3>Verified Individuals Uplifted</h3>
              <p>We deploy rigorous reporting protocols to ensure every resource allocation correlates directly with sustainable family livelihood milestones.</p>
            </div>
          </div>

          <div className="editorial-panel-small">
            <div className="panel-big-number">100%</div>
            <div className="panel-body-content">
              <h3>Accountability Standards</h3>
              <p>Publicly audited financial management ledgers guaranteeing total institutional operational clarity.</p>
            </div>
          </div>

          <div className="editorial-panel-alt-1">
            <div className="panel-big-number">{totalVerifiedSectors}</div>
            <div className="panel-body-content">
              <h3>Grassroots Centers Funded</h3>
              <p>Direct infrastructure pipelines feeding dynamic knowledge generation and technical workspaces inside multiple Indian states.</p>
            </div>
          </div>

          <div className="editorial-panel-alt-2">
            <div className="panel-big-number">01</div>
            <div className="panel-body-content">
              <h3>Unified Central Vision</h3>
              <p>Breaking generational cycles of systemic disadvantage by elevating localized human potential into professional assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. THE CENTERPIECE BANKING PORTAL ================= */}
      <section id="donation-gateway" className="centerpiece-banking-wrapper">
        <div className="centerpiece-layout-intent">
          
          <div className="centerpiece-text-column">
            <span className="editorial-mini-tag">— STRIPE-GRADE INTEGRITY</span>
            <h2>Direct Wire Transactions</h2>
            <p>
              By transmitting resources directly into our institutional holding accounts, you circumvent third-party clearing commissions, ensuring 100% of your capital goes to work on the ground.
            </p>
          </div>

          <div className="centerpiece-card-column">
            <div className="frosted-ledger-platform">
              <div className="ledger-brand-header">
                <div className="ledger-brand-icon-frame">
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

              <div className="ledger-rows-container">
                {bankAccountMatrix.map((row, index) => (
                  <div className="ledger-interactive-row" key={index}>
                    <span className="ledger-row-lbl">{row.label}</span>
                    <div className="ledger-row-val-wrapper">
                      <span className="ledger-row-val">{row.value}</span>
                      {row.allowCopy && (
                        <button 
                          className={`ledger-copy-trigger ${copiedFieldToken === row.label ? 'success-state' : ''}`}
                          onClick={() => executeClipboardProtocol(row.value, row.label)}
                          title={`Copy ${row.label}`}
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
                  </div>
                ))}
              </div>

              <div className="ledger-footer-notice-bar">
                <span className="ledger-notice-bullet-symbol">ℹ</span>
                <p>Contributions can be made through online (NEFT / RTGS / IMPS) or offline transactions.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. EMOTIONAL STORYTELLING OVERLAY ================= */}
      <section className="emotional-immersive-layer">
        <div className="emotional-curtain-shade"></div>
        <div className="emotional-typography-hub">
          <h2 className="emotional-statement">
            "Every contribution creates opportunities. 
            <span>Every opportunity changes lives."</span>
          </h2>
          <div className="emotional-divider-line"></div>
          <span className="editorial-mini-tag" style={{ color: '#ffffff', opacity: 0.7 }}>THE POWER OF INTERVENTION</span>
        </div>
      </section>

      {/* ================= 5. DRAMATIC CLOSING CTA ================= */}
      <section className="dramatic-closing-wrapper">
        <div className="su-cta-glow-mesh"></div>
        <div className="dramatic-closing-content">
          <h2>Be the Reason Someone Has a Better Tomorrow.</h2>
          <p>Your action today forms the foundation of someone else's achievement next season.</p>
          <a href="#donation-gateway" className="premium-btn-white-lux">
            <span>Support Us Today</span>
            <span className="cta-arrow-vector">➔</span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Support;