import React, { useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Services", to: "/service" },
  { label: "Market", to: "/market-opportunity" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Header = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const [darkMode, setDarkMode] = React.useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menuOpen]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <header className="header">
      {/* Logo on the left side */}
      <div className="header-logo-container">
        <div className="header-logo-img">
          <img src="/images/companyimg.jpeg" alt="Company Logo" />
        </div>
      </div>

      {/* Navigation links */}
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

      {/* Dark mode toggle and Hamburger menu */}
      <div className="header-actions">
        <button
          className="dark-toggle"
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>
        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="icon-close" /> : <Menu className="icon-menu" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
