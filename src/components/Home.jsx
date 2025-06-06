import React, { useEffect, useState } from 'react';
import { DollarSign, Home as HomeIcon, Layers } from 'react-feather';
import './Home.css';

const testimonials = [
  "Great service and support for rural EV maintenance!",
  "Affordable and scalable diagnostics solutions.",
  "Partnering with them has boosted our service efficiency."
];

const Home = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Powering Bharat’s EV Backbone with Smart Diagnostics & Deep-Tech</h1>
          <p className="subtitle">Empowering rural India with cutting-edge EV maintenance solutions.</p>
          <div className="cta-buttons">
            <button className="btn gold">Partner</button>
            <button className="btn gold">Enquire</button>
            <button className="btn gold">Train</button>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="visual-section">
        <div className="visual-placeholder">
          <img src="/path-to-image.jpg" alt="EV diagnostic modules and rural service hubs" />
        </div>
      </section>

      {/* High-Level USPs */}
      <section className="usps">
        <div className="usp">
          <DollarSign className="icon gold" />
          <h3>Affordable</h3>
          <p>Cost-effective solutions for all budgets.</p>
        </div>
        <div className="usp">
          <HomeIcon className="icon gold" />
          <h3>Rural-Ready</h3>
          <p>Designed for accessibility in rural areas.</p>
        </div>
        <div className="usp">
          <Layers className="icon gold" />
          <h3>Scalable</h3>
          <p>Grows with your business needs.</p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="offer">
        <h2>What We Offer</h2>
        <p>
          Smart diagnostics solutions tailored for Bharat’s electric vehicle ecosystem, enabling efficient maintenance and service in rural areas.
        </p>
      </section>

      {/* Testimonials Carousel */}
      <section className="testimonials">
        <blockquote key={testimonialIndex}>{testimonials[testimonialIndex]}</blockquote>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === testimonialIndex ? 'active' : ''}`}
              onClick={() => setTestimonialIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="cta-strip">
        <button className="btn gold">Partner</button>
        <button className="btn gold">Enquire</button>
        <button className="btn gold">Train</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-contact">
          <a href="/contact">Contact</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} EV Bharat. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;