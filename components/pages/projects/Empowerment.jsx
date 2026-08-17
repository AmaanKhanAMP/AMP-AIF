import ScrollToTop from '@/components/layout/ScrollToTop';
import { ECONOMIC_EMPOWERMENT_IMAGE } from '@/lib/projectAssets';

const Empowerment = () => {
  const title = 'EMPOWERMENT';
  const subtitle = 'FINANCIAL INDEPENDENCE SYSTEM';
  const quote = 'Cultivating entrepreneurial self-reliance across urban and rural chapters.';
  const badge = 'SUSTAINABLE CAPITAL';
  const image = ECONOMIC_EMPOWERMENT_IMAGE;
  const paragraphs = [
        'AIF builds dedicated, voluntary social platforms that target sustainable, long-term self-sufficiency through structured regional livelihood assistance programs.',
        'By opening access to early capital guidance, small enterprise management tools, and direct marketplace connection assistance, we empower vulnerable demographics to successfully establish independent livelihoods.',
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
            <img src={image} alt="Economic Empowerment" className="geo-img" />
            <div className="geo-frame-border"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Empowerment;