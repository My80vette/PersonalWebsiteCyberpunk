import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from 'antd';

const PodcastContainer = styled(motion.div)`
  padding: 2rem;
  color: var(--text-primary);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  background: linear-gradient(45deg, var(--primary-blue), var(--primary-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
`;

const Description = styled.div`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
`;

const FancyButton = styled(Button)`
  background: linear-gradient(45deg, var(--primary-blue), var(--primary-pink));
  border: none;
  height: 48px;
  padding: 0 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;

const EpisodeCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);

  h3 {
    color: var(--primary-blue);
    margin-bottom: 1rem;
  }

  .episode-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const EpisodeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Podcast = () => {
  const episodes = [
    {
      id: 1,
      title: "Common Pitfalls of The Modern New-Grad",
      date: "March 15, 2024",
      description: <p>
        • This episode analyzes hiring manager concerns about new grad software developers (2022-2025) to help new graduates navigate the current job market effectively.<br/>
        • It addresses skepticism arising from factors such as the impact of AI and the effects of COVID-era hiring frenzies (which sometimes led to lowered standards).<br/>
        • The analysis aims to help new graduates understand the predispositions they may face, empowering them to overcome these challenges.<br/>
      </p>,
      link: "https://notebooklm.google.com/notebook/9a3c65de-9a10-4caf-a806-4fad283024f8/audio"
    },
    {
      id: 2,
      title: "Digital Transformation in 2024",
      date: "March 1, 2024",
      description: "Discussing the latest trends in digital transformation and how AI is driving innovation across industries.",
      link: "https://notebooklm.google.com/your-second-episode-link"
    },
    // Add more episodes as needed
  ];

  return (
    <PodcastContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Title>NotebookLM Powered Podcast</Title>
      
      <Description>
        <h2>About the Podcast</h2>
        <p>
        This is your daily dose of curated insights, powered by the fusion of deep research and cutting-edge AI. 
        Currently handcrafted using NotebookLM, each episode distills complex information into digestible audio, 
        acting as personalized newsletters. I am actively building an automated 
        pipeline to research and create these episodes seamlessly every day, as I love to listen to podcast any time
        I'm at the gym or walking my dogs.
        </p>
      </Description>

      <EpisodeGrid>
        {episodes.map((episode) => (
          <EpisodeCard
            key={episode.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{episode.title}</h3>
            <div className="episode-meta">Released: {episode.date}</div>
            <p>{episode.description}</p>
            <FancyButton
              type="primary"
              size="large"
              onClick={() => window.open(episode.link, '_blank')}
            >
              Listen to Episode
            </FancyButton>
          </EpisodeCard>
        ))}
      </EpisodeGrid>
    </PodcastContainer>
  );
};

export default Podcast;