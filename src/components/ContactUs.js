import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: ['jagannath.finsbury@gmail.com', 'rathayatra2026@gmail.com'],
      action: 'mailto:jagannath.finsbury@gmail.com',
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+91 97393 44477'],
      action: 'tel:+919739344477',
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Prestige Finsbury Park', 'KIADB Aerospace Park, Gummanahalli', 'Bangalore - 562149'],
      action: '#map',
    },
    {
      icon: '⏰',
      title: 'Office Hours',
      details: ['Mon - Sat: 6 PM - 8 PM', 'Sunday: 10 AM - 6 PM'],
      action: null,
    },
  ];

  const faqs = [
    {
      question: 'What time does the Ratha Yatra procession start?',
      answer: 'The chariot procession begins at 11:00 AM after the Pahandi ceremony.',
    },
    {
      question: 'Is there parking available at the venue?',
      answer: 'Yes, ample parking is available within Prestige Finsbury Park premises.',
    },
    {
      question: 'Can non-residents participate in the celebration?',
      answer: 'Absolutely! The Ratha Yatra celebration is open to all devotees regardless of residence.',
    },
    {
      question: 'How can I volunteer for the event?',
      answer: 'You can register as a volunteer through our website or contact us directly.',
    },
    {
      question: 'Is Mahaprasad vegetarian?',
      answer: 'Yes, all prasad served is pure vegetarian, prepared without onion and garlic.',
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="contact-us">
      <section className="contact-header">
        <h1>📞 Contact Us</h1>
        <p>We'd love to hear from you! Reach out for any questions or inquiries</p>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
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
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Registration</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="prasad">Prasad Booking</option>
                    <option value="cultural">Cultural Program</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <span className="btn-icon">📨</span>
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action || '#'}
                    className="info-card"
                    onClick={info.action ? undefined : (e) => e.preventDefault()}
                  >
                    <span className="info-icon">{info.icon}</span>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link facebook">📘 Facebook</a>
                  <a href="#" className="social-link instagram">📸 Instagram</a>
                  <a href="#" className="social-link youtube">▶️ YouTube</a>
                  <a href="#" className="social-link whatsapp">💬 WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section" id="map">
        <div className="container">
          <h2>📍 Find Us</h2>
          <div className="map-wrapper">
            <iframe
              title="Prestige Finsbury Park Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5047567358537!2d77.67!3d12.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzEyLjAiTiA3N8KwNDAnMTIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="directions">
            <h3>How to Reach</h3>
            <div className="directions-grid">
              <div className="direction-card">
                <span>🚗</span>
                <h4>By Car</h4>
                <p>Located on Begur-Koppa Road, 15 km from Electronic City. Ample parking available.</p>
              </div>
              <div className="direction-card">
                <span>🚌</span>
                <h4>By Bus</h4>
                <p>BMTC buses available from Electronic City and Silk Board junction.</p>
              </div>
              <div className="direction-card">
                <span>🚇</span>
                <h4>By Metro</h4>
                <p>Nearest metro station is Electronic City. Auto/cab available from there.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>❓ Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <span className="faq-toggle">{openFaq === index ? '−' : '+'}</span>
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="emergency-contact">
        <div className="container">
          <div className="emergency-content">
            <span className="emergency-icon">🆘</span>
            <div className="emergency-text">
              <h3>Emergency Contact on Event Day</h3>
              <p>For any emergency during the event, call: <strong>+91 97393 44477</strong></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
