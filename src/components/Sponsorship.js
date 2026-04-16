import React, { useState } from 'react';
import './Sponsorship.css';

const Sponsorship = () => {
  const [selectedTier, setSelectedTier] = useState(null);

  const sponsorshipTiers = [
    {
      id: 'sudarshan',
      name: 'Sudarshan Chakra',
      amount: '₹1,00,000+',
      icon: '☸️',
      color: '#ffd700',
      benefits: [
        'Title sponsor recognition',
        'Logo on main banner & all materials',
        'VIP seating for 20 guests',
        'Special darshan arrangement',
        'Name announcement during ceremony',
        'Featured in all press releases',
        'Commemorative plaque',
        'Prasad delivery for 100 families',
      ],
    },
    {
      id: 'rath',
      name: 'Rath Sponsor',
      amount: '₹50,000',
      icon: '🛕',
      color: '#ff6b35',
      benefits: [
        'Rath decoration sponsorship',
        'Logo display on chariot',
        'VIP seating for 10 guests',
        'Special prasad thali',
        'Name on event banner',
        'Certificate of appreciation',
        'Prasad delivery for 50 families',
      ],
    },
    {
      id: 'bhog',
      name: 'Mahaprasad Sponsor',
      amount: '₹25,000',
      icon: '🍛',
      color: '#f7931e',
      benefits: [
        'Prasad preparation sponsorship',
        'Name in prasad serving area',
        'Reserved seating for 5 guests',
        'Special prasad package',
        'Certificate of appreciation',
        'Prasad delivery for 25 families',
      ],
    },
    {
      id: 'pushpa',
      name: 'Pushpa Seva',
      amount: '₹10,000',
      icon: '🌸',
      color: '#e91e63',
      benefits: [
        'Flower decoration sponsorship',
        'Name in event program',
        'Reserved seating for 3 guests',
        'Prasad for family',
        'Certificate of appreciation',
      ],
    },
    {
      id: 'deep',
      name: 'Deep Seva',
      amount: '₹5,000',
      icon: '🪔',
      color: '#9c27b0',
      benefits: [
        'Lamp lighting ceremony participation',
        'Name in donor list',
        'Reserved seating for 2 guests',
        'Prasad for family',
      ],
    },
    {
      id: 'seva',
      name: 'Seva Daan',
      amount: 'Any Amount',
      icon: '🙏',
      color: '#4caf50',
      benefits: [
        'Contribute any amount',
        'Name in donor list',
        'Divine blessings',
        'Prasad packet',
      ],
    },
  ];

  const currentSponsors = [
    { name: 'Prestige Group', tier: 'Venue Partner', emoji: '🏢' },
    { name: 'Temple Trust', tier: 'Religious Partner', emoji: '🛕' },
    { name: 'Cultural Association', tier: 'Event Partner', emoji: '🎭' },
  ];

  return (
    <div className="sponsorship">
      <section className="sponsorship-header">
        <h1>🤝 Become a Sponsor</h1>
        <p>Support the divine celebration and earn the blessings of Lord Jagannath</p>
      </section>

      <section className="why-sponsor">
        <div className="container">
          <h2>Why Sponsor Ratha Yatra?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <span className="reason-icon">🙏</span>
              <h3>Divine Blessings</h3>
              <p>Receive the sacred blessings of Lord Jagannath for you and your family</p>
            </div>
            <div className="reason-card">
              <span className="reason-icon">👥</span>
              <h3>Community Service</h3>
              <p>Contribute to feeding thousands of devotees with Mahaprasad</p>
            </div>
            <div className="reason-card">
              <span className="reason-icon">🌟</span>
              <h3>Brand Visibility</h3>
              <p>Get recognition in front of thousands of community members</p>
            </div>
            <div className="reason-card">
              <span className="reason-icon">📜</span>
              <h3>Cultural Preservation</h3>
              <p>Help preserve and promote our rich cultural heritage</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsorship-tiers">
        <div className="container">
          <h2>Sponsorship Packages</h2>
          <div className="tiers-grid">
            {sponsorshipTiers.map((tier) => (
              <div 
                key={tier.id} 
                className={`tier-card ${selectedTier === tier.id ? 'selected' : ''}`}
                style={{ '--tier-color': tier.color }}
                onClick={() => setSelectedTier(tier.id === selectedTier ? null : tier.id)}
              >
                <div className="tier-header">
                  <span className="tier-icon">{tier.icon}</span>
                  <h3>{tier.name}</h3>
                  <div className="tier-amount">{tier.amount}</div>
                </div>
                <ul className="tier-benefits">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index}>
                      <span className="check">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="tier-btn">Select Package</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="in-kind-section">
        <div className="container">
          <h2>🎁 In-Kind Donations</h2>
          <p className="section-desc">We also welcome non-monetary contributions to support the celebration</p>
          <div className="inkind-grid">
            <div className="inkind-item">
              <span>🌸</span>
              <h4>Flowers</h4>
              <p>Fresh flowers for decoration</p>
            </div>
            <div className="inkind-item">
              <span>🥥</span>
              <h4>Coconuts</h4>
              <p>For puja rituals</p>
            </div>
            <div className="inkind-item">
              <span>🍚</span>
              <h4>Rice & Groceries</h4>
              <p>For Mahaprasad preparation</p>
            </div>
            <div className="inkind-item">
              <span>🧵</span>
              <h4>Cloth & Fabric</h4>
              <p>For deity decoration</p>
            </div>
            <div className="inkind-item">
              <span>🕯️</span>
              <h4>Ghee & Oil</h4>
              <p>For lamps and cooking</p>
            </div>
            <div className="inkind-item">
              <span>🍬</span>
              <h4>Sweets & Fruits</h4>
              <p>For offerings</p>
            </div>
          </div>
        </div>
      </section>

      <section className="current-sponsors">
        <div className="container">
          <h2>🌟 Our Partners</h2>
          <div className="sponsors-grid">
            {currentSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <span className="sponsor-emoji">{sponsor.emoji}</span>
                <h4>{sponsor.name}</h4>
                <p>{sponsor.tier}</p>
              </div>
            ))}
            <div className="sponsor-card become-sponsor">
              <span className="sponsor-emoji">➕</span>
              <h4>Your Company</h4>
              <p>Join as a sponsor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="donation-form-section">
        <div className="container">
          <div className="form-wrapper">
            <h2>📝 Sponsorship Inquiry</h2>
            <form className="donation-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label>Organization (Optional)</label>
                  <input type="text" placeholder="Company/Organization name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>
              <div className="form-group">
                <label>Preferred Sponsorship Package</label>
                <select>
                  <option value="">Select a package</option>
                  {sponsorshipTiers.map(tier => (
                    <option key={tier.id} value={tier.id}>
                      {tier.name} - {tier.amount}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Message (Optional)</label>
                <textarea placeholder="Any special requests or questions..." rows="4"></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsorship;
