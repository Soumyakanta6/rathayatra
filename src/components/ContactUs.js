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

  const contactMethods = [
    { icon: '📧', title: 'Email Us', value: CONTACT_EMAIL, action: `mailto:${CONTACT_EMAIL}`, type: 'link' },
    { icon: '📍', title: 'Visit Us', value: 'Prestige Finsbury Park, Gunjur, Bangalore', action: null, type: 'text' },
    { icon: '📅', title: 'Event Dates', value: 'July 16-25, 2026', action: null, type: 'text' },
  ];

  const hydeContacts = [
    { name: 'Ansuman', phone: '7483701269', tel: '+917483701269' },
    { name: 'Smruti Ranjan', phone: '7019831512', tel: '+917019831512' },
    { name: 'Girija', phone: '7978914988', tel: '+917978914988' },
    { name: 'Soumyakant', phone: '9739344477', tel: '+919739344477' },
  ];

  const faqs = [
    { q: 'What time does the Ratha Yatra procession start?', a: 'The chariot procession begins at 4:00 PM on Day 1 (July 16) from Club House Regent.' },
    { q: 'Can non-residents participate?', a: 'Absolutely! The celebration is open to all devotees regardless of residence.' },
    { q: 'How can I volunteer for the event?', a: 'Visit the Home page and click on "Become a Volunteer" button to register.' },
    { q: 'Is Mahaprasad vegetarian?', a: 'Yes, all prasad is pure vegetarian, prepared without onion and garlic.' },
    { q: 'Is there parking available?', a: 'Yes, ample parking is available within Prestige Finsbury Park premises.' },
  ];

  return (
    <div className="contact-page-modern">
      {/* Hero Section */}
      <section className="contact-hero-modern">
        <div className="hero-overlay"></div>
        <div className="hero-particles">
          <span className="particle">📧</span>
          <span className="particle">📞</span>
          <span className="particle">🙏</span>
          <span className="particle">🪔</span>
          <span className="particle">🌸</span>
        </div>
        <div className="hero-content">
          <span className="hero-badge">🙏 We're Here to Help</span>
          <h1>Get in Touch</h1>
          <p>Questions about Ratha Yatra 2026? We're here to help!</p>
        </div>
      </section>

      {/* Contact Methods Strip */}
      <section className="contact-methods">
        <div className="container">
          <div className="methods-grid">
            {contactMethods.map((method, i) => (
              method.type === 'link' ? (
                <a key={i} href={method.action} className="method-card">
                  <span className="method-icon">{method.icon}</span>
                  <div className="method-info">
                    <span className="method-title">{method.title}</span>
                    <span className="method-value">{method.value}</span>
                  </div>
                </a>
              ) : (
                <div key={i} className="method-card">
                  <span className="method-icon">{method.icon}</span>
                  <div className="method-info">
                    <span className="method-title">{method.title}</span>
                    <span className="method-value">{method.value}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main">
        <div className="container">
          {/* Top Row - Form and Phone */}
          <div className="top-row">
            {/* Form Section */}
            <div className="form-section compact">
              <h3>✉️ Send us a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form-compact">
                <div className="form-row-2">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
                </div>
                <select name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select Subject</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Volunteer Registration">Volunteer</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Prasad Booking">Prasad Booking</option>
                  <option value="Other">Other</option>
                </select>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." rows="3" required></textarea>
                <button type="submit">Send Message →</button>
              </form>
            </div>

            {/* Phone Contacts */}
            <div className="phone-section compact">
              <h3>📞 Call Our Coordinators</h3>
              <div className="phone-cols">
                <div className="phone-col hyde">
                  <span className="col-title">🏠 Hyde Park</span>
                  <div className="phone-rows">
                    {hydeContacts.map((contact, i) => (
                      <a key={i} href={`tel:${contact.tel}`}>
                        <span>{contact.name}</span>
                        <span>{contact.phone}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="phone-col regent">
                  <span className="col-title">🏠 Regent Park</span>
                  <div className="coming-soon-small">⏳ Coming Soon</div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section - Full Width Below */}
          <div className="faq-section">
            <h3>❓ Quick Answers</h3>
            <div className="faq-grid">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className={`faq-item ${openFaq === i ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="faq-q">
                    <span>{faq.q}</span>
                    <span className="toggle">{openFaq === i ? '−' : '+'}</span>
                  </div>
                  {openFaq === i && <div className="faq-a">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="contact-banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-icon">☸</div>
            <div className="banner-text">
              <h3>Join us for Ratha Yatra 2026!</h3>
              <p>July 16-25 • Prestige Finsbury Park, Bangalore</p>
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="banner-btn">
              Email Us <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
