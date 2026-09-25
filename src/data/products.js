// import brooksLogo from '../assets/logos/brooks.svg';
// import vansLogo from '../assets/logos/vans.svg';
// import filaLogo from '../assets/logos/fila.svg';
// import nikeLogo from '../assets/logos/nike.svg';
// import salomonLogo from '../assets/logos/salomon.svg';
// import adidasLogo from '../assets/logos/adidas.svg';

export const HERO_SLIDES = [
  {
    id: 1,
    title: "NEW ARRIVALS 2026",
    subtitle: "High performance sneakers engineered for comfort and style.",
    badge: "Limited Drop",
    // Cutout PNG strictly for the Hero center presentation
    heroImage: "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png",
  },
  {
    id: 2,
    title: "URBAN RUNNER X",
    subtitle: "Designed for modern daily pavement performance.",
    badge: "Best Seller",
    // Second cutout PNG for Hero page 2
    heroImage: "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5823.png",
  }
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Aero Glide Max",
    category: "sport",
    price: 145.00,
    oldPrice: 180.00,
    isOnSale: true,
    // Normal photography with full background for store catalog grid
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Retro Court Low",
    category: "casual",
    price: 120.00,
    isOnSale: false,
    // Normal photography with background
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
  }
];

export const CATEGORIES = [
  { id: 'men', name: "MEN'S", image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=600&q=80" },
  { id: 'kids', name: "KIDS", image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=600&q=80" },
  { id: 'women', name: "WOMEN'S", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80" },
  { id: 'sport', name: "SPORTS", image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80" },
  { id: 'sandals', name: "SANDALS", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=600&q=80" },
  { id: 'brands', name: "BRANDS", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80" },
];

export const FEATURED_PRODUCTS = [
  {
    id: 101,
    name: "Air Max Glide 2026",
    isSoldOut: false,
    rating: 4.8,
    reviewsCount: 128,
    price: 145.00,
    oldPrice: 180.00,
    specs: ["Running", "Mesh", "Engineered"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    colorVariants: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=100&q=80"
    ]
  },
  {
    id: 102,
    name: "Retro Court Low",
    isSoldOut: true,
    rating: 4.6,
    reviewsCount: 85,
    price: 120.00,
    oldPrice: 150.00,
    specs: ["Leather", "Cushioned", "Streetwear"],
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
    colorVariants: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=100&q=80"
    ]
  },
  {
    id: 103,
    name: "Urban Minimalist Trainer",
    isSoldOut: false,
    rating: 4.9,
    reviewsCount: 210,
    price: 160.00,
    oldPrice: 195.00,
    specs: ["Knit Upper", "Lightweight", "Breathable"],
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
    colorVariants: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=100&q=80"
    ]
  },
  {
    id: 104,
    name: "Speed Trail Blazer",
    isSoldOut: false,
    rating: 4.7,
    reviewsCount: 94,
    price: 135.00,
    oldPrice: 160.00,
    specs: ["All-Terrain", "Grip Sole", "Waterproof"],
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80",
    colorVariants: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=100&q=80"
    ]
  }
];

export const TRENDING_LOOKBOOK = {
  heroBanner: {
    id: "banner-1",
    title: "Chunky Sole Sneakers",
    subtitle: "Bold silhouettes for modern street fashion.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
    buttonText: "SHOP NOW",
    textPosition: "top-left", // Writeup at top-left
    btnPosition: "bottom-right" // Button at bottom-right
  },
  gridItems: [
    {
      id: "trend-1",
      title: "Performance Running Wear",
      subtitle: "Fit for speed & durability.",
      image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=600&q=80",
      buttonText: "EXPLORE",
      textPosition: "top-left",
      btnPosition: "bottom-right"
    },
    {
      id: "trend-2",
      title: "Sustainable Sneakers",
      subtitle: "100% recycled eco materials.",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
      buttonText: "VIEW LINE",
      textPosition: "bottom-right", // Writeup at bottom-right
      btnPosition: "bottom-right"
    },
    {
      id: "trend-3",
      title: "High-Tops For Streetwear",
      subtitle: "Classic ankle support.",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
      buttonText: "SEE MORE",
      textPosition: "top-left",
      btnPosition: "bottom-right"
    }
  ]
};

export const BRANDS = [
  { id: 'brooks', name: 'BROOKS' },
  { id: 'vans', name: 'VANS' },
  { id: 'fila', name: 'FILA' },
  { id: 'nike', name: 'NIKE' },
  { id: 'salomon', name: 'SALOMON' },
  { id: 'adidas', name: 'ADIDAS' }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "How to Choose the Right Running Shoes for Your Foot Type",
    category: "GUIDES",
    date: "SEP 18, 2026",
    excerpt: "Discover the key differences between neutral, stability, and motion control running shoes.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Top 5 Sneaker Care Tips to Keep Your Kicks Looking Brand New",
    category: "CARE & MAINTENANCE",
    date: "SEP 12, 2026",
    excerpt: "Simple daily habits and cleaning techniques to extend the lifespan of your sneakers.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "The Evolution of Chunky Sneakers in Modern Streetwear",
    category: "STREET CULTURE",
    date: "AUG 28, 2026",
    excerpt: "From 'dad shoes' to high fashion runways—tracing the rapid rise of thick-soled sneakers.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Sustainable Footwear: Eco-Friendly Materials Changing the Game",
    category: "SUSTAINABILITY",
    date: "AUG 15, 2026",
    excerpt: "How leading footwear brands are utilizing ocean plastics and organic knits.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80"
  }
];


// export const HERO_SLIDES = [
//   {
//     id: 1,
//     title: "NEW ARRIVALS 2026",
//     subtitle: "High performance sneakers engineered for comfort and style.",
//     badge: "Limited Drop",
//     image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
//     linkText: "Explore Collection"
//   },
//   {
//     id: 2,
//     title: "URBAN RUNNER X",
//     subtitle: "Designed for modern daily pavement performance.",
//     badge: "Best Seller",
//     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
//     linkText: "Shop Urban Runner"
//   }
// ];

// export const CATEGORIES = [
//   { id: 'men', name: "Men's", image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=500&q=80" },
//   { id: 'women', name: "Women's", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80" },
//   { id: 'kids', name: "Kids", image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=500&q=80" },
//   { id: 'sport', name: "Sport", image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=500&q=80" },
//   { id: 'casual', name: "Casual", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80" },
//   { id: 'sandals', name: "Sandals", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=500&q=80" },
// ];

// export const PRODUCTS = [
//   {
//     id: 1,
//     name: "Aero Glide Max",
//     category: "sport",
//     price: 145.00,
//     oldPrice: 180.00,
//     isOnSale: true,
//     rating: 4.8,
//     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
//   },
//   {
//     id: 2,
//     name: "Retro Court Low",
//     category: "casual",
//     price: 120.00,
//     isOnSale: false,
//     rating: 4.6,
//     image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
//   },
//   {
//     id: 3,
//     name: "Urban Minimalist",
//     category: "men",
//     price: 160.00,
//     oldPrice: 200.00,
//     isOnSale: true,
//     rating: 4.9,
//     image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80"
//   },
//   {
//     id: 4,
//     name: "Street Runner Pro",
//     category: "sport",
//     price: 135.00,
//     isOnSale: false,
//     rating: 4.7,
//     image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80"
//   }
// ];