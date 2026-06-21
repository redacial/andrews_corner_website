import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import retreatData from '../data/retreat.json';

const aptPhotos = [
  { file: 'apt-1.jpg', alt: 'Bedroom with wardrobe and view to living room' },
  { file: 'apt-2.jpg', alt: 'Spacious entryway and living room with decorative niches' },
  { file: 'apt-3.jpg', alt: 'Open-plan kitchen and dining area' },
  { file: 'apt-4.jpg', alt: 'Living room and kitchen from another angle' },
  { file: 'apt-5.jpg', alt: 'Kitchen with red cabinets and dining table' },
  { file: 'apt-6.jpg', alt: 'Kitchen and dining area with fresh flowers' },
  { file: 'apt-7.jpg', alt: 'Living room with terracotta accent wall and TV area' },
  { file: 'apt-8.jpg', alt: 'Main bedroom with brick-effect accent wall' },
  { file: 'apt-9.jpg', alt: 'Second bedroom with artwork and hallway view' },
];

const RetreatSection: React.FC = () => {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + aptPhotos.length) % aptPhotos.length);
  const next = () => setCurrent(i => (i + 1) % aptPhotos.length);

  const nextIdx = (current + 1) % aptPhotos.length;

  if (language === 'el') {
    return (
      <section id="retreat" className="container retreat-section">
        <div className="retreat-card">
          <h2>Υποχώρηση & Σαββατικό</h2>
          <p className="content-p">
            Το Andrew's Corner προσφέρει χώρο για υποχώρηση και σαββατικό σε μελετητές, κληρικούς και όσους αναζητούν ησυχία για μελέτη και ανάπαυση στη Θεσσαλονίκη.
          </p>
          <p className="content-p">
            Για περισσότερες πληροφορίες, επικοινωνήστε μαζί μας στο{' '}
            <a href="mailto:StAndrewsCorner@gmail.com">StAndrewsCorner@gmail.com</a>.
          </p>
        </div>
      </section>
    );
  }

  const retreat = retreatData.en;

  return (
    <section id="retreat" className="container retreat-section">
      <div className="retreat-card">
        <h2>{retreat.title}</h2>
        {retreat.paragraphs.map((p: string, i: number) => (
          <p key={i} className="content-p">{p}</p>
        ))}
      </div>

      <h3 className="apt-gallery-title">The Apartment</h3>
      <div className="carousel">
        <button className="carousel-arrow" onClick={prev} aria-label="Previous photo">&#8592;</button>
        <div className="carousel-inner">
          <div className="carousel-main">
            <img
              src={`/photos/${aptPhotos[current].file}`}
              alt={aptPhotos[current].alt}
              className="carousel-featured"
            />
          </div>
          <div className="carousel-side" onClick={next}>
            <img
              src={`/photos/${aptPhotos[nextIdx].file}`}
              alt={aptPhotos[nextIdx].alt}
              className="carousel-thumb"
            />
          </div>
        </div>
        <button className="carousel-arrow" onClick={next} aria-label="Next photo">&#8594;</button>
      </div>
      <p className="carousel-counter">{current + 1} / {aptPhotos.length}</p>
    </section>
  );
};

export default RetreatSection;
