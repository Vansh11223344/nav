import React, { useEffect } from 'react';
import {
  Cpu,
  Tool,
  BatteryCharging,
  BarChart2,
  Layers,
  Zap,
  CheckCircle
} from 'react-feather';
import './OurWork.css';

const modules = [
  {
    icon: <Cpu className="work-icon pulse" />,
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

const OurWork = () => {
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
      <h1 className="work-title animate-on-scroll">What We Do: Powering Bharat’s EV Value Chain</h1>
      <div className="modules-visual animate-on-scroll">
        <Layers className="modular-visual" />
        <span className="modular-label">Modular, Scalable, Rural-Ready</span>
      </div>

      {/* Vehicle Portfolio & Key Specs */}
      <section className="vehicle-specs-section animate-on-scroll">
        <h2>
          <Cpu className="section-icon" /> Vehicle Portfolio & Key Specs – Telematics Platform
        </h2>
        <div className="vehicle-specs-content">
          <div className="vehicle-types fade-in delay-0">
            <h3>Supported Vehicles:</h3>
            <ul>
              {vehicleTypes.map((type, idx) => (
                <li key={idx}><CheckCircle className="check-icon" /> {type}</li>
              ))}
            </ul>
          </div>
          <div className="key-features fade-in delay-1">
            <h3>Key Features:</h3>
            <ul>
              {keyFeatures.map((feature, idx) => (
                <li key={idx}><CheckCircle className="check-icon" /> {feature}</li>
              ))}
            </ul>
          </div>
        </div>
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

      {/* Existing Modules */}
      <div className="work-modules">
        {modules.map((mod, idx) => (
          <div className={`work-module animate-on-scroll fade-in delay-${idx + 3}`} key={idx} role="region" aria-label={mod.title}>
            {mod.icon}
            <h2>{mod.title}</h2>
            <p>{mod.desc}</p>
          </div>
        ))}
      </div>
      <div className="work-cta animate-on-scroll fade-in delay-7">
        <button className="btn gold" aria-label="Contact us for deployment">Contact us for deployment</button>
        <button className="btn gold" aria-label="Become a partner">Become a partner</button>
      </div>
    </div>
  );
};

export default OurWork;
