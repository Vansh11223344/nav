import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'react-feather';
import './Testimonials.css';

const testimonials = [
  {
    quote: "It’s like a stethoscope for EVs – our technicians can now detect faults faster.",
    author: "Local Garage Owner, Odisha"
  },
  {
    quote: "Downtime is down, customer trust is up. Navyug is a gamechanger for rural EVs.",
    author: "Fleet Operator, UP"
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

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">Testimonials & Impact</h1>
      <div className="quote-slider">
        <blockquote>
          “{testimonials[testimonialIndex].quote}”
          <span className="quote-author">— {testimonials[testimonialIndex].author}</span>
        </blockquote>
      </div>
      <div className="metrics">
        {metrics.map((m, idx) => (
          <div className="metric" key={idx}>
            <CheckCircle className="metric-icon" />
            <span className="metric-value">{m.value}</span>
            <span className="metric-label">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
