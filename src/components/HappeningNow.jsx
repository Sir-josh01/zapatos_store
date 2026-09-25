import React, { useState } from 'react';
import '../styles/happening-now.css';

export default function HappeningNow({ products, onSeeAllClick, onSelectProduct }) {
  // Store set of liked product IDs
  const [likedProducts, setLikedProducts] = useState(new Set());

  const toggleLike = (id, e) => {
    e.stopPropagation(); // Stop triggering card click event
    setLikedProducts((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  return (
    <section className="happening-section container">
      
      {/* Title Centered Between Two Sleek Lines */}
      <div className="section-title-divider">
        <span className="line"></span>
        <h2 className="section-title">HAPPENING NOW</h2>
        <span className="line"></span>
      </div>

      {/* See All Button below title */}
      <div className="see-all-wrapper">
        <button className="see-all-btn" onClick={onSeeAllClick}>
          SEE ALL &rarr;
        </button>
      </div>

      {/* 4-Column Product Grid */}
      <div className="happening-grid">
        {products.map((product) => {
          const isLiked = likedProducts.has(product.id);

          return (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => onSelectProduct && onSelectProduct(product.id)}
            >
              
              {/* Image Box */}
              <div className="product-img-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-img" 
                />
                
                {/* Top-Left Sold Out / In Stock Badge */}
                <span className={`status-badge ${product.isSoldOut ? 'sold-out' : 'in-stock'}`}>
                  {product.isSoldOut ? 'SOLD OUT' : 'IN STOCK'}
                </span>

                {/* Bottom-Right Interactive Heart Emoji */}
                <button 
                  className={`heart-btn ${isLiked ? 'liked' : ''}`}
                  onClick={(e) => toggleLike(product.id, e)}
                  aria-label="Wishlist toggle"
                >
                  {isLiked ? '♥' : '♡'}
                </button>
              </div>

              {/* Product Details Stack */}
              <div className="product-info">
                
                {/* Product Name */}
                <h3 className="product-name">{product.name}</h3>

                {/* Star Ratings & Reviews */}
                <div className="product-rating">
                  <span className="stars">★</span>
                  <span className="rating-num">{product.rating}</span>
                  <span className="reviews-count">({product.reviewsCount})</span>
                </div>

                {/* Price Display */}
                <div className="product-pricing">
                  <span className="current-price">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                  )}
                </div>

                {/* Available Color Variant Thumbnails */}
                {product.colorVariants && product.colorVariants.length > 0 && (
                  <div className="variant-thumbnails">
                    {product.colorVariants.map((variantImg, index) => (
                      <img 
                        key={index} 
                        src={variantImg} 
                        alt="Style Variant" 
                        className="variant-img"
                      />
                    ))}
                  </div>
                )}

                {/* Specifications Tag Row */}
                {product.specs && (
                  <div className="specs-row">
                    {product.specs.join(' • ')}
                  </div>
                )}

              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}