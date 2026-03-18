import React from 'react';

const address = "Spartis 12, Thessaloniki 54640, Greece";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Andrew's Corner. {address}</p>
      </div>
    </footer>
  );
};

export default Footer;
