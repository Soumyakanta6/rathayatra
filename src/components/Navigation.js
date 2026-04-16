import React from 'react';
import './Navigation.css';

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Ratha Yatra', icon: '🛕' },
    { id: 'gallery', label: 'Gallery', icon: '📸' },
    { id: 'sponsorship', label: 'Sponsorship', icon: '🤝' },
    { id: 'about', label: 'About Us', icon: '🙏' },
    { id: 'contact', label: 'Contact Us', icon: '📞' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
