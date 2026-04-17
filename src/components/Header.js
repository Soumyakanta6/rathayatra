import React from 'react';
import './Header.css';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <div className="logo-wrapper">
            <Logo size={56} />
          </div>
          <div className="header-text">
            <h1>Jagannath Ratha Yatra 2026</h1>
            <p className="header-subtitle">Prestige Finsbury Park (Regent & Hyde), Bangalore</p>
          </div>
        </div>
        <div className="header-date">
          <span className="date-icon">📅</span>
          <span>July 16-25, 2026</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
