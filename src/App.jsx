import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import HappeningNow from './components/HappeningNow';
import TrendingStyle from './components/TrendingStyle';
import BrandsSection from './components/BrandsSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

import { 
  HERO_SLIDES, 
  CATEGORIES, 
  FEATURED_PRODUCTS, 
  TRENDING_LOOKBOOK, 
  BRANDS,
  BLOG_POSTS
} from './data/products.js';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      {/* Header */}
      <Header cartCount={0} onOpenCart={() => console.log('Cart opened')} />
      
      {/* main-content */}
      <div className="main-content">
        {/* Section 1: Hero Banner */}
        <Hero 
          slide={HERO_SLIDES[currentPage]} 
          onExploreClick={() => console.log('Exploring arrivals')}
          onNextPage={() => setCurrentPage((prev) => (prev + 1) % HERO_SLIDES.length)}
          onPrevPage={() => setCurrentPage((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
        />

        {/* Section 2: Find Your Perfect Pair */}
        <CategoryGrid 
          categories={CATEGORIES} 
          onSelectCategory={(id) => console.log('Selected Category:', id)} 
        />

        {/* Section 3: Happening Now Grid */}
        <HappeningNow 
          products={FEATURED_PRODUCTS} 
          onSeeAllClick={() => console.log('Seeing all happening products')}
          onSelectProduct={(id) => console.log('Selected Product:', id)}
        />

        {/* Section 4: Trending Sneaker Style */}
        <TrendingStyle 
          data={TRENDING_LOOKBOOK}
          onSelectLook={(id) => console.log('Selected Look:', id)}
        />

        {/* Section 5: Brands Strip */}
        <BrandsSection 
          brands={BRANDS}
          onSeeAllClick={() => console.log('Seeing all brands')}
          onSelectBrand={(id) => console.log('Selected Brand:', id)}
        />

        {/* Section 6: Blog Section with Pagination Dots */}
        <BlogSection 
          posts={BLOG_POSTS}
          onSeeAllClick={() => console.log('Seeing all blog posts')}
          onReadMore={(id) => console.log('Reading blog post:', id)}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}