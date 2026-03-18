import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LibrarySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="library" className="container">
      <h2>{t('library.title')}</h2>
      <div className="library-box">
        <div className="iframe-container">
          <div className="iframe-placeholder">
            <p>Library Catalog Embedded Here (30,000+ volumes)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;
