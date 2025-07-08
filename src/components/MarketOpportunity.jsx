import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, AreaChart, Area
} from 'recharts';
import './MarketOpportunity.css';

// Chart 1: India EV Market (2020-2030)
const chartDataFull = [
  { year: 2020, BEV: 0.5, PHEV: 0 },
  { year: 2021, BEV: 0.7, PHEV: 0 },
  { year: 2022, BEV: 1.0, PHEV: 0.1 },
  { year: 2023, BEV: 1.5, PHEV: 0.2 },
  { year: 2024, BEV: 2.8, PHEV: 0.5 },
  { year: 2025, BEV: 7.0, PHEV: 1.5 },
  { year: 2026, BEV: 12.0, PHEV: 3.0 },
  { year: 2027, BEV: 16.0, PHEV: 4.0 },
  { year: 2028, BEV: 20.0, PHEV: 5.0 },
  { year: 2029, BEV: 23.0, PHEV: 6.0 },
  { year: 2030, BEV: 26.0, PHEV: 8.0 },
];

// Chart 2: India EV Registrations (2018-2023)
const indiaEVData = [
  { year: 2018, registrations: 1.3 },
  { year: 2019, registrations: 1.66 },
  { year: 2020, registrations: 1.24 },
  { year: 2021, registrations: 3.31 },
  { year: 2022, registrations: 10.2 },
  { year: 2023, registrations: 15.29 },
];

// Chart 3: Global EV Market Size (2024-2029)
const globalMarketData = [
  { year: 2024, marketSize: 376.97 },
  { year: 2025, marketSize: 470.28 },
  { year: 2026, marketSize: 580 },
  { year: 2027, marketSize: 730 },
  { year: 2028, marketSize: 910 },
  { year: 2029, marketSize: 1089.5 },
];

// Chart 4: EV Market Penetration in India (2023-2025)
const evPenetrationData = [
  { 
    period: '2023', 
    overallMarketShare: 6.8, 
    totalSales: 1.6 
  },
  { 
    period: '2024', 
    overallMarketShare: 8.0, 
    totalSales: 2.0 
  },
  { 
    period: 'May 2025', 
    overallMarketShare: 8.5, 
    totalSales: 2.1 
  },
];

