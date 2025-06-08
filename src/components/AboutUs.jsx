import React, { useEffect } from 'react';
import './AboutUs.css';

const leaders = [
  {
    name: "Gyaneesh Bhatt",
    title: "Founder & CEO",
    photo: "./images/Gyaneesh.jpg",
    bio: "Tech visionary and innovator with extensive experience in IoT and EV systems."
  },
  {
    name: "Naibedya Bhuyan",
    title: "Co-Founder & CTO",
    photo: "./images/Naibedya.JPG",
    bio: "Leads software development, AI integration, and overall platform intelligence."
  },
  {
    name: "Shreyansh Bhatt",
    title: "CTO",
    photo: "./images/Shreyansh.jpeg",
    bio: "Heads embedded systems, firmware architecture, and hardware innovation."
  }
];

const AboutUs = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="aboutus-container">
      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To make electric vehicle diagnostics, servicing, and safety accessible to every corner of Bharat through deep-tech innovation, decentralized infrastructure, and skilled rural workforce development.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To become India's leading EV servicing backbone by integrating real-time analytics, grassroots service hubs, and smart diagnostics across the 2W and 3W ecosystem.
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="history">
        <h2>Join Our EV Revolution</h2>
        <p>
          <span className="highlight">Partner with us</span><br/>
          <span className="highlight">Invest in future-ready EV technology</span><br/>
          <span className="highlight">Empower your fleet with real-time intelligence</span>
        </p>
      </section>

      {/* Team Leader Bios */}
      <section className="leadership">
        <h2>Meet Our Leaders</h2>
        <div className="leader-list">
          {leaders.map((leader, idx) => (
            <div className="leader-card" key={idx}>
              <img 
                src={leader.photo} 
                alt={leader.name} 
                className="leader-photo" 
                loading="lazy"
              />
              <div>
                <h3>{leader.name}</h3>
                <span className="leader-title">{leader.title}</span>
                <p>{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why We Exist */}
      <section className="why-exist">
        <h2>Our Purpose</h2>
        <p>
          Most of Bharat's EV mechanics and service hubs lack access to smart diagnostics—slowing adoption, increasing downtime, and leaving rural communities underserved. We exist to change that. Our deep-tech solutions are built for ruggedness, affordability, and true scalability, ensuring no part of India is left behind in the EV revolution.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;