import FeaturedInitiatives from '@/components/layout/FeaturedInitiative';


const Employment = () => {
  return (
    <div className="editorial-portfolio-page">
  
      <main className="hero-editorial-block">
        <div className="hero-typography-pane">
          <h1 className="main-giant-title">SUPPORT</h1>
          <p className="hero-project-subtitle">CAREER PLACEMENT INFRASTRUCTURE</p>
          <div className="editorial-divider-line"><span className="divider-star">✦</span></div>
          <div className="editorial-quote-card">
            <p className="quote-text">"Bridging the transition from student networks to corporate ecosystems."</p>
          </div>
          <div className="editorial-paragraphs">
            <p className="body-para">Securing meaningful jobs with adequate compensation is a consistent struggle for the vast majority of the Indian working class, especially with an expanding educated demographic entering the market annually.</p>
            <p className="body-para">Because traditional academic paths do not place sufficient importance on practical soft-skills and modern corporate grooming, AIF works closely to bridge this transition gap and create market-ready candidates.</p>
            <p className="body-para">We actively host soft-skills development workshops, intensive employability seminars, and large-scale Job Drives and Fairs across the country to connect talented youth with localized corporate career avenues.</p>
          </div>
        </div>
        <div className="hero-graphic-pane">
          <div className="geometric-image-frame">
            <div className="geo-badge-tag">PLACEMENT READY</div>
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Employment Support" className="geo-img" />
            <div className="geo-frame-border"></div>
          </div>
        </div>
      </main>

      <FeaturedInitiatives />

    </div>
  );
};

export default Employment;