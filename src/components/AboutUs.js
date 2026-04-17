import React from 'react';
import './AboutUs.css';
import SocietyImg from '../assets/images/society.jpg';

const AboutUs = () => {
  const teamMembers = [
    { name: 'To be decided', role: 'Chief Organizer', emoji: '👨‍💼' },
    { name: 'To be decided', role: 'Cultural Coordinator', emoji: '👩‍🎨' },
    { name: 'To be decided', role: 'Religious Advisor', emoji: '🙏' },
    { name: 'To be decided', role: 'Volunteer Coordinator', emoji: '👩‍💻' },
    { name: 'To be decided', role: 'Logistics Head', emoji: '📋' },
    { name: 'To be decided', role: 'Prasad Committee', emoji: '🍛' },
  ];

  const communityHighlights = [
    { icon: '🏢', title: 'Premium Township', desc: 'Modern amenities with traditional values' },
    { icon: '🌳', title: 'Green Spaces', desc: '25 acres of beautifully landscaped gardens' },
    { icon: '👨‍👩‍👧‍👦', title: '2000+ Families', desc: 'Vibrant multicultural community' },
    { icon: '🎪', title: 'Event Spaces', desc: 'Perfect venues for celebrations' },
  ];

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-particles">
          <span className="particle">✨</span>
          <span className="particle">🌸</span>
          <span className="particle">🪷</span>
          <span className="particle">✨</span>
          <span className="particle">🌺</span>
        </div>
        <div className="hero-content">
          <span className="hero-badge">🙏 Jai Jagannath</span>
          <h1>About Our Community</h1>
          <p>Preserving sacred traditions at Prestige Finsbury Park, Bangalore</p>
        </div>
      </section>

      {/* Community Statistics Section */}
      <section className="community-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-icon">🙏</span>
              <span className="stat-number">500+</span>
              <span className="stat-label">Devotees</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🍛</span>
              <span className="stat-number">2000+</span>
              <span className="stat-label">Prasad Served</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📅</span>
              <span className="stat-number">2025</span>
              <span className="stat-label">Est. Year</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🎊</span>
              <span className="stat-number">2nd</span>
              <span className="stat-label">Annual Celebration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <span className="section-badge">📖 Our Journey</span>
              <h2>The Story Behind Our Celebration</h2>
              <p>
                The Jagannath Ratha Yatra celebration at Prestige Finsbury Park began in 2025 
                when a group of devotees from Odisha and other parts of India came together 
                with a shared vision — to bring the divine experience of Puri's Ratha Yatra to 
                our community in Bangalore.
              </p>
              <p>
                In our very first year, we witnessed an overwhelming response with <strong>500+ devotees</strong> 
                participating in the celebration and Mahaprasad being distributed to over <strong>2000 people</strong>.
              </p>
              <p>
                Our mission is to preserve and share the rich cultural and spiritual heritage 
                of Jagannath consciousness while creating a sense of community and belonging 
                among devotees living away from their homeland.
              </p>
              <div className="story-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🎉</span>
                  <div>
                    <strong>First Celebration</strong>
                    <span>June 2025</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🏆</span>
                  <div>
                    <strong>Grand Success</strong>
                    <span>Record Participation</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="story-images">
              <div className="story-img main-img">
                <div className="img-placeholder gradient-1">
                  <span>🛕</span>
                  <p>Ratha Yatra 2025</p>
                </div>
              </div>
              <div className="story-img secondary-img">
                <div className="img-placeholder gradient-2">
                  <span>👥</span>
                  <p>Community Together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="our-mission">
        <div className="mission-bg"></div>
        <div className="container">
          <div className="mission-header">
            <span className="section-badge light">🎯 Purpose</span>
            <h2>Our Mission & Values</h2>
            <p>Guided by devotion, united in service</p>
          </div>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon-wrap">
                <span className="mission-icon">🙏</span>
              </div>
              <h3>Spiritual Devotion</h3>
              <p>Creating an atmosphere of pure devotion and connecting devotees with Lord Jagannath through authentic worship practices.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon-wrap">
                <span className="mission-icon">🤝</span>
              </div>
              <h3>Community Building</h3>
              <p>Fostering a strong sense of community among families from different backgrounds united by devotion.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon-wrap">
                <span className="mission-icon">📚</span>
              </div>
              <h3>Cultural Preservation</h3>
              <p>Preserving and passing on the rich traditions, music, dance, and cuisine of Odia culture to future generations.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon-wrap">
                <span className="mission-icon">❤️</span>
              </div>
              <h3>Service (Seva)</h3>
              <p>Serving the community through Mahaprasad distribution and support for those in need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="container">
          <div className="community-grid">
            <div className="community-info-block">
              <span className="section-badge">🏘️ Our Home</span>
              <h2>Prestige Finsbury Park</h2>
              <p className="community-intro">
                A premium residential community in the serene surroundings of Bangalore, 
                home to thousands of families known for vibrant cultural activities and 
                strong sense of togetherness.
              </p>
              <div className="community-highlights">
                {communityHighlights.map((item, index) => (
                  <div key={index} className="highlight-card">
                    <span className="highlight-emoji">{item.icon}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="community-images">
              <div className="community-img-grid">
                <div className="comm-img large">
                  <img src={SocietyImg} alt="Township View" className="comm-actual-img" />
                </div>
                <div className="comm-img small">
                  <div className="img-placeholder gradient-4">
                    <span>🌳</span>
                    <p>Green Spaces</p>
                  </div>
                </div>
                <div className="comm-img small">
                  <div className="img-placeholder gradient-5">
                    <span>🎪</span>
                    <p>Event Area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="our-team">
        <div className="container">
          <div className="team-header">
            <span className="section-badge">👥 Leadership</span>
            <h2>Organizing Committee</h2>
            <p>Meet the dedicated volunteers who make this celebration possible</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar-wrap">
                  <div className="member-avatar">{member.emoji}</div>
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
