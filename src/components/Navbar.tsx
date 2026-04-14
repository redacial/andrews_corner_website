import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();
  const moreRef = useRef<HTMLLIElement>(null);
  const navigate = useNavigate();

  const mainLinks = [
    { path: '/', label: t('nav.about') },
    { path: '/library', label: t('nav.library') },
    { path: '/events', label: t('nav.events') },
    { path: '/gallery', label: t('nav.gallery') },
  ];

  const moreLinks = language === 'el'
    ? [{ path: '/donate', label: t('nav.donate') }]
    : [
        { path: '/donate', label: t('nav.donate') },
        { path: '/retreat', label: t('nav.retreat') },
      ];

  const mobileLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/library', label: t('nav.library') },
    { path: '/events', label: t('nav.events') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/donate', label: t('nav.donate') },
    ...(language === 'el' ? [] : [{ path: '/retreat', label: t('nav.retreat') }]),
  ];

  // Close "More" dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close "More" dropdown on route change
  useEffect(() => {
    setMoreOpen(false);
  }, [location.pathname]);

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
          <Link to="/">
            <img src="/src/assets/logo.png" alt="Andrew's Corner" className="logo-img" />
          </Link>
        </div>

        {/* Desktop nav links */}
        <ul className="nav-links">
          {mainLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* More dropdown */}
          <li className="more-dropdown" ref={moreRef}>
            <button
              className={`more-btn ${moreLinks.some(l => l.path === location.pathname) ? 'active' : ''}`}
              onClick={() => setMoreOpen(!moreOpen)}
            >
              {t('nav.more')} <span style={{ fontSize: '0.7rem', verticalAlign: 'middle' }}>▼</span>
            </button>
            {moreOpen && (
              <ul className="more-menu">
                {moreLinks.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={location.pathname === link.path ? 'active' : ''}
                      onClick={() => setMoreOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <div className="lang-switcher">
          <button
            className={language === 'el' ? 'active' : ''}
            onClick={() => { setLanguage('el'); navigate('/'); }}
          >
            ΕΛ
          </button>
          <span>|</span>
          <button
            className={language === 'en' ? 'active' : ''}
            onClick={() => { setLanguage('en'); navigate('/'); }}
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