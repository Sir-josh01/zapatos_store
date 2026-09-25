import React from 'react';
import '../styles/category-grid.css';

export default function CategoryGrid({ categories, onSelectCategory }) {
  return (
    <section className="category-section container">
      
      {/* Title Centered Between Two Horizontal Lines */}
      <div className="section-title-divider">
        <span className="line"></span>
        <h2 className="section-title">FIND YOUR PERFECT PAIR</h2>
        <span className="line"></span>
      </div>

      {/* 3x2 Grid Container */}
      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            {/* Standard Photography Background Image */}
            <img 
              src={cat.image} 
              alt={cat.name} 
              className="category-card-img" 
            />
            
            {/* White Button with Black Writeup and Arrow */}
            <button 
              className="category-btn"
              onClick={() => onSelectCategory(cat.id)}
            >
              <span>{cat.name}</span>
              <span className="btn-arrow">&rarr;</span>
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}