import React, { useState } from 'react';
import './Home.css';

const DeityImage = ({ imageName, alt, fallbackEmoji }) => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  
  React.useEffect(() => {
    // Dynamically import the image
    import(`../assets/images/${imageName}`)
      .then((module) => setImageSrc(module.default))
      .catch(() => setImageError(true));
  }, [imageName]);
  
  if (imageError || !imageSrc) {
    return <span className="deity-emoji">{fallbackEmoji}</span>;
  }
  
  return (
    <img 
      src={imageSrc} 
      alt={alt} 
      onError={() => setImageError(true)}
    />
  );
};

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">🙏 Jai Jagannath 🙏</h1>
            <h2 className="hero-subtitle">Sri Jagannath Ratha Yatra 2026</h2>
            <p className="hero-location">Prestige Finsbury Park (Regent & Hyde), Bangalore</p>
            <div className="hero-date-badge">
              <span className="date-label">Festival Extravaganza</span>
              <span className="date-value">July 16-25, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Ratha Yatra */}
      <section className="info-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">☸</span>
            About Ratha Yatra
          </h2>
          <div className="info-content">
            <div className="info-card">
              <h3>The Festival of Chariots</h3>
              <p>
                Ratha Yatra, also known as the Festival of Chariots, is one of the most ancient and grand
                festivals of India. It celebrates the annual journey of Lord Jagannath, along with his
                siblings Lord Balabhadra and Goddess Subhadra, from their abode in the Jagannath Temple
                to the Gundicha Temple.
              </p>
              <p>
                The word "Ratha Yatra" literally means "Chariot Journey" in Sanskrit. This magnificent
                festival originated in Puri, Odisha, and is now celebrated with great fervor across
                the world.
              </p>
            </div>

            <div className="info-card highlight">
              <h3>🏛️ Prestige Finsbury Park Celebration</h3>
              <p>
                Join us for a divine celebration at Prestige Finsbury Park, Bangalore! Our community
                comes together to honor this sacred tradition with devotion, music, dance, and
                the distribution of Mahaprasad.
              </p>
              <p>
                Experience the spiritual joy as we pull the beautifully decorated chariot through
                our community, singing bhajans and celebrating the glory of Lord Jagannath.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Procession Path */}
      <section className="procession-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">🛤️</span>
            Procession Path (Day 1)
          </h2>
          <div className="procession-path">
            <div className="path-step">
              <span className="path-icon">🏛️</span>
              <span className="path-name">Club House (Regent)</span>
            </div>
            <div className="path-arrow">➡️</div>
            <div className="path-step">
              <span className="path-icon">🏢</span>
              <span className="path-name">Blocks 13-14-15-16</span>
            </div>
            <div className="path-arrow">➡️</div>
            <div className="path-step">
              <span className="path-icon">🚪</span>
              <span className="path-name">Regent Exit → Hyde Entry</span>
            </div>
            <div className="path-arrow">➡️</div>
            <div className="path-step">
              <span className="path-icon">🏗️</span>
              <span className="path-name">Towers 3-4-5-7-8-9</span>
            </div>
            <div className="path-arrow">➡️</div>
            <div className="path-step destination">
              <span className="path-icon">🏛️</span>
              <span className="path-name">Club House (Hyde)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="schedule-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">📅</span>
            Festival Extravaganza Schedule
          </h2>
          <div className="schedule-grid">
            <div className="schedule-item highlight main-event">
              <div className="time">16 Jul</div>
              <div className="event">
                <h4>🚜 CHARIOT PULLING</h4>
                <p>Pull with power & devotion! The grand Ratha Yatra procession begins!</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="time">18 Jul</div>
              <div className="event">
                <h4>🎭 Cultural Bash @ Regent</h4>
                <p>Evening of music, dance, and cultural performances at Regent Club House</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="time">19 Jul</div>
              <div className="event">
                <h4>🎨 Cultural Magic @ Hyde</h4>
                <p>Spectacular cultural performances at Hyde Club House</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="time">20 Jul</div>
              <div className="event">
                <h4>🌺 Hera Panchami @ Hyde</h4>
                <p>Traditional Hera Panchami celebrations honoring Goddess Lakshmi</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="time">23 Jul</div>
              <div className="event">
                <h4>🌅 Sandhya Darshan Bliss</h4>
                <p>Evening darshan and spiritual discourse</p>
              </div>
            </div>
            <div className="schedule-item highlight">
              <div className="time">24 Jul</div>
              <div className="event">
                <h4>🔄 Bahuda Yatra Triumph!</h4>
                <p>The return journey of Lord Jagannath - Pull the chariot back home!</p>
              </div>
            </div>
            <div className="schedule-item highlight grand-finale">
              <div className="time">25 Jul</div>
              <div className="event">
                <h4>👑 Suna Besha Glory + Maha Prasad Feast!</h4>
                <p>Golden attire of the deities & grand prasad distribution<br/>
                <span className="venue-note">Hyde @ Hyde | Regent @ Regent 🍛🥥✨</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flea Market */}
      <section className="fleamarket-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">🛍️</span>
            Flea Market Madness
          </h2>
          <div className="fleamarket-grid">
            <div className="fleamarket-card regent">
              <h3>🏪 Regent Flea Market</h3>
              <div className="market-dates">
                <span className="date-badge">18 Jul</span>
                <span className="date-badge">24 Jul</span>
                <span className="date-badge">25 Jul</span>
              </div>
              <p>Vendor vibes ON! Shop handcrafts, traditional items & more!</p>
            </div>
            <div className="fleamarket-card hyde">
              <h3>🏪 Hyde Flea Market</h3>
              <div className="market-dates">
                <span className="date-badge coming-soon">Dates Coming Soon</span>
              </div>
              <p>Stay tuned for exciting market dates! ⏰</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Deities */}
      <section className="deities-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">🙏</span>
            The Divine Deities
          </h2>
          <div className="deities-grid">
            <div className="deity-card">
              <div className="deity-image balabhadra">
                <DeityImage imageName="balabhadra.png" alt="Lord Balabhadra" fallbackEmoji="🔵" />
              </div>
              <h3>Lord Balabhadra</h3>
              <p>The elder brother of Lord Jagannath, representing strength and power</p>
            </div>
            <div className="deity-card featured">
              <div className="deity-image jagannath">
                <DeityImage imageName="jagannath.png" alt="Lord Jagannath" fallbackEmoji="🟡" />
              </div>
              <h3>Lord Jagannath</h3>
              <p>The Lord of the Universe, embodying love and compassion for all beings</p>
            </div>
            <div className="deity-card">
              <div className="deity-image subhadra">
                <DeityImage imageName="subhadra.png" alt="Goddess Subhadra" fallbackEmoji="🟠" />
              </div>
              <h3>Goddess Subhadra</h3>
              <p>The beloved sister, representing grace and divine feminine energy</p>
            </div>
            <div className="deity-card">
              <div className="deity-image sudarshan">
                <DeityImage imageName="sudarshan.png" alt="Lord Sudarshan" fallbackEmoji="☸️" />
              </div>
              <h3>Lord Sudarshan</h3>
              <p>The divine chakra, symbolizing protection and the destruction of evil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Significance */}
      <section className="significance-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">✨</span>
            Spiritual Significance
          </h2>
          <div className="significance-grid">
            <div className="significance-item">
              <span className="sig-icon">🌟</span>
              <h4>Equal Darshan</h4>
              <p>During Ratha Yatra, Lord Jagannath comes out of the temple to give darshan to all, regardless of caste, creed, or social status.</p>
            </div>
            <div className="significance-item">
              <span className="sig-icon">🎗️</span>
              <h4>Rope Pulling Merit</h4>
              <p>It is believed that pulling the chariot rope grants the same merit as performing the Ashwamedha Yagna.</p>
            </div>
            <div className="significance-item">
              <span className="sig-icon">🍚</span>
              <h4>Mahaprasad</h4>
              <p>The sacred food offered to Lord Jagannath, considered to be highly auspicious and blessed.</p>
            </div>
            <div className="significance-item">
              <span className="sig-icon">🌈</span>
              <h4>Unity in Diversity</h4>
              <p>Ratha Yatra brings together people from all walks of life, celebrating the universal message of love and devotion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="location-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">📍</span>
            Venue Details
          </h2>
          <div className="location-content">
            <div className="location-info">
              <h3>Prestige Finsbury Park</h3>
              <p className="address">
                <strong>Address:</strong><br />
                Prestige Finsbury Park,<br />
                KIADB Aerospace Park, Gummanahalli,<br />
                Bangalore - 562149,<br />
                Karnataka, India
              </p>
              <div className="location-features">
                <div className="feature">
                  <span>🅿️</span>
                  <span>Ample Parking Available</span>
                </div>
                <div className="feature">
                  <span>🚌</span>
                  <span>Public Transport Accessible</span>
                </div>
                <div className="feature">
                  <span>♿</span>
                  <span>Wheelchair Accessible</span>
                </div>
                <div className="feature">
                  <span>🚻</span>
                  <span>Clean Restroom Facilities</span>
                </div>
              </div>
            </div>
            <div className="location-map">
              <iframe
                title="Prestige Finsbury Park Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5047567358537!2d77.67!3d12.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzEyLjAiTiA3N8KwNDAnMTIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Join Us in This Divine Celebration!</h2>
          <p>Be part of this auspicious occasion and receive the blessings of Lord Jagannath</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">Register Now</button>
            <button className="cta-btn secondary">Become a Volunteer</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
