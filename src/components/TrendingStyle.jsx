import React from 'react';
import '../styles/trending-style.css';

export default function TrendingStyle({ data, onSelectLook }) {
  if (!data) return null;

  const { heroBanner, gridItems } = data;

  return (
    <section className="trending-section container">
      
      {/* Title Centered Between Two Sleek Lines */}
      <div className="section-title-divider">
        <span className="line"></span>
        <h2 className="section-title">TRENDING SNEAKER STYLE</h2>
        <span className="line"></span>
      </div>

      <div className="trending-container">
        
        {/* ROW 1: One Big Banner Image */}
        <div 
          className="trending-card hero-banner-card"
          onClick={() => onSelectLook && onSelectLook(heroBanner.id)}
        >
          <img src={heroBanner.image} alt={heroBanner.title} className="trending-card-img" />
          
          {/* Top-Left Writeup Overlay */}
          <div className="overlay-content text-top-left">
            <h3 className="look-title">{heroBanner.title}</h3>
            <p className="look-subtitle">{heroBanner.subtitle}</p>
          </div>

          {/* Bottom-Right Button with Arrow */}
          <div className="overlay-content btn-bottom-right">
            <button className="look-btn">
              {heroBanner.buttonText} &rarr;
            </button>
          </div>
        </div>

        {/* ROW 2: 3 Column Images */}
        <div className="trending-row-grid">
          {gridItems.map((item) => (
            <div 
              key={item.id} 
              className="trending-card grid-card"
              onClick={() => onSelectLook && onSelectLook(item.id)}
            >
              <img src={item.image} alt={item.title} className="trending-card-img" />

              {/* Text Positioning: Top Left vs Bottom Right */}
              <div className={`overlay-content ${item.textPosition === 'bottom-right' ? 'text-bottom-right' : 'text-top-left'}`}>
                <h3 className="look-title">{item.title}</h3>
                <p className="look-subtitle">{item.subtitle}</p>
              </div>

              {/* Black Button with Arrow at Bottom Right */}
              <div className="overlay-content btn-bottom-right">
                <button className="look-btn">
                  {item.buttonText} &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}