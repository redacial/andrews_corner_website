import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import eventsData from '../data/events.json';

const EventsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const events = (eventsData as any)[language];

  return (
    <section id="events" className="container">
      <h2>{t('events.title')}</h2>
      <div className="events-list">
        {events.map((event: any, i: number) => (
          <div key={i} className="event-card">
            <h3>{event.title}</h3>
            <p className="date">{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;