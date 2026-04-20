import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const OurStoryPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <main>
      <section className="container our-story-section">
        <h2>{language === 'el' ? 'Η Ιστορία μας' : 'Our Story'}</h2>

        <div className="our-story-card">
          <div className="our-story-photo-wrap">
            <div className="our-story-photo-placeholder">
              <p>{language === 'el' ? 'Φωτογραφία σύντομα' : 'Photo coming soon'}</p>
            </div>
          </div>

          <div className="our-story-bio">
            <h3>{language === 'el' ? 'Daniel & Karly' : 'Daniel & Karly'}</h3>
            <p className="content-p">
              {language === 'el'
                ? '[ Ελληνική βιογραφία εδώ ]'
                : 'Bio coming soon. The owners will provide their story here.'}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurStoryPage;
