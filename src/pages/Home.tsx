import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { GithubOutlined, LinkedinOutlined, RedEnvelopeOutlined, SpotifyFilled, SpotifyOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const HomeContainer = styled(motion.div)`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 6rem 2rem 2rem;
  gap: 2rem;
  background: rgba(18, 18, 18, 0.6); 
  `;

const ProfileSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid var(--neon-blue);
  box-shadow: 0 0 20px var(--neon-blue);
`;

const BioSection = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--neon-blue);
  padding: 2rem;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 0 15px var(--neon-blue);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: var(--neon-blue);
  font-size: 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--neon-pink);
    transform: scale(1.1);
  }
`;

const StyledTitle = styled(Title)`
  &.ant-typography {
    color: var(--neon-blue);
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  &.ant-typography {
    color: #ffffff;
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    text-align: justify;
  }
`;

const GradientDivider = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--neon-blue) 50%,
    transparent 100%
  );
  margin: 2rem 0;
  box-shadow: 0 0 10px var(--neon-blue);
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  justify-content: center;
  width: 100%;
`;

const InfoTab = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--neon-blue);
  padding: 1.5rem;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  box-shadow: 0 0 15px rgba(41, 98, 255, 0.3);

  h3 {
    color: var(--neon-blue);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    color: white;
    margin: 0;
    font-size: 1rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProfileSection>
        <ProfileImage
          src="/public/assets/avatar.png"
          alt="Nicholas Capriotti"
          whileHover={{ scale: 1.05 }}
        />
        
        <GradientDivider />
        
        <TabsContainer>
          <InfoTab
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Experience</h3>
            <p>Backend: 2 Years</p>
            <p>Frontend: 1 Year</p>
            <p>LLMs: 3 Years</p>
            
          </InfoTab>
          <InfoTab
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Projects</h3>
            <p>20+ Completed</p>
          </InfoTab>
          <InfoTab
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Technologies</h3>
            <p>15+ Mastered</p>
          </InfoTab>
          <InfoTab
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Education</h3>
            <p>BS Software Engineering</p>
          </InfoTab>
        </TabsContainer>

        <BioSection
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <StyledTitle level={1}>Nicholas Capriotti</StyledTitle>
          <StyledParagraph>
            Hey there! I'm Nick Capriotti—a fresh-out-of-school software engineer who's equal parts code nerd, AI explorer, 
            and caffeine enthusiast. I just graduated from Embry-Riddle Aeronautical University with a BS in Software Engineering, 
            and I'm on a mission to build tools that don't just work, but matter.
          </StyledParagraph>
          <StyledParagraph>
            Whether it's slashing hallucinations in a mission-critical AI system for JPL or 
            automating my own daily blog with open-source LLMs, I'm all about creating stuff to solve the little issues that make life a little less fun.
          </StyledParagraph>
          <SocialLinks>
            <SocialLink href="https://github.com/My80vette" target="_blank">
              <GithubOutlined />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/nicholas-capriotti-5775031b9/" target="_blank">
              <LinkedinOutlined />
            </SocialLink>
            <SocialLink href="mailto:Nicholascapriotti2001@gmail.com">
              <RedEnvelopeOutlined />
            </SocialLink>
            <SocialLink href="https://open.spotify.com/user/317hxkmasz4hdzljcyevvov64zsu?si=eb023d9cf9a04106" target="_blank">
              <SpotifyFilled />
            </SocialLink>
          </SocialLinks>
        </BioSection>
      </ProfileSection>
    </HomeContainer>
  );
};

export default Home;