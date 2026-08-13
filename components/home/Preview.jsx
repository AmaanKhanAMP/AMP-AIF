import Link from 'next/link';

import employmentSupportImage from '@/src/assets/employment-support-job-fair.jpg';

const employmentSupportSrc =
  typeof employmentSupportImage === 'string'
    ? employmentSupportImage
    : employmentSupportImage?.src;

const cardData = [
  {
    id: 1,
    href: '/projects/education',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80',
    title: 'Education Support',
    subtitle: 'Building Brighter Futures',
    description:
      'We help deserving students continue their education through scholarships, mentoring, career guidance and skill development, ensuring that financial hardship does not become a barrier to success.',
  },
  {
    id: 2,
    href: '/projects/employment',
    image: employmentSupportSrc,
    title: 'Employment Support',
    subtitle: 'Creating Better Career Opportunities',
    description:
      'We prepare young people for successful careers through employability training, career counselling, job fairs and placement support, helping them secure meaningful employment.',
  },
  {
    id: 3,
    href: '/projects/mentorship',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80',
    title: 'Mentorship & Guidance',
    subtitle: 'Inspiring the Next Generation',
    description:
      'Our experienced professionals mentor students and young graduates by sharing knowledge, career advice and life skills that help them achieve their personal and professional goals.',
  },
];

const Preview = () => {
  return (
    <section className="welcome-section">
      <div className="section-container">
        <div className="section-header-block">
          <h2 className="main-section-title">
            WELCOME TO <span className="title-accent-blue">AMP INDIA FOUNDATION</span>
          </h2>
          <div className="decorative-line-wrapper">
            <span className="line-segment short"></span>
            <span className="line-segment long"></span>
            <span className="line-segment short"></span>
          </div>
          <p className="section-intro-text">
            <strong>Together, We Create Lasting Change</strong>
          </p>
          <p className="section-intro-text">
            AMP India Foundation (AIF) is a registered non-profit organization working to improve
            the lives of underprivileged communities across India. Through education, employment,
            skill development, healthcare and community empowerment, we help people build better
            futures with dignity and confidence.
          </p>
          <p className="section-intro-text">
            Supported by a nationwide network of professionals, volunteers, donors and partner
            organizations, we strive to create opportunities that bring lasting social impact.
          </p>
        </div>

        <div className="cards-grid-layout">
          {cardData.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="info-feature-card"
              aria-label={`${card.title} — view project details`}
              scroll
            >
              <div className="card-image-box">
                <img src={card.image} alt={card.title} className="feature-card-img" />
              </div>
              <div className="card-content-box">
                <h3 className="card-main-title">{card.title}</h3>
                <h4 className="card-sub-title">{card.subtitle}</h4>
                <p className="card-description-text">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Preview;
