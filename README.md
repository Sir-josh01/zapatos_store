# Zapatos – Premier Footwear E-Commerce Store

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.x-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff.svg)](https://vitejs.dev/)

**Zapatos** is a modern, responsive, and high-performance e-commerce web application engineered for footwear retail. Designed with a mobile-first approach, Zapatos provides a seamless shopping experience featuring dynamic header navigation, product category grids, curated collection sliders, brand spotlights, and a sleek interactive footer.

---

## Table of Contents

- [Links](#links)
- [Problems It Solves](#problems-it-solves)
- [Functions & Features](#functions--features)
- [Challenges Encountered](#challenges-encountered)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [License](#license)

---

## Links

- **Repository:** [GitHub Repository](https://github.com/Sir-josh01/zapatos-store)
<!-- - **Live Demo:** [Zapatos Store Live](https://zapatos-store.vercel.app) -->
<!-- live demo is not stabilized. -->

---

## Problems It Solves

- **Asset Dependency & CORS Failures:** Traditional e-commerce sites often rely on external CDN links or hotlinked media for brand assets, which frequently break due to CORS restrictions, hotlink protection, or server downtime. Zapatos eliminates external dependencies by standardizing local typography and asset bundling.
- **Fragmented User Journeys:** Shoppers often struggle with complex category structures. Zapatos streamlines discovery through clear category entry points (Men, Women, Kids, Sport, Brands, Sandals), contextual search, and interactive lookbooks.
- **Inconsistent Responsiveness:** Mobile retail interfaces frequently suffer from broken navigation rows and oversized media. Zapatos implements optimized touch sliders, CSS Grid layout patterns, and responsive header elements to ensure smooth UX across mobile, tablet, and desktop viewports.

---

## Functions & Features

- **Dynamic Navigation Header:**
  - Announcement bar highlighting shipping incentives.
  - Centered product search interface.
  - Interactive header utility icons for cart status badge tracking, account dropdowns, and wishlist access.
  - Category navigation bar for filtered browsing.
- **Hero Slider Section:** Interactive visual banner showcase with sliding slide controls, contextual call-to-actions, and smooth transitions.
- **Category & Collection Grids:** Grid-based visual navigation designed to direct shoppers directly to specific footwear lines (Sneakers, Formal, Athletic, Sandals).
- **Happening Now & Trending Style Lookbook:** Curated product discovery cards highlighting trending kicks and styling tips.
- **Brand Showcase Strip:** Custom-styled typography and vector branding for world-class footwear makers (Brooks, Vans, Fila, Nike, Salomon, Adidas).
- **Interactive Newsletter & Footer:**
  - High-impact dark overlay newsletter signup section.
  - Categorized multi-column quick links (Shop, Brands, Quick Links, Support).
  - Social media and store support contact details.
  - Payment gateway badges and store copyright notice.

---

## Challenges Encountered

1. **CORS & Asset Loading Issues with Third-Party SVG Logos:**
   - *Challenge:* Hotlinking external SVG vectors (e.g., brand logos from external repositories) resulted in CORS blocked-request errors and missing image placeholders.
   - *Solution:* Replaced fragile external image endpoints with custom-built CSS typography styling and local asset imports to guarantee 100% build reliability without network dependencies.

2. **JSX Parsing Errors in Data Configuration Files (`.js` vs `.jsx`):**
   - *Challenge:* vite/esbuild threw build-time parse errors when raw React JSX elements (`<svg>`) were defined inside standard `.js` data arrays.
   - *Solution:* Refactored data objects to decouple view logic from static datasets, migrating component presentation directly into dedicated React components and maintaining clean string-based identifiers in data modules.

3. **Responsive Multi-Element Header Layout:**
   - *Challenge:* Fitting contact numbers, email tags, account dropdowns, search controls, and cart badge indicators across smaller viewports created layout overflow issues.
   - *Solution:* Structured flexible media query breakpoints to collapse non-essential top-bar utilities on smaller screens while keeping search functionality and cart toggles easily accessible to mobile users.

---

## Tech Stack

- **Frontend Framework:** [React](https://reactjs.org/) (Functional Components, React Hooks)
- **Build Tool / Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** CSS3 (Flexbox, CSS Grid, Custom CSS Variables)
- **Icons & Graphics:** SVG Vectors / Native Unicode Graphics

---

## Project Structure

```text
zapatos-store/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/          # Static media and brand graphics
│   ├── components/      # Modular UI components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── CategoryGrid.jsx
│   │   ├── HappeningNow.jsx
│   │   ├── TrendingStyle.jsx
│   │   ├── BrandsSection.jsx
│   │   ├── BlogSection.jsx
│   │   └── Footer.jsx
│   ├── styles/          # Component-specific CSS stylesheets
│   │   ├── header.css
│   │   ├── footer.css
│   │   ├── brands-section.css
│   │   └── ...
│   ├── data/            # Static configuration & product mock data
│   │   └── products.js
│   ├── App.jsx          # Main application assembler
│   └── main.jsx         # Application entry point
├── package.json
└── README.md