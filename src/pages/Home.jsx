import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Terminal, MonitorSmartphone } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container grid grid-cols-2">
          <div className="hero-content animate-slide-up">
            <h1 className="hero-title">
              <span className="text-accent" style={{color: '#2ecc71'}}>Data.</span> Insight. Clarity.
            </h1>
            <p className="hero-subtitle">
              Welcome to Irish Analytics. We transform complex data into actionable insights to drive your business forward.
            </p>
            <div className="hero-cta">
              <Link to="/portfolio" className="btn btn-primary">
                View Portfolio <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Hire Me
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
             <div className="hero-image-placeholder animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="mockup-window">
                  <div className="mockup-header">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="mockup-body">
                    CODE / DEVELOP / DEPLOY
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features/Highlights */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center section-header">
            <h2>Why Choose Us</h2>
            <p>Combining deep technical expertise with strategic research to deliver excellence.</p>
          </div>
          <div className="grid grid-cols-3">
            <div className="card feature-card text-center">
              <div className="feature-icon"><Code size={32} /></div>
              <h3>Web Development</h3>
              <p>Modern, responsive, and performance-optimized React applications tailored to your requirements.</p>
            </div>
            <div className="card feature-card text-center">
              <div className="feature-icon"><Terminal size={32} /></div>
              <h3>Systems Development</h3>
              <p>Custom software solutions for asset management, maintenance requests, and internal tools.</p>
            </div>
            <div className="card feature-card text-center">
              <div className="feature-icon"><MonitorSmartphone size={32} /></div>
              <h3>IT Consulting</h3>
              <p>Strategic advising drawn from diverse backgrounds in IT, procurement, research, and policing.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section section-dark text-center">
        <div className="container">
          <h2>Ready to start your next project?</h2>
          <p className="mb-2" style={{marginBottom: '2rem', color: '#94a3b8'}}>Let's discuss how we can help your business achieve its goals through technology.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
