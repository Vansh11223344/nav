import React from 'react';
import {
  Cpu,
  Tool,
  BatteryCharging,
  BarChart2,
  Layers
} from 'react-feather';
import './OurWork.css';

const modules = [
  {
    icon: <Cpu className="work-icon" />,
    title: "EV Diagnostics Platform",
    desc: "Plug-and-play hardware and cloud platform for real-time fault detection, remote monitoring, and predictive maintenance of electric vehicles across Bharat.",
  },
  {
    icon: <Tool className="work-icon" />,
    title: "Rural EV Technician Skilling Kits",
    desc: "Hands-on learning kits, local language content, and certification for upskilling rural mechanics and service entrepreneurs.",
  },
  {
    icon: <BatteryCharging className="work-icon" />,
    title: "Charging Hub Integration (Smart Hubs)",
    desc: "Integrated diagnostics, payment, and uptime monitoring for rural and peri-urban charging stations—making every hub smart.",
  },
  {
    icon: <BarChart2 className="work-icon" />,
    title: "Data Analytics & Edge Intelligence",
    desc: "Actionable insights from fleet and grid data, with edge intelligence for low-connectivity environments.",
  },
];

const OurWork = () => {
  return (
    <div className="ourwork-container">
      <h1 className="work-title">
        What We Do: Powering Bharat’s EV Value Chain
      </h1>
      <div className="modules-visual">
        <Layers className="modular-visual" />
        <span className="modular-label">Modular, Scalable, Rural-Ready</span>
      </div>
      <div className="work-modules">
        {modules.map((mod, idx) => (
          <div className="work-module" key={idx} role="region" aria-label={mod.title}>
            {mod.icon}
            <h2>{mod.title}</h2>
            <p>{mod.desc}</p>
          </div>
        ))}
      </div>
      <div className="work-cta">
        <button className="btn gold" aria-label="Contact us for deployment">Contact us for deployment</button>
        <button className="btn gold" aria-label="Become a partner">Become a partner</button>
      </div>
    </div>
  );
};

export default OurWork;