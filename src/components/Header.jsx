import React from 'react';
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
];

const Header = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="logo">NAVYUG</div>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className={location.pathname === link.to ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
};

export default Header;
