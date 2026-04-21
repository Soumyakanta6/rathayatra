import React, { useState } from 'react';
import './Sponsorship.css';
import dibberLogo from '../assets/images/dibber.png';

const CONTACT_EMAIL = 'jagannathrathayatra.pfp@gmail.com';

const Sponsorship = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showPartnershipModal, setShowPartnershipModal] = useState(false);
  const [selectedPartnership, setSelectedPartnership] = useState(null);
  const [partnershipFormData, setPartnershipFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    message: ''
  });
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
    customAmount: ''
  });
  const [partnerFormData, setPartnerFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnershipType: '',
    website: '',
    message: ''
  });

  const partnershipTypes = [
    'Venue Partner',
    'Food & Catering Partner',
    'Media Partner',
    'Event Partner',
    'Technology Partner',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePartnerInputChange = (e) => {
    const { name, value } = e.target;
    setPartnerFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePartnershipInputChange = (e) => {
    const { name, value } = e.target;
    setPartnershipFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePartnershipSelect = (pkg) => {
    setSelectedPartnership(pkg);
    setShowPartnershipModal(true);
  };

  const handlePartnershipSubmit = (e) => {
    e.preventDefault();
    const subject = `${selectedPartnership.name} Partnership Application - ${partnershipFormData.companyName}`;
    const body = `
Dear Ratha Yatra Committee,

We would like to apply for the ${selectedPartnership.name} partnership.

PARTNERSHIP DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━
Package: ${selectedPartnership.name}
Investment: ${selectedPartnership.amount}

COMPANY INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━
Company Name: ${partnershipFormData.companyName}
Contact Person: ${partnershipFormData.contactPerson}
Email: ${partnershipFormData.email}
Phone: ${partnershipFormData.phone}
${partnershipFormData.website ? `Website: ${partnershipFormData.website}` : ''}
${partnershipFormData.industry ? `Industry: ${partnershipFormData.industry}` : ''}
${partnershipFormData.message ? `\nMessage: ${partnershipFormData.message}` : ''}

We look forward to partnering with you.

Best Regards,
${partnershipFormData.contactPerson}
    `.trim();

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setShowPartnershipModal(false);
    setPartnershipFormData({ companyName: '', contactPerson: '', email: '', phone: '', website: '', industry: '', message: '' });
  };

  const handlePackageSelect = (tier) => {
    setSelectedPackage(tier);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = selectedPackage.id === 'seva' && formData.customAmount 
      ? `₹${formData.customAmount}` 
      : selectedPackage.amount;
    
    const subject = `Sponsorship: ${selectedPackage.name} (${amount})`;
    const body = `
Dear Ratha Yatra Committee,

I would like to sponsor the Jagannath Ratha Yatra 2026.

SPONSORSHIP DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━
Package: ${selectedPackage.name}
Amount: ${amount}

SPONSOR INFO:
━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
${formData.organization ? `Organization: ${formData.organization}` : ''}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.message ? `\nMessage: ${formData.message}` : ''}

Jai Jagannath! 🙏
    `.trim();

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setShowModal(false);
    setFormData({ name: '', organization: '', email: '', phone: '', message: '', customAmount: '' });
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    const subject = `Partnership Inquiry: ${partnerFormData.companyName}`;
    const body = `
Dear Ratha Yatra Committee,

We would like to partner for Jagannath Ratha Yatra 2026.

Company: ${partnerFormData.companyName}
Contact: ${partnerFormData.contactPerson}
Email: ${partnerFormData.email}
Phone: ${partnerFormData.phone}
Partnership Type: ${partnerFormData.partnershipType}
${partnerFormData.website ? `Website: ${partnerFormData.website}` : ''}
${partnerFormData.message ? `\nMessage: ${partnerFormData.message}` : ''}

Best Regards,
${partnerFormData.contactPerson}
    `.trim();

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setShowPartnerModal(false);
    setPartnerFormData({ companyName: '', contactPerson: '', email: '', phone: '', partnershipType: '', website: '', message: '' });
  };

  const sponsorshipTiers = [
    {
      id: 'bhog',
      name: 'Mahaprasad Sponsor',
      amount: '₹25,000',
      icon: '🍛',
      color: '#f7931e',
      popular: true,
      tagline: 'Most Popular',
      benefits: [
        'Prasad sponsorship',
        'Name display at venue',
        'Certificate',
        'Prasad for 25 families',
      ],
    },
    {
      id: 'pushpa',
      name: 'Pushpa Seva',
      amount: '₹10,000',
      icon: '🌸',
      color: '#e91e63',
      tagline: 'Flower Decoration',
      benefits: [
        'Flower sponsorship',
        'Name in program',
        'Prasad for family',
        'Certificate',
      ],
    },
    {
      id: 'deep',
      name: 'Deep Seva',
      amount: '₹5,000',
      icon: '🪔',
      color: '#9c27b0',
      tagline: 'Light of Devotion',
      benefits: [
        'Lamp ceremony',
        'Name in donor list',
        'Seating (2 guests)',
        'Prasad for family',
      ],
    },
    {
      id: 'seva',
      name: 'Seva Daan',
      amount: 'Any Amount',
      icon: '🙏',
      color: '#4caf50',
      tagline: 'Flexible Giving',
      benefits: [
        'Any contribution',
        'Name in donor list',
        'Divine blessings',
        'Prasad packet',
      ],
    },
  ];

  const pastSponsors = {
    platinum: [
      { 
        name: 'Dibber', 
        logo: dibberLogo, 
        emoji: '🌱',
        tagline: 'Nature-Based Learning',
        color: '#4CAF50'
      }
    ],
    gold: [
      { 
        name: 'KidZee', 
        logo: 'https://www.kidzee.com/images/kidzee-logo.png', 
        emoji: '🎒',
        tagline: 'Early Childhood Education',
        color: '#FF6B35'
      },
      { 
        name: 'SpinCycle', 
        logo: 'https://spincycleindia.com/wp-content/uploads/2023/01/spin-cycle-logo.png', 
        emoji: '🧺',
        tagline: 'Premium Laundry Services',
        color: '#2196F3'
      },
      { 
        name: 'FreshMart', 
        logo: '', 
        emoji: '🛒',
        tagline: 'Fresh Groceries Delivered',
        color: '#4CAF50'
      },
      { 
        name: 'TechHub', 
        logo: '', 
        emoji: '💻',
        tagline: 'IT Solutions & Services',
        color: '#9C27B0'
      },
      { 
        name: 'GreenLeaf Cafe', 
        logo: '', 
        emoji: '☕',
        tagline: 'Organic Food & Beverages',
        color: '#8BC34A'
      }
    ]
  };

  const benefits = [
    { icon: '🙏', title: 'Divine Blessings', desc: 'Sacred prayers in your name', color: '#f39c12' },
    { icon: '🍛', title: 'Annadaan Seva', desc: 'Feed 2000+ devotees', color: '#e74c3c' },
    { icon: '📢', title: 'Brand Visibility', desc: 'Premium event exposure', color: '#3498db' },
    { icon: '🤝', title: 'Networking', desc: 'Connect with leaders', color: '#27ae60' },
  ];

  const inKindItems = [
    { icon: '🌸', name: 'Flowers' },
    { icon: '🥥', name: 'Coconuts' },
    { icon: '🍚', name: 'Rice & Groceries' },
    { icon: '🧵', name: 'Cloth & Fabric' },
    { icon: '🕯️', name: 'Ghee & Oil' },
    { icon: '🍬', name: 'Sweets & Fruits' },
  ];

  const partnershipPackages = [
    {
      id: 'platinum',
      name: 'Platinum Partner',
      amount: '₹40,000',
      icon: '💎',
      color: '#e5e4e2',
      gradient: 'linear-gradient(135deg, #e5e4e2, #b8b8b8)',
      recommended: true,
      tagline: 'Maximum Visibility & Impact',
      benefits: {
        branding: [
          { name: 'Logo on Main Stage Backdrop', included: true },
          { name: 'Logo on Event Banner & Flexes', included: true },
          { name: 'Logo on Invitation Cards', included: true },
          { name: 'Dedicated Banner at Entrance', included: true },
        ],
        digital: [
          { name: 'Featured on Website Homepage', included: true },
          { name: 'Video Credits & Mentions', included: true },
        ],
        event: [
          { name: 'Stage Recognition & Speech', included: true },
          { name: 'Reserved Seating (5 guests)', included: true },
        ],
        extras: [
          { name: 'Product Display Stall (Premium)', included: true },
          { name: 'Press Release Mention', included: true },
          { name: 'Certificate of Appreciation', included: true },
          { name: 'Photo/Video Documentation', included: true },
        ]
      }
    },
    {
      id: 'gold',
      name: 'Gold Partner',
      amount: '₹20,000',
      icon: '🥇',
      color: '#ffd700',
      gradient: 'linear-gradient(135deg, #ffd700, #ffb300)',
      tagline: 'High Visibility Partnership',
      benefits: {
        branding: [
          { name: 'Logo on Main Stage Backdrop', included: true },
          { name: 'Logo on Event Banner & Flexes', included: true },
          { name: 'Logo on Invitation Cards', included: true },
          { name: 'Dedicated Banner at Entrance', included: false },
        ],
        digital: [
          { name: 'Featured on Website Homepage', included: true },
          { name: 'Video Credits & Mentions', included: false },
        ],
        event: [
          { name: 'Stage Recognition & Speech', included: true },
          { name: 'Reserved Seating (3 guests)', included: true },
        ],
        extras: [
          { name: 'Product Display Stall (Standard)', included: true },
          { name: 'Press Release Mention', included: false },
          { name: 'Certificate of Appreciation', included: true },
          { name: 'Photo/Video Documentation', included: true },
        ]
      }
    },
    {
      id: 'silver',
      name: 'Silver Partner',
      amount: '₹10,000',
      icon: '🥈',
      color: '#c0c0c0',
      gradient: 'linear-gradient(135deg, #c0c0c0, #a8a8a8)',
      tagline: 'Community Partnership',
      benefits: {
        branding: [
          { name: 'Logo on Main Stage Backdrop', included: false },
          { name: 'Logo on Event Banner & Flexes', included: true },
          { name: 'Logo on Invitation Cards', included: true },
          { name: 'Dedicated Banner at Entrance', included: false },
        ],
        digital: [
          { name: 'Featured on Website Homepage', included: true },
          { name: 'Video Credits & Mentions', included: false },
        ],
        event: [
          { name: 'Stage Recognition & Speech', included: false },
          { name: 'Reserved Seating (2 guests)', included: true },
        ],
        extras: [
          { name: 'Product Display Stall', included: false },
          { name: 'Press Release Mention', included: false },
          { name: 'Certificate of Appreciation', included: true },
          { name: 'Photo/Video Documentation', included: true },
        ]
      }
    }
  ];

  const comparisonFeatures = [
    { category: 'Branding', features: ['Logo on Main Stage', 'Event Banners & Flexes', 'Invitation Cards', 'Entrance Banner'] },
    { category: 'Digital', features: ['Website Feature', 'Video Mentions'] },
    { category: 'Event Access', features: ['Stage Recognition', 'Reserved Seating'] },
    { category: 'Extras', features: ['Display Stall', 'Press Release', 'Certificate', 'Photo/Video'] }
  ];

  return (
    <div className="sponsorship">
      {/* Hero Section */}
      <section className="sponsor-hero">
        <div className="hero-bg-animation">
          <span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span>
        </div>
        <div className="hero-content">
          <span className="hero-label">🤝 Divine Partnership</span>
          <h1>Become a Sponsor</h1>
          <p>Support the divine celebration and earn the blessings of Lord Jagannath</p>
          <div className="hero-quick-stats">
            <div className="quick-stat">
              <span className="quick-stat-value">1500+</span>
              <span className="quick-stat-label">Devotees</span>
            </div>
            <div className="quick-stat">
              <span className="quick-stat-value">2000+</span>
              <span className="quick-stat-label">Prasad</span>
            </div>
            <div className="quick-stat">
              <span className="quick-stat-value">10</span>
              <span className="quick-stat-label">Days</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Sponsors Showcase */}
      <section className="sponsors-showcase">
        <div className="container">
          <div className="section-header">
            <span className="section-label">🏆 2025 Success</span>
            <h2>Our Valued Sponsors</h2>
            <p>These organizations made Ratha Yatra 2025 a grand success</p>
          </div>
          
          <div className="past-sponsors-row">
            {pastSponsors.platinum.map((sponsor, index) => (
              <div key={index} className="past-sponsor-card platinum" style={{ '--sponsor-color': sponsor.color }}>
                <div className="sponsor-card-header">
                  <div className="sponsor-logo-circle">
                    {sponsor.logo ? (
                      <img src={sponsor.logo} alt={sponsor.name} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                    ) : null}
                    <span className="logo-fallback" style={{ display: sponsor.logo ? 'none' : 'block' }}>{sponsor.emoji}</span>
                  </div>
                  <div className="sponsor-card-info">
                    <h3>{sponsor.name}</h3>
                    <span className="sponsor-tier-label">💎 Platinum 2025</span>
                  </div>
                </div>
                <p className="sponsor-card-tagline">{sponsor.tagline}</p>
                <div className="sponsor-card-highlights">
                  <span className="highlight-tag">✓ Main Stage</span>
                  <span className="highlight-tag">✓ 500+ Impressions</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="past-sponsors-row gold-row">
            {pastSponsors.gold.map((sponsor, index) => (
              <div key={index} className="past-sponsor-card gold" style={{ '--sponsor-color': sponsor.color }}>
                <div className="sponsor-card-header">
                  <div className="sponsor-logo-circle">
                    {sponsor.logo ? (
                      <img src={sponsor.logo} alt={sponsor.name} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                    ) : null}
                    <span className="logo-fallback" style={{ display: sponsor.logo ? 'none' : 'block' }}>{sponsor.emoji}</span>
                  </div>
                  <div className="sponsor-card-info">
                    <h3>{sponsor.name}</h3>
                    <span className="sponsor-tier-label">🥇 Gold 2025</span>
                  </div>
                </div>
                <p className="sponsor-card-tagline">{sponsor.tagline}</p>
                <div className="sponsor-card-highlights">
                  <span className="highlight-tag">✓ Event Recognition</span>
                  <span className="highlight-tag">✓ Community Reach</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="sponsor-tiers-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">💝 Support the Festival</span>
            <h2>Donation/Seva Packages</h2>
            <p>Choose a seva that resonates with your heart</p>
          </div>
          
          <div className="tiers-grid">
            {sponsorshipTiers.map((tier) => (
              <div 
                key={tier.id} 
                className={`tier-card ${tier.popular ? 'popular' : ''}`}
                style={{ '--tier-color': tier.color }}
              >
                {tier.popular && <div className="popular-tag">⭐ Popular</div>}
                <span className="tier-emoji">{tier.icon}</span>
                <h3 className="tier-name">{tier.name}</h3>
                <span className="tier-tagline">{tier.tagline}</span>
                <div className="tier-price">{tier.amount}</div>
                <ul className="tier-benefits-list">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button 
                  className="tier-select-btn" 
                  onClick={() => handlePackageSelect(tier)}
                >
                  Select
                </button>
              </div>
            ))}
          </div>
          
          <div className="custom-note">
            <span>💡</span>
            <p>Need a custom package? <a href={`mailto:${CONTACT_EMAIL}?subject=Custom Sponsorship Inquiry`}>Contact us</a></p>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="why-sponsor-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">✨ Benefits</span>
            <h2>Why Sponsor Ratha Yatra?</h2>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="benefit-card"
                style={{ '--benefit-color': benefit.color }}
              >
                <span className="benefit-icon">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Packages Overview */}
      <section className="partnership-overview-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">🏢 Corporate Partnership</span>
            <h2>Partnership Packages</h2>
            <p>View our partnership tiers and benefits</p>
          </div>

          <div className="partnership-cards-grid">
            {partnershipPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`partnership-overview-card ${pkg.id} ${pkg.recommended ? 'recommended' : ''}`}
                style={{ '--pkg-color': pkg.color, '--pkg-gradient': pkg.gradient }}
              >
                {pkg.recommended && <div className="recommended-badge-overview">⭐ Best Value</div>}
                <div className="pkg-overview-header">
                  <span className="pkg-overview-icon">{pkg.icon}</span>
                  <h3 className="pkg-overview-name">{pkg.name}</h3>
                  <div className="pkg-overview-amount">{pkg.amount}</div>
                </div>
                <div className="pkg-overview-benefits">
                  <div className="overview-benefit-cat">
                    <strong>🎨 Branding</strong>
                    <ul>
                      {pkg.benefits.branding.slice(0, 3).map((b, i) => (
                        <li key={i} className={b.included ? 'included' : 'excluded'}>
                          {b.included ? '✓' : '✗'} {b.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="overview-benefit-cat">
                    <strong>🎟️ Event Access</strong>
                    <ul>
                      {pkg.benefits.event.map((b, i) => (
                        <li key={i} className={b.included ? 'included' : 'excluded'}>
                          {b.included ? '✓' : '✗'} {b.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="partnership-note">
            <span>💡</span>
            <p>Click <strong>"Become a Sponsor"</strong> in the header to apply for partnership</p>
          </div>
        </div>
      </section>

      {/* In-Kind Donations */}
      <section className="inkind-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">🎁 In-Kind Donations</span>
            <h2>Non-Monetary Contributions Welcome</h2>
          </div>
          
          <div className="inkind-grid">
            {inKindItems.map((item, index) => (
              <div key={index} className="inkind-chip">
                <span>{item.icon}</span>
                <strong>{item.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sponsor-cta-section">
        <div className="container">
          <h2>Ready to Make an Impact?</h2>
          <p>Join us in creating a spiritually enriching celebration</p>
          <div className="cta-buttons">
            <a 
              href={`mailto:${CONTACT_EMAIL}?subject=Sponsorship Inquiry 2026`} 
              className="cta-btn primary"
            >
              📧 Contact Us
            </a>
            <button 
              className="cta-btn secondary"
              onClick={() => setShowPartnerModal(true)}
            >
              🤝 Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* Sponsorship Modal */}
      {showModal && selectedPackage && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ '--tier-color': selectedPackage.color }}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            
            <div className="modal-header">
              <span className="modal-icon">{selectedPackage.icon}</span>
              <div>
                <h2>{selectedPackage.name}</h2>
                <div className="modal-price">{selectedPackage.amount}</div>
              </div>
            </div>

            <div className="modal-benefits">
              <h4>📋 What You Get</h4>
              <ul>
                {selectedPackage.benefits.map((benefit, index) => (
                  <li key={index}>
                    <span className="check-mark">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-form">
              <h4>📝 Your Details</h4>
              <p className="form-note">Fill in your details to proceed</p>
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Organization</label>
                    <input 
                      type="text" 
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Optional" 
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX" 
                      required 
                    />
                  </div>
                </div>

                {selectedPackage.id === 'seva' && (
                  <div className="form-group">
                    <label>Contribution Amount (₹) *</label>
                    <input 
                      type="number" 
                      name="customAmount"
                      value={formData.customAmount}
                      onChange={handleInputChange}
                      placeholder="Enter amount" 
                      min="100"
                      required 
                    />
                  </div>
                )}
                
                <div className="form-group">
                  <label>Message (Optional)</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any special requests..." 
                    rows="2"
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <span>📧</span> Send Request
                </button>
                
                <p className="email-info">
                  Opens email to <strong>{CONTACT_EMAIL}</strong>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Partner Modal */}
      {showPartnerModal && (
        <div className="modal-overlay" onClick={() => setShowPartnerModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ '--tier-color': '#2196f3' }}>
            <button className="modal-close" onClick={() => setShowPartnerModal(false)}>×</button>
            
            <div className="modal-header">
              <span className="modal-icon">🤝</span>
              <div>
                <h2>Become a Partner</h2>
                <div className="modal-price">Join Our Community</div>
              </div>
            </div>

            <div className="modal-benefits">
              <h4>🌟 Partner Benefits</h4>
              <ul>
                <li><span className="check-mark">✓</span>Brand visibility</li>
                <li><span className="check-mark">✓</span>Logo on materials</li>
                <li><span className="check-mark">✓</span>Event recognition</li>
                <li><span className="check-mark">✓</span>VIP access</li>
                <li><span className="check-mark">✓</span>Social media</li>
                <li><span className="check-mark">✓</span>Networking</li>
              </ul>
            </div>

            <div className="modal-form">
              <h4>📝 Company Details</h4>
              <p className="form-note">Tell us about your organization</p>
              
              <form onSubmit={handlePartnerSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Company Name *</label>
                    <input 
                      type="text" 
                      name="companyName"
                      value={partnerFormData.companyName}
                      onChange={handlePartnerInputChange}
                      placeholder="Company name" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Person *</label>
                    <input 
                      type="text" 
                      name="contactPerson"
                      value={partnerFormData.contactPerson}
                      onChange={handlePartnerInputChange}
                      placeholder="Full name" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={partnerFormData.email}
                      onChange={handlePartnerInputChange}
                      placeholder="company@email.com" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={partnerFormData.phone}
                      onChange={handlePartnerInputChange}
                      placeholder="+91 XXXXX XXXXX" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Partnership Type *</label>
                    <select 
                      name="partnershipType"
                      value={partnerFormData.partnershipType}
                      onChange={handlePartnerInputChange}
                      required
                    >
                      <option value="">Select type</option>
                      {partnershipTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Website</label>
                    <input 
                      type="url" 
                      name="website"
                      value={partnerFormData.website}
                      onChange={handlePartnerInputChange}
                      placeholder="https://..." 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Message</label>
                  <textarea 
                    name="message"
                    value={partnerFormData.message}
                    onChange={handlePartnerInputChange}
                    placeholder="How would you like to partner?" 
                    rows="2"
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <span>📧</span> Submit Inquiry
                </button>
                
                <p className="email-info">
                  Opens email to <strong>{CONTACT_EMAIL}</strong>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Partnership Package Modal */}
      {showPartnershipModal && selectedPartnership && (
        <div className="modal-overlay" onClick={() => setShowPartnershipModal(false)}>
          <div className="modal-content partnership-modal" onClick={e => e.stopPropagation()} style={{ '--pkg-gradient': selectedPartnership.gradient }}>
            <button className="modal-close" onClick={() => setShowPartnershipModal(false)}>×</button>
            
            <div className="modal-header partnership-header">
              <span className="modal-icon">{selectedPartnership.icon}</span>
              <div>
                <h2>{selectedPartnership.name}</h2>
                <div className="modal-price">{selectedPartnership.amount}</div>
              </div>
            </div>

            <div className="partnership-benefits-full">
              <h4>📋 Complete Benefits Package</h4>
              <div className="benefits-columns">
                <div className="benefit-col">
                  <h5>🎨 Branding</h5>
                  <ul>
                    {selectedPartnership.benefits.branding.map((b, i) => (
                      <li key={i} className={b.included ? 'included' : 'excluded'}>
                        {b.included ? '✓' : '✗'} {b.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="benefit-col">
                  <h5>📱 Digital</h5>
                  <ul>
                    {selectedPartnership.benefits.digital.map((b, i) => (
                      <li key={i} className={b.included ? 'included' : 'excluded'}>
                        {b.included ? '✓' : '✗'} {b.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="benefit-col">
                  <h5>🎟️ Event</h5>
                  <ul>
                    {selectedPartnership.benefits.event.map((b, i) => (
                      <li key={i} className={b.included ? 'included' : 'excluded'}>
                        {b.included ? '✓' : '✗'} {b.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="benefit-col">
                  <h5>🎁 Extras</h5>
                  <ul>
                    {selectedPartnership.benefits.extras.map((b, i) => (
                      <li key={i} className={b.included ? 'included' : 'excluded'}>
                        {b.included ? '✓' : '✗'} {b.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="modal-form">
              <h4>📝 Apply for {selectedPartnership.name}</h4>
              <p className="form-note">Fill in your company details</p>
              
              <form onSubmit={handlePartnershipSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Company Name *</label>
                    <input 
                      type="text" 
                      name="companyName"
                      value={partnershipFormData.companyName}
                      onChange={handlePartnershipInputChange}
                      placeholder="Your company name" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Person *</label>
                    <input 
                      type="text" 
                      name="contactPerson"
                      value={partnershipFormData.contactPerson}
                      onChange={handlePartnershipInputChange}
                      placeholder="Full name" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={partnershipFormData.email}
                      onChange={handlePartnershipInputChange}
                      placeholder="company@email.com" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={partnershipFormData.phone}
                      onChange={handlePartnershipInputChange}
                      placeholder="+91 XXXXX XXXXX" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Website</label>
                    <input 
                      type="url" 
                      name="website"
                      value={partnershipFormData.website}
                      onChange={handlePartnershipInputChange}
                      placeholder="https://yourcompany.com" 
                    />
                  </div>
                  <div className="form-group">
                    <label>Industry</label>
                    <input 
                      type="text" 
                      name="industry"
                      value={partnershipFormData.industry}
                      onChange={handlePartnershipInputChange}
                      placeholder="e.g., Technology, Education" 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Message (Optional)</label>
                  <textarea 
                    name="message"
                    value={partnershipFormData.message}
                    onChange={handlePartnershipInputChange}
                    placeholder="Tell us about your company and partnership goals..." 
                    rows="3"
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn partnership-submit">
                  <span>📧</span> Submit {selectedPartnership.name} Application
                </button>
                
                <p className="email-info">
                  Opens email to <strong>{CONTACT_EMAIL}</strong>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sponsorship;
