import React, { useState } from 'react';
import '../styles/footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      
      {/* 1. Newsletter Overlay Banner */}
      <div className="newsletter-banner">
        <div className="newsletter-overlay container">
          <h2 className="newsletter-title">
            Be the first to know about new drops and exclusive offers!
          </h2>
          <p className="newsletter-subtitle">
            Subscribe to our newsletter for early access, special deals, and the latest trends.
          </p>
          
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-btn">
              SIGN UP &rarr;
            </button>
          </form>
        </div>
      </div>

      {/* 2. Main Footer Navigation Links */}
      <div className="main-footer-content container">
        
        {/* Brand Information Column */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            <h2 className="brand-title">Zapatos</h2>
            <span className="brand-tagline">THE SHOE SPECIALIST</span>
          </div>

          <p className="footer-about">
            Not Just Shoes, but a Statement.<br />
            Kicks Designed to Keep You One Step Ahead
          </p>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="X (Twitter)">𝕏</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>

          <div className="contact-info">
            <p>📞 08978978789</p>
            <p>✉️ supportoursmallbusiness@g.com</p>
          </div>
        </div>

        {/* Navigation Link Columns */}
        <div className="footer-links-grid">
          
          <div className="footer-col">
            <h3 className="col-title">SHOP</h3>
            <ul>
              <li><a href="#men">Men</a></li>
              <li><a href="#kids">Kids</a></li>
              <li><a href="#women">Women</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="col-title">BRANDS</h3>
            <ul>
              <li><a href="#adidas">Adidas</a></li>
              <li><a href="#nike">Nike</a></li>
              <li><a href="#fila">Fila</a></li>
              <li><a href="#brooks">Brooks</a></li>
              <li><a href="#mizuno">Mizuno</a></li>
              <li><a href="#salomon">Salomon</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="col-title">QUICK LINKS</h3>
            <ul>
              <li><a href="#return">Return</a></li>
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="col-title">SUPPORT</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#faqs">FAQ's</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

        </div>

      </div>

      {/* 3. Bottom Payment & Copyright Bar */}
      <div className="bottom-bar">
        <div className="bottom-container container">
          <p className="copyright-text">
            © 2026 Zapatos. Store by Blazecommerce.io
          </p>

          <div className="payment-badges">
            <span className="pay-badge">Mastercard</span>
            <span className="pay-badge">VISA</span>
            <span className="pay-badge">afterpay</span>
            <span className="pay-badge">PayPal</span>
          </div>
        </div>
      </div>

    </footer>
  );
}