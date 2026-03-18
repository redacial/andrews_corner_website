import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="hero container">
      <h1>{t('home.welcome')}</h1>
      <p className="tagline">{t('home.tagline')}</p>
    </section>
  );
};

export default HeroSection;
