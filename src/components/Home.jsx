import React, { useEffect, useState } from 'react';
import { Zap, MessageCircle } from 'react-feather';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';

const testimonials = [
  "Great service and support for rural EV maintenance!",
  "Affordable and scalable diagnostics solutions.",
  "Partnering with them has boosted our service efficiency."
];

const futureVisionPoints = [
 "Our vision is to be the pioneer smart, data-driven EV telematics solution in India, designed for the future of electric mobility. We aspire to stand alongside the world’s leading tech innovators by connecting every electric vehicle to a unified intelligent ecosystem. Our goal is to unlock real-time insights that enhance efficiency, elevate safety, and optimize performance across the EV landscape. We aim to reinvent the way India commutes — smarter, cleaner and in tune."
];

const evImages = [
  '/images/ev1.jpeg',
  '/images/ev2.jpeg',
  '/images/ev3.jpeg',
  '/images/ev4.jpeg',
  '/images/ev5.jpeg'
];

const sectionLinks = [
  { to: '/about', label: 'About Us', info: 'Learn about our mission, vision, and the team behind Navyug.' },
  { to: '/blog', label: 'Blog & News', info: 'Latest updates, policy news, and rural EV stories.' },
  { to: '/contact', label: 'Contact Us', info: 'Get in touch for queries, support, or partnership.' },
  { to: '/market', label: 'Market Opportunity', info: 'Discover the untapped potential of Bharat’s EV sector.' },
  { to: '/ourwork', label: 'Our Work', info: 'Explore our projects, deployments, and impact.' },
  { to: '/service', label: 'Service', info: 'See our service offerings for diagnostics, charging, and skilling.' },
  { to: '/tech', label: 'Tech Innovation', info: 'Dive into our deep-tech stack and patent-pending solutions.' },
  { to: '/testimonials', label: 'Testimonials', info: 'Hear from our customers, partners, and trainees.' }
];

const Home = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prevIndex) => (prevIndex + 1) % evImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Motoget Navyug Innovations Pvt Ltd: Redefining Innovation in Electric Mobility</h1>
          <p className="subtitle">Driving Bharat's EV Revolution with Smart Diagnostics and Deep Tech.</p>
        </div>
      </section>

      {/* Visual Section */}
      <section className="visual-section">
        <div className="visual-placeholder">
          <img src="/images/companyimg.jpeg" alt="EV diagnostic modules and rural service hubs" />
        </div>
      </section>

      {/* The Navyug Edge */}
      <section className="navyug-edge">
        <h2>The Navyug Edge</h2>
        <p>
          We provide intelligent diagnostic solutions purpose-built for electric vehicles,
          empowering efficient maintenance and proactive service for EV users. Driven by a commitment to safety
          and sustainability, our technology supports a safer, cleaner and eco-friendly future through smarter,
          greener mobility.
        </p>
      </section>

      {/* EV Gallery Section */}
      <section className="ev-gallery-section">
        <div className="ev-gallery">
          {evImages.map((src, idx) => (
            <img
              className={`ev-gallery-img gallery-slide${galleryIndex === idx ? ' active' : ''}`}
              src={src}
              alt={`EV ${idx + 1}`}
              key={src}
              style={{
                opacity: galleryIndex === idx ? 1 : 0,
                zIndex: galleryIndex === idx ? 2 : 1,
                transition: 'opacity 1s ease-in-out'
              }}
            />
          ))}
          <div className="gallery-dots">
            {evImages.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${galleryIndex === idx ? 'active' : ''}`}
                onClick={() => setGalleryIndex(idx)}
                aria-label={`Go to gallery image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="vision-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to transform India’s electric vehicle ecosystem through cutting-edge telematics solutions.
          By delivering real-time battery monitoring, predictive maintenance capabilities, and smart fleet management tools,
          we aim to empower OEMs, fleet operators, and battery partners with the intelligence they need to operate efficiently and reliably.
        </p>
      </section>

      {/* Future Vision */}
      <section className="future-vision">
        <div className="future-header">
          <Zap className="future-icon" />
          <h2>&nbsp; &nbsp; &nbsp;&nbsp;Our Vision</h2>
        </div>
        <ul className="future-list">
          {futureVisionPoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
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

      {/* Quick Links */}
      <section className="quick-links-section">
        <h2>Explore More</h2>
        <div className="quick-links-list">
          {sectionLinks.map((section) => (
            <Link to={section.to} className="quick-link-card" key={section.to}>
              <div className="quick-link-title">{section.label}</div>
              <div className="quick-link-info">{section.info}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Chatbot */}
      <button
        className="chatbot-fab"
        onClick={() => navigate('/chatbot')}
        aria-label="Open Chatbot"
      >
        <MessageCircle size={28} />
      </button>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-logo">
            <img src="/images/companyimg.jpeg" alt="Company Logo" style={{ width: 60, borderRadius: 8 }} />
            <div className="footer-company">
              <strong>Motoget Navyug Innovations Pvt Ltd</strong>
              <div>Redefining Electric Mobility for Bharat</div>
            </div>
          </div>
          <div className="footer-contact">
            <div><strong>Contact:</strong> +91- 98355 94986</div>
            <div><strong>Email:</strong> <a href="mailto:navyuginnovation@gmail.com">navyuginnovation@gmail.com</a></div>
            <div><strong>Address:</strong>Ragunath Garden, Pragatipath, Makchund Toli, Ranchi – 834001, Jharkhand</div>
          </div>
          <div className="footer-social">
            <a href="https://www.instagram.com/ng_navyug?igsh=MWtlZHZsNTY0dnRiZA==" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/motoget-navyug-innovations-pvt-ltd/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-nav">
          {sectionLinks.map((link) => (
            <Link to={link.to} key={link.to}>{link.label}</Link>
          ))}
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Motoget Navyug Innovations Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
