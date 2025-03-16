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

const AccordionContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin: 6rem auto 2rem;
  padding: 0 2rem;
`;

const AccordionSection = styled(motion.div)`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid var(--win95-border);
  margin-bottom: 1rem;
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  cursor: pointer;
  color: var(--neon-blue);
  
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const AccordionContent = styled(motion.div)`
  padding: 0 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

// Group artworks by category
const artworkCategories = {
  "Music Inspired": [
    {
      id: 1,
      title: "Lovely - Billie Eilish (With Khalid)",
      description: "Passing the lyrics to one of my favorite songs on my coding playlist through a neural network, I created this piece. The song is 'Lovely' by Billie Eilish and Khalid and revolves around topics like mental health, vunerability, and isolation. 150 Steps, 2k Resolution, 1.0 CFG Scale. 21 Min Generation Time on my 3060Ti with a generic 100 word negative prompt running on SD 1.5.",
      image: "/art/lovely.png"
    },
    // Add more music-inspired artworks
  ],
  // Add more categories as needed
};

const AiArt = () => {
  const [selectedArt, setSelectedArt] = useState<number | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleArtClick = (id: number) => {
    setSelectedArt(id);
  };

  const handleCategoryClick = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const selectedArtwork = Object.values(artworkCategories)
    .flat()
    .find(art => art.id === selectedArt);

  return (
    <AccordionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {Object.entries(artworkCategories).map(([category, artworks]) => (
        <AccordionSection key={category}>
          <AccordionHeader onClick={() => handleCategoryClick(category)}>
            <h2>{category}</h2>
            <span>{expandedCategory === category ? '▼' : '▶'}</span>
          </AccordionHeader>
          <AnimatePresence>
            {expandedCategory === category && (
              <AccordionContent
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
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
              </AccordionContent>
            )}
          </AnimatePresence>
        </AccordionSection>
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
    </AccordionContainer>
  );
};

export default AiArt;