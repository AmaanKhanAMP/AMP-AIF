
import FeaturedInitiatives from '../../components/layout/FeaturedInitiative.jsx';


const Mentorship = () => {
  return (
    <div className="editorial-portfolio-page">
    
      <main className="hero-editorial-block">
        <div className="hero-typography-pane">
          <h1 className="main-giant-title">MENTORSHIP</h1>
          <p className="hero-project-subtitle">INTELLECTUAL GUIDANCE FRAMEWORK</p>
          <div className="editorial-divider-line"><span className="divider-star">✦</span></div>
          <div className="editorial-quote-card">
            <p className="quote-text">"Connecting industry experience with first-generation student networks."</p>
          </div>
          <div className="editorial-paragraphs">
            <p className="body-para">Making a real, structural difference to the student community by utilizing the shared knowledge, intellect, professional experience, and competencies of established corporate professionals.</p>
            <p className="body-para">Our core focus targets the comprehensive educational development of the community—particularly its weakest sections—fostering an environment where every student has an equal stake in regional and national growth.</p>
          </div>
        </div>
        <div className="hero-graphic-pane">
          <div className="geometric-image-frame">
            <div className="geo-badge-tag">MENTOR NETWORK</div>
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" alt="Student Mentorship" className="geo-img" />
            <div className="geo-frame-border"></div>
          </div>
        </div>
      </main>

      <FeaturedInitiatives />

     
    </div>
  );
};

export default Mentorship;