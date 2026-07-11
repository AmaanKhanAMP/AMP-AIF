

const cardData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80',
    title: 'Educational Support',
    subtitle: 'Nurturing Bright Futures',
    description: 'We regularise and scale up educational assistance models, giving marginalized students access to higher education, guidance setups, and financial aid to break the cycle of poverty.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80',
    title: 'Employment Assistance',
    subtitle: 'Creating Sustainable Livelihoods',
    description: 'Empowering job seekers by executing job fairs, corporate recruitment tie-ups, and specialized vocational training channels to place youth in meaningful, dignified career roles.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80',
    title: 'Mentorship & Guidance',
    subtitle: 'Shaping Professional Leaders',
    description: 'Connecting bright young minds with experienced industry experts and professionals to provide career counseling, soft-skill training, and leadership coaching.'
  }
];

const Preview = () => {
  return (
    <section className="welcome-section">
      <div className="section-container">
        
        {/* Central Top Header Configuration */}
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
            We are a non-profit, socio-economic welfare organization dedicated to regularising and scaling up activities 
            for community development, educational breakthrough, and direct employment empowerment across India.
          </p>
        </div>

        {/* 3-Column Card Layout Grid Container */}
        <div className="cards-grid-layout">
          {cardData.map((card) => (
            <div key={card.id} className="info-feature-card">
              <div className="card-image-box">
                <img src={card.image} alt={card.title} className="feature-card-img" />
              </div>
              <div className="card-content-box">
                <h3 className="card-main-title">{card.title}</h3>
                <h4 className="card-sub-title">{card.subtitle}</h4>
                <p className="card-description-text">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Preview;