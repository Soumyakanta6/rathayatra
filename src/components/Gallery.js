import React, { useState, useEffect } from 'react';
import './Gallery.css';

// Import gallery images
import RathRaw from '../assets/images/Rath_raw.jpeg';
import LordOnThrone from '../assets/images/Lord_on_his_throne.jpeg';
import RathPull from '../assets/images/Rath_pull.jpeg';
import Society from '../assets/images/society.jpg';
import PrestigeView from '../assets/images/prestige_view_1.webp';

// Import decoration images for slideshow
import Decoration1 from '../assets/images/decoration/WhatsApp Image 2026-04-25 at 1.01.19 PM.jpeg';
import Decoration2 from '../assets/images/decoration/WhatsApp Image 2026-04-25 at 1.02.01 PM.jpeg';
import Decoration3 from '../assets/images/decoration/WhatsApp Image 2026-04-25 at 1.03.59 PM.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [floralSlideIndex, setFloralSlideIndex] = useState(0);
  const [modalSlideIndex, setModalSlideIndex] = useState(0);

  const floralImages = [Decoration1, Decoration2, Decoration3];

  // Auto-advance slideshow in gallery grid
  useEffect(() => {
    const timer = setInterval(() => {
      setFloralSlideIndex((prev) => (prev + 1) % floralImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [floralImages.length]);

  // Auto-advance slideshow in modal
  useEffect(() => {
    if (selectedImage?.isSlideshow) {
      const timer = setInterval(() => {
        setModalSlideIndex((prev) => (prev + 1) % floralImages.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [selectedImage, floralImages.length]);

  // Reset modal slide index when opening modal
  useEffect(() => {
    if (selectedImage?.isSlideshow) {
      setModalSlideIndex(0);
    }
  }, [selectedImage]);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'rath', name: 'Rath & Decorations' },
    { id: 'celebration', name: 'Celebrations' },
    { id: 'prasad', name: 'Mahaprasad' },
    { id: 'devotees', name: 'Devotees' },
  ];

  // Placeholder images with emojis representing different aspects
  const galleryImages = [
    { id: 1, category: 'rath', title: 'Grand Rath Decoration', emoji: '🛕', description: 'The beautifully decorated chariot ready for the procession', image: RathRaw },
    { id: 2, category: 'rath', title: 'Floral Arrangements', emoji: '🌸', description: 'Fresh flowers adorning the sacred chariot', isSlideshow: true },
    { id: 3, category: 'celebration', title: 'Community Gathering', emoji: '👨‍👩‍👧‍👦', description: 'Devotees coming together in celebration', image: PrestigeView },
    { id: 4, category: 'celebration', title: 'Cultural Dance', emoji: '💃', description: 'Traditional Odissi dance performance' },
    { id: 5, category: 'prasad', title: 'Mahaprasad Thali', emoji: '🍛', description: 'Sacred prasad prepared with devotion' },
    { id: 6, category: 'prasad', title: 'Sweet Offerings', emoji: '🍮', description: 'Traditional sweets offered to the Lord' },
    { id: 7, category: 'devotees', title: 'Pulling the Rath', emoji: '🙏', description: 'Devotees pulling the sacred chariot', image: RathPull },
    { id: 8, category: 'devotees', title: 'Morning Prayers', emoji: '🕯️', description: 'Devotees offering morning prayers' },
    { id: 9, category: 'rath', title: 'Deity Installation', emoji: '✨', description: 'Lords being placed on the chariot', image: LordOnThrone },
    { id: 10, category: 'celebration', title: 'Kirtan Session', emoji: '🎶', description: 'Devotional singing and chanting' },
    { id: 11, category: 'celebration', title: 'Evening Aarti', emoji: '🪔', description: 'Beautiful evening aarti ceremony' },
    { id: 12, category: 'celebration', title: 'Township View', emoji: '🏘️', description: 'Prestige Finsbury Park township', image: Society },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="gallery">
      <section className="gallery-hero">
        <div className="hero-overlay"></div>
        <div className="hero-particles">
          <span className="particle">📷</span>
          <span className="particle">🎭</span>
          <span className="particle">🛕</span>
          <span className="particle">🪔</span>
          <span className="particle">🌸</span>
        </div>
        <div className="hero-content">
          <span className="hero-badge">📸 Memories</span>
          <h1>Photo Gallery</h1>
          <p>Relive the divine moments from our previous Ratha Yatra celebrations</p>
        </div>
      </section>

      <section className="gallery-categories">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </section>

      <section className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div 
            key={image.id} 
            className={`gallery-item ${image.isSlideshow ? 'slideshow-item' : ''}`}
            onClick={() => setSelectedImage(image)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {image.isSlideshow ? (
              <div className="slideshow-container">
                {floralImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${image.title} ${idx + 1}`}
                    className={`slideshow-image ${idx === floralSlideIndex ? 'active' : ''}`}
                  />
                ))}
                <div className="slideshow-dots">
                  {floralImages.map((_, idx) => (
                    <span
                      key={idx}
                      className={`dot ${idx === floralSlideIndex ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setFloralSlideIndex(idx);
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : image.image ? (
              <img src={image.image} alt={image.title} className="gallery-image" />
            ) : (
              <div className="image-placeholder">
                <span className="placeholder-emoji">{image.emoji}</span>
              </div>
            )}
            <div className="image-overlay">
              <h4>{image.title}</h4>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="video-section">
        <h2>🎬 Video Highlights</h2>
        <div className="video-grid">
          <div className="video-placeholder">
            <div className="play-button">▶️</div>
            <p>Ratha Yatra 2024 Highlights</p>
          </div>
          <div className="video-placeholder">
            <div className="play-button">▶️</div>
            <p>Cultural Program Recap</p>
          </div>
          <div className="video-placeholder">
            <div className="play-button">▶️</div>
            <p>Community Testimonials</p>
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className={`modal-content ${selectedImage.isSlideshow ? 'modal-slideshow' : ''}`} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <div className="modal-image">
              {selectedImage.isSlideshow ? (
                <div className="modal-slideshow-container">
                  {floralImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${selectedImage.title} ${idx + 1}`}
                      className={`modal-slideshow-image ${idx === modalSlideIndex ? 'active' : ''}`}
                    />
                  ))}
                  <button 
                    className="slideshow-nav prev" 
                    onClick={() => setModalSlideIndex((prev) => (prev - 1 + floralImages.length) % floralImages.length)}
                  >
                    ‹
                  </button>
                  <button 
                    className="slideshow-nav next" 
                    onClick={() => setModalSlideIndex((prev) => (prev + 1) % floralImages.length)}
                  >
                    ›
                  </button>
                  <div className="modal-slideshow-dots">
                    {floralImages.map((_, idx) => (
                      <span
                        key={idx}
                        className={`dot ${idx === modalSlideIndex ? 'active' : ''}`}
                        onClick={() => setModalSlideIndex(idx)}
                      />
                    ))}
                  </div>
                  <div className="slideshow-counter">
                    {modalSlideIndex + 1} / {floralImages.length}
                  </div>
                </div>
              ) : selectedImage.image ? (
                <img src={selectedImage.image} alt={selectedImage.title} className="modal-img" />
              ) : (
                <span className="modal-emoji">{selectedImage.emoji}</span>
              )}
            </div>
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
