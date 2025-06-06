import React from 'react';
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
    bio: "Heads embedded systems, firmware architecture, and hardware innovation.    "
  }
];

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* Mission & Vision */}
      <section className="mission-vision">
        <h2>Mission</h2>
        <p>
        To make electric vehicle diagnostics, servicing, and safety accessible to every corner of Bharat through deep-tech innovation, decentralized infrastructure, and skilled rural workforce development.
        </p>
        <h2>Vision</h2>
        <p>
          To become India’s leading EV servicing backbone by integrating real-time analytics, grassroots service hubs, and smart diagnostics across the 2W and 3W ecosystem.
        </p>
      </section>

      {/* Founding Story */}
      <section className="history">
        <h2>Join our mission to power India’s EV revolution</h2>
        <p>
         👉 Partner with us<br/>
         👉 Invest in future-ready EV technology<br/>
         👉 Empower your fleet or EV service hub with real-time intelligence
        </p>
      </section>

      {/* Team Leader Bios */}
      <section className="leadership">
        <h2>Leadership</h2>
        <div className="leader-list">
          {leaders.map((leader, idx) => (
            <div className="leader-card" key={idx}>
              <img src={leader.photo} alt={leader.name} className="leader-photo" />
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
        <h2>Why We Exist</h2>
        <p>
          Most of Bharat’s EV mechanics and service hubs lack access to smart diagnostics—slowing adoption, increasing downtime, and leaving rural communities underserved. We exist to change that. Our deep-tech solutions are built for ruggedness, affordability, and true scalability, ensuring no part of India is left behind in the EV revolution.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
