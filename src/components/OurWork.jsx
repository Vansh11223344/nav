import React, { useEffect, useState } from 'react';
import {
  Cpu,
  Tool,
  BatteryCharging,
  BarChart2,
  Layers,
  Zap,
  CheckCircle,
  Truck
} from 'react-feather';
import './OurWork.css';

const modules = [
  {
    icon: <Truck className="work-icon pulse" />,
    title: "EV Diagnostics Platform",
    desc: "Plug-and-play hardware and cloud platform for real-time fault detection, remote monitoring, and predictive maintenance of electric vehicles across Bharat.",
  },
  {
    icon: <Tool className="work-icon pulse" />,
    title: "Rural EV Technician Skilling Kits",
    desc: "Hands-on learning kits, local language content, and certification for upskilling rural mechanics and service entrepreneurs.",
  },
  {
    icon: <BatteryCharging className="work-icon pulse" />,
    title: "Charging Hub Integration (Smart Hubs)",
    desc: "Integrated diagnostics, payment, and uptime monitoring for rural and peri-urban charging stations—making every hub smart.",
  },
  {
    icon: <BarChart2 className="work-icon pulse" />,
    title: "Data Analytics & Edge Intelligence",
    desc: "Actionable insights from fleet and grid data, with edge intelligence for low-connectivity environments.",
  },
];

const vehicleTypes = [
  "Electric 2-Wheelers (2W)",
  "Electric 3-Wheelers (3W)",
  "Fleet vehicles, personal EVs & swappable battery systems"
];

const keyFeatures = [
  "Real-time GPS Tracking (4G/GSM + Wi-Fi switching)",
  "Battery Diagnostics via CAN/UART",
  "Offline Edge Processing for rural or low-connectivity areas",
  "AI-driven Fault Prediction Alerts",
  "Modular Design for retrofitting on existing EVs",
  "60% cost reduction vs imported solutions",
  "Make-in-India certified hardware"
];

const chargingInfra = [
  "Collaborating with local garages and battery labs to build smart charging & diagnostics hubs",
  "Analytics for battery swap stations and charger performance",
  "Integration-ready with predictive BMS-level charging intelligence",
  "Support for universal charging interfaces and DC fast-charging protocols"
];

const images = [
  {
    src: "./images/ourwork1.jpeg",
    alt: "EV diagnostic in action"
  },
  {
    src: "./images/ourwork2.jpeg",
    alt: "Smart charging hub"
  }
];

const OurWork = () => {
  // Carousel state
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  // Optional: Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [current]);

  // Animate on scroll
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
    <div className="ourwork-container">
      
        <title>Our Work | Navyug Innovations</title>
     
      {/* What We Do Section - Now Boxed */}
      <section className="what-we-do-section animate-on-scroll fade-in delay-0">
        <div className=".what-we-do-section">
          <h1 className="work-title-boxed">What We Do</h1>
          <p>
            Motoget Navyug Innovations is a one-stop solution for electric vehicle servicing and diagnostics. As EV adoption is often hindered by inadequate maintenance support, we're bridging this gap by deploying a network of smart service stations powered by deep-tech solutions—ensuring reliable, accessible, and scalable EV care across India.
          </p>
        </div>
      </section>

      <div className="modules-visual animate-on-scroll"></div>

      {/* Vehicle Portfolio */}
      <section className="vehicle-portfolio-section animate-on-scroll">
        <h2>
          <Cpu className="section-icon" /> Vehicle Portfolio
        </h2>
        <ul className="vehicle-types-list fade-in delay-0">
          {vehicleTypes.map((type, idx) => (
            <li key={idx}><CheckCircle className="check-icon" /> {type}</li>
          ))}
        </ul>
      </section>

      {/* Key Specs */}
      <section className="key-specs-section animate-on-scroll">
        <h2>
          <Layers className="section-icon" /> Key Specs – Telematics Platform
        </h2>
        <ul className="key-features-list fade-in delay-1">
          {keyFeatures.map((feature, idx) => (
            <li key={idx}><CheckCircle className="check-icon" /> {feature}</li>
          ))}
        </ul>
      </section>

      {/* Charging Infrastructure */}
      <section className="charging-infra-section animate-on-scroll">
        <h2>
          <Zap className="section-icon" /> Charging Infrastructure
        </h2>
        <ul className="charging-infra-list fade-in delay-2">
          {chargingInfra.map((item, idx) => (
            <li key={idx}><CheckCircle className="check-icon" /> {item}</li>
          ))}
        </ul>
      </section>

      {/* Carousel Images */}
      <div className="carousel-wrapper animate-on-scroll fade-in delay-3">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="carousel-image"
          loading="lazy"
        />
        <div className="carousel-dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`carousel-dot${idx === current ? " active" : ""}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Work Modules in 2x2 grid, centered */}
      <div className="work-modules">
        {modules.map((mod, idx) => (
          <div className={`work-module animate-on-scroll fade-in delay-${idx + 5}`} key={idx} role="region" aria-label={mod.title}>
            {mod.icon}
            <h2>{mod.title}</h2>
            <p>{mod.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
