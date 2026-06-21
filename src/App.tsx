import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GalleryPage from './pages/GalleryPage';

// Homepage sections
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';

// Pages
import EventsPage from './pages/EventsPage';
import LibraryPage from './pages/LibraryPage';
import RetreatPage from './pages/RetreatPage';
import DonatePage from './pages/DonatePage';
import OurStoryPage from './pages/OurStoryPage';

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

function GreekComingSoon() {
  return (
    <main className="greek-coming-soon">
      <div className="greek-coming-soon-inner">
        <h2>Ελληνική έκδοση — Έρχεται σύντομα</h2>
        <p>Greek version coming soon.</p>
        <p>
          Για πληροφορίες επικοινωνήστε μαζί μας:{' '}
          <a href="mailto:StAndrewsCorner@gmail.com">StAndrewsCorner@gmail.com</a>
        </p>
      </div>
    </main>
  );
}

function AppRoutes() {
  const { language } = useLanguage();

  if (language === 'el') {
    return <GreekComingSoon />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/retreat" element={<RetreatPage />} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/our-story" element={<OurStoryPage />} />
    </Routes>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
