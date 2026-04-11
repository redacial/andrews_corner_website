import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LibrarySection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="library" className="container">
      <h2>{t('library.title')}</h2>
      <div className="library-box">
        <p className="content-p" style={{ textAlign: 'center' }}>
          {language === 'el'
            ? 'Η βιβλιοθήκη μας διαθέτει πάνω από 30.000 τόμους.'
            : 'Our library contains over 30,000 volumes across theology, philosophy, literature, and more.'}
        </p>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-sm)' }}>
          <a href="https://ashrei.libertyasp.co.uk/library/libraryHome.do" target="_blank" rel="noreferrer" className="btn-primary">
            {language === 'el' ? 'Περιήγηση στον Κατάλογο' : 'Browse the Catalog'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;