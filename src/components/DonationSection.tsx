import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const DonationSection: React.FC = () => {
  const { language } = useLanguage();

  if (language === 'el') {
    return (
      <section className="container donation-section">
        <h2>[ Ελληνικός τίτλος εδώ ]</h2>
        <p>[ Ελληνικό κείμενο εδώ ]</p>
      </section>
    );
  }

  return (
    <section className="container donation-section">
      <h2>Support Our Work</h2>
      <p>If you'd like to support the community space, you can donate via GiveButter.</p>
      <div className="givebutter-placeholder">
        <p>GiveButter Widget / Button</p>
      </div>
    </section>
  );
};

export default DonationSection;