import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GalleryPage from './pages/GalleryPage'; 


// Homepage sections
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HoursSection from './components/HoursSection';
import ContactSection from './components/ContactSection';

// Pages
import EventsPage from './pages/EventsPage';
import LibraryPage from './pages/LibraryPage';
import RetreatPage from './pages/RetreatPage';
import DonatePage from './pages/DonatePage';
import FAQSection from './components/FAQSection';

import './styles/variables.css';
import './styles/App.css';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/retreat" element={<RetreatPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;