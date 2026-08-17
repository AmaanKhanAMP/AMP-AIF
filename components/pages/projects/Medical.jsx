import ScrollToTop from '@/components/layout/ScrollToTop';
import { MEDICAL_RELIEF_IMAGE } from '@/lib/projectAssets';

const Medical = () => {
  const title = 'MEDICAL AID';
  const subtitle = 'HEALTHCARE INTERVENTION & OUTREACH';
  const quote = 'Breaking barriers to provide essential diagnostic and clinical relief.';
  const badge = 'CRITICAL HEALTH';
  const image = MEDICAL_RELIEF_IMAGE;
  const paragraphs = [
        'Uplifting the underserved and vulnerable through critical medical relief frameworks, bringing timely aid to individuals without any bias of Caste, Community, Creed, or Religion.',
        'AIF coordinates responsive healthcare networks and positive medical interventions to manage diagnostic camps, establish free essential medicine distribution clinics, and offer immediate emergency financial workflows for critical tertiary care.',
      ];
  return (
    <div className="editorial-portfolio-page">
      <ScrollToTop />

      <main className="hero-editorial-block">
        <div className="hero-typography-pane">
          <h1 className="premium-hero-heading">{title}</h1>
          <p className="hero-project-subtitle">{subtitle}</p>
          <div className="editorial-divider-line"></div>
          <div className="editorial-quote-card">
            <p className="quote-text">&quot;{quote.replace(/^"|"$/g, '')}&quot;</p>
          </div>
          <div className="editorial-paragraphs">
            {paragraphs.map((para) => (
              <p key={para.slice(0, 24)} className="body-para">{para}</p>
            ))}
          </div>
        </div>
        <div className="hero-graphic-pane">
          <div className="geometric-image-frame">
            <div className="geo-badge-tag">{badge}</div>
            <img src={image} alt="Medical Relief" className="geo-img" />
            <div className="geo-frame-border"></div>
          </div>
        </div>
      </main>
   </div>
  );
};

export default Medical;