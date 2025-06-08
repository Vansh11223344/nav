import React, { useEffect } from 'react';
import {
  BarChart2,
  MapPin,
  Award,
  Users,
  TrendingUp
} from 'react-feather';
import './MarketOpportunity.css';

const opportunityPoints = [
  {
    icon: <BarChart2 className="mo-icon pulse" />,
    title: "India’s $150B EV Market",
    desc: "India’s EV industry is projected to hit $150B by 2030, but rural diagnostics and servicing are severely underserved."
  },
  {
    icon: <MapPin className="mo-icon pulse" />,
    title: "The Rural Diagnostics Gap",
    desc: "80% of rural EV service points lack advanced diagnostics, leading to longer downtimes and higher costs."
  },
  {
    icon: <Award className="mo-icon pulse" />,
    title: "Built for Bharat, Not Just Cities",
    desc: "Modular, cost-effective solutions tailored for Tier 2/3 markets."
  },
  {
    icon: <Users className="mo-icon pulse" />,
    title: "Impact in Tier 2/3 Cities",
    desc: "From retrofit kits to technician training and real-time analytics, our cost-effective platform powers uptime and productivity where it matters most."
  },
  {
    icon: <TrendingUp className="mo-icon pulse" />,
    title: "Why Now?",
    desc: "EV sales are booming; new compliance rules require digital diagnostics and service traceability."
  }
];

const MarketOpportunity = () => {
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.mo-point').forEach(el => observer.observe(el));
    document.querySelectorAll('.mo-title').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mo-container">
      <h1 className="mo-title animate-on-scroll">Market Opportunity</h1>
      <div className="mo-points">
        {opportunityPoints.map((pt, idx) => (
          <div className={`mo-point animate-on-scroll fade-in delay-${idx}`} key={idx}>
            {pt.icon}
            <div>
              <h2>{pt.title}</h2>
              <p>{pt.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mo-cta">
        <button className="btn gold fade-in delay-5">Talk to our team</button>
      </div>
    </div>
  );
};

export default MarketOpportunity;
