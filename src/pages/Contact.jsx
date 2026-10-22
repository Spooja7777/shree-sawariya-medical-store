
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-label">WE'RE HERE TO HELP</p>
        <h1>Contact Us</h1>
        <p>
          Have a question about a medicine or healthcare product?
          Get in touch with Shree Sawariya Medical Store.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="contact-description">
            Contact us to enquire about product availability
            and store information.
          </p>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Our Location</h3>
              <p>Pithampur, Madhya Pradesh, India</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Phone / WhatsApp</h3>
              <a href="https://wa.me/918839862478" target="_blank" rel="noreferrer">
                8839862478
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">🕒</div>
            <div>
              <h3>Store Hours</h3>
              <p>8:00a.m-11:00 p.m</p>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon">💚</div>
          <h2>How Can We Help You?</h2>
          <p>
            Need to check whether a medicine or healthcare
            product is available? Message our store directly.
          </p>

          <a
            className="contact-whatsapp"
            href="https://wa.me/918839862478?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20product."
            target="_blank"
            rel="noreferrer"
          >
            Message Us on WhatsApp
          </a>

          <p className="contact-note">
            Product availability should be confirmed with the store.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Contact;
