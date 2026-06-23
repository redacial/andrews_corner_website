import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import hoursData from '../data/hours.json';

const HoursSection: React.FC = () => {
  const { language } = useLanguage();
  const hours = (hoursData as any)[language];

  return (
    <section id="hours" className="container hours-section">
      <h2>{language === 'el' ? 'Ωράριο' : 'Opening Hours'}</h2>
      <div className="hours-box">
        <table className="hours-table">
          <tbody>
            {hours.map((row: any, i: number) => (
              <tr key={i}>
                <td>{row.day}</td>
                <td>{row.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HoursSection;