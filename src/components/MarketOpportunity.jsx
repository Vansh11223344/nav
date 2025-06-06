import React from 'react';
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
    icon: <BarChart2 className="mo-icon" />,
    title: "India’s $150B EV Market",
    desc: "India’s electric vehicle sector is projected to reach $150B+, with rural adoption as the next growth frontier."
  },
  {
    icon: <MapPin className="mo-icon" />,
    title: "The Rural Diagnostics Gap",
    desc: "80% of rural EV service points lack advanced diagnostics, leading to longer downtimes and higher costs."
  },
  {
    icon: <Award className="mo-icon" />,
    title: "Navyug’s Differentiator vs Imports",
    desc: "Built-for-Bharat: rugged, affordable, and offline-first—unlike imported solutions designed for urban markets."
  },
  {
    icon: <Users className="mo-icon" />,
    title: "Impact in Tier 2/3 Cities",
    desc: "Our platform is already reducing downtime and boosting productivity in emerging EV clusters."
  },
  {
    icon: <TrendingUp className="mo-icon" />,
    title: "Why Now?",
    desc: "EV sales are booming; new compliance rules require digital diagnostics and service traceability."
  }
];

const MarketOpportunity = () => {
  return (
    <div className="mo-container">
      <h1 className="mo-title">Market Opportunity</h1>
      <div className="mo-points">
        {opportunityPoints.map((pt, idx) => (
          <div className="mo-point" key={idx}>
            {pt.icon}
            <div>
              <h2>{pt.title}</h2>
              <p>{pt.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mo-cta">
        <button className="btn gold">Talk to our team</button>
      </div>
    </div>
  );
};

export default MarketOpportunity;
