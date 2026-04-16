import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const teamMembers = [
    { name: 'Sri Ramesh Panda', role: 'Chief Organizer', emoji: '👨‍💼' },
    { name: 'Smt. Lakshmi Mohanty', role: 'Cultural Coordinator', emoji: '👩‍🎨' },
    { name: 'Sri Prakash Das', role: 'Religious Advisor', emoji: '🙏' },
    { name: 'Smt. Priya Mishra', role: 'Volunteer Coordinator', emoji: '👩‍💻' },
    { name: 'Sri Suresh Behera', role: 'Logistics Head', emoji: '📋' },
    { name: 'Smt. Anjali Rao', role: 'Prasad Committee', emoji: '🍛' },
  ];

  const milestones = [
    { year: '2025', event: 'Started with 500+ devotees involved and prasad distributed to 2000+ people', icon: '🎉' },
  ];

  return (
    <div className="about-us">
      <section className="about-header">
        <h1>🙏 About Us</h1>
        <p>Learn about our community and the sacred tradition we uphold</p>
      </section>

      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                The Jagannath Ratha Yatra celebration at Prestige Finsbury Park began in 2025 
                when a group of devotees from Odisha and other parts of India came together 
                with a shared vision - to bring the divine experience of Puri's Ratha Yatra to 
                our community in Bangalore.
              </p>
              <p>
                In our very first year, we witnessed an overwhelming response with 500+ devotees 
                participating in the celebration and Mahaprasad being distributed to over 2000 people.
              </p>
              <p>
                Our mission is to preserve and share the rich cultural and spiritual heritage 
                of Jagannath consciousness while creating a sense of community and belonging 
                among devotees living away from their homeland.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>🛕</span>
                <p>Community Together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-mission">
        <div className="container">
          <h2>Our Mission & Values</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <span className="mission-icon">🙏</span>
              <h3>Spiritual Devotion</h3>
              <p>To create an atmosphere of pure devotion and connect devotees with Lord Jagannath through authentic worship practices.</p>
            </div>
            <div className="mission-card">
              <span className="mission-icon">🤝</span>
              <h3>Community Building</h3>
              <p>To foster a strong sense of community among families from different backgrounds united by devotion.</p>
            </div>
            <div className="mission-card">
              <span className="mission-icon">📚</span>
              <h3>Cultural Preservation</h3>
              <p>To preserve and pass on the rich traditions, music, dance, and cuisine of Odia culture to future generations.</p>
            </div>
            <div className="mission-card">
              <span className="mission-icon">❤️</span>
              <h3>Service (Seva)</h3>
              <p>To serve the community through Mahaprasad distribution and support for those in need.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-journey">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <span className="timeline-icon">{milestone.icon}</span>
                  <span className="timeline-year">{milestone.year}</span>
                  <p>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="our-team">
        <div className="container">
          <h2>🌟 Organizing Committee</h2>
          <p className="team-desc">Meet the dedicated volunteers who make this celebration possible</p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">{member.emoji}</div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="community-info">
        <div className="container">
          <h2>About Prestige Finsbury Park</h2>
          <div className="community-content">
            <div className="community-text">
              <p>
                Prestige Finsbury Park is a premium residential community located in the serene 
                surroundings of Bangalore. Home to thousands of families, our community is known 
                for its vibrant cultural activities and strong sense of togetherness.
              </p>
              <p>
                The township provides an ideal setting for the Ratha Yatra celebration with its 
                spacious common areas, well-maintained roads for the chariot procession, and 
                facilities to accommodate large gatherings.
              </p>
              <div className="community-stats">
                <div className="stat">
                  <span className="stat-number">2000+</span>
                  <span className="stat-label">Families</span>
                </div>
                <div className="stat">
                  <span className="stat-number">6000+</span>
                  <span className="stat-label">Residents</span>
                </div>
                <div className="stat">
                  <span className="stat-number">25</span>
                  <span className="stat-label">Acres</span>
                </div>
              </div>
            </div>
            <div className="community-image">
              <div className="image-placeholder">
                <span>🏘️</span>
                <p>Prestige Finsbury Park</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="volunteer-cta">
        <div className="cta-content">
          <h2>🙌 Join Our Team</h2>
          <p>Be part of something meaningful. Volunteer for Ratha Yatra 2026!</p>
          <div className="volunteer-roles">
            <span className="role-tag">Decoration Team</span>
            <span className="role-tag">Prasad Preparation</span>
            <span className="role-tag">Event Management</span>
            <span className="role-tag">Cultural Programs</span>
            <span className="role-tag">Photography</span>
            <span className="role-tag">Security</span>
          </div>
          <button className="volunteer-btn">Become a Volunteer</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
