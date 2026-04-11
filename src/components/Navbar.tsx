import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('nav.about') },
    { path: '/library', label: t('nav.library') },
    { path: '/events', label: t('nav.events') },
    { path: '/donate', label: t('nav.donate') },
    { path: '/retreat', label: t('nav.retreat') },
  ];

  const filteredLinks = language === 'el'
    ? navLinks.filter(l => l.path !== '/retreat')
    : navLinks;

  const mobileLinks = [
    { path: '/', label: t('nav.home') },
    ...filteredLinks.filter(l => l.path !== '/'),
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">

        {/* Hamburger — mobile only */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Logo */}
        <div className="logo">
          <Link to="/">Andrew's Corner</Link>
        </div>

        {/* Desktop nav links */}
        <ul className="nav-links">
          {filteredLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language switcher */}
        <div className="lang-switcher">
          <button
            className={language === 'el' ? 'active' : ''}
            onClick={() => setLanguage('el')}
          >
            ΕΛ
          </button>
          <span>|</span>
          <button
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="mobile-menu">
          {mobileLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;