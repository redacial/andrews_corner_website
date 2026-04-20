import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const MenuPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <main>
      <section className="container menu-section">
        <h2>{language === 'el' ? 'Μενού' : 'Menu'}</h2>
        <div className="menu-placeholder">
          <p>{language === 'el' ? 'Φωτογραφία μενού σύντομα' : 'Menu photo coming soon'}</p>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
