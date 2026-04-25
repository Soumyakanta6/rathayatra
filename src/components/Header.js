import React from 'react';
import './Header.css';
import Logo from './Logo';
import balabhadraIcon from '../assets/images/balabhadra.png';
import subhadraIcon from '../assets/images/subhadra.png';
import jagannathIcon from '../assets/images/jagannath.png';
import sudarsanIcon from '../assets/images/sudarshan.png';

const Header = () => {
  return (
    <>
      <div className="sloka-banner">
        <img src={balabhadraIcon} alt="Balabhadra" className="deity-icon" />
        <img src={subhadraIcon} alt="Subhadra" className="deity-icon deity-subhadra" />
        <img src={jagannathIcon} alt="Jagannath" className="deity-icon" />
        <img src={sudarsanIcon} alt="Sudarsan" className="deity-icon deity-sudarsan" />
        <div className="sloka-content">
          <span className="sloka-sanskrit">जगन्नाथ स्वामी नयनपथगामी भवतु मे</span>
          <span className="sloka-divider">।</span>
          <span className="sloka-odia">ଜଗନ୍ନାଥ ସ୍ୱାମୀ ନୟନପଥଗାମୀ ଭବତୁ ମେ</span>
        </div>
        <img src={balabhadraIcon} alt="Balabhadra" className="deity-icon" />
        <img src={subhadraIcon} alt="Subhadra" className="deity-icon deity-subhadra" />
        <img src={jagannathIcon} alt="Jagannath" className="deity-icon" />
        <img src={sudarsanIcon} alt="Sudarsan" className="deity-icon deity-sudarsan" />
      </div>
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
    </>
  );
};

export default Header;
