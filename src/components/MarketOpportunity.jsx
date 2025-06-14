import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, AreaChart, Area, ComposedChart
} from 'recharts';
import './MarketOpportunity.css';

// Chart 1: India EV Market (2020-2030) - Your original data
const chartData = [
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

// Chart 4: NEW - EV Market Penetration in India (2023-2025)
const evPenetrationData = [
  { 
    period: '2023', 
    overallMarketShare: 6.8, 
    passengerCars: 2.0,
    twoWheelers: 5.5,
    totalSales: 1.6 
  },
  { 
    period: '2024', 
    overallMarketShare: 8.0, 
    passengerCars: 2.5,
    twoWheelers: 6.2,
    totalSales: 2.0 
  },
  { 
    period: 'May 2025', 
    overallMarketShare: 8.5, 
    passengerCars: 4.0,
    twoWheelers: 6.1,
    totalSales: 2.1 
  },
];

const MarketOpportunity = () => {
  const navigate = useNavigate();

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
      <h1 className="mo-title animate-on-scroll">Market Insights</h1>

      {/* Chart 1: India EV Market (2020-2030) */}
      <div className="mo-chart-wrapper animate-on-scroll fade-in delay-0">
        <h2 className="mo-chart-title">India Electric Vehicle Market (2020–2030)</h2>
        <p className="mo-chart-subtitle">(Size in USD Billion)</p>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData} margin={{ top: 24, right: 40, left: 0, bottom: 16 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" tick={{ fontSize: 13 }} />
            <YAxis
              label={{ value: 'USD Billion', angle: -90, position: 'insideLeft', fontSize: 13 }}
              tick={{ fontSize: 13 }}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line type="monotone" dataKey="BEV" name="Battery Electric Vehicle (BEV)" stroke="#D4AF37" strokeWidth={3} dot={{ r: 5 }} />
            <Line type="monotone" dataKey="PHEV" name="Plug-In Hybrid Electric Vehicle (PHEV)" stroke="#0074D9" strokeWidth={3} dot={{ r: 5 }} />
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
        <ResponsiveContainer width="100%" height={380}>
          <AreaChart data={indiaEVData} margin={{ top: 24, right: 40, left: 0, bottom: 16 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" tick={{ fontSize: 13 }} />
            <YAxis
              label={{ value: 'Registrations (Millions)', angle: -90, position: 'insideLeft', fontSize: 13 }}
              tick={{ fontSize: 13 }}
            />
            <Tooltip />
            <Area type="monotone" dataKey="registrations" stroke="#D4AF37" fill="#D4AF37" fillOpacity={0.6} strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
        <div className="mo-chart-credit">Credit: India's Press Information Bureau</div>
      </div>

      {/* Chart 3: Global EV Market Size */}
      <div className="mo-chart-wrapper animate-on-scroll fade-in delay-2">
        <h2 className="mo-chart-title">Global Electric Vehicle Market (2024–2029)</h2>
        <p className="mo-chart-subtitle">(Size in USD Billion)</p>
        <ResponsiveContainer width="100%" height={380}>
          <BarChart data={globalMarketData} margin={{ top: 24, right: 40, left: 0, bottom: 16 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" tick={{ fontSize: 13 }} />
            <YAxis
              label={{ value: 'USD Billion', angle: -90, position: 'insideLeft', fontSize: 13 }}
              tick={{ fontSize: 13 }}
            />
            <Tooltip />
            <Bar dataKey="marketSize" fill="#D4AF37" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mo-chart-cagr">
          <strong>CAGR (2024–2029):</strong> 23.4%
        </div>
        <div className="mo-chart-credit">Credit: The Business Research Company</div>
      </div>

      {/* Chart 4: NEW - EV Market Penetration in India */}
      <div className="mo-chart-wrapper animate-on-scroll fade-in delay-3">
        <h2 className="mo-chart-title">EV Market Penetration in India (2023–2025)</h2>
        <p className="mo-chart-subtitle">(Market Share %)</p>
        <ResponsiveContainer width="100%" height={380}>
          <ComposedChart data={evPenetrationData} margin={{ top: 24, right: 40, left: 0, bottom: 16 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" tick={{ fontSize: 13 }} />
            <YAxis
              label={{ value: 'Market Share (%)', angle: -90, position: 'insideLeft', fontSize: 13 }}
              tick={{ fontSize: 13 }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="overallMarketShare" name="Overall Market Share" fill="#D4AF37" radius={[2, 2, 0, 0]} />
            <Line type="monotone" dataKey="passengerCars" name="Passenger Cars" stroke="#0074D9" strokeWidth={3} dot={{ r: 5 }} />
            <Line type="monotone" dataKey="twoWheelers" name="Two Wheelers" stroke="#28a745" strokeWidth={3} dot={{ r: 5 }} />
          </ComposedChart>
        </ResponsiveContainer>
        <div className="mo-chart-cagr">
          <strong>Passenger Car EV Share:</strong> Doubled from 2% to 4% in 18 months
        </div>
        <div className="mo-chart-credit">Credit: FADA, JMK Research, EVReporter</div>
      </div>
    </div>
  );
};

export default MarketOpportunity;
