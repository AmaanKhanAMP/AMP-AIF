
import FeaturedInitiatives from '@/components/layout/FeaturedInitiative';
const medical = '/assets/about.webp';

const Medical= () => {
  return (
    <div className="editorial-portfolio-page">
      

      <main className="hero-editorial-block">
        <div className="hero-typography-pane">
          <h1 className="main-giant-title">MEDICAL AID</h1>
          <p className="hero-project-subtitle">HEALTHCARE INTERVENTION & OUTREACH</p>
          <div className="editorial-divider-line"><span className="divider-star">✦</span></div>
          <div className="editorial-quote-card">
            <p className="quote-text">"Breaking barriers to provide essential diagnostic and clinical relief."</p>
          </div>
          <div className="editorial-paragraphs">
            <p className="body-para">Uplifting the underserved and vulnerable through critical medical relief frameworks, bringing timely aid to individuals without any bias of Caste, Community, Creed, or Religion.</p>
            <p className="body-para">AIF coordinates responsive healthcare networks and positive medical interventions to manage diagnostic camps, establish free essential medicine distribution clinics, and offer immediate emergency financial workflows for critical tertiary care.</p>
          </div>
        </div>
        <div className="hero-graphic-pane">
          <div className="geometric-image-frame">
            <div className="geo-badge-tag">CRITICAL HEALTH</div>
            <img src={medical} alt="Medical Relief" className="geo-img" />
            <div className="geo-frame-border"></div>
          </div>
        </div>
      </main>
      <FeaturedInitiatives />
   </div>
  );
};

export default Medical;