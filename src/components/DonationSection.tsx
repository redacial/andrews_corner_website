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
    <section className="donation-section">
      <div className="container donation-inner">
        <h2 className="donation-heading">Support Andrew's Corner</h2>
        <p className="donation-tagline">
          A one-of-a-kind library, café, and spiritual resource center in the heart of Thessaloniki — built on generosity, sustained by it.
        </p>

        <div className="donation-impact-row">
          <div className="donation-impact-card">
            <span className="impact-icon">📚</span>
            <p>30,000+ volumes available free to all visitors</p>
          </div>
          <div className="donation-impact-card">
            <span className="impact-icon">☕</span>
            <p>A gathering place for seekers across Thessaloniki</p>
          </div>
          <div className="donation-impact-card">
            <span className="impact-icon">🌍</span>
            <p>Serving the Balkan region with no state or church funding</p>
          </div>
        </div>

        <div className="donation-cta-wrap">
          <a
            href="https://givebutter.com/support-an-unique-spiritual-resource-center-in-thessaloniki-greece-3c1xfk"
            target="_blank"
            rel="noopener noreferrer"
            className="donation-btn"
          >
            Give Now
          </a>
          <p className="donation-note">Secure giving powered by GiveButter</p>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
