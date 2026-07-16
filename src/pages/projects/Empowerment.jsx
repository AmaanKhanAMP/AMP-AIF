
import FeaturedInitiatives from '../../components/layout/FeaturedInitiative.jsx';


const Empowerment = () => {
  return (
    <div className="editorial-portfolio-page">
    

      <main className="hero-editorial-block">
        <div className="hero-typography-pane">
          <h1 className="main-giant-title">EMPOWERMENT</h1>
          <p className="hero-project-subtitle">FINANCIAL INDEPENDENCE SYSTEM</p>
          <div className="editorial-divider-line"><span className="divider-star">✦</span></div>
          <div className="editorial-quote-card">
            <p className="quote-text">"Cultivating entrepreneurial self-reliance across urban and rural chapters."</p>
          </div>
          <div className="editorial-paragraphs">
            <p className="body-para">AIF builds dedicated, voluntary social platforms that target sustainable, long-term self-sufficiency through structured regional livelihood assistance programs.</p>
            <p className="body-para">By opening access to early capital guidance, small enterprise management tools, and direct marketplace connection assistance, we empower vulnerable demographics to successfully establish independent livelihoods.</p>
          </div>
        </div>
        <div className="hero-graphic-pane">
          <div className="geometric-image-frame">
            <div className="geo-badge-tag">SUSTAINABLE CAPITAL</div>
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" alt="Economic Empowerment" className="geo-img" />
            <div className="geo-frame-border"></div>
          </div>
        </div>
      </main>

      <FeaturedInitiatives />

    </div>
  );
};

export default Empowerment;