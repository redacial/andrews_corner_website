import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import aboutData from '../data/about.json';

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const about = (aboutData as any)[language];

  return (
    <section id="about" className="container about-section">
      <h2>{about.who_title}</h2>
      {about.who_paragraphs.map((p: string, i: number) => (
        <p key={i} className="content-p">{p}</p>
      ))}

      <div className="vision-box">
        <h2>{about.why_title}</h2>
        {about.why_paragraphs.map((p: string, i: number) => (
          <p key={i} className="content-p">{p}</p>
        ))}
      </div>

      <div className="institute-box">
        <h2>{about.institute_title}</h2>
        {about.institute_paragraphs.map((p: string, i: number) => (
          <p key={i} className="content-p">{p}</p>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
