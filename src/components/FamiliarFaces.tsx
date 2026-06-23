import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const staff = [
  {
    file: 'Daniel_Karly.jpg',
    name: 'Daniel & Karly',
    bio: 'Founding directors of Andrew\'s Corner. Bio coming soon.',
  },
  {
    file: 'Vasilea1.jpg',
    name: 'Vasilea',
    bio: 'Bio coming soon.',
  },
  {
    file: 'Myrto2.jpg',
    name: 'Myrto',
    bio: 'Bio coming soon.',
  },
  {
    file: 'Mixalis.jpg',
    name: 'Mixalis',
    bio: 'Bio coming soon.',
  },
];

const FamiliarFaces: React.FC = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="familiar-faces">
      <h2 className="familiar-faces-title">
        {language === 'el' ? 'Οικεία Πρόσωπα' : 'Familiar Faces'}
      </h2>
      <div className="familiar-faces-grid">
        {staff.map((person, i) => (
          <div
            key={person.name}
            className="face-card"
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          >
            <div className="face-img-wrap">
              <img
                src={`/photos/${person.file}`}
                alt={person.name}
                className="face-img"
              />
              <div
                className="face-bio-overlay"
                style={activeIndex === i ? { opacity: 1, transform: 'translateY(0)' } : undefined}
              >
                <p>{person.bio}</p>
              </div>
            </div>
            <p className="face-name">{person.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamiliarFaces;
