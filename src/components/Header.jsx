import React, { useEffect } from 'react';
import { Menu, X } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navLinks = [
  { label: "Home", to: "/" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "About Us", to: "/about" },
  { label: "Technology", to: "/technology" },
  { label: "Market", to: "/market-opportunity" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" },
  { label: "Services", to: "/service" },
];

const Header = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="logo hover-scale">NAVYUG</div>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link, index) => (
          <Link
            key={link.label}
            to={link.to}
            className={`nav-item ${location.pathname === link.to ? 'active' : ''}`}
            style={{ '--delay': `${index * 0.1}s` }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
            <span className="active-indicator"></span>
          </Link>
        ))}
      </nav>
      <button 
        className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
        onClick={toggleMenu} 
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="icon-close" /> : <Menu className="icon-menu" />}
      </button>
    </header>
  );
};

export default Header;
