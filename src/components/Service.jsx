import React, { useEffect } from 'react';
import { Settings, Info } from 'react-feather';
import './Service.css';

const services = [
  {
    name: 'EV Diagnostics',
    description: 'Comprehensive diagnostics for electric vehicles including battery health, motor status, and fault detection.',
    price: '₹1,500'
  },
  {
    name: 'Battery Health Check',
    description: 'Detailed battery performance and lifecycle analysis.',
    price: '₹1,000'
  },
  {
    name: 'Motor & Controller Service',
    description: 'Inspection and servicing of motor and controller units.',
    price: '₹2,000'
  },
  {
    name: 'Charging Station Setup',
    description: 'Installation and maintenance of smart charging hubs.',
    price: '₹5,000'
  },
  {
    name: 'Technician Skilling',
    description: 'Training programs for rural EV technicians.',
    price: '₹3,000'
  }
];

const evTechnologyInfo = `
Electric Vehicle (EV) technology is rapidly evolving, focusing on battery efficiency, motor performance, and smart diagnostics. Our services leverage cutting-edge telematics and AI-driven fault prediction to ensure optimal vehicle health and uptime, especially tailored for rural and low-connectivity environments.
`;

const Service = () => {
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

  return (
    <div className="service-container">
      <h1 className="service-title animate-on-scroll">Our Services</h1>
      <section className="services-offered">
        {services.slice(0, 4).map((service, idx) => (
          <div className={`service-card animate-on-scroll fade-in delay-${idx}`} key={idx} role="region" aria-label={service.name}>
            <Settings className="service-icon gold pulse" />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p className="service-price">Price: {service.price}</p>
          </div>
        ))}
      </section>

      <section className="services-offered">
        {services.slice(4).map((service, idx) => (
          <div className={`service-card animate-on-scroll fade-in delay-${idx + 6}`} key={service.name} role="region" aria-label={service.name}>
            <Settings className="service-icon gold pulse" />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p className="service-price">Price: {service.price}</p>
          </div>
        ))}
      </section>

  {/* Full-width Images after Charging Infrastructure */}
      <div className="full-width-image-wrapper">
        <img
          src="./images/service1.jpeg"
          alt="EV diagnostics in action"
          className="full-width-image animate-on-scroll fade-in delay-4"
          loading="lazy"
        />
          <img
          src="./images/service2.jpeg"
          alt="Smart battery parts"
          className="full-width-image animate-on-scroll fade-in delay-5"
          loading="lazy"
        />
        <img
          src="./images/service4.jpeg"
          alt="Smart charging hub"
          className="full-width-image animate-on-scroll fade-in delay-5"
          loading="lazy"
        />
       
      </div>

      <section className="ev-tech-info animate-on-scroll fade-in delay-8">
        <div className="ev-tech-header">
          <Info className="info-icon gold pulse" />
          <h2>About EV Technology</h2>
        </div>
        <p>{evTechnologyInfo}</p>
      </section>
    </div>
  );
};

export default Service;
