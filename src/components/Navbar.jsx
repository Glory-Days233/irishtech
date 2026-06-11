import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          {/* You can replace BarChart2 with an <img src="/path/to/logo.png" /> later */}
          <BarChart2 className="logo-icon" size={28} color="#2ecc71" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ lineHeight: '1', marginBottom: '2px' }}>Irish Analytics</span>
            <span style={{ fontSize: '0.55rem', fontWeight: 'bold', color: '#2ecc71', letterSpacing: '1px' }}>DATA - INSIGHT - CLARITY</span>
          </div>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map((link) => (
            <li className="nav-item" key={link.name}>
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'nav-links active' : 'nav-links'}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="nav-item nav-item-cta">
            <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
