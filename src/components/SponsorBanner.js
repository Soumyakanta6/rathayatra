import React, { useState } from 'react';
import './SponsorBanner.css';
import dibberLogo from '../assets/images/dibber.png';

const CONTACT_EMAIL = 'jagannathrathayatra.pfp@gmail.com';

const SponsorBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    packages: false,
    comparison: false
  });
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnershipTier: '',
    website: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Sponsorship Inquiry: ${formData.companyName}`;
    const body = `Dear Ratha Yatra Committee,

We would like to become a sponsor for Jagannath Ratha Yatra 2026.

Company: ${formData.companyName}
Contact: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}
Partnership Tier: ${formData.partnershipTier}
${formData.website ? `Website: ${formData.website}` : ''}
${formData.message ? `\nMessage: ${formData.message}` : ''}

Best Regards,
${formData.contactPerson}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setShowModal(false);
    setFormData({ companyName: '', contactPerson: '', email: '', phone: '', partnershipTier: '', website: '', message: '' });
  };

  const handleCtaClick = (e) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const sponsors = {
    platinum: [
      { 
        name: 'Dibber', 
        logo: dibberLogo,
        emoji: '🌱',
        tagline: 'Nature-Based Learning' 
      }
    ],
    gold: [
      { 
        name: 'KidZee', 
        logo: 'https://www.kidzee.com/images/kidzee-logo.png',
        emoji: '🎒',
        tagline: 'Early Childhood Education' 
      },
      { 
        name: 'SpinCycle', 
        logo: 'https://spincycleindia.com/wp-content/uploads/2023/01/spin-cycle-logo.png',
        emoji: '🧺',
        tagline: 'Premium Laundry' 
      },
      { 
        name: 'FreshMart', 
        emoji: '🛒',
        tagline: 'Fresh Groceries' 
      },
      { 
        name: 'TechHub', 
        emoji: '💻',
        tagline: 'IT Solutions' 
      },
      { 
        name: 'GreenLeaf Cafe', 
        emoji: '☕',
        tagline: 'Organic Food' 
      }
    ]
  };

  const allSponsors = [
    ...sponsors.platinum.map(s => ({ ...s, tier: 'platinum' })),
    ...sponsors.gold.map(s => ({ ...s, tier: 'gold' }))
  ];

  return (
    <div className="sponsor-banner">
      <div className="sponsor-banner-inner">
        <div className="sponsor-label">
          <span className="sponsor-label-icon">🏆</span>
          <span>Our Sponsors 2025</span>
        </div>
        <div className="sponsor-marquee">
          <div className="sponsor-track">
            {/* First set */}
            {allSponsors.map((sponsor, index) => (
              <div key={`first-${index}`} className={`sponsor-item ${sponsor.tier}`}>
                <div className="sponsor-logo-wrapper">
                  {sponsor.logo ? (
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="sponsor-logo-img"
                      onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                  ) : null}
                  <span className="sponsor-logo-emoji" style={{ display: sponsor.logo ? 'none' : 'flex' }}>
                    {sponsor.emoji}
                  </span>
                </div>
                <div className="sponsor-info">
                  <span className="sponsor-name">{sponsor.name}</span>
                  <span className={`sponsor-tier-badge ${sponsor.tier}`}>
                    {sponsor.tier === 'platinum' ? '💎' : '🥇'} {sponsor.tier}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {allSponsors.map((sponsor, index) => (
              <div key={`second-${index}`} className={`sponsor-item ${sponsor.tier}`}>
                <div className="sponsor-logo-wrapper">
                  {sponsor.logo ? (
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="sponsor-logo-img"
                      onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                  ) : null}
                  <span className="sponsor-logo-emoji" style={{ display: sponsor.logo ? 'none' : 'flex' }}>
                    {sponsor.emoji}
                  </span>
                </div>
                <div className="sponsor-info">
                  <span className="sponsor-name">{sponsor.name}</span>
                  <span className={`sponsor-tier-badge ${sponsor.tier}`}>
                    {sponsor.tier === 'platinum' ? '💎' : '🥇'} {sponsor.tier}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sponsor-cta" onClick={handleCtaClick}>
          <span>Become a Sponsor</span>
          <span className="cta-arrow">→</span>
        </div>
      </div>

      {/* Sponsor Form Modal */}
      {showModal && (
        <div className="sponsor-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="sponsor-modal-content" onClick={e => e.stopPropagation()}>
            <button className="sponsor-modal-close" onClick={() => setShowModal(false)}>×</button>
            
            <div className="sponsor-modal-header">
              <span className="sponsor-modal-icon">🙏</span>
              <div>
                <h2>Become a Sponsor</h2>
                <p>Support the divine celebration of Ratha Yatra 2026</p>
              </div>
            </div>

            <form className="sponsor-modal-form" onSubmit={handleSubmit}>
              <div className="sponsor-form-row">
                <div className="sponsor-form-group">
                  <label>Company Name *</label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Your company name" 
                    required 
                  />
                </div>
                <div className="sponsor-form-group">
                  <label>Contact Person *</label>
                  <input 
                    type="text" 
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    placeholder="Full name" 
                    required 
                  />
                </div>
              </div>
              
              <div className="sponsor-form-row">
                <div className="sponsor-form-group">
                  <label>Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="company@email.com" 
                    required 
                  />
                </div>
                <div className="sponsor-form-group">
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

              <div className="sponsor-form-row">
                <div className="sponsor-form-group">
                  <label>Partnership Tier *</label>
                  <select 
                    name="partnershipTier"
                    value={formData.partnershipTier}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a tier</option>
                    <option value="Platinum Partner (₹40,000)">💎 Platinum - ₹40,000</option>
                    <option value="Gold Partner (₹20,000)">🥇 Gold - ₹20,000</option>
                    <option value="Silver Partner (₹10,000)">🥈 Silver - ₹10,000</option>
                  </select>
                </div>
                <div className="sponsor-form-group">
                  <label>Website</label>
                  <input 
                    type="url" 
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://..." 
                  />
                </div>
              </div>
              
              <div className="sponsor-form-group">
                <label>Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How would you like to sponsor?" 
                  rows="3"
                ></textarea>
              </div>

              {/* Expandable Corporate Partnership Section */}
              <div className="sponsor-expandable-section">
                <button 
                  type="button"
                  className={`sponsor-expandable-header ${expandedSections.packages ? 'expanded' : ''}`}
                  onClick={() => setExpandedSections(prev => ({ ...prev, packages: !prev.packages }))}
                >
                  <span>🏢 View Partnership Packages</span>
                  <span className="expand-icon">{expandedSections.packages ? '−' : '+'}</span>
                </button>
                {expandedSections.packages && (
                  <div className="sponsor-expandable-content">
                    <div className="sponsor-packages-grid">
                      {partnershipPackages.map((pkg) => (
                        <div 
                          key={pkg.id} 
                          className={`sponsor-package-card ${pkg.id} ${pkg.recommended ? 'recommended' : ''}`}
                          style={{ '--pkg-color': pkg.color }}
                        >
                          {pkg.recommended && <div className="sponsor-recommended-badge">⭐ Best Value</div>}
                          <div className="sponsor-pkg-header">
                            <span className="sponsor-pkg-icon">{pkg.icon}</span>
                            <h4 className="sponsor-pkg-name">{pkg.name}</h4>
                            <div className="sponsor-pkg-amount">{pkg.amount}</div>
                          </div>
                          <div className="sponsor-pkg-benefits">
                            <div className="sponsor-benefit-cat">
                              <strong>🎨 Branding</strong>
                              <ul>
                                {pkg.benefits.branding.slice(0, 2).map((b, i) => (
                                  <li key={i} className={b.included ? 'included' : 'excluded'}>
                                    {b.included ? '✓' : '✗'} {b.name}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="sponsor-benefit-cat">
                              <strong>🎟️ Event</strong>
                              <ul>
                                {pkg.benefits.event.slice(0, 2).map((b, i) => (
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
                  </div>
                )}
              </div>

              {/* Expandable Benefits Comparison Section */}
              <div className="sponsor-expandable-section">
                <button 
                  type="button"
                  className={`sponsor-expandable-header ${expandedSections.comparison ? 'expanded' : ''}`}
                  onClick={() => setExpandedSections(prev => ({ ...prev, comparison: !prev.comparison }))}
                >
                  <span>📊 View Full Benefits Comparison</span>
                  <span className="expand-icon">{expandedSections.comparison ? '−' : '+'}</span>
                </button>
                {expandedSections.comparison && (
                  <div className="sponsor-expandable-content">
                    <div className="sponsor-comparison-wrapper">
                      <table className="sponsor-comparison-table">
                        <thead>
                          <tr>
                            <th>Benefits</th>
                            <th className="platinum-col">💎 Platinum</th>
                            <th className="gold-col">🥇 Gold</th>
                            <th className="silver-col">🥈 Silver</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="category-row">
                            <td colSpan="4">🎨 Branding & Visibility</td>
                          </tr>
                          {partnershipPackages[0].benefits.branding.map((benefit, index) => (
                            <tr key={`branding-${index}`}>
                              <td>{benefit.name}</td>
                              <td className="check-cell">{partnershipPackages[0].benefits.branding[index].included ? '✓' : '—'}</td>
                              <td className="check-cell">{partnershipPackages[1].benefits.branding[index].included ? '✓' : '—'}</td>
                              <td className="check-cell">{partnershipPackages[2].benefits.branding[index].included ? '✓' : '—'}</td>
                            </tr>
                          ))}
                          <tr className="category-row">
                            <td colSpan="4">📱 Digital Presence</td>
                          </tr>
                          {partnershipPackages[0].benefits.digital.map((benefit, index) => (
                            <tr key={`digital-${index}`}>
                              <td>{benefit.name}</td>
                              <td className="check-cell">{partnershipPackages[0].benefits.digital[index].included ? '✓' : '—'}</td>
                              <td className="check-cell">{partnershipPackages[1].benefits.digital[index].included ? '✓' : '—'}</td>
                              <td className="check-cell">{partnershipPackages[2].benefits.digital[index].included ? '✓' : '—'}</td>
                            </tr>
                          ))}
                          <tr className="category-row">
                            <td colSpan="4">🎟️ Event Access</td>
                          </tr>
                          {partnershipPackages[0].benefits.event.map((benefit, index) => (
                            <tr key={`event-${index}`}>
                              <td>{benefit.name}</td>
                              <td className="check-cell">{partnershipPackages[0].benefits.event[index].included ? '✓' : '—'}</td>
                              <td className="check-cell">{partnershipPackages[1].benefits.event[index].included ? '✓' : '—'}</td>
                              <td className="check-cell">{partnershipPackages[2].benefits.event[index].included ? '✓' : '—'}</td>
                            </tr>
                          ))}
                          <tr className="category-row">
                            <td colSpan="4">🎁 Additional Benefits</td>
                          </tr>
                          {partnershipPackages[0].benefits.extras.map((benefit, index) => (
                            <tr key={`extras-${index}`}>
                              <td>{benefit.name}</td>
                              <td className="check-cell">{partnershipPackages[0].benefits.extras[index].included ? '✓' : '—'}</td>
                              <td className="check-cell">{partnershipPackages[1].benefits.extras[index].included ? '✓' : '—'}</td>
                              <td className="check-cell">{partnershipPackages[2].benefits.extras[index].included ? '✓' : '—'}</td>
                            </tr>
                          ))}
                          <tr className="price-row">
                            <td><strong>Investment</strong></td>
                            <td className="platinum-col"><strong>₹40,000</strong></td>
                            <td className="gold-col"><strong>₹20,000</strong></td>
                            <td className="silver-col"><strong>₹10,000</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
              
              <button type="submit" className="sponsor-submit-btn">
                <span>📧</span> Submit Inquiry
              </button>
              
              <p className="sponsor-email-info">
                Opens email to <strong>{CONTACT_EMAIL}</strong>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SponsorBanner;
