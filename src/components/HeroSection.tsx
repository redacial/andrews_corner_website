import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
        src="/ac-video.mp4"
        aria-hidden="true"
      />
      <div className="hero-overlay" />
      <div className="hero-content container">
        <h1>{t('home.welcome')}</h1>
        <p className="tagline">{t('home.tagline')}</p>
      </div>
    </section>
  );
};

export default HeroSection;