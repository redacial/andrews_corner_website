import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const staff = [
  {
    file: 'Vasilea1.jpg',
    name: 'Vasilea',
    bio: 'Bio coming soon.',
  },
  {
    file: 'Mixalis.jpg',
    name: 'Mixalis',
    bio: 'Bio coming soon.',
  },
  {
    file: 'Myrto2.jpg',
    name: 'Myrto',
    bio: 'Bio coming soon.',
  },
];

const FamiliarFaces: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="familiar-faces">
      <h2 className="familiar-faces-title">
        {language === 'el' ? 'Οικεία Πρόσωπα' : 'Familiar Faces'}
      </h2>
      <div className="familiar-faces-grid">
        {staff.map(person => (
          <div key={person.name} className="face-card">
            <div className="face-img-wrap">
              <img
                src={`/photos/${person.file}`}
                alt={person.name}
                className="face-img"
              />
              <div className="face-bio-overlay">
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
