import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'react-feather';
import './ContactUs.css';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    type: 'General',
    newsletter: false
  });

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
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-info-section">
        <div className="contact-info">
          <div className="info-block">
            <MapPin className="contact-icon" />
            <div>
              <strong>Address</strong>
              <p>123 Navyug EV Lane, Sector 21, Gurugram, Haryana, India</p>
            </div>
          </div>
          <div className="info-block">
            <Phone className="contact-icon" />
            <div>
              <strong>Phone</strong>
              <p>+91 98765 43210</p>
              <p>+91 91234 56789</p>
            </div>
          </div>
          <div className="info-block">
            <Mail className="contact-icon" />
            <div>
              <strong>Email</strong>
              <p>hello@navyugev.com</p>
            </div>
          </div>
        </div>
        <div className="map-embed">
          <iframe
            title="Navyug EV Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.0266%2C28.4595%2C77.0366%2C28.4695&amp;layer=mapnik"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
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
          <label>
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
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </label>
          <label>
            Inquiry Type
            <select name="type" value={form.type} onChange={handleChange}>
              <option>General</option>
              <option>Partnership</option>
              <option>Training</option>
              <option>Sales</option>
            </select>
          </label>
          <div className="newsletter-box">
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
          <button className="btn gold" type="submit">
            <Send className="send-icon" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
