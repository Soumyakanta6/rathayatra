import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Sponsorship from './components/Sponsorship';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import SponsorBanner from './components/SponsorBanner';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'gallery':
        return <Gallery />;
      case 'sponsorship':
        return <Sponsorship />;
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <ContactUs />;
      default:
        return <Home />;
    }
  };

  const handleSponsorBannerClick = () => {
    setActiveTab('sponsorship');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div onClick={handleSponsorBannerClick} style={{ cursor: 'pointer' }}>
        <SponsorBanner />
      </div>
      <main className="main-content">
        {renderContent()}
      </main>
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
