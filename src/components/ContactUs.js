import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [openFaq, setOpenFaq] = useState(null);

  const CONTACT_EMAIL = 'jagannathrathayatra.pfp@gmail.com';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(formData.subject || 'Enquiry from Ratha Yatra Website')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const quickLinks = [
    { icon: '📧', label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { icon: '📍', label: 'Location', value: 'Prestige Finsbury Park, Bangalore', href: '#map' },
    { icon: '📅', label: 'Event Dates', value: 'July 16-25, 2026', href: null },
  ];

  const faqs = [
    {
      q: 'What time does the Ratha Yatra procession start?',
      a: 'The chariot procession begins at 4:00 PM on Day 1 (July 16) from Club House Regent.',
    },
    {
      q: 'Can non-residents participate?',
      a: 'Absolutely! The celebration is open to all devotees regardless of residence.',
    },
    {
      q: 'How can I volunteer for the event?',
      a: 'Visit the Home page and click on "Become a Volunteer" button to register.',
    },
    {
      q: 'Is Mahaprasad vegetarian?',
      a: 'Yes, all prasad is pure vegetarian, prepared without onion and garlic.',
    },
    {
      q: 'Is there parking available?',
      a: 'Yes, ample parking is available within Prestige Finsbury Park premises.',
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="hero-bg-pattern"></div>
        <div className="container">
          <span className="hero-icon">🙏</span>
          <h1>Get in Touch</h1>
          <p>Have questions about Ratha Yatra 2026? We'd love to hear from you!</p>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="quick-contact-bar">
        <div className="container">
          <div className="quick-links">
            {quickLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href || '#'} 
                className="quick-link"
                onClick={!link.href ? (e) => e.preventDefault() : undefined}
              >
                <span className="ql-icon">{link.icon}</span>
                <div className="ql-text">
                  <span className="ql-label">{link.label}</span>
                  <span className="ql-value">{link.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content">
        <div className="container">
          <div className="content-grid">
            {/* Contact Form Card */}
            <div className="form-card">
              <div className="card-header">
                <span>✉️</span>
                <h2>Send us a Message</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Volunteer Registration">Volunteer Registration</option>
                    <option value="Sponsorship">Sponsorship</option>
                    <option value="Prasad Booking">Prasad Booking</option>
                    <option value="Cultural Program">Cultural Program</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message <span>→</span>
                </button>
              </form>
              <p className="form-note">
                📧 Your message will be sent to <strong>{CONTACT_EMAIL}</strong>
              </p>
            </div>

            {/* FAQ Card */}
            <div className="faq-card">
              <div className="card-header">
                <span>❓</span>
                <h2>Quick Answers</h2>
              </div>
              <div className="faq-list">
                {faqs.map((faq, i) => (
                  <div 
                    key={i} 
                    className={`faq-item ${openFaq === i ? 'open' : ''}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <div className="faq-q">
                      <span>{faq.q}</span>
                      <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                    </div>
                    {openFaq === i && (
                      <div className="faq-a">{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <span className="cta-icon">🛕</span>
            <div className="cta-text">
              <h3>Join us for Ratha Yatra 2026!</h3>
              <p>July 16-25 at Prestige Finsbury Park, Bangalore</p>
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="cta-btn">
              Contact Us <span>📧</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
