import React, { useEffect, useState } from 'react';
import { Zap, MessageCircle } from 'react-feather';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';

const testimonials = [
  "Great service and support for rural EV maintenance!",
  "Affordable and scalable diagnostics solutions.",
  "Partnering with them has boosted our service efficiency."
];

const evImages = [
  './images/ev1.jpeg',
  './images/ev2.jpeg',
  './images/ev3.jpeg',
  './images/ev4.jpeg',
  './images/ev5.jpeg'
];

const sectionLinks = [
  { to: '/about', label: 'About Us', info: 'Dive into our deep-tech stack and meet out team.' },
  { to: '/what-we-do', label: 'Our Work', info: 'Explore our projects, deployments, and impact.' },
  { to: '/service', label: 'Service', info: 'See our service offerings for diagnostics, charging, and skilling.' },
  { to: '/market-opportunity', label: 'Market Insights', info: 'Discover the untapped potential of Bharat’s EV sector.' },
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
          <h1>
            Motoget Navyug Innovations Pvt Ltd
            <br />
            <span style={{ fontSize: "1.5rem", fontWeight: "normal" }}>
              Redefining Innovation in Electric Mobility
            </span>
          </h1>
          <p className="subtitle">
            Driving Bharat's EV Revolution with Smart Diagnostics and Deep Tech.
          </p>
        </div>
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

      {/* The Navyug Edge */}
      <section className="navyug-edge">
        <h2>The Navyug Edge</h2>
        <p>
          "We deliver intelligent diagnostic solutions engineered specifically for electric vehicles, enabling proactive maintenance and optimized performance to enhance the reliability and experience of EV ownership. Driven by a commitment to safety and sustainability, our technology supports a safer, cleaner and eco-friendly future through smarter, greener mobility."
        </p>
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

      {/* Our Vision */}
      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          Our vision is to be the pioneer smart, data-driven EV telematics solution in India, designed for the future of electric mobility. We aspire to stand alongside the world’s leading tech innovators by connecting every electric vehicle to a unified intelligent ecosystem. Our goal is to unlock real-time insights that enhance efficiency, elevate safety, and optimize performance across the EV landscape. We aim to reinvent the way India commutes — smarter, cleaner and in tune.
        </p>
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
      <section className="navyug-edge">
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
            </div>
          </div>
          <div className="footer-contact">
            <div><strong>Contact:</strong> +91- 98355 94986</div>
            <div><strong>Email:</strong> <a href="mailto:navyuginnovation@gmail.com">navyuginnovation@gmail.com</a></div>
            <div><strong>Address:</strong> Ragunath Garden, Pragatipath, Makchund Toli, Ranchi – 834001, Jharkhand</div>
          </div>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/ng_navyug?igsh=MWtlZHZsNTY0dnRiZA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social-link"
            >
              <img
                src="./images/instalogo.png"
                alt="Instagram"
                className="footer-social-img"
                style={{ width: 36, height: 36, marginRight: 12 }}
              />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/motoget-navyug-innovations-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <img
                src="/images/linkedinlogo.jpg"
                alt="LinkedIn"
                className="footer-social-img"
                style={{ width: 35, height: 35, marginRight: 12 }}
              />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-nav">
          <Link to="/contact">Contact Us</Link>
          <Link to="/blog">Blog & News</Link>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Motoget Navyug Innovations Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;