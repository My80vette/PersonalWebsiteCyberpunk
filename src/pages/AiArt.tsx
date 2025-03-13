import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal, Image } from 'antd';

const GalleryContainer = styled(motion.div)`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  background: rgba(18, 18, 18, 0.6);  // Changed from solid #121212 to translucent
`;

const ArtCard = styled(motion.div)`
  position: relative;
  background: rgba(0, 0, 0, 1);
  border: 2px solid var(--win95-border);
  padding: 1rem;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 20px var(--neon-pink);
    border-color: var(--neon-pink);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ArtTitle = styled.h3`
  color: var(--neon-blue);
  margin: 1rem 0;
  font-size: 1.2rem;
  text-align: center; 
`;

const ArtDescription = styled.p`
  color: var(--neon-blue);
  font-size: 1rem;
  margin: 0;
  opacity: 0.8;
`;

const ArtContainer = styled(motion.div)`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem 2rem;
  gap: 2rem;
  background: rgba(18, 18, 18, 0.6);  // Changed from solid #121212 to translucent
`;

// Sample art data - replace with your actual AI art
const artworks = [
  {
    id: 1,
    title: "Lovely - Billie Eilish (With Khalid)",
    description: "Passing the lyrics to one of my favorite songs on my coding playlist through a neural network, I created this piece. The song is 'Lovely' by Billie Eilish and Khalid and revolves around topics like mental health, vunerability, and isolation. 150 Steps, 2k Resolution, 1.0 CFG Scale. 21 Min Generation Time on my 3060Ti with a generic 100 word negative prompt running on SD 1.5.",
    image: "/art/lovely.png"
  },
  {
    id: 2,
    title: "Mother I Sober - Kendrick Lamar",
    description: "Passing lyrics of my favorite music through a neural network is an interesing process, as it can create a visual representation of the emotions and themes of the song, allowing me to compare and contrast the visuals I feel in my own head when I listen. I have always been a visual thinker, so seeing how diffusion models transfer words to visuals is a fascinating process as I feel like im learning more about myself. This piece is based on the song 'Mother I Sober' by Kendrick Lamar. 150 Steps, 2k Resolution, 1.0 CFG Scale. 21 Min Generation Time on my 3060Ti with a generic 100 word negative prompt running on SD 1.5.",
    image: "/art/motherISober.png"
  }
  // Add more artwork entries here
];

const AiArt = () => {
  const [selectedArt, setSelectedArt] = useState<number | null>(null);

  const handleArtClick = (id: number) => {
    setSelectedArt(id);
  };

  const selectedArtwork = artworks.find(art => art.id === selectedArt);

  return (
    <GalleryContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {artworks.map((art) => (
        <ArtCard
          key={art.id}
          onClick={() => handleArtClick(art.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src={art.image}
            alt={art.title}
            preview={false}
          />
          <ArtTitle>{art.title}</ArtTitle>
          <ArtDescription>{art.description}</ArtDescription>
        </ArtCard>
      ))}

      <Modal
        title={selectedArtwork?.title}
        open={selectedArt !== null}
        onCancel={() => setSelectedArt(null)}
        footer={null}
        width={800}
        style={{ 
          background: 'var(--dark-bg)',
          borderColor: 'var(--neon-blue)'
        }}
      >
        {selectedArtwork && (
          <div>
            <Image
              src={selectedArtwork.image}
              alt={selectedArtwork.title}
              style={{ width: '100%' }}
            />
            <ArtDescription style={{ marginTop: '1rem' }}>
              {selectedArtwork.description}
            </ArtDescription>
          </div>
        )}
      </Modal>
    </GalleryContainer>
  );
};

export default AiArt;