// Custom Tooltip for better mobile readability
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color || '#D4AF37' }}>
            {entry.name}: {entry.value}{entry.unit || ''}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const MarketOpportunity = () => {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState(chartDataFull);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // Update chart data based on screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 600;
      setIsMobile(mobile);
      setChartData(mobile ? chartDataFull.filter(d => d.year >= 2023) : chartDataFull);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate on scroll
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.mo-title, .mo-chart-wrapper').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mo-container">
    
        <title>Market Opportunities | Navyug Innovations</title>
     
      <h1 className="mo-title animate-on-scroll">Market Insights</h1>

      {/* Chart 1: India EV Market */}
      <div className="mo-chart-wrapper animate-on-scroll fade-in delay-0">
        <h2 className="mo-chart-title">India Electric Vehicle Market ({isMobile ? '2023–2030' : '2020–2030'})</h2>
        <p className="mo-chart-subtitle">(Size in USD Billion)</p>
        <ResponsiveContainer width="100%" height={isMobile ? 300 : 400}>
          <LineChart data={chartData} margin={{ top: 20, right: 20, left: isMobile ? 0 : 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" tick={{ fontSize: isMobile ? 14 : 13 }} />
            <YAxis
              label={{ value: 'USD Billion', angle: -90, position: 'insideLeft', fontSize: isMobile ? 14 : 13 }}
              tick={{ fontSize: isMobile ? 14 : 13 }}
            />
            <Tooltip content={<CustomTooltip />} />
            {!isMobile && <Legend verticalAlign="top" height={36} />}
            <Line type="monotone" dataKey="BEV" name="Battery Electric Vehicle" stroke="#D4AF37" strokeWidth={3} dot={{ r: isMobile ? 4 : 5 }} />
            <Line type="monotone" dataKey="PHEV" name="Plug-In Hybrid Electric Vehicle" stroke="#0074D9" strokeWidth={3} dot={{ r: isMobile ? 4 : 5 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className="mo-chart-cagr">
          <strong>CAGR (2025–2030):</strong> 40.7%
        </div>
        <div className="mo-chart-credit">Credit: Grand View Research</div>
      </div>

      {/* Chart 2: India EV Registrations */}
      <div className="mo-chart-wrapper animate-on-scroll fade-in delay-1">
        <h2 className="mo-chart-title">India Electric Vehicle Registrations (2018–2023)</h2>
        <p className="mo-chart-subtitle">(In Millions)</p>
        <ResponsiveContainer width="100%" height={isMobile ? 300 : 380}>
          <AreaChart data={indiaEVData} margin={{ top: 20, right: 20, left: isMobile ? 0 : 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" tick={{ fontSize: isMobile ? 14 : 13 }} />
            <YAxis
              label={{ value: 'Registrations (Millions)', angle: -90, position: 'insideLeft', fontSize: isMobile ? 14 : 13 }}
              tick={{ fontSize: isMobile ? 14 : 13 }}
            />
            <Tooltip content={<CustomTooltip unit="M" />} />
            <Area type="monotone" dataKey="registrations" stroke="#D4AF37" fill="#D4AF37" fillOpacity={0.6} strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
        <div className="mo-chart-credit">Credit: India's Press Information Bureau</div>
      </div>

      {/* Chart 3: Global EV Market Size */}
      <div className="mo-chart-wrapper animate-on-scroll fade-in delay-2">
        <h2 className="mo-chart-title">Global Electric Vehicle Market (2024–2029)</h2>
        <p className="mo-chart-subtitle">(Size in USD Billion)</p>
        <ResponsiveContainer width="100%" height={isMobile ? 300 : 380}>
          <BarChart data={globalMarketData} margin={{ top: 20, right: 20, left: isMobile ? 0 : 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" tick={{ fontSize: isMobile ? 14 : 13 }} />
            <YAxis
              label={{ value: 'USD Billion', angle: -90, position: 'insideLeft', fontSize: isMobile ? 14 : 13 }}
              tick={{ fontSize: isMobile ? 14 : 13 }}
            />
            <Tooltip content={<CustomTooltip unit="B" />} />
            <Bar dataKey="marketSize" fill="#D4AF37" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mo-chart-cagr">
          <strong>CAGR (2024–2029):</strong> 23.4%
        </div>
        <div className="mo-chart-credit">Credit: The Business Research Company</div>
      </div>

      {/* Chart 4: EV Market Penetration in India */}
      <div className="mo-chart-wrapper animate-on-scroll fade-in delay-3">
        <h2 className="mo-chart-title">EV Market Penetration in India (2023–2025)</h2>
        <p className="mo-chart-subtitle">(Market Share % and Sales in Millions)</p>
        <ResponsiveContainer width="100%" height={isMobile ? 300 : 380}>
          <BarChart data={evPenetrationData} margin={{ top: 20, right: 20, left: isMobile ? 0 : 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" tick={{ fontSize: isMobile ? 14 : 13 }} />
            <YAxis
              label={{ value: 'Market Share (%)', angle: -90, position: 'insideLeft', fontSize: isMobile ? 14 : 13 }}
              tick={{ fontSize: isMobile ? 14 : 13 }}
            />
            <Tooltip content={<CustomTooltip />} />
            {!isMobile && <Legend />}
            <Bar dataKey="overallMarketShare" name="Market Share (%)" fill="#D4AF37" radius={[2, 2, 0, 0]} />
            <Bar dataKey="totalSales" name="Total Sales (M)" fill="#0074D9" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mo-chart-cagr">
          <strong>Key Trend:</strong> Market share grew from 6.8% to 8.5% in 18 months
        </div>
        <div className="mo-chart-credit">Credit: FADA, JMK Research, EVReporter</div>
      </div>
    </div>
  );
};

export default MarketOpportunity;