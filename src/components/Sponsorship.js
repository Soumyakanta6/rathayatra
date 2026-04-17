import React, { useState } from 'react';
import './Sponsorship.css';

const CONTACT_EMAIL = 'jagannathrathayatra.pfp@gmail.com';

const Sponsorship = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPartnerModal, setShowPartnerModal] = useState(false);
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
    'Religious Partner',
    'Technology Partner',
    'Logistics Partner',
    'Other'
  ];

  const handlePartnerInputChange = (e) => {
    const { name, value } = e.target;
    setPartnerFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    const subject = `Partnership Inquiry: ${partnerFormData.companyName} - ${partnerFormData.partnershipType}`;
    const body = `
Dear Ratha Yatra Committee,

We would like to explore a partnership opportunity for Jagannath Ratha Yatra 2026.

COMPANY DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Company Name: ${partnerFormData.companyName}
Contact Person: ${partnerFormData.contactPerson}
Email: ${partnerFormData.email}
Phone: ${partnerFormData.phone}
${partnerFormData.website ? `Website: ${partnerFormData.website}` : ''}

PARTNERSHIP INTEREST:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Partnership Type: ${partnerFormData.partnershipType}

${partnerFormData.message ? `MESSAGE:\n${partnerFormData.message}` : ''}

We look forward to discussing this opportunity with you.

Best Regards,
${partnerFormData.contactPerson}
${partnerFormData.companyName}
    `.trim();

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setShowPartnerModal(false);
    setPartnerFormData({ companyName: '', contactPerson: '', email: '', phone: '', partnershipType: '', website: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    
    const subject = `Sponsorship Inquiry: ${selectedPackage.name} (${amount})`;
    const body = `
Dear Ratha Yatra Committee,

I would like to sponsor the Jagannath Ratha Yatra 2026 celebration.

SPONSORSHIP DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Package: ${selectedPackage.name}
Amount: ${amount}
${selectedPackage.id === 'seva' && formData.customAmount ? `Custom Amount: ₹${formData.customAmount}` : ''}

SPONSOR INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
${formData.organization ? `Organization: ${formData.organization}` : ''}
Email: ${formData.email}
Phone: ${formData.phone}

${formData.message ? `MESSAGE:\n${formData.message}` : ''}

PACKAGE BENEFITS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${selectedPackage.benefits.map(b => `• ${b}`).join('\n')}

I look forward to hearing from you.

Jai Jagannath! 🙏
    `.trim();

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setShowModal(false);
    setFormData({ name: '', organization: '', email: '', phone: '', message: '', customAmount: '' });
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
      tagline: 'Flower Decoration',
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
      tagline: 'Light of Devotion',
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
      tagline: 'Flexible Giving',
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
        <div className="why-sponsor-bg">
          <div className="floating-element el-1">🌼</div>
          <div className="floating-element el-2">✨</div>
          <div className="floating-element el-3">🌸</div>
          <div className="floating-element el-4">💫</div>
          <div className="floating-element el-5">🌺</div>
        </div>
        <div className="container">
          <div className="why-sponsor-header">
            <span className="why-badge">✨ Make a Divine Impact</span>
            <h2>Why Sponsor Ratha Yatra?</h2>
            <p className="why-subtitle">Join hands in creating one of Bangalore's most spiritually enriching celebrations</p>
          </div>

          {/* Impact Stats */}
          <div className="impact-stats">
            <div className="stat-item">
              <div className="stat-icon">🙏</div>
              <span className="stat-number">1500+</span>
              <span className="stat-label">Expected Devotees</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon">🍛</div>
              <span className="stat-number">2000+</span>
              <span className="stat-label">Prasad Servings</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon">🎭</div>
              <span className="stat-number">20+</span>
              <span className="stat-label">Cultural Programs</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon">📅</div>
              <span className="stat-number">10</span>
              <span className="stat-label">Days of Celebration</span>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="reasons-grid">
            <div className="reason-card spiritual">
              <div className="reason-glow"></div>
              <span className="reason-icon">🙏</span>
              <h3>Divine Blessings</h3>
              <p>Receive the sacred blessings of Lord Jagannath, Balabhadra & Subhadra for eternal prosperity</p>
              <ul className="reason-points">
                <li>Special prayers in your name</li>
                <li>Participation in sacred rituals</li>
              </ul>
            </div>
            <div className="reason-card community">
              <div className="reason-glow"></div>
              <span className="reason-icon">🍛</span>
              <h3>Annadaan Seva</h3>
              <p>Feed thousands of devotees with sanctified Mahaprasad — the highest form of charity</p>
              <ul className="reason-points">
                <li>Feed 2000+ devotees</li>
                <li>Authentic Odia Mahaprasad</li>
                <li>Your name displayed at prasad area</li>
              </ul>
            </div>
            <div className="reason-card visibility">
              <div className="reason-glow"></div>
              <span className="reason-icon">📢</span>
              <h3>Brand Visibility</h3>
              <p>Premium exposure to a highly engaged audience across multiple channels</p>
              <ul className="reason-points">
                <li>Logo on banners & standees</li>
                <li>Social media mentions</li>
                <li>Featured in event documentation</li>
              </ul>
            </div>
            <div className="reason-card culture">
              <div className="reason-glow"></div>
              <span className="reason-icon">🎭</span>
              <h3>Cultural Legacy</h3>
              <p>Be part of preserving and promoting the 800+ year old Ratha Yatra tradition</p>
              <ul className="reason-points">
                <li>Support traditional artisans</li>
                <li>Sponsor cultural performances</li>
                <li>Certificate of appreciation</li>
              </ul>
            </div>
            <div className="reason-card networking">
              <div className="reason-glow"></div>
              <span className="reason-icon">🤝</span>
              <h3>Networking</h3>
              <p>Connect with community leaders, business owners, and like-minded individuals</p>
              <ul className="reason-points">
                <li>Meet community influencers</li>
                <li>Business collaboration opportunities</li>
                <li>Special place to showcase your business</li>
              </ul>
            </div>
          </div>

          {/* Testimonial */}
          <div className="sponsor-testimonial">
            <div className="testimonial-quote">❝</div>
            <p className="testimonial-text">"Sponsoring Ratha Yatra has been one of the most fulfilling experiences for our organization. The divine energy and community spirit is unmatched."</p>
            <div className="testimonial-author">
              <span className="author-name">— Previous Sponsor</span>
              <span className="author-title">Mahaprasad Sponsor 2025</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsorship-tiers">
        <div className="container">
          <div className="tiers-header">
            <span className="tiers-badge">💝 Support the Festival</span>
            <h2>Sponsorship Packages</h2>
            <p className="tiers-subtitle">Choose a seva that resonates with your heart</p>
          </div>
          <div className="tiers-grid">
            {sponsorshipTiers.map((tier) => (
              <div 
                key={tier.id} 
                className={`tier-card ${selectedTier === tier.id ? 'selected' : ''} ${tier.popular ? 'popular' : ''}`}
                style={{ '--tier-color': tier.color }}
                onClick={() => setSelectedTier(tier.id === selectedTier ? null : tier.id)}
              >
                {tier.popular && <div className="popular-badge">⭐ Most Popular</div>}
                <div className="tier-tagline">{tier.tagline}</div>
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
                <button className="tier-btn" onClick={(e) => { e.stopPropagation(); handlePackageSelect(tier); }}>
                  Select Package
                </button>
              </div>
            ))}
          </div>
          <div className="custom-sponsor-note">
            <span className="note-icon">💡</span>
            <p>Looking for a larger contribution? <strong>Contact us</strong> for custom sponsorship packages tailored to your wishes.</p>
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
            <div className="sponsor-card become-sponsor" onClick={() => setShowPartnerModal(true)}>
              <span className="sponsor-emoji">➕</span>
              <h4>Your Company</h4>
              <p>Become a Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Modal */}
      {showModal && selectedPackage && (
        <div className="sponsor-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="sponsor-modal" onClick={e => e.stopPropagation()} style={{ '--tier-color': selectedPackage.color }}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            
            <div className="modal-package-header">
              <span className="modal-icon">{selectedPackage.icon}</span>
              <div>
                <h2>{selectedPackage.name}</h2>
                <div className="modal-amount">{selectedPackage.amount}</div>
              </div>
            </div>

            <div className="modal-benefits">
              <h4>📋 What You Get</h4>
              <ul>
                {selectedPackage.benefits.map((benefit, index) => (
                  <li key={index}>
                    <span className="benefit-check">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-form-section">
              <h4>📝 Fill Your Details</h4>
              <p className="form-note">Complete the form below and we'll send an email to confirm your sponsorship.</p>
              
              <form onSubmit={handleSubmit} className="sponsor-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name" 
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
                      placeholder="Company name (optional)" 
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
                    <label>Your Contribution Amount (₹) *</label>
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
                    placeholder="Any special requests or questions..." 
                    rows="3"
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-sponsor-btn">
                  <span>📧</span> Send Sponsorship Request
                </button>
                
                <p className="email-note">
                  Your email client will open with a pre-filled message to <strong>{CONTACT_EMAIL}</strong>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Partner Modal */}
      {showPartnerModal && (
        <div className="sponsor-modal-overlay" onClick={() => setShowPartnerModal(false)}>
          <div className="sponsor-modal partner-modal" onClick={e => e.stopPropagation()} style={{ '--tier-color': '#2196f3' }}>
            <button className="modal-close" onClick={() => setShowPartnerModal(false)}>×</button>
            
            <div className="modal-package-header">
              <span className="modal-icon">🤝</span>
              <div>
                <h2>Become a Partner</h2>
                <div className="modal-amount">Join Our Community</div>
              </div>
            </div>

            <div className="modal-benefits">
              <h4>🌟 Partner Benefits</h4>
              <ul>
                <li><span className="benefit-check">✓</span>Brand visibility at the event</li>
                <li><span className="benefit-check">✓</span>Logo on all promotional materials</li>
                <li><span className="benefit-check">✓</span>Recognition in event announcements</li>
                <li><span className="benefit-check">✓</span>VIP access for company representatives</li>
                <li><span className="benefit-check">✓</span>Social media mentions</li>
                <li><span className="benefit-check">✓</span>Networking opportunities</li>
              </ul>
            </div>

            <div className="modal-form-section">
              <h4>📝 Company Details</h4>
              <p className="form-note">Tell us about your organization and how you'd like to partner with us.</p>
              
              <form onSubmit={handlePartnerSubmit} className="sponsor-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Company Name *</label>
                    <input 
                      type="text" 
                      name="companyName"
                      value={partnerFormData.companyName}
                      onChange={handlePartnerInputChange}
                      placeholder="Your company name" 
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
                      <option value="">Select partnership type</option>
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
                      placeholder="https://yourcompany.com" 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Tell Us About Your Company & Partnership Idea</label>
                  <textarea 
                    name="message"
                    value={partnerFormData.message}
                    onChange={handlePartnerInputChange}
                    placeholder="Describe your company and how you'd like to collaborate with us..." 
                    rows="4"
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-sponsor-btn">
                  <span>📧</span> Submit Partnership Inquiry
                </button>
                
                <p className="email-note">
                  Your email client will open with a pre-filled message to <strong>{CONTACT_EMAIL}</strong>
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
