import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import LibrarySection from './components/LibrarySection';
import RetreatSection from './components/RetreatSection';
import DonationSection from './components/DonationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/variables.css';
import './styles/App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <EventsSection />
          <LibrarySection />
          <RetreatSection />
          <DonationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
