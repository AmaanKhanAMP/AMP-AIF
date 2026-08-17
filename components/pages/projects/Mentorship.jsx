import ScrollToTop from '@/components/layout/ScrollToTop';
import { MENTORSHIP_IMAGE } from '@/lib/projectAssets';

const Mentorship = () => {
  const title = 'MENTORSHIP';
  const subtitle = 'INTELLECTUAL GUIDANCE FRAMEWORK';
  const quote = 'Connecting industry experience with first-generation student networks.';
  const badge = 'MENTOR NETWORK';
  const image = MENTORSHIP_IMAGE;
  const paragraphs = [
        'Making a real, structural difference to the student community by utilizing the shared knowledge, intellect, professional experience, and competencies of established corporate professionals.',
        'Our core focus targets the comprehensive educational development of the community—particularly its weakest sections—fostering an environment where every student has an equal stake in regional and national growth.',
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
            <img src={image} alt="Student Mentorship" className="geo-img" />
            <div className="geo-frame-border"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Mentorship;