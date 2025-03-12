import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography, Timeline, Button } from 'antd';
import { DownloadOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ResumeContainer = styled(motion.div)`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--win95-border);
  padding: 2rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--neon-blue), var(--neon-pink));
  }

  &:hover {
    box-shadow: 0 0 20px var(--neon-blue);
  }
`;

const SectionTitle = styled(Title)`
  color: var(--neon-blue) !important;
  margin-bottom: 1.5rem !important;
  font-family: 'VT323', monospace !important;
`;

const StyledTimeline = styled(Timeline)`
  .ant-timeline-item-content {
    color: var(--neon-blue);
  }

  .ant-timeline-item-tail {
    border-left: 2px solid var(--neon-pink);
  }

  .ant-timeline-item-head {
    background: var(--neon-blue);
    border-color: var(--neon-pink);
  }
`;

const SkillTag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  margin: 4px;
  background: var(--win95-grey);
  border: 2px solid var(--win95-border);
  color: #000;
  font-family: 'VT323', monospace;
  cursor: default;

  &:hover {
    background: #000;
    color: var(--neon-blue);
    box-shadow: 0 0 10px var(--neon-blue);
  }
`;

const ContactButton = styled(Button)`
  margin: 8px;
  background: var(--win95-grey) !important;
  border: 2px solid var(--win95-border) !important;
  color: #000 !important;
  font-family: 'VT323', monospace !important;

  &:hover {
    background: #000 !important;
    color: var(--neon-blue) !important;
    box-shadow: 0 0 10px var(--neon-blue);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  h3 {
    color: var(--neon-pink);
    margin-bottom: 1rem;
    font-family: 'VT323', monospace;
  }
`;

const Resume = () => {
  const skills = {
    languages: [
      "Python", "JavaScript", "TypeScript", "Java", "C++",
      "SQL", "HTML/CSS", "Bash"
    ],
    technologies: [
      "React", "Node.js", "Docker", "AWS", "Azure",
      "PostgreSQL", "MongoDB", "Git", "REST APIs",
      "CI/CD", "Snowflake"
    ],
    aiTools: [
      "LangChain", "OpenAI API", "Ollama", "HuggingFace",
      "Azure OpenAI", "Vector Databases", "RAG Systems"
    ],
    softSkills: [
      "Project Management", "Team Leadership", "Problem Solving",
      "Communication", "Customer Service", "Time Management",
      "Documentation"
    ]
  };

  return (
    <ResumeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Section>
        <SectionTitle level={2}>Professional Summary</SectionTitle>
        <Paragraph style={{ color: 'var(--neon-blue)' }}>
          Recent Software Engineering graduate from Embry-Riddle Aeronautical University with a strong foundation in full-stack 
          development and AI/ML technologies. Experienced in developing and deploying AI-powered applications, with a focus on 
          large language models and automation solutions.
        </Paragraph>
        <div style={{ marginTop: '1rem' }}>
          <ContactButton icon={<DownloadOutlined />} href="/public/assets/Capriotti_Resume_BS.pdf" download>
            Download Resume
          </ContactButton>
          <ContactButton icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/nicholas-capriotti-5775031b9/" target="_blank">
            LinkedIn
          </ContactButton>
          <ContactButton icon={<GithubOutlined />} href="https://github.com/My80vette" target="_blank">
            GitHub
          </ContactButton>
        </div>
      </Section>

      <Section>
        <SectionTitle level={2}>Experience</SectionTitle>
        <StyledTimeline>
          <Timeline.Item>
            <Title level={4} style={{ color: 'var(--neon-blue)' }}>
              Backend Software Development Intern - CashOn
            </Title>
            <Paragraph style={{ color: 'var(--neon-pink)' }}>
              December 2024 - Janurary 2025
            </Paragraph>
            <Paragraph style={{ color: 'var(--neon-blue)' }}>
             • Architected a sophisticated TypeScript/JavaScript and PostgreSQL data management system with variable refresh rates that purged over 12,000 stale property valuations while maintaining precise timestamp integrity.<br/>
             • Engineered a persistent Chrome storage caching mechanism that tracked property data collection progress across sessions, enabling prioritization of new property acquisition before refreshing existing records.<br/>
             • Devised a dynamic filter-based fetching strategy that systematically segmented search parameters by price ranges and bedroom counts to circumvent Zillow's 500-property API limitation.<br/>
             • Implemented a robust property backlog system that preserved collection tasks during session interruptions, automatically resuming data gathering when users reopened the application.<br/>
             • Developed an intelligent task prioritization algorithm that processed map-visible properties before backlogged items and executed automatic retry mechanisms with failure tracking.<br/>
             • Established timestamp-based validation protocols between extension and backend database that ensured only fresh, non-duplicate data was transmitted, reducing unnecessary database operations.<br/>
            </Paragraph>
          </Timeline.Item>
          <Timeline.Item>
            <Title level={4} style={{ color: 'var(--neon-blue)' }}>
              DevOps Engineering Intern
            </Title>
            <Paragraph style={{ color: 'var(--neon-pink)' }}>
              May 2023 - December 2023
            </Paragraph>
            <Paragraph style={{ color: 'var(--neon-blue)' }}>
             • Restructured the SQL Server schema to accommodate new data sources, synchronizing over 30,000 customer records with minimal system downtime throughout the transition.<br/>
             • Transformed more than 30 Python ETL scripts to integrate with Snowflake, enabling seamless connections to new data sources without disrupting production data flows.<br/>
             • Collaborated with specialists from Data Ideology to reconfigure data source endpoints, maintaining operational continuity during complex infrastructure migration.<br/>
             • Implemented role-based access controls using Azure Active Directory, configuring granular permissions across multiple departments to mitigate unauthorized access risks.<br/>
             • Streamlined data synchronization processes between legacy and modern systems, ensuring consistent data availability during the migration period.<br/>
             • Documented comprehensive technical specifications for the new database architecture, facilitating knowledge transfer to other engineering teams.<br/>
            </Paragraph>
          </Timeline.Item>
          <Timeline.Item>
            <Title level={4} style={{ color: 'var(--neon-blue)' }}>
              Senior Design Capstone - JPL Sponsored RAG System
            </Title>
            <Paragraph style={{ color: 'var(--neon-pink)' }}>
              August 2023 - May 2024
            </Paragraph>
            <Paragraph style={{ color: 'var(--neon-blue)' }}>
              • Led a cross-functional team in developing an innovative Cloud-Based Retrieval Augmented Generation Platform for the Jet Propulsion Laboratory.<br/>
              • Architected an Azure-based backend solution enabling users to query Azure AI Search and receive GPT-3.5 powered responses with 72% fewer hallucinations.<br/>
              • Negotiated with JPL stakeholders to define precise system requirements and project parameters, translating complex needs into technical specifications.<br/>
              • Orchestrated the implementation of search vector databases to optimize document retrieval for mission-critical information.<br/>
              • Formulated evaluation metrics to quantify hallucination reduction compared to general-use AI systems, demonstrating significant accuracy improvements.<br/>
              • Conducted virtual training sessions and developed detailed documentation to ensure JPL engineers could deploy and utilize the platform independently.<br/>
            </Paragraph>
          </Timeline.Item>
        </StyledTimeline>
      </Section>

      <Section>
        <SectionTitle level={2}>Non-Software Professional Experience</SectionTitle>
        <StyledTimeline>
          <Timeline.Item>
            <Title level={4} style={{ color: 'var(--neon-blue)' }}>
              Guest Service Team Lead - Target
            </Title>
            <Paragraph style={{ color: 'var(--neon-pink)' }}>
              2019 - 2023
            </Paragraph>
            <Paragraph style={{ color: 'var(--neon-blue)' }}>
              • Led and mentored a team of 15+ team members, developing their customer service and operational skills<br/>
              • Managed front-end operations during peak hours, ensuring excellent customer experience and efficient operations<br/>
              • Resolved complex customer service issues while maintaining high satisfaction rates<br/>
              • Balanced academic commitments with leadership responsibilities, demonstrating strong time management
            </Paragraph>
          </Timeline.Item>
        </StyledTimeline>
      </Section>

      <Section>
        <SectionTitle level={2}>Education</SectionTitle>
        <StyledTimeline>
          <Timeline.Item>
            <Title level={4} style={{ color: 'var(--neon-blue)' }}>
              Bachelor of Science in Software Engineering - Focus in Cyber-Security
            </Title>
            <Paragraph style={{ color: 'var(--neon-pink)' }}>
              Embry-Riddle Aeronautical University • 2020 - 2024
            </Paragraph>
            <Paragraph style={{ color: 'var(--neon-blue)' }}>
              Senior Design Project: AI-Powered Code Generation Platform
            </Paragraph>
          </Timeline.Item>
        </StyledTimeline>
      </Section>

      <Section>
        <SectionTitle level={2}>Skills</SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <h3>Programming Languages</h3>
            {skills.languages.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </SkillCategory>

          <SkillCategory>
            <h3>Technologies & Tools</h3>
            {skills.technologies.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </SkillCategory>

          <SkillCategory>
            <h3>AI & ML Tools</h3>
            {skills.aiTools.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </SkillCategory>

          <SkillCategory>
            <h3>Soft Skills</h3>
            {skills.softSkills.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </SkillCategory>
        </SkillsGrid>
      </Section>
    </ResumeContainer>
  );
};

export default Resume;