import React from 'react';
import '../styles/brands-section.css';

export default function BrandsSection({ brands, onSeeAllClick, onSelectBrand }) {
  return (
    <section className="brands-section container">
      
      {/* Section Divider Line & Title */}
      <div className="section-title-divider">
        <span className="line"></span>
        <h2 className="section-title">BRANDS</h2>
        <span className="line"></span>
      </div>

      {/* See All Button */}
      <div className="see-all-wrapper">
        <button className="see-all-btn" onClick={onSeeAllClick}>
          SEE ALL &rarr;
        </button>
      </div>

      {/* Brand Text Row */}
      <div className="brands-row">
        {brands.map((brand) => (
          <div 
            key={brand.id} 
            className="brand-text-item"
            onClick={() => onSelectBrand && onSelectBrand(brand.id)}
          >
            <span className={`brand-name brand-${brand.id}`}>
              {brand.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}