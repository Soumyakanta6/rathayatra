import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'rath', name: 'Rath & Decorations' },
    { id: 'celebration', name: 'Celebrations' },
    { id: 'prasad', name: 'Mahaprasad' },
    { id: 'devotees', name: 'Devotees' },
  ];

  // Placeholder images with emojis representing different aspects
  const galleryImages = [
    { id: 1, category: 'rath', title: 'Grand Rath Decoration', emoji: '🛕', description: 'The beautifully decorated chariot ready for the procession' },
    { id: 2, category: 'rath', title: 'Floral Arrangements', emoji: '🌸', description: 'Fresh flowers adorning the sacred chariot' },
    { id: 3, category: 'celebration', title: 'Community Gathering', emoji: '👨‍👩‍👧‍👦', description: 'Devotees coming together in celebration' },
    { id: 4, category: 'celebration', title: 'Cultural Dance', emoji: '💃', description: 'Traditional Odissi dance performance' },
    { id: 5, category: 'prasad', title: 'Mahaprasad Thali', emoji: '🍛', description: 'Sacred prasad prepared with devotion' },
    { id: 6, category: 'prasad', title: 'Sweet Offerings', emoji: '🍮', description: 'Traditional sweets offered to the Lord' },
    { id: 7, category: 'devotees', title: 'Pulling the Rath', emoji: '🙏', description: 'Devotees pulling the sacred chariot' },
    { id: 8, category: 'devotees', title: 'Morning Prayers', emoji: '🕯️', description: 'Devotees offering morning prayers' },
    { id: 9, category: 'rath', title: 'Deity Installation', emoji: '✨', description: 'Lords being placed on the chariot' },
    { id: 10, category: 'celebration', title: 'Kirtan Session', emoji: '🎶', description: 'Devotional singing and chanting' },
    { id: 11, category: 'celebration', title: 'Evening Aarti', emoji: '🪔', description: 'Beautiful evening aarti ceremony' },
    { id: 12, category: 'devotees', title: 'Children Celebration', emoji: '🧒', description: 'Young devotees participating' },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="gallery">
      <section className="gallery-header">
        <h1>📸 Photo Gallery</h1>
        <p>Relive the divine moments from our previous Ratha Yatra celebrations</p>
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
            className="gallery-item"
            onClick={() => setSelectedImage(image)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="image-placeholder">
              <span className="placeholder-emoji">{image.emoji}</span>
            </div>
            <div className="image-overlay">
              <h4>{image.title}</h4>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="upload-section">
        <div className="upload-content">
          <h2>📤 Share Your Moments</h2>
          <p>Were you part of our previous celebrations? Share your photos with the community!</p>
          <button className="upload-btn">Upload Photos</button>
        </div>
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
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <div className="modal-image">
              <span className="modal-emoji">{selectedImage.emoji}</span>
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
