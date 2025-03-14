import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { GithubOutlined, LinkedinOutlined, RedEnvelopeOutlined, SpotifyFilled } from '@ant-design/icons';
const { Title, Paragraph } = Typography;

const HomeContainer = styled(motion.div)`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  gap: 3rem;
  background: transparent;
`;

const ProfileSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  width: 100%;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: center;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ProfileImage = styled(motion.img)`
  width: 250px;
  height: 250px;
  border-radius: 16px;
  border: 3px solid var(--primary-blue);
  box-shadow: 0 0 30px rgba(0, 243, 255, 0.2);
  margin-bottom: 1rem;
  object-fit: cover;
`;

const BioSection = styled(motion.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 2.5rem;
  border-radius: 16px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: var(--text-primary);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;
  background: var(--hover-color);

  &:hover {
    color: var(--primary-blue);
    transform: translateY(-2px);
    background: rgba(0, 243, 255, 0.2);
  }
`;

const StyledTitle = styled(Title)`
  &.ant-typography {
    color: var(--text-primary);
    text-align: left;
    margin-bottom: 1.5rem;
    font-size: 2.5rem !important;
    font-weight: 700 !important;
  }
`;

const StyledParagraph = styled(Paragraph)`
  &.ant-typography {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    text-align: left;
  }
`;

const GradientDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--primary-blue) 50%,
    transparent 100%
  );
  margin: 2rem 0;
  opacity: 0.3;
`;

const TabsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  width: 100%;
`;

const InfoTab = styled(motion.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 2rem;
  border-radius: 16px;
  text-align: left;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  h3 {
    color: var(--primary-blue);
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    color: var(--text-secondary);
    margin: 0.5rem 0;
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
        <TopSection>
          <ProfileContainer>
            <ProfileImage
              src="/assets/avatar.png"
              alt="Nicholas Capriotti"
              whileHover={{ scale: 1.05 }}
            />
          </ProfileContainer>
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
        </TopSection>
        
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
      </ProfileSection>
    </HomeContainer>
  );
};

export default Home;