
import FeaturedInitiatives from '@/components/layout/FeaturedInitiative';


const Education = () => {
  return (
    <div className="editorial-portfolio-page">

      <main className="hero-editorial-block">
        <div className="hero-typography-pane">
          <h1 className="main-giant-title">EDUCATION</h1>
          <p className="hero-project-subtitle">SKILL DEVELOPMENT & LIVELIHOOD LIFTS</p>
          <div className="editorial-divider-line"><span className="divider-star">✦</span></div>
          <div className="editorial-quote-card">
            <p className="quote-text">"Empowering BPL youth through localized technical skill frameworks."</p>
          </div>
          <div className="editorial-paragraphs">
            <p className="body-para">Indian youth from the lower-strata of society, especially from BPL families, are unable to continue their education after the Primary section as they must support their families to make ends meet. Consequently, they resort to menial jobs that yield minimal earnings and lock them into structural poverty circles.</p>
            <p className="body-para">AIF conducts targeted vocational training for these school dropouts, focusing on easy-to-learn, market-driven technical skills like Mobile Repairing, Air-Conditioning & Refrigerator Maintenance, Water Filter Repairing, and Motor Vehicle Servicing.</p>
            <p className="body-para">Through strategic tie-ups with NSDC-sponsored CSR programmes, AIF delivers free, short-term vocational skills training models nationwide, opening secure employment pipelines and self-sustaining entrepreneurial opportunities.</p>
          </div>
        </div>
        <div className="hero-graphic-pane">
          <div className="geometric-image-frame">
            <div className="geo-badge-tag">NSDC COMPLIANT</div>
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" alt="Education" className="geo-img" />
            <div className="geo-frame-border"></div>
          </div>
        </div>
      </main>

      {/* Embedded High-Impact Grid Component */}
      <FeaturedInitiatives />

  

     
    </div>
  );
};

export default Education;