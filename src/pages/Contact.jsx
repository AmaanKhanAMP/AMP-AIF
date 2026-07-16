import  { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for getting in touch! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <header className="hero-section">
        <div className="container hero-content animate-fade-in">
          <div className="hero-text">
            <p className="breadcrumb">Home &nbsp;/&nbsp; <span className="active">Contact Us</span></p>
            <h1>Contact Us</h1>
            <p>Have questions or want to collaborate? Reach out to us, and let's make a difference together.</p>
          </div>
          <div className="hero-image-container animate-slide-up">
            <div className="arched-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1577416416889-b473cf501cfd?auto=format&fit=crop&q=80&w=800" 
                alt="Office Workspace" 
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Info Cards Section */}
      <section className="info-section container animate-fade-in delay-1">
        <div className="info-card">
         
          <h3>Our Address</h3>
          <p>Room 9, 1st Floor, Halima Manzil, Mirza Ghalib Marg, A Clare Road, Nagpada, Mumbai - 400008</p>
        </div>
        <div className="info-card">
          
          <h3>Call Us</h3>
          <p>+91 8291101312</p>
        </div>
        <div className="info-card">
          
          <h3>Email Us</h3>
          <p>contact@ampindiafoundation.org</p>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="form-map-section container animate-fade-in delay-2">
        {/* Contact Form */}
        <div className="form-container">
          <h2>Get In Touch With Us</h2>
          <p>Fill out the form below, and our team will connect with you shortly.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit Button</button>
          </form>
        </div>

        {/* Map and Socials */}
        <div className="map-container">
          <h2>Our Location</h2>
          <p>Find us on the map or follow our updates across social media.</p>
          <div className="map-box">
            {/* Embedded Google Map pointing near Clare Road, Nagpada, Mumbai */}
            <iframe 
              title="AMP India Foundation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.7441530963384!2d72.82772717597561!3d18.964893982424424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3a2aaaaaab%3A0x7d83dddfd02a5c9f!2sClare%20Road%2C%20Nagpada%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              width="100%" 
              height="250" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
          
          <div className="social-media">
            <h3>Social Media</h3>
        
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container newsletter-content">
          <div>
            <h2>Our Newsletters</h2>
            <p>Subscribe to our newsletter to stay updated on our upcoming initiatives and drives.</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Email" required />
            <button type="submit" className="newsletter-btn">Submit Button</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
     
    </div>
  );
};

export default Contact;