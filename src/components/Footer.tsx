import React from 'react';

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Spartis+12+Thessaloniki+54640+Greece";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container" style={{ textAlign: 'center' }}>
        <p>
          &copy; {new Date().getFullYear()} Andrew's Corner &mdash;{' '}
          <a href={MAPS_URL} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
            Spartis 12, Thessaloniki 54640, Greece
          </a>
        </p>
        <p style={{ marginTop: '0.4rem', fontSize: '0.9rem' }}>
          <a href="https://instagram.com/andrewscorner.skg" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
            @andrewscorner.skg
          </a>
          {' · '}
          <a href="mailto:StAndrewsCorner@gmail.com" style={{ color: 'inherit' }}>
            StAndrewsCorner@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
