import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import retreatData from '../data/retreat.json';

const RetreatSection: React.FC = () => {
  const { language } = useLanguage();

  if (language === 'el') return null;

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
