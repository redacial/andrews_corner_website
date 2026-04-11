import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const videos = [
  {
    id: 'cZjNeuwfsyI',
    title: "Session 1: The Stuff We're Made Of: Philosophical Reflections on Genesis 1-11",
  },
  {
    id: 'ou6rITTRPxU',
    title: "Session 5: The Stuff We're Made Of: Philosophical Reflections on Genesis 1-11",
  },
  {
    id: 'lYWtC-PtviE',
    title: 'Just How Smart is Jesus?',
  },
  {
    id: 'RcWyTcysYMk',
    title: "A Recent Review of Soul Whisperer: Jesus' Way among the Philosophers",
  },
  {
    id: 'HLrFFJswkS0',
    title: "Parker's Pensees Interview about Jesus as Philosopher",
  },
];

const GallerySection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="gallery" className="container gallery-section">
      <h2>{language === 'el' ? 'Γκαλερί' : 'Gallery'}</h2>

      <h3>{language === 'el' ? 'Διαλέξεις' : 'Lectures'}</h3>
      <div className="video-grid">
        {videos.map(video => (
          <div key={video.id} className="video-card">
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allowFullScreen
                style={{ border: 'none' }}
              />
            </div>
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: 'var(--space-lg)' }}>
        {language === 'el' ? 'Φωτογραφίες' : 'Photos'}
      </h3>
      <div className="photos-placeholder">
        <p>{language === 'el' ? 'Φωτογραφίες σύντομα!' : 'Photos coming soon!'}</p>
      </div>
    </section>
  );
};

export default GallerySection;