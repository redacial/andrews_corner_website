import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import aboutData from '../data/about.json';
import FamiliarFaces from './FamiliarFaces';
import BibleTooltip from './BibleTooltip';

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
        {about.why_paragraphs.map((p: string, i: number) => {
          if (i === 1 && language === 'en') {
            return (
              <p key={i} className="content-p">
                In Andrew's third and final appearance, he introduces some Greeks who are seeking Jesus (<BibleTooltip reference="John 12:20" display="John 12:20" />). So, before Paul brings the Christian faith to Greece, Andrew introduces a few Greeks directly to Jesus. This meeting is so important, in John's gospel, that it is the only occasion in which God the Father speaks out loud to the world (<BibleTooltip reference="John 12:28" display="John 12:28" />). Meeting Jesus means becoming acquainted with the whole Trinity.
              </p>
            );
          }
          return <p key={i} className="content-p">{p}</p>;
        })}
      </div>

      <div className="institute-box">
        <h2>{about.institute_title}</h2>
        {about.institute_paragraphs.map((p: string, i: number) => (
          <p key={i} className="content-p">{p}</p>
        ))}
      </div>

      <FamiliarFaces />
    </section>
  );
};

export default AboutSection;
