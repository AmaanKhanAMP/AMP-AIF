import ScrollToTop from '@/components/layout/ScrollToTop';
import { EMPLOYMENT_TRAINING_IMAGE } from '@/lib/projectAssets';

const Training = () => {
  const title = 'TRAINING';
  const subtitle = 'CORPORATE GROOMING & PREPARATION';
  const quote = 'Polishing core foundational skills to ensure immediate employment fit.';
  const badge = 'ETP ADVANCED';
  const image = EMPLOYMENT_TRAINING_IMAGE;
  const paragraphs = [
        'AIF conducts the Employability Training Program (ETP) to train youngsters in crucial pre-employment preparation, assisting job seekers in finding the right opportunity, at the right time and place.',
        'Spearheaded by corporate trainers, ETP focuses on critical professional metrics including target job hunting strategies, effective resume structuring, interview performance management, professional grooming, and communications.',
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
            <img src={image} alt="Employability Training" className="geo-img" />
            <div className="geo-frame-border"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Training;