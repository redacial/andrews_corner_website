import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const carouselPhotos: { file: string; alt: string }[] = [
  { file: 'Exterior2.jpg', alt: "Exterior of Andrew's Corner in Thessaloniki" },
  { file: 'basement-1.jpg', alt: "Sinai Room downstairs event space at Andrew's Corner" },
  { file: 'coffee.jpg', alt: "Coffee served at Andrew's Corner café" },
  { file: 'corner-photo.jpg', alt: "Reading corner inside Andrew's Corner library café" },
  { file: 'front-bookshelf-1.jpg', alt: "Bookshelves at Andrew's Corner with 30,000+ volumes" },
  { file: 'front-bookshelf-2.jpg', alt: "Library collection at Andrew's Corner Thessaloniki" },
  { file: 'front-bookshelf-3.jpg', alt: "Theology and philosophy books at Andrew's Corner" },
  { file: 'front-bookshelf-4.jpg', alt: "Multi-language library collection at Andrew's Corner" },
  { file: 'front-door.jpg', alt: "Front entrance of Andrew's Corner, Spartis 12 Thessaloniki" },
  { file: 'front-door-2.jpeg', alt: "Andrew's Corner entrance on Spartis Street" },
  { file: 'front-door-3.jpeg', alt: "Exterior view of Andrew's Corner community space" },
  { file: 'front-door-4.jpg', alt: "Andrew's Corner storefront in Thessaloniki" },
  { file: 'main-room-1.jpg', alt: "Main room of Andrew's Corner library and café" },
  { file: 'main-room-2.jpg', alt: "Interior of Andrew's Corner community space" },
  { file: 'main-room-3.jpg', alt: "Library and seating area at Andrew's Corner" },
  { file: 'main-room-4.jpg', alt: "Andrew's Corner main hall with bookshelves" },
  { file: 'main-room-people.jpg', alt: "Community gathering at Andrew's Corner Thessaloniki" },
  { file: 'plant.jpg', alt: "Plants and cozy atmosphere at Andrew's Corner" },
  { file: 'seminar-1.jpg', alt: "Seminar or lecture event at Andrew's Corner" },
  { file: 'seminar-2.jpg', alt: "Academic event hosted at Andrew's Corner" },
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
    ? carouselPhotos.findIndex(p => p.file === initialPhoto)
    : 0;

  const [current, setCurrent] = useState(initialIndex >= 0 ? initialIndex : 0);

  const total = carouselPhotos.length;
  const prev = () => setCurrent(i => (i === 0 ? total - 1 : i - 1));
  const next = () => setCurrent(i => (i === total - 1 ? 0 : i + 1));

  const prevIdx = current === 0 ? total - 1 : current - 1;
  const nextIdx = current === total - 1 ? 0 : current + 1;

  return (
    <section id="gallery" className="container gallery-section">
      <div className="retreat-card">
      <h2>{language === 'el' ? 'Γκαλερί' : 'Gallery'}</h2>

      {/* Photo Carousel */}
      <h3>{language === 'el' ? 'Φωτογραφίες' : 'Photos'}</h3>
      <div className="carousel">
        <button className="carousel-arrow" onClick={prev} aria-label="Previous photo">&#8592;</button>

        <div className="carousel-inner">
          <div className="carousel-side" onClick={prev}>
            <img
              src={`/photos/${carouselPhotos[prevIdx].file}`}
              alt={carouselPhotos[prevIdx].alt}
              className="carousel-thumb"
            />
          </div>

          <div className="carousel-main">
            <img
              src={`/photos/${carouselPhotos[current].file}`}
              alt={carouselPhotos[current].alt}
              className="carousel-featured"
            />
          </div>

          <div className="carousel-side" onClick={next}>
            <img
              src={`/photos/${carouselPhotos[nextIdx].file}`}
              alt={carouselPhotos[nextIdx].alt}
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
      </div>
    </section>
  );
};

export default GallerySection;
