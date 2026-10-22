
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import products from './products.json';
import './Home.css';

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            onError={(e) =>{
             console.log('Image failed:', e.currentTarget.src);
            console.log('Image element:', e.currentTarget);
            }}
          />
        ) : (
          <div className="image-placeholder">💊
         </div>
        )}
      </div>

      <p className="product-category">{product.category}</p>
      <h3>{product.name}</h3>

      <a
        href={`https://wa.me/8839862478?text=${encodeURIComponent(
          `Hello, I want to enquire about ${product.name}. Is it available?`
        )}`}
        className="product-button"
        target="_blank"
        rel="noreferrer"
      >
        Enquire Now
      </a>
    </article>
  );
}

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get all unique product categories
  const categories = [
    'All',
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products using both search text and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="home-page">
      <section className="main">
        <p className="store-label">SHREE SAWARIYA MEDICAL STORE</p>

        <h1>Your Health, Our Priority</h1>

        <p>
          Your trusted neighbourhood medical store in Pithampur,
          Madhya Pradesh. Explore healthcare and personal care
          products and enquire about availability.
        </p>

        <a href="#products" className="hero-button">
          Explore Products
        </a>
      </section>

      <section className="products-section" id="products">
        <h2>Our Products</h2>

        <p className="section-note">
          Contact us to enquire about product availability.
        </p>

        {/* Search bar */}
        <div className="product-search">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            className="product-search-input"
            placeholder="Search medicines and healthcare products..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          {searchTerm && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                selectedCategory === category
                  ? 'category-button active'
                  : 'category-button'
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filtered product cards */}
        <div className="products-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="no-products">
              No products found. Try another search or category.
            </p>
          )}
        </div>
      </section>

      <section className="blood-test-section" id="blood-tests">
        <h2>Blood Tests &amp; Diagnostics</h2>

        <p>
          Contact our store to enquire about available tests and details.
        </p>

        <Link to="/contact" className="hero-button">
          Enquire Now
        </Link>
      </section>
    </main>
  );
}

export default Home;
