import React from 'react';
import EventsSection from '../components/EventsSection';
import HoursSection from '../components/HoursSection';

const EventsPage: React.FC = () => {
  return (
    <main>
      <HoursSection />
      <EventsSection />
    </main>
  );
};

export default EventsPage;