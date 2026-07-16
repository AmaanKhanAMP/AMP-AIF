import FeaturedInitiatives from '../../components/layout/FeaturedInitiative.jsx';


const Training = () => {
  return (
    <div className="editorial-portfolio-page">
      <main className="hero-editorial-block">
        <div className="hero-typography-pane">
          <h1 className="main-giant-title">TRAINING</h1>
          <p className="hero-project-subtitle">CORPORATE GROOMING & PREPARATION</p>
          <div className="editorial-divider-line"><span className="divider-star">✦</span></div>
          <div className="editorial-quote-card">
            <p className="quote-text">"Polishing core foundational skills to ensure immediate employment fit."</p>
          </div>
          <div className="editorial-paragraphs">
            <p className="body-para">AIF conducts the Employability Training Program (ETP) to train youngsters in crucial pre-employment preparation, assisting job seekers in finding the right opportunity, at the right time and place.</p>
            <p className="body-para">Spearheaded by corporate trainers, ETP focuses on critical professional metrics including target job hunting strategies, effective resume structuring, interview performance management, professional grooming, and communications.</p>
          </div>
        </div>
        <div className="hero-graphic-pane">
          <div className="geometric-image-frame">
            <div className="geo-badge-tag">ETP ADVANCED</div>
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Employability Training" className="geo-img" />
            <div className="geo-frame-border"></div>
          </div>
        </div>
      </main>

      <FeaturedInitiatives />

     
    </div>
  );
};

export default Training;