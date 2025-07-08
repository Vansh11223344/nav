import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'react-feather';
import './Testimonials.css';

const testimonials = [
  {
    name: "Ravi Kumar",
    satisfaction: "⭐⭐⭐⭐⭐",
    review: "The motor and controller service really improved my scooter’s performance — worth the price."
  },
  {
    name: "Maboj Tudu",
    satisfaction: "⭐⭐⭐⭐⭐",
    review: "Got the charging station installed last week, and it's been working perfectly since."
  },
  {
    name: "Poonam Singh",
    satisfaction: "⭐⭐⭐⭐⭐",
    review: "They did a great job diagnosing the battery issue quickly and explaining it in simple terms"
  },
  {
    name: "Anjali",
    satisfaction: "⭐⭐⭐⭐",
    review: "Battery health check helped me avoid a breakdown — very helpful service."
  }
];

const metrics = [
  { value: "35%", label: "reduction in downtime" },
  { value: "500+", label: "trained technicians" },
  { value: "4+", label: "pilot districts tested" }
];

const faqs = [
  {
    question: "What is EV Smart Diagnostics?",
    answer: (
      <>
        EV Smart Diagnostics is an intelligent, real-time vehicle health monitoring system that tracks key electric vehicle parameters like battery health, voltage, current, temperature, and more. It helps you detect potential issues early, optimize performance, and extend the life of your EV.<br />
        With our solution, you get instant alerts, data-driven insights, and remote troubleshooting — all designed to keep your EV running smoothly and efficiently.
      </>
    )
  },
  {
    question: "Can your devices be installed in any EV?",
    answer: "Yes, our devices can be installed in any EV that supports CAN-based connections. This allows us to seamlessly integrate with most electric vehicle architectures."
  },
  {
    question: "Is installation complex?",
    answer: "The installation is plug-and-play — simple, quick, and hassle-free. No complex setup, no technical headaches. Just plug it in and you're good to go!"
  },
  {
    question: "Do you work with fleet operators and government bodies?",
    answer: "Yes, absolutely! Navyug actively works with both government and private sector entities. Our solutions are designed to benefit all stakeholders in the EV ecosystem, including fleet operators, public agencies, and large-scale transport systems."
  },
  {
    question: "How can I apply for a job or internship at Navyug?",
    answer: "We love welcoming passionate innovators! Job and internship opportunities are regularly updated on our social media channels. Stay connected with us there to apply and stay informed about upcoming roles."
  },
  {
    question: "How is Navyug contributing to sustainability?",
    answer: "At Navyug, we are deeply committed to sustainability. Our smart solutions help in efficient battery usage, prolonging battery life, and preserving lithium reserves—essential for reducing waste and promoting responsible resource consumption."
  }
];

const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((idx) => (idx + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
    
        <title>Testimonials | Navyug Innovations</title>
     
      <h1 className="testimonials-title fade-in delay-0">Testimonials & Impact</h1>
      
      {/* Metrics Section */}
      <div className="metrics fade-in delay-1">
        {metrics.map((m, idx) => (
          <div className="metric pulse" key={idx}>
            <CheckCircle className="metric-icon" />
            <span className="metric-value">{m.value}</span>
            <span className="metric-label">{m.label}</span>
          </div>
        ))}
      </div>

      {/* Reviews Section */}
      <div className="reviews-list fade-in delay-2">
        {testimonials.map((t, idx) => (
          <div className="review-card rectangle" key={idx}>
            <div className="review-satisfaction">{t.satisfaction}</div>
            <blockquote className="review-text">
              <span className="quote-mark">“</span>
              {t.review}
              <span className="quote-mark">”</span>
            </blockquote>
            <div className="review-author">— {t.name}</div>
          </div>
        ))}
      </div>

      {/* Share Your Review Section */}
      <div className="share-review-section fade-in delay-2">
        <h1 className="share-review-title">Share Your Review</h1>
        <p className="share-review-desc">
          We value your feedback! Click below to share your experience and help us serve you better.
        </p>
        <div className="share-review-btn-container">
          <a
            className="btn gold share-review-btn"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfQayOeQxxE7pRYXWlmcpdwwSHFLswIQHEuLePgPxuAqwqJgQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            Share Your Review
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section fade-in delay-3">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div className={`faq-item${openFaq === idx ? ' open' : ''}`} key={faq.question}>
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span>{faq.question}</span>
                <span className="faq-toggle">{openFaq === idx ? '−' : '+'}</span>
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${idx}`}
                style={{ display: openFaq === idx ? 'block' : 'none' }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
