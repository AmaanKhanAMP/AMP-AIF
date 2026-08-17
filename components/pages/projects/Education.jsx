import ScrollToTop from '@/components/layout/ScrollToTop';
import educationProjectSeminar from '@/src/assets/education-project-seminar.png';

const educationImageSrc =
  typeof educationProjectSeminar === 'string'
    ? educationProjectSeminar
    : educationProjectSeminar?.src;

const Education = () => {
  const title = 'EDUCATION';
  const subtitle = 'SKILL DEVELOPMENT & LIVELIHOOD LIFTS';
  const quote = 'Empowering BPL youth through localized technical skill frameworks.';
  const badge = 'NSDC COMPLIANT';
  const image = educationImageSrc;
  const paragraphs = [
        'Indian youth from the lower-strata of society, especially from BPL families, are unable to continue their education after the Primary section as they must support their families to make ends meet. Consequently, they resort to menial jobs that yield minimal earnings and lock them into structural poverty circles.',
        'AIF conducts targeted vocational training for these school dropouts, focusing on easy-to-learn, market-driven technical skills like Mobile Repairing, Air-Conditioning & Refrigerator Maintenance, Water Filter Repairing, and Motor Vehicle Servicing.',
        'Through strategic tie-ups with NSDC-sponsored CSR programmes, AIF delivers free, short-term vocational skills training models nationwide, opening secure employment pipelines and self-sustaining entrepreneurial opportunities.',
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
            <img src={image} alt="Education" className="geo-img" />
            <div className="geo-frame-border"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Education;