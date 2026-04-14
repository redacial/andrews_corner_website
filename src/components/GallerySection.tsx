import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const photos = [
  'basement-1.jpg',
  'coffee.jpg',
  'corner-photo.jpg',
  'Exterior2.jpg',
  'front-bookshelf-1.jpg',
  'front-bookshelf-2.jpg',
  'front-bookshelf-3.jpg',
  'front-bookshelf-4.jpg',
  'front-door.jpg',
  'front-door-2.jpeg',
  'front-door-3.jpeg',
  'front-door-4.jpg',
  'main-room-1.jpg',
  'main-room-2.jpg',
  'main-room-3.jpg',
  'main-room-4.jpg',
  'main-room-people.jpg',
  'Mixalis.jpg',
  'Myrto1.jpg',
  'Myrto2.jpg',
  'plant.jpg',
  'seminar-1.jpg',
  'seminar-2.jpg',
  'Vasilea1.jpg',
  'Vasilea2.jpg',
];

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

const PHOTOS_PER_PAGE = 3;

const GallerySection: React.FC = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(photos.length / PHOTOS_PER_PAGE);

  const prev = () => {
    setCurrentIndex(i => (i === 0 ? totalPages - 1 : i - 1));
  };

  const next = () => {
    setCurrentIndex(i => (i === totalPages - 1 ? 0 : i + 1));
  };

  const visiblePhotos = photos.slice(
    currentIndex * PHOTOS_PER_PAGE,
    currentIndex * PHOTOS_PER_PAGE + PHOTOS_PER_PAGE
  );

  return (
    <section id="gallery" className="container gallery-section">
      <h2>{language === 'el' ? 'Γκαλερί' : 'Gallery'}</h2>

      {/* Photo Carousel */}
      <h3>{language === 'el' ? 'Φωτογραφίες' : 'Photos'}</h3>
      <div className="carousel-wrapper">
        <button className="carousel-arrow left" onClick={prev}>&#8592;</button>
        <div className="carousel-track">
          {visiblePhotos.map((photo, i) => (
            <div key={i} className="carousel-slide">
              <img
                src={`/photos/${photo}`}
                alt={photo.replace(/\.[^/.]+$/, '')}
                className="carousel-img"
              />
            </div>
          ))}
        </div>
        <button className="carousel-arrow right" onClick={next}>&#8594;</button>
      </div>
      <p className="carousel-counter">
        {currentIndex + 1} / {totalPages}
      </p>

      {/* Videos */}
      <h3 style={{ marginTop: 'var(--space-lg)' }}>
        {language === 'el' ? 'Διαλέξεις' : 'Lectures'}
      </h3>
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
    </section>
  );
};

export default GallerySection;