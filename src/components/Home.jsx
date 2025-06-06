import React, { useEffect, useState } from 'react';
import { DollarSign, Home as HomeIcon, Layers, Award, Zap } from 'react-feather';
import './Home.css';

const testimonials = [
  "Great service and support for rural EV maintenance!",
  "Affordable and scalable diagnostics solutions.",
  "Partnering with them has boosted our service efficiency."
];

const whyChooseUsPoints = [
  "India’s first rural-centric EV telematics platform",
  "Offline analytics, GSM fallback, and CAN-based fault detection",
  "Up to 60% cheaper than imported alternatives",
  "Enables diagnostics, skilling, and servicing — all under one ecosystem",
  "Validated with 90%+ diagnostic accuracy in pilot deployments"
];

const futureVisionPoints = [
  "Integrated Battery Management + Vehicle Control Unit",
  "Remote locking, geofencing, and anti-theft protection",
  "Battery-to-home power sharing capabilities",
  "Smart range estimations and route planning",
  "Integration with charging & battery swap stations"
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
          <h1>Motoget Navyug Innovations Pvt Ltd: Redefining Innovation in Electric Mobility</h1>
          <p className="subtitle">Powering Bharat’s EV Backbone with Smart Diagnostics & Deep-Tech.</p>
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
          <img src="/images/companyimg.jpeg" alt="EV diagnostic modules and rural service hubs" />
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

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="why-header">
          <Award className="why-icon" />
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Why Choose Us</h2>
        </div>
        <p className="usp-tagline">
          <span role="img" aria-label="spark"></span> <b>Make-in-Bharat. Rural-First. Data-Driven.</b>
        </p>
        <ul className="why-list">
          {whyChooseUsPoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Future Vision */}
      <section className="future-vision">
        <div className="future-header">
          <Zap className="future-icon" />
          <h2>&nbsp; &nbsp; &nbsp;&nbsp;Future Vision</h2>
        </div>
        <ul className="future-list">
          {futureVisionPoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
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
