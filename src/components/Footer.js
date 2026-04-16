import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="footer-chakra">☸</span>
              <h3>Jagannath Ratha Yatra</h3>
            </div>
            <p>
              Celebrating the divine journey of Lord Jagannath at Prestige Finsbury Park, Bangalore.
              Join us in this sacred tradition of devotion and community.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">📸</a>
              <a href="#" className="social-icon">▶️</a>
              <a href="#" className="social-icon">💬</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Ratha Yatra</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Sponsorship</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Get Involved</h4>
            <ul>
              <li><a href="#">Become a Volunteer</a></li>
              <li><a href="#">Sponsor the Event</a></li>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Cultural Programs</a></li>
              <li><a href="#">Prasad Seva</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <span>📍</span>
              <p>Prestige Finsbury Park,<br />KIADB Aerospace Park, Gummanahalli,<br />Bangalore - 562149</p>
            </div>
            <div className="contact-item">
              <span>📧</span>
              <p>jagannath.finsbury@gmail.com</p>
            </div>
            <div className="contact-item">
              <span>📞</span>
              <p>+91 97393 44477</p>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>© 2026 Jagannath Ratha Yatra - Prestige Finsbury Park. All rights reserved.</p>
          </div>
          <div className="footer-mantra">
            <p>🙏 जय जगन्नाथ | Jai Jagannath 🙏</p>
          </div>
          <div className="footer-credits">
            <p>Made with ❤️ by the Community</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
