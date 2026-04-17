import React from 'react';
import './Footer.css';

const Footer = ({ setActiveTab }) => {
  const handleNavClick = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="footer-chakra">☸</span>
              <h3>Jagannath Ratha Yatra 2026</h3>
            </div>
            <p>Celebrating Lord Jagannath's divine journey at Prestige Finsbury Park, Bangalore</p>
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
              <li><button onClick={() => handleNavClick('home')}>Home</button></li>
              <li><button onClick={() => handleNavClick('about')}>About</button></li>
              <li><button onClick={() => handleNavClick('gallery')}>Gallery</button></li>
              <li><button onClick={() => handleNavClick('sponsorship')}>Sponsorship</button></li>
              <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Get Involved</h4>
            <ul>
              <li><button onClick={() => handleNavClick('home')}>Volunteer</button></li>
              <li><button onClick={() => handleNavClick('sponsorship')}>Sponsor</button></li>
              <li><button onClick={() => handleNavClick('sponsorship')}>Donate</button></li>
              <li><button onClick={() => handleNavClick('home')}>Programs</button></li>
              <li><button onClick={() => handleNavClick('home')}>Prasad Seva</button></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="contact-item">
              <span>📍</span>
              <p>Prestige Finsbury Park, Bangalore</p>
            </div>
            <div className="contact-item">
              <span>📧</span>
              <p>jagannathrathayatra.pfp@gmail.com</p>
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
            <p>© 2026 Jagannath Ratha Yatra - Prestige Finsbury Park</p>
          </div>
          <div className="footer-mantra">
            <p>🙏 Jai Jagannath 🙏</p>
          </div>
          <div className="footer-credits">
            <p>Made with ❤️ by Community</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
