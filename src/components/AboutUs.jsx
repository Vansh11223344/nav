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
    
       <Title>About Us | Navyug Innovations</Title>
     
      {/* Purpose Section */}
      <section className="purpose-section">
        <h2>Who We Are</h2>
        <p>
        Motoget Navyug Innovations Pvt. Ltd. is at the forefront of India's electric mobility transformation. We are developing the nation’s first OEM-ready telematics and battery intelligence platform—engineered to provide secure, scalable, and data-driven solutions tailored for electric vehicles.
        </p>
      </section>

       <section className="purpose-section">
        <h2>Our Purpose</h2>
        <p>
          Across India, many EV service hubs and mechanics still operate without access to smart diagnostic tools—leading to increased downtime, limited reach, and barriers to adoption, especially in rural communities. At <b>Motoget Navyug Innovations</b>, our purpose is to bridge this gap. We develop robust, affordable, and scalable deep-tech solutions that bring intelligent diagnostics to every corner of the country—ensuring no region is left behind in India's electric mobility journey.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-centered">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to transform India’s electric vehicle ecosystem through cutting-edge telematics solutions. By delivering real-time battery monitoring, predictive maintenance capabilities, and smart fleet management tools, we aim to empower OEMs, fleet operators, and battery partners with the intelligence they need to operate efficiently and reliably.
          </p>
        </div>
        <div className="vision-card">
          <h2>Our Vision</h2>
          <p>
            To be India’s leading smart EV telematics and service platform, connecting every electric vehicle to a unified ecosystem that enables real-time insights, efficient maintenance and sustainable mobility across the 2-Wheelers (2W) and 3-Wheelers  (3W) ecosystem.
          </p>
        </div>
      </section>

      {/* Team Leader Bios */}
      <section className="leadership">
        <h2>Our Team</h2>
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
    </div>
  );
};

export default AboutUs;
