import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const carouselPhotos = [
  'Exterior2.jpg',
  'basement-1.jpg',
  'coffee.jpg',
  'corner-photo.jpg',
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
  'plant.jpg',
  'seminar-1.jpg',
  'seminar-2.jpg',
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

interface GallerySectionProps {
  initialPhoto?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ initialPhoto }) => {
  const { language } = useLanguage();

  const initialIndex = initialPhoto
    ? carouselPhotos.indexOf(initialPhoto)
    : 0;

  const [current, setCurrent] = useState(initialIndex >= 0 ? initialIndex : 0);

  const total = carouselPhotos.length;
  const prev = () => setCurrent(i => (i === 0 ? total - 1 : i - 1));
  const next = () => setCurrent(i => (i === total - 1 ? 0 : i + 1));

  const prevIdx = current === 0 ? total - 1 : current - 1;
  const nextIdx = current === total - 1 ? 0 : current + 1;

  return (
    <section id="gallery" className="container gallery-section">
      <h2>{language === 'el' ? 'Γκαλερί' : 'Gallery'}</h2>

      {/* Photo Carousel */}
      <h3>{language === 'el' ? 'Φωτογραφίες' : 'Photos'}</h3>
      <div className="carousel">
        <button className="carousel-arrow" onClick={prev} aria-label="Previous photo">&#8592;</button>

        <div className="carousel-inner">
          <div className="carousel-side" onClick={prev}>
            <img
              src={`/photos/${carouselPhotos[prevIdx]}`}
              alt="previous"
              className="carousel-thumb"
            />
          </div>

          <div className="carousel-main">
            <img
              src={`/photos/${carouselPhotos[current]}`}
              alt={carouselPhotos[current].replace(/\.[^/.]+$/, '')}
              className="carousel-featured"
            />
          </div>

          <div className="carousel-side" onClick={next}>
            <img
              src={`/photos/${carouselPhotos[nextIdx]}`}
              alt="next"
              className="carousel-thumb"
            />
          </div>
        </div>

        <button className="carousel-arrow" onClick={next} aria-label="Next photo">&#8594;</button>
      </div>
      <p className="carousel-counter">{current + 1} / {total}</p>

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
