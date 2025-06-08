import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send } from 'react-feather';
import './ContactUs.css';

const infoBlocks = [
  {
    icon: <MapPin className="contact-icon pulse" />,
    title: "Address",
    content: "Ragunath Garden, Pragatipath, Makchund Toli, Ranchi – 834001, Jharkhand"
  },
  {
    icon: <Phone className="contact-icon pulse" />,
    title: "Phone",
    content: (
      <>
        +91 98355 94986<br />
        +91 77358 37675
      </>
    )
  },
  {
    icon: <Mail className="contact-icon pulse" />,
    title: "Email",
    content: "navyuginnovations@gmail.com"
  }
];

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    type: 'General',
    newsletter: false
  });

useEffect(() => {
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  return () => observer.disconnect();
}, []);



  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev =>
      type === 'checkbox'
        ? { ...prev, [name]: checked }
        : { ...prev, [name]: value }
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you! We have received your message.');
    setForm({
      name: '',
      email: '',
      message: '',
      type: 'General',
      newsletter: false
    });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title animate-on-scroll">Contact Us</h1>
      <div className="contact-info-section animate-on-scroll">
        <div className="contact-info">
          {infoBlocks.map((block, idx) => (
            <div className={`info-block fade-in delay-${idx}`} key={idx}>
              {block.icon}
              <div>
                <strong>{block.title}</strong>
                <p>{block.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="map-embed slide-in-right">
          <iframe
            title="Navyug EV Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.0266%2C28.4595%2C77.0366%2C28.4695&amp;layer=mapnik"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="contact-form-section animate-on-scroll">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="fade-in">
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
          <label className="fade-in delay-1">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
          <label className="fade-in delay-2">
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </label>
          <label className="fade-in delay-3">
            Inquiry Type
            <select name="type" value={form.type} onChange={handleChange}>
              <option>General</option>
              <option>Partnership</option>
              <option>Training</option>
              <option>Sales</option>
            </select>
          </label>
          <div className="newsletter-box fade-in delay-4">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={form.newsletter}
              onChange={handleChange}
            />
            <label htmlFor="newsletter">
              Sign me up for updates and insights
            </label>
          </div>
          <button className="btn gold fade-in delay-5" type="submit">
            <Send className="send-icon" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
