import React from 'react';
import '../styles/header.css';

export default function Header({ cartCount = 0, onOpenCart }) {
  return (
    <header className="site-header">
      {/* 1. Top Announcement Bar */}
      <div className="top-announcement">
        <p>🔒 Spend $150 or more and get <strong>FREE SHIPPING</strong> on your order!</p>
      </div>

      {/* 2. Middle Header Bar */}
      <div className="main-header container">
        {/* Brand Logo */}
        <div className="header-logo">
          <a href="#">
            <h1 className="brand-title">Zapatos</h1>
            <span className="brand-tagline">THE SHOE SPECIALIST</span>
          </a>
        </div>

        {/* Centered Search Bar */}
        <div className="header-search">
          <input 
            type="text" 
            placeholder="Search for products..." 
            aria-label="Search for products"
          />
          <button className="search-btn" aria-label="Submit Search">
            🔍
          </button>
        </div>

        {/* Contact & Utility Actions */}
        <div className="header-utilities">
          <a href="tel:80468239999" className="utility-contact">
            📞 <span>(804) 6823-9999</span>
          </a>
          <span className="utility-divider">|</span>
          <a href="mailto:supportoursmallbusiness@g.com" className="utility-contact">
            ✉️ <span>supportoursmallbusiness@g.com</span>
          </a>
          <span className="utility-divider">|</span>

          {/* Dropdowns & User Icons */}
          <div className="utility-dropdown">
            <span>ℹ️ Info ▾</span>
          </div>
          <div className="utility-dropdown">
            <span>👤 ▾</span>
          </div>
          
          <a href="#wishlist" className="utility-icon-link" title="Wishlist">
            ♡
          </a>

          <button className="cart-btn" onClick={onOpenCart} aria-label="Open Cart">
            🛍️
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* 3. Bottom Category Navigation Bar */}
      <nav className="category-nav">
        <ul className="nav-menu container">
          <li><a href="#men">MEN ▾</a></li>
          <li><a href="#kids">KIDS ▾</a></li>
          <li><a href="#women">WOMEN ▾</a></li>
          <li><a href="#sport">SPORT ▾</a></li>
          <li><a href="#brands">BRANDS ▾</a></li>
          <li><a href="#sandals">SANDALS ▾</a></li>
        </ul>
      </nav>
    </header>
  );
}