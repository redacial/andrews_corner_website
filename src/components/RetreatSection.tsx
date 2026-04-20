import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import retreatData from '../data/retreat.json';

const RetreatSection: React.FC = () => {
  const { language } = useLanguage();

  if (language === 'el') {
    return (
      <section id="retreat" className="container retreat-section">
        <div className="retreat-card">
          <h2>Υποχώρηση & Σαββατικό</h2>
          <p className="content-p">
            Το Andrew's Corner προσφέρει χώρο για υποχώρηση και σαββατικό σε μελετητές, κληρικούς και όσους αναζητούν ησυχία για μελέτη και ανάπαυση στη Θεσσαλονίκη.
          </p>
          <p className="content-p">
            Για περισσότερες πληροφορίες, επικοινωνήστε μαζί μας στο{' '}
            <a href="mailto:StAndrewsCorner@gmail.com">StAndrewsCorner@gmail.com</a>.
          </p>
        </div>
      </section>
    );
  }

  const retreat = retreatData.en;

  return (
    <section id="retreat" className="container retreat-section">
      <div className="retreat-card">
        <h2>{retreat.title}</h2>
        {retreat.paragraphs.map((p: string, i: number) => (
          <p key={i} className="content-p">{p}</p>
        ))}
      </div>
    </section>
  );
};

export default RetreatSection;
