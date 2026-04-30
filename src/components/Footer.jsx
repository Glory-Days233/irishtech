import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-dark">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <BarChart2 className="logo-icon" size={28} color="#2ecc71" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ lineHeight: '1', marginBottom: '2px' }}>Irish Analytics</span>
              <span style={{ fontSize: '0.55rem', fontWeight: 'bold', color: '#2ecc71', letterSpacing: '1px' }}>DATA - INSIGHT - CLARITY</span>
            </div>
          </Link>
          <p className="footer-desc">
            Empowering businesses through cutting-edge web and IT systems development.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/enochakrofiawidi/" target="_blank" rel="noreferrer" className="social-icon">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/Glory-Days233" target="_blank" rel="noreferrer" className="social-icon">
              <FaGithub size={20} />
            </a>
            <a href="mailto:enochawidi1@gmail.com" className="social-icon">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>Email: enochawidi1@gmail.com</p>
          <p>Phone: +233 548 562 598</p>
          <p>Location: Accra Adenta, Ghana</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Irish Analytics. All rights reserved. Designed by Enoch Awidi Akrofi.</p>
      </div>
    </footer>
  );
};

export default Footer;
