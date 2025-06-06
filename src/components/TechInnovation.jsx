import React, { useState } from 'react';
import {
  Cpu,
  CloudOff,
  Activity,
  Wifi,
  Zap,
  Layers,
  X,
  Download
} from 'react-feather';
import html2pdf from 'html2pdf.js';
import './TechInnovation.css';

const innovations = [
  {
    icon: <Cpu className="tech-icon" />,
    title: "IoT + Edge AI",
    desc: "Real-time diagnostics through embedded machine learning"
  },
  {
    icon: <Zap className="tech-icon" />,
    title: "Rural Skilling Tech Kit",
    desc: "Hardware + software package to train EV technicians."
  },
  {
    icon: <CloudOff className="tech-icon" />,
    title: "Decentralized Data Architecture",
    desc: "Designed for low-latency analytics."
  },
  {
    icon: <Wifi className="tech-icon" />,
    title: "GSM-WiFi Hybrid Switching",
    desc: "Reliable performance across urban and rural zones"
  },
  {
    icon: <Activity className="tech-icon" />,
    title: "Patent-Pending Designs",
    desc: "Proprietary embedded firmware & circuits for diagnostics and safety."
  }
];

const whitePaperContent = [
  {
    title: "Executive Summary",
    content: "Our white paper outlines the technical innovations powering Bharat's EV diagnostic infrastructure, focusing on edge computing solutions tailored for diverse Indian conditions."
  },
  {
    title: "Core Technology Stack",
    content: "Hybrid architecture combining IoT sensors, edge AI processors, and lightweight cloud synchronization for optimal performance in varied connectivity conditions."
  },
  {
    title: "Key Innovations",
    content: "1. Adaptive battery diagnostics\n2. Vernacular voice interfaces\n3. Predictive maintenance algorithms\n4. Frugal edge computing modules"
  },
  {
    title: "Implementation Roadmap",
    content: "Phase 1: Urban pilot deployments\nPhase 2: Tier 2/3 city expansion\nPhase 3: Rural service hub integration"
  }
];

const TechInnovation = () => {
  const [showWhitePaper, setShowWhitePaper] = useState(false);

  const handleDownload = () => {
    const element = document.getElementById('white-paper-content');
    html2pdf().from(element).save('EV-Whitepaper.pdf');
  };

  return (
    <div className="tech-container">
      {/* Hero */}
      <section className="tech-hero">
        <h1>Deep-Tech for Bharat's EV Future</h1>
        <div className="architecture-visual">
          <Layers className="arch-icon" />
          <span>Modular Architecture</span>
        </div>
      </section>

      {/* Tech Grid */}
      <div className="tech-grid">
        {innovations.map((item, idx) => (
          <div className="tech-card" key={idx}>
            {item.icon}
            <div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Patent Section */}
      <section className="patent-section">
        <h2>Patent-Pending Innovations</h2>
        <p>
          While we can't disclose specifics, our IP portfolio includes breakthroughs in frugal edge computing, 
          battery lifecycle prediction, and vernacular voice interfaces for rural technicians.
        </p>
      </section>

      {/* White Paper Section */}
      <div className={`white-paper-viewer ${showWhitePaper ? 'active' : ''}`}>
        {showWhitePaper ? (
          <div id="white-paper-content" className="white-paper-content">
            <button 
              className="close-btn"
              onClick={() => setShowWhitePaper(false)}
            >
              <X size={24} />
            </button>
            
            <div className="white-paper-header">
              <h2>EV Diagnostic Technology White Paper</h2>
              <button className="download-btn" onClick={handleDownload}>
                <Download size={18} /> Download PDF
              </button>
            </div>
            
            <div className="white-paper-sections">
              {whitePaperContent.map((section, index) => (
                <div key={index} className="white-paper-section">
                  <h3>{section.title}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
                </div>
              ))}
            </div>
            
            <div className="white-paper-footer">
              <p>Confidential & Proprietary Information</p>
            </div>
          </div>
        ) : (
          <div className="diagram-placeholder">
            [Clean line diagrams of architecture and data flow]
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="tech-cta">
        <button 
          className="btn gold" 
          onClick={() => setShowWhitePaper(true)}
        >
          View White Paper
        </button>
        <button className="btn gold">Schedule Tech Demo</button>
      </div>
    </div>
  );
};

export default TechInnovation;
