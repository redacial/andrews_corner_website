import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import eventsData from '../data/events.json';
import hoursData from '../data/hours.json';

const EventsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const events = (eventsData as any)[language];
  const hours = (hoursData as any)[language];

  return (
    <section id="events" className="container grid">
      <div className="events-box">
        <h2>{t('events.title')}</h2>
        <div className="events-list">
          {/* Events data lives in src/data/events.json — safe to update without touching this component */}
          {events.map((event: any, i: number) => (
            <div key={i} className="event-card">
              <h3>{event.title}</h3>
              <p className="date">{event.date}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hours-box">
        <h3>{language === 'el' ? 'Ωράριο' : 'Opening Hours'}</h3>
        <table className="hours-table">
          <tbody>
            {/* Hours data lives in src/data/hours.json — safe to update without touching this component */}
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

export default EventsSection;
