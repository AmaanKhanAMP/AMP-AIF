import ScrollToTop from '@/components/layout/ScrollToTop';
import employmentProjectJobFair from '@/src/assets/employment-project-job-fair.png';

const employmentImageSrc =
  typeof employmentProjectJobFair === 'string'
    ? employmentProjectJobFair
    : employmentProjectJobFair?.src;

const Employment = () => {
  const title = 'SUPPORT';
  const subtitle = 'CAREER PLACEMENT INFRASTRUCTURE';
  const quote = 'Bridging the transition from student networks to corporate ecosystems.';
  const badge = 'PLACEMENT READY';
  const image = employmentImageSrc;
  const paragraphs = [
        'Securing meaningful jobs with adequate compensation is a consistent struggle for the vast majority of the Indian working class, especially with an expanding educated demographic entering the market annually.',
        'Because traditional academic paths do not place sufficient importance on practical soft-skills and modern corporate grooming, AIF works closely to bridge this transition gap and create market-ready candidates.',
        'We actively host soft-skills development workshops, intensive employability seminars, and large-scale Job Drives and Fairs across the country to connect talented youth with localized corporate career avenues.',
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
            <img src={image} alt="Employment Support" className="geo-img" />
            <div className="geo-frame-border"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Employment;