import React from 'react';
import { Layout, Server, ShieldCheck, Wrench, BarChart } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Layout size={40} />,
      title: 'Web Development',
      description: 'Custom React applications built for speed, performance, and scalability. We design beautiful, responsive frontends backed by robust architecture.',
      features: ['Single Page Applications', 'Responsive Design', 'UI/UX Polish', 'Performance Optimization']
    },
    {
      icon: <Server size={40} />,
      title: 'IT Systems Development',
      description: 'End-to-end bespoke software systems that digitize and streamline your daily operations, reducing manual overhead.',
      features: ['Custom CRM/ERP', 'API Integrations', 'Database Design', 'Cloud Deployment']
    },
    {
      icon: <ShieldCheck size={40} />,
      title: 'IT Asset Management',
      description: 'Comprehensive platforms to track, manage, and secure your organizational IT assets from procurement to retirement.',
      features: ['Inventory Tracking', 'Lifecycle Management', 'Reporting Dashboards', 'Barcode/QR Integration']
    },
    {
      icon: <Wrench size={40} />,
      title: 'Maintenance Request Systems',
      description: 'Digital ticketing systems tailored for facility and IT maintenance, ensuring quick turnaround and accountability.',
      features: ['Ticket Workflows', 'Automated Notifications', 'Role-based Access', 'Audit Trails']
    },
    {
      icon: <BarChart size={40} />,
      title: 'Consulting & Strategy',
      description: 'Leveraging extensive experience in procurement and IT to advise on technology acquisitions, infrastructure modernization, and security.',
      features: ['Technical Audits', 'Vendor Management', 'Security Best Practices', 'Process Optimization']
    }
  ];

  return (
    <div className="services page-container animate-fade-in">
      <div className="page-header section-dark text-center">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive tech solutions tailored to your unique requirements.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                className="card service-card animate-slide-up" 
                key={index}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
