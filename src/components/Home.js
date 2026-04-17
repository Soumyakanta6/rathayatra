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
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Google Form URL for volunteer registration
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfvNBe9t1SPHpgEK8DA/viewform?embedded=true';

  const eventSchedule = [
    {
      id: 1,
      date: '16 Jul',
      icon: '🚜',
      title: 'CHARIOT PULLING',
      type: 'main-event',
      time: '4:00 PM onwards',
      venue: 'Starting from Club House (Regent)',
      description: 'The grand Ratha Yatra procession begins! Join us in pulling the beautifully decorated chariot through our community. Experience the divine joy as we sing bhajans and celebrate the glory of Lord Jagannath.',
      highlights: ['Chariot decoration viewing', 'Community participation', 'Bhajan & Kirtan', 'Prasad distribution']
    },
    {
      id: 2,
      date: '18 Jul',
      icon: '🎭',
      title: 'Cultural Bash @ Regent',
      type: '',
      time: '6:00 PM - 9:00 PM',
      venue: 'Regent Club House',
      description: 'An evening filled with music, dance, and cultural performances. Witness talented artists from our community showcase traditional and contemporary performances.',
      highlights: ['Classical dance performances', 'Devotional songs', 'Kids performances', 'Community talent showcase']
    },
    {
      id: 3,
      date: '19 Jul',
      icon: '🎨',
      title: 'Cultural Magic @ Hyde',
      type: '',
      time: '6:00 PM - 9:00 PM',
      venue: 'Hyde Club House',
      description: 'Spectacular cultural performances at Hyde Club House. A magical evening celebrating art, music, and devotion.',
      highlights: ['Folk dance performances', 'Musical evening', 'Art exhibition', 'Interactive sessions']
    },
    {
      id: 4,
      date: '20 Jul',
      icon: '🌺',
      title: 'Hera Panchami',
      type: '',
      time: '6:00 PM onwards',
      venue: 'Hyde Club House',
      description: 'Traditional Hera Panchami celebrations honoring Goddess Lakshmi. According to tradition, Goddess Lakshmi visits the chariot to see Lord Jagannath.',
      highlights: ['Special puja ceremonies', 'Traditional rituals', 'Devotional programs', 'Prasad distribution']
    },
    {
      id: 5,
      date: '23 Jul',
      icon: '🌅',
      title: 'Sandhya Darshan',
      type: '',
      time: '6:30 PM - 8:30 PM',
      venue: 'Both Regent & Hyde',
      description: 'Evening darshan and spiritual discourse. A serene evening of devotion, meditation, and connecting with the divine.',
      highlights: ['Evening aarti', 'Spiritual discourse', 'Meditation session', 'Bhajan sandhya']
    },
    {
      id: 6,
      date: '24 Jul',
      icon: '🔄',
      title: 'Bahuda Yatra',
      type: 'highlight',
      time: '4:00 PM onwards',
      venue: 'Starting from Club House (Hyde)',
      description: 'The return journey of Lord Jagannath! Pull the chariot back home as the deities return to their abode. A triumphant celebration of devotion.',
      highlights: ['Return chariot procession', 'Community participation', 'Bhajan & Kirtan', 'Festive celebrations']
    },
    {
      id: 7,
      date: '25 Jul',
      icon: '👑',
      title: 'Suna Besha + Maha Prasad',
      type: 'grand-finale',
      time: '5:00 PM onwards',
      venue: 'Hyde @ Hyde | Regent @ Regent',
      description: 'The grand finale! Witness the deities adorned in golden attire (Suna Besha) followed by Maha Prasad Feast. A divine culmination of the 10-day festival.',
      highlights: ['Golden attire decoration', 'Special darshan', 'Maha Prasad feast', 'Community celebration']
    }
  ];

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
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">☸</span>
            About Ratha Yatra
          </h2>
          <div className="about-content">
            <div className="about-main">
              <div className="about-icon-badge">🛞</div>
              <h3>The Festival of Chariots</h3>
              <p>
                Ratha Yatra celebrates the annual journey of Lord Jagannath, along with Lord Balabhadra 
                and Goddess Subhadra. The word literally means "Chariot Journey" in Sanskrit.
              </p>
              <div className="about-highlights">
                <span className="highlight-tag">🏛️ Originated in Puri, Odisha</span>
                <span className="highlight-tag">🌍 Celebrated Worldwide</span>
                <span className="highlight-tag">📅 Ancient Tradition</span>
              </div>
            </div>
            <div className="about-community">
              <div className="community-badge">🏡</div>
              <h4>Prestige Finsbury Park</h4>
              <p>
                Join our community celebration with devotion, music, dance, and Mahaprasad distribution!
              </p>
              <div className="community-features">
                <div className="feature-item">
                  <span>🎶</span>
                  <span>Bhajans & Kirtan</span>
                </div>
                <div className="feature-item">
                  <span>🙏</span>
                  <span>Chariot Pulling</span>
                </div>
                <div className="feature-item">
                  <span>🍛</span>
                  <span>Mahaprasad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Divine Deities */}
      <section className="deities-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">🙏</span>
            The Divine Deities
          </h2>
          <p className="deities-subtitle">Meet the sacred trinity who bless us with their divine presence</p>
          <div className="deities-showcase">
            <div className="deity-card">
              <div className="deity-glow blue"></div>
              <div className="deity-image balabhadra">
                <DeityImage imageName="balabhadra.png" alt="Lord Balabhadra" fallbackEmoji="🔵" />
              </div>
              <h3>Lord Balabhadra</h3>
              <span className="deity-role">The Elder Brother</span>
              <p>Representing strength, power, and agricultural prosperity</p>
            </div>
            <div className="deity-card">
              <div className="deity-glow orange"></div>
              <div className="deity-image subhadra">
                <DeityImage imageName="subhadra.png" alt="Goddess Subhadra" fallbackEmoji="🟠" />
              </div>
              <h3>Goddess Subhadra</h3>
              <span className="deity-role">The Divine Sister</span>
              <p>Grace, beauty, and divine feminine energy personified</p>
            </div>
            <div className="deity-card featured">
              <div className="deity-glow gold"></div>
              <div className="deity-image jagannath">
                <DeityImage imageName="jagannath.png" alt="Lord Jagannath" fallbackEmoji="🟡" />
              </div>
              <h3>Lord Jagannath</h3>
              <span className="deity-role">Lord of the Universe</span>
              <p>Embodying unconditional love and compassion for all beings</p>
            </div>
            <div className="deity-card">
              <div className="deity-glow red"></div>
              <div className="deity-image sudarshan">
                <DeityImage imageName="sudarshan.png" alt="Lord Sudarshan" fallbackEmoji="☸️" />
              </div>
              <h3>Lord Sudarshan</h3>
              <span className="deity-role">The Divine Chakra</span>
              <p>Symbolizing protection and the destruction of evil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Procession & Schedule Side by Side */}
      <section className="path-schedule-section">
        <div className="container">
          <div className="path-schedule-header">
            <span className="path-schedule-badge">📜 Event Guide</span>
            <h2 className="path-schedule-title">Sacred Journey & Celebrations</h2>
            <p className="path-schedule-subtitle">Follow the divine procession route and join the festivities</p>
          </div>
          <div className="path-schedule-grid">
            {/* Procession Path */}
            <div className="path-card">
              <h3 className="card-section-title">
                <span>🛕</span> Procession Path (Day 1)
              </h3>
              <div className="procession-vertical">
                <div className="path-stop start">
                  <div className="stop-dot"></div>
                  <div className="stop-info">
                    <span className="stop-icon">🏛️</span>
                    <span className="stop-name">Club House (Regent)</span>
                  </div>
                </div>
                <div className="path-line"></div>
                <div className="path-stop">
                  <div className="stop-dot"></div>
                  <div className="stop-info">
                    <span className="stop-icon">🏢</span>
                    <span className="stop-name">Blocks 13-16</span>
                  </div>
                </div>
                <div className="path-line"></div>
                <div className="path-stop">
                  <div className="stop-dot"></div>
                  <div className="stop-info">
                    <span className="stop-icon">🚪</span>
                    <span className="stop-name">Regent → Hyde</span>
                  </div>
                </div>
                <div className="path-line"></div>
                <div className="path-stop">
                  <div className="stop-dot"></div>
                  <div className="stop-info">
                    <span className="stop-icon">🏗️</span>
                    <span className="stop-name">Towers 3-9</span>
                  </div>
                </div>
                <div className="path-line"></div>
                <div className="path-stop destination">
                  <div className="stop-dot"></div>
                  <div className="stop-info">
                    <span className="stop-icon">🚩</span>
                    <span className="stop-name">Club House (Hyde)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Schedule */}
            <div className="schedule-card-wrapper">
              <h3 className="card-section-title">
                <span>📅</span> Festival Schedule
              </h3>
              <div className="schedule-vertical">
                {eventSchedule.map((event) => (
                  <div
                    key={event.id}
                    className={`schedule-row ${event.type}`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="row-date">{event.date}</div>
                    <div className="row-icon">{event.icon}</div>
                    <div className="row-title">{event.title}</div>
                    <div className="row-arrow">›</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Procession Path Day 9 (Reverse) */}
            <div className="path-card">
              <h3 className="card-section-title">
                <span>🔄</span> Procession Path (Day 9)
              </h3>
              <div className="procession-vertical">
                <div className="path-stop start">
                  <div className="stop-dot"></div>
                  <div className="stop-info">
                    <span className="stop-icon">🏛️</span>
                    <span className="stop-name">Club House (Hyde)</span>
                  </div>
                </div>
                <div className="path-line"></div>
                <div className="path-stop">
                  <div className="stop-dot"></div>
                  <div className="stop-info">
                    <span className="stop-icon">🏗️</span>
                    <span className="stop-name">Towers 3-9</span>
                  </div>
                </div>
                <div className="path-line"></div>
                <div className="path-stop">
                  <div className="stop-dot"></div>
                  <div className="stop-info">
                    <span className="stop-icon">🚪</span>
                    <span className="stop-name">Hyde → Regent</span>
                  </div>
                </div>
                <div className="path-line"></div>
                <div className="path-stop">
                  <div className="stop-dot"></div>
                  <div className="stop-info">
                    <span className="stop-icon">🏢</span>
                    <span className="stop-name">Blocks 13-16</span>
                  </div>
                </div>
                <div className="path-line"></div>
                <div className="path-stop destination">
                  <div className="stop-dot"></div>
                  <div className="stop-info">
                    <span className="stop-icon">🚩</span>
                    <span className="stop-name">Club House (Regent)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="event-modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="event-modal" onClick={e => e.stopPropagation()}>
            <button className="event-modal-close" onClick={() => setSelectedEvent(null)}>×</button>
            <div className={`event-modal-header ${selectedEvent.type}`}>
              <span className="event-modal-icon">{selectedEvent.icon}</span>
              <div className="event-modal-date">{selectedEvent.date}, 2026</div>
              <h2>{selectedEvent.title}</h2>
            </div>
            <div className="event-modal-body">
              <div className="event-detail-row">
                <span className="detail-icon">⏰</span>
                <div>
                  <strong>Time</strong>
                  <p>{selectedEvent.time}</p>
                </div>
              </div>
              <div className="event-detail-row">
                <span className="detail-icon">📍</span>
                <div>
                  <strong>Venue</strong>
                  <p>{selectedEvent.venue}</p>
                </div>
              </div>
              <div className="event-description">
                <p>{selectedEvent.description}</p>
              </div>
              <div className="event-highlights">
                <h4>✨ Highlights</h4>
                <ul>
                  {selectedEvent.highlights.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

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

      {/* Spiritual Significance */}
      <section className="significance-section">
        <div className="significance-bg-decor">
          <div className="floating-chakra chakra-1">☸</div>
          <div className="floating-chakra chakra-2">☸</div>
          <div className="floating-chakra chakra-3">☸</div>
          <div className="sparkle s1">✦</div>
          <div className="sparkle s2">✦</div>
          <div className="sparkle s3">✦</div>
          <div className="sparkle s4">✦</div>
        </div>
        <div className="container">
          <div className="significance-header">
            <span className="significance-badge">🙏 Sacred Wisdom</span>
            <h2 className="significance-title">
              Spiritual Significance
            </h2>
            <p className="significance-subtitle">Discover the divine meaning behind this sacred festival</p>
          </div>
          <div className="significance-grid">
            <div className="significance-item">
              <div className="sig-icon-wrapper">
                <span className="sig-icon">🌟</span>
                <div className="sig-glow"></div>
              </div>
              <h4>Equal Darshan</h4>
              <p>Lord Jagannath comes out to give darshan to all, regardless of caste, creed, or status - embodying divine equality.</p>
            </div>
            <div className="significance-item">
              <div className="sig-icon-wrapper">
                <span className="sig-icon">🪢</span>
                <div className="sig-glow"></div>
              </div>
              <h4>Sacred Rope Pulling</h4>
              <p>Pulling the chariot rope grants merit equal to performing the Ashwamedha Yagna - an ancient Vedic blessing.</p>
            </div>
            <div className="significance-item">
              <div className="sig-icon-wrapper">
                <span className="sig-icon">🍚</span>
                <div className="sig-glow"></div>
              </div>
              <h4>Divine Mahaprasad</h4>
              <p>Sacred food blessed by Lord Jagannath, prepared without onion or garlic - considered highly auspicious.</p>
            </div>
            <div className="significance-item">
              <div className="sig-icon-wrapper">
                <span className="sig-icon">🙌</span>
                <div className="sig-glow"></div>
              </div>
              <h4>Unity in Devotion</h4>
              <p>People from all backgrounds unite in love and devotion, celebrating the universal message of togetherness.</p>
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
        <div className="cta-bg-effects">
          <div className="cta-ray ray-1"></div>
          <div className="cta-ray ray-2"></div>
          <div className="cta-ray ray-3"></div>
          <div className="cta-particles">
            <span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div className="cta-content">
          <div className="cta-badge">🎉 Limited Spots Available</div>
          <h2>Join Us in This <span className="highlight">Divine Celebration!</span></h2>
          <p>Be part of this auspicious occasion and receive the eternal blessings of Lord Jagannath, Balabhadra & Subhadra</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">
              <span className="btn-icon">🙏</span>
              Register Now
              <span className="btn-shine"></span>
            </button>
            <a href="https://forms.gle/vNBe9t1SPHpgEK8DA" target="_blank" rel="noopener noreferrer" className="cta-btn secondary">
              <span className="btn-icon">🤝</span>
              Become a Volunteer
            </a>
          </div>
          <div className="cta-trust">
            <span>✨ 1000+ Devotees</span>
            <span>🏛️ Traditional Rituals</span>
            <span>🍲 Free Prasad</span>
          </div>
        </div>
      </section>

      {/* Volunteer Form Modal */}
      {showVolunteerForm && (
        <div className="volunteer-modal-overlay" onClick={() => setShowVolunteerForm(false)}>
          <div className="volunteer-modal google-form-modal" onClick={e => e.stopPropagation()}>
            <button className="volunteer-modal-close" onClick={() => setShowVolunteerForm(false)}>×</button>
            <div className="volunteer-modal-header">
              <span className="volunteer-icon">🙏</span>
              <h2>Become a Volunteer</h2>
              <p>Join our team and be part of this divine celebration</p>
            </div>
            <div className="google-form-container">
              <iframe
                src={GOOGLE_FORM_URL}
                title="Volunteer Registration Form"
                width="100%"
                height="500"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading form...
              </iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
