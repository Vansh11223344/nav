import React, { useEffect } from 'react';
import { Settings, Tool, Cpu, Zap, BatteryCharging, Info, BarChart2 } from 'react-feather';
import './Service.css';

// Sectioned services data
const serviceSections = [
  {
    heading: 'EV Health & Maintenance Services',
    services: [
      {
        icon: <Cpu className="service-icon gold pulse" />,
        name: '🛠️ EV Diagnostics Service',
        description: 'Get a full diagnostic report of your electric vehicle, including battery, motor, controller, and performance checks.'
      },
      {
        icon: <BatteryCharging className="service-icon gold pulse" />,
        name: '🔋 Battery Health Check-Up',
        description: 'Identify battery degradation early, understand charging behaviour, and get recommendations to extend battery life.'
      },
      {
        icon: <Tool className="service-icon gold pulse" />,
        name: '⚙️ Motor & Controller Servicing',
        description: 'Professional inspection and servicing of electric motors and controllers to ensure peak performance.'
      },
      {
        icon: <Zap className="service-icon gold pulse" />,
        name: '📍 On-Demand Service Booking',
        description: 'Schedule doorstep diagnostics and minor repairs for two- and three-wheeler EVs.'
      }
    ]
  },
  {
    heading: 'Infrastructure & Deployment Support',
    services: [
      {
        icon: <Zap className="service-icon gold pulse" />,
        name: '⚡ EV Charging Station Setup',
        description: 'End-to-end setup of EV charging points for homes, businesses, or public areas—includes hardware, software, and maintenance.'
      },
      {
        icon: <BatteryCharging className="service-icon gold pulse" />,
        name: '🔁 Battery Swapping Integration',
        description: 'For fleet and swapping operators: we offer secure battery authentication, swap tracking, and hardware setup support.'
      }
    ]
  },
  {
    heading: 'Training & Skilling Services',
    services: [
      {
        icon: <Tool className="service-icon gold pulse" />,
        name: '🎓 Technician Skilling Workshops',
        description: 'Hands-on training for aspiring or existing EV mechanics—covering diagnostics, battery service, and motor repair.'
      },
      {
        icon: <Settings className="service-icon gold pulse" />,
        name: '👨‍🏫 OEM & Dealer Training Programs',
        description: 'Customized skilling modules for electric vehicle dealers, service teams, and battery partners.'
      }
    ]
  },
  {
    heading: 'Partnership & Collaboration Services',
    services: [
      {
        icon: <BarChart2 className="service-icon gold pulse" />,
        name: '📊 OEM & Fleet Solutions',
        description: 'Partner with us to integrate our diagnostics and telematics into your electric vehicles or fleet management systems.'
      },
      {
        icon: <Settings className="service-icon gold pulse" />,
        name: '🏢 Startup, NGO & Government Collaboration',
        description: 'We collaborate on clean mobility initiatives, rural tech training programs, and pilot projects across India.'
      },
      {
        icon: <Cpu className="service-icon gold pulse" />,
        name: '🧪 Pilot Projects & Custom Deployments',
        description: 'Test new deployments or integrate Navyug’s solutions into your service network—tailored to your region or use case.'
      }
    ]
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
      {serviceSections.map((section, idx) => (
        <section className="services-offered animate-on-scroll fade-in" key={section.heading}>
          <h2 className="service-section-heading">{section.heading}</h2>
          <div className="service-cards-group">
            {section.services.map((service, sidx) => (
              <div
                className={`service-card fade-in delay-${idx * 4 + sidx}`}
                key={service.name}
                role="region"
                aria-label={service.name}
              >
                {service.icon}
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
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
