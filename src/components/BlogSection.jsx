import React, { useState, useRef } from 'react';
import '../styles/blog-section.css';

export default function BlogSection({ posts, onSeeAllClick, onReadMore }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Handle dot click navigation
  const scrollToSlide = (index) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / posts.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  // Sync pagination dots with native touch/drag scrolling
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / posts.length;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section className="blog-section container">
      
      {/* Title Centered Between Two Sleek Lines */}
      <div className="section-title-divider">
        <span className="line"></span>
        <h2 className="section-title">BLOG</h2>
        <span className="line"></span>
      </div>

      {/* See All Button Below Title */}
      <div className="see-all-wrapper">
        <button className="see-all-btn" onClick={onSeeAllClick}>
          SEE ALL &rarr;
        </button>
      </div>

      {/* Blog Cards Container with Horizontal Scroll Support */}
      <div 
        className="blog-scroll-container" 
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              
              {/* Image Banner */}
              <div className="blog-img-wrapper">
                <img src={post.image} alt={post.title} className="blog-img" />
                <span className="blog-category-tag">{post.category}</span>
              </div>

              {/* Blog Article Content */}
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>

                {/* Read More Button Attached At Bottom */}
                <button 
                  className="read-more-btn"
                  onClick={() => onReadMore && onReadMore(post.id)}
                >
                  READ MORE &rarr;
                </button>
              </div>

            </article>
          ))}
        </div>
      </div>

      {/* Pagination Dots Below Section */}
      <div className="pagination-dots">
        {posts.map((_, index) => (
          <button
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => scrollToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}