import { useState } from 'react';
import SEO from '../components/SEO';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us"
        description="Get in touch with UMBC Businesses. We're here to help you find the services you need on campus."
        keywords="UMBC, contact, help, support, businesses, campus"
      />

      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Have questions about businesses on campus? We&apos;re here to help!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <h3>Address</h3>
              <p>1000 Hilltop Circle<br />Baltimore, MD 21250</p>
            </div>
            <div className="info-card">
              <span className="info-icon">📧</span>
              <h3>Email</h3>
              <p>info@umbc.edu</p>
            </div>
            <div className="info-card">
              <span className="info-icon">📞</span>
              <h3>Phone</h3>
              <p>(410) 455-1000</p>
            </div>
            <div className="info-card">
              <span className="info-icon">🕐</span>
              <h3>Office Hours</h3>
              <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
            </div>
          </div>

          <div className="contact-form-container">
            {submitted ? (
              <div className="success-message">
                <span className="success-icon">✅</span>
                <h3>Thank you for your message!</h3>
                <p>We&apos;ll get back to you as soon as possible.</p>
                <button 
                  className="btn-primary" 
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h2>Send us a Message</h2>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
