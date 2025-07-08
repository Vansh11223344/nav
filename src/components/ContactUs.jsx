import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send } from 'react-feather';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './ContactUs.css';

// Get EmailJS IDs from environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

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

  const [isSending, setIsSending] = useState(false);

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

  useEffect(() => {
    if (USER_ID) {
      emailjs.init(USER_ID);
    }
  }, []);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev =>
      type === 'checkbox'
        ? { ...prev, [name]: checked }
        : { ...prev, [name]: value }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
      type: form.type,
      newsletter: form.newsletter ? "Yes" : "No"
    };

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    )
      .then((result) => {
        alert("Thank you! Your message has been sent.");
        setForm({
          name: '',
          email: '',
          message: '',
          type: 'General',
          newsletter: false
        });
        setIsSending(false);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert("Oops! Something went wrong. Please try again.");
        setIsSending(false);
      });
  };

  return (
    <div className="contact-container">
     
        <title>Contact Us | Navyug Innovations</title>
      
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
      </div>

      <div className="map-section animate-on-scroll">
        <div className="map-embed">
          <iframe
            title="Navyug EV Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.0266%2C28.4595%2C77.0366%2C28.4695&amp;layer=mapnik"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
          <div className="contact-socials fade-in delay-3">
            <a
              href="https://www.linkedin.com/company/motoget-navyug-innovations-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="contact-social-link linkedin"
            >
              <FaLinkedin className="contact-icon pulse" />
            </a>
            <a
              href="https://www.instagram.com/ng_navyug?igsh=MWtlZHZsNTY0dnRiZA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="contact-social-link"
            >
              <FaInstagram className="contact-icon pulse" />
            </a>
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
          <button className="btn gold fade-in delay-5" type="submit" disabled={isSending}>
            <Send className="send-icon" /> {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;