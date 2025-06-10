import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'react-feather';
import './Testimonials.css';

const testimonials = [
  {
    quote: "It’s like a stethoscope for EVs – our technicians can now detect faults faster and build trust with customers.",
    author: "Local Garage Owner, Odisha"
  },
  {
    quote: "The device helped us diagnose battery issues we didn’t even know existed. Our downtime has reduced by 35%.",
    author: "Fleet Operator, Chhattisgarh"
  },
  {
    quote: "The skilling kits helped our mechanics learn diagnostics in their own language.",
    author: "Training Partner, Maharashtra"
  }
];

const metrics = [
  { value: "35%", label: "reduction in downtime" },
  { value: "500+", label: "trained technicians" },
  { value: "4+", label: "pilot districts tested" }
];

const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((idx) => (idx + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate in on scroll
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="testimonials-container animate-on-scroll">
      <h1 className="testimonials-title fade-in delay-0">Testimonials & Impact</h1>
      <div className="quote-slider fade-in delay-1">
        <blockquote>
          <span className="quote-mark">“</span>
          {testimonials[testimonialIndex].quote}
          <span className="quote-mark">”</span>
          <span className="quote-author">— {testimonials[testimonialIndex].author}</span>
        </blockquote>
        <div className="testimonial-dots">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === testimonialIndex ? 'active' : ''}`}
              onClick={() => setTestimonialIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="metrics fade-in delay-2">
        {metrics.map((m, idx) => (
          <div className="metric pulse" key={idx}>
            <CheckCircle className="metric-icon" />
            <span className="metric-value">{m.value}</span>
            <span className="metric-label">{m.label}</span>
          </div>
        ))}
      </div>
      {/* Full-width images */}
      <div className="testimonials-gallery-wrapper">
        <img
          src="./images/test1.jpeg"
          alt="Technician using EV diagnostic tool"
          className="testimonials-gallery-img"
          loading="lazy"
        />
        <img
          src="./images/test2.jpeg"
          alt="Fleet operator with EV"
          className="testimonials-gallery-img"
          loading="lazy"
        />
        <img
          src="./images/test3.jpeg"
          alt="Mechanic skilling session"
          className="testimonials-gallery-img"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Testimonials;
