
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <main className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <p className="about-label">GET TO KNOW US</p>

        <h1>About Shree Sawariya Medical Store</h1>

        <p className="about-hero-text">
          Your neighbourhood destination for medicines,
          healthcare essentials, and personal care products
          in Pithampur, Madhya Pradesh.
        </p>

        <Link to="/contact" className="about-button">
          Contact Us
        </Link>
      </section>

      {/* About the Store */}
      <section className="about-content">
        <div className="about-story">
          <span className="about-icon">💚</span>

          <h2>Your Health Matters to Us</h2>

          <p>
            At Shree Sawariya Medical Store, we aim to make
            healthcare essentials easier to find for our
            local community. We offer a range of medicines,
            healthcare essentials, and personal care products.
          </p>

          <p>
            Whether you want to enquire about a product or
            check its availability, our store is here to help.
            Contact us for product details and confirm
            availability before visiting.
          </p>
        </div>

        {/* Store Highlights */}
        <div className="about-highlights">

          <article className="about-card">
            <div className="about-card-icon">💊</div>
            <h3>Healthcare Essentials</h3>
            <p>
              Browse our catalogue and enquire about the
              medicines and healthcare products you need.
            </p>
          </article>

          <article className="about-card">
            <div className="about-card-icon">🧴</div>
            <h3>Personal Care</h3>
            <p>
              Explore personal care, skincare, and everyday
              wellness products.
            </p>
          </article>

          <article className="about-card">
            <div className="about-card-icon">📍</div>
            <h3>Serving Pithampur</h3>
            <p>
              A local medical store serving customers in
              and around Pithampur, Madhya Pradesh.
            </p>
          </article>

          <article className="about-card">
            <div className="about-card-icon">💬</div>
            <h3>Easy Enquiries</h3>
            <p>
              Contact us to ask about products and confirm
              availability before visiting the store.
            </p>
          </article>

        </div>
      </section>

      {/* Proprietor Section */}
      <section className="proprietor-section">
        <div className="proprietor-card">

          <div className="proprietor-photo-wrapper">
            <img
              src="src/images/shailendra_patel.jpeg"
              alt="Shailendra Patel, Proprietor of Shree Sawariya Medical Store"
              className="proprietor-photo"
            />
          </div>

          <div className="proprietor-details">
            <p className="about-label">
              MEET THE PROPRIETOR
            </p>

            <h2>Shailendra Patel</h2>

            <h3>
              Proprietor — Shree Sawariya Medical Store
            </h3>

            <p>
              Dedicated to serving the local community by
              helping customers enquire about healthcare
              products and their availability. Our goal is
              to make your shopping experience simple,
              convenient, and welcoming.
            </p>
          </div>

        </div>
      </section>

      {/* Our Commitment */}
      <section className="about-commitment">
        <div className="commitment-content">
          <p className="about-label">OUR COMMITMENT</p>

          <h2>Making Healthcare Enquiries Easier</h2>

          <p>
            We want your experience to be simple and convenient.
            Browse our catalogue, find the products you need,
            and contact us to confirm availability.
          </p>

          <div className="commitment-actions">
            <Link to="/home" className="about-button">
              Explore Products
            </Link>

            <Link
              to="/contact"
              className="about-secondary-button"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;
