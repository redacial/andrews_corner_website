import React from 'react';
import { useSearchParams } from 'react-router-dom';
import GallerySection from '../components/GallerySection';

const GalleryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const photo = searchParams.get('photo') || undefined;

  return (
    <main>
      <GallerySection initialPhoto={photo} />
    </main>
  );
};

export default GalleryPage;
