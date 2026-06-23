import React from 'react';

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Spartis+12+Thessaloniki+54640+Greece";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          &copy; {new Date().getFullYear()} Andrew's Corner &mdash;{' '}
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="footer-address">
            Spartis 12, Thessaloniki 54640, Greece
          </a>
        </p>
        <p className="footer-links">
          <a href="https://instagram.com/andrewscorner.skg" target="_blank" rel="noreferrer" className="footer-link">
            @andrewscorner.skg
          </a>
          {' · '}
          <a href="mailto:StAndrewsCorner@gmail.com" className="footer-link">
            StAndrewsCorner@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
