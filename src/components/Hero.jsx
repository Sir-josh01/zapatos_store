import React from 'react';
import '../styles/hero.css';

export default function Hero({ slide, onExploreClick, onNextPage, onPrevPage }) {
  if (!slide) return null;

  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        {/* Left Arrow: Triggers Page Navigation */}
        <button 
          className="hero-arrow arrow-left" 
          onClick={onPrevPage} 
          aria-label="Previous Page View"
        >
          &#10094;
        </button>

        {/* Outer Grid Wrapper */}
        <div className="hero-content">
          
          {/* Giant Centered Background Text */}
          <div className="giant-title-wrapper">
            <h1 className="giant-title">Zapatos</h1>
          </div>

          {/* Left Branded Writeup */}
          <div className="hero-col hero-col-left">
            <p className="left-statement">
              {slide.subtitle || "Discover the latest drop. High-performance, streetwear-inspired designs crafted for every step of your journey."}
            </p>
          </div>

          {/* Centered Cutout Shoe */}
          <div className="hero-center-shoe">
            <img 
              src={slide.heroImage} 
              alt="Featured Sneaker" 
              className="shoe-image" 
            />
            
            {/* CTA Button */}
            <button className="hero-cta-btn" onClick={onExploreClick}>
              Explore New Arrivals &rarr;
            </button>
          </div>

          {/* Right Branded Writeup + Single Row 4-Item Menu */}
          <div className="hero-col hero-col-right">
            <p className="right-statement">
              Quickly filter by collection:
            </p>
            
            <div className="four-item-row">
              <span className="pill-item">Filters</span>
              <span className="pill-item">Boots</span>
              <span className="pill-item">Pumps</span>
              <span className="pill-item">+12 More</span>
            </div>
          </div>

        </div>

        {/* Right Arrow: Triggers Page Navigation */}
        <button 
          className="hero-arrow arrow-right" 
          onClick={onNextPage} 
          aria-label="Next Page View"
        >
          &#10095;
        </button>

      </div>
    </section>
  );
}