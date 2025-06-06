import React from 'react';
import './AboutUs.css';

const leaders = [
  {
    name: "Aarav Sharma",
    title: "Founder & CEO",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Aarav is an IIT alumnus with 15+ years in automotive deep-tech. He is passionate about democratizing EV diagnostics for all of Bharat."
  },
  {
    name: "Priya Menon",
    title: "Chief Technology Officer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Priya leads our R&D. She has pioneered affordable, scalable diagnostic modules for rural India’s unique needs."
  },
  {
    name: "Rahul Verma",
    title: "Head of Operations",
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    bio: "Rahul brings a decade of rural mobility operations expertise, ensuring our solutions reach the last mile."
  }
];

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* Mission & Vision */}
      <section className="mission-vision">
        <h2>Mission</h2>
        <p>
          To empower every corner of Bharat with accessible, intelligent EV diagnostics, driving sustainable mobility for all.
        </p>
        <h2>Vision</h2>
        <p>
          To be the backbone of India’s electric revolution, enabling a future where technology bridges urban-rural divides.
        </p>
      </section>

      {/* Founding Story */}
      <section className="history">
        <h2>Our Story</h2>
        <p>
          Founded in 2022, our journey began when our founders witnessed firsthand the challenges rural mechanics faced with new EV technologies. Determined to bridge this gap, we built a team of engineers and grassroots experts to design diagnostics that work for Bharat, not just the metros.
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
