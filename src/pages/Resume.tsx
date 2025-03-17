import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography, Timeline, Button } from 'antd';
import { DownloadOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
// This is where we import the necessary components from the ant design library, styled-components, and framer-motion
const ResumeContainer = styled(motion.div)`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;
// This is where we create a styled component for the resume container, which will hold all the resume sections
const Section = styled.section`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }
`;
// This is where we create a styled component for the resume section, which will hold each section of the resume
const SectionTitle = styled(Title)`
  &.ant-typography {
    color: var(--primary-blue) !important;
    margin-bottom: 1.5rem !important;
    font-family: 'Inter', sans-serif !important;
  }
`;
// This is where we create a styled component for the section title, which will be used for each section of the resume
const StyledTimeline = styled(Timeline)`
  .ant-timeline-item-content {
    color: var(--text-primary);
  }

  .ant-timeline-item-tail {
    border-left: 1px solid var(--border-color);
  }

  .ant-timeline-item-head {
    background: var(--primary-blue);
    border-color: var(--primary-blue);
  }
`;
// This is where we create a styled component for the timeline, which will hold the timeline items for each section of the resume
const SkillTag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  margin: 4px;
  background: var(--hover-color);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 243, 255, 0.1);
    color: var(--primary-blue);
    border-color: var(--primary-blue);
  }
`;
// This is where we create a styled component for the skill tag, which will be used to display each skill in the skills section of the resume
const ContactButton = styled(Button)`
  margin: 8px;
  background: var(--hover-color) !important;
  border: 1px solid var(--border-color) !important;
  color: var(--text-primary) !important;
  font-family: 'Inter', sans-serif !important;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 243, 255, 0.1) !important;
    color: var(--primary-blue) !important;
    border-color: var(--primary-blue) !important;
  }
`;
// This is where we create a styled component for the contact button, which will be used for the download resume, linkedin, and github buttons
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;
// This is where we create a styled component for the skills grid, which will hold the skill categories in a grid layout
const SkillCategory = styled.div`
  h3 {
    color: var(--primary-blue);
    margin-bottom: 1rem;
    font-family: 'Inter', sans-serif;
  }
`;
// This is where we create a styled component for the skill category, which will hold the skills for each category in the skills section of the resume
const Resume = () => {
  const skills = {
    languages: [
      "Python", "JavaScript", "TypeScript", "C", "C++",
      "SQL", "HTML/CSS", 
    ],
    technologies: [
      "React", "Node.js", "Docker", "AWS", "Azure",
      "PostgreSQL", "MongoDB", "Git", "REST APIs",
      "CI/CD", "Snowflake", "Express.js", "SQL Server", "N8N"
    ],
    aiTools: [
      "OpenAI API", "Ollama", "HuggingFace",
      "Azure OpenAI", "Vector Databases", "RAG Systems"
    ],
    softSkills: [
      "Project Management", "Team Leadership", "Problem Solving",
      "Communication", "Customer Service", "Time Management",
      "Documentation", "Training"
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
        <Paragraph style={{ color: 'var(--text-primary)' }}>
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
            <Title level={4} style={{ color: 'var(--text-primary)' }}>
              Backend Software Development Intern - CashOn
            </Title>
            <Paragraph style={{ color: 'var(--text-secondary)' }}>
              September 2024 - Janurary 2025
            </Paragraph>
            <Paragraph style={{ color: 'var(--text-primary)' }}>
             • Architected a sophisticated TypeScript/JavaScript and PostgreSQL data management system with variable refresh rates that purged over 12,000 stale property valuations while maintaining precise timestamp integrity.<br/>
             • Engineered a persistent Chrome storage caching mechanism that tracked property data collection progress across sessions, enabling prioritization of new property acquisition before refreshing existing records.<br/>
             • Devised a dynamic filter-based fetching strategy that systematically segmented search parameters by price ranges and bedroom counts to circumvent Zillow's 500-property API limitation.<br/>
             • Implemented a robust property backlog system that preserved collection tasks during session interruptions, automatically resuming data gathering when users reopened the application.<br/>
             • Developed an intelligent task prioritization algorithm that processed map-visible properties before backlogged items and executed automatic retry mechanisms with failure tracking.<br/>
             • Established timestamp-based validation protocols between extension and backend database that ensured only fresh, non-duplicate data was transmitted, reducing unnecessary database operations.<br/>
            </Paragraph>
          </Timeline.Item>
          <Timeline.Item>
            <Title level={4} style={{ color: 'var(--text-primary)' }}>
              Senior Design Capstone - JPL Sponsored RAG System
            </Title>
            <Paragraph style={{ color: 'var(--text-secondary)' }}>
              August 2023 - May 2024
            </Paragraph>
            <Paragraph style={{ color: 'var(--text-primary)' }}>
              • Led a cross-functional team in developing an innovative Cloud-Based Retrieval Augmented Generation Platform for the Jet Propulsion Laboratory.<br/>
              • Architected an Azure-based backend solution enabling users to query Azure AI Search and receive GPT-3.5 powered responses with 72% fewer hallucinations.<br/>
              • Negotiated with JPL stakeholders to define precise system requirements and project parameters, translating complex needs into technical specifications.<br/>
              • Orchestrated the implementation of search vector databases to optimize document retrieval for mission-critical information.<br/>
              • Formulated evaluation metrics to quantify hallucination reduction compared to general-use AI systems, demonstrating significant accuracy improvements.<br/>
              • Conducted virtual training sessions and developed detailed documentation to ensure JPL engineers could deploy and utilize the platform independently.<br/>
            </Paragraph>
          </Timeline.Item>
          <Timeline.Item>
            <Title level={4} style={{ color: 'var(--text-primary)' }}>
              DevOps Engineering Intern
            </Title>
            <Paragraph style={{ color: 'var(--text-secondary)' }}>
              May 2023 - December 2023
            </Paragraph>
            <Paragraph style={{ color: 'var(--text-primary)' }}>
             • Restructured the SQL Server schema to accommodate new data sources, synchronizing over 30,000 customer records with minimal system downtime throughout the transition.<br/>
             • Transformed more than 30 Python ETL scripts to integrate with Snowflake, enabling seamless connections to new data sources without disrupting production data flows.<br/>
             • Collaborated with specialists from Data Ideology to reconfigure data source endpoints, maintaining operational continuity during complex infrastructure migration.<br/>
             • Implemented role-based access controls using Azure Active Directory, configuring granular permissions across multiple departments to mitigate unauthorized access risks.<br/>
             • Streamlined data synchronization processes between legacy and modern systems, ensuring consistent data availability during the migration period.<br/>
             • Documented comprehensive technical specifications for the new database architecture, facilitating knowledge transfer to other engineering teams.<br/>
            </Paragraph>
          </Timeline.Item>
        </StyledTimeline>
      </Section>

      <Section>
        <SectionTitle level={2}>Non-Software Professional Experience</SectionTitle>
        <StyledTimeline>
          <Timeline.Item>
            <Title level={4} style={{ color: 'var(--text-primary)' }}>
              Kitchen Manager - Chipotle
            </Title>
            <Paragraph style={{ color: 'var(--text-secondary)' }}>
              2022 - 2023
            </Paragraph>
            <Paragraph style={{ color: 'var(--text-primary)' }}>
              • Directed high-efficiency kitchen operations, optimizing inventory management and production schedules to ensure peak operational performance.<br/>
              • Applied advanced analytical techniques to forecast sales trends and refine ordering strategies, minimizing waste and maximizing profitability.<br/>
              • Demonstrated exceptional time management and organizational prowess, seamlessly balancing demanding academic pursuits with high-pressure managerial responsibilities.<br/>
              • Implemented process improvements within kitchen operations that resulted in increased speed of service, and customer satisfaction.<br/>
            </Paragraph>
          </Timeline.Item>
          <Timeline.Item>
            <Title level={4} style={{ color: 'var(--text-primary)' }}>
              Team Trainer - Taco Bell
            </Title>
            <Paragraph style={{ color: 'var(--text-secondary)' }}>
              2021 - 2022
            </Paragraph>
            <Paragraph style={{ color: 'var(--text-primary)' }}>
              • Spearheaded the onboarding and development of new team members, cultivating a highly skilled and efficient workforce within a fast-paced environment.<br/>
              • Implemented innovative training modules that significantly enhanced team performance and operational proficiency, leading to measurable improvements in service speed and accuracy.<br/>
              • Served as a key mentor and performance coach, fostering a collaborative team culture and driving consistent achievement of performance metrics.<br/>
              • Mastered and executed advanced operational protocols, ensuring seamless execution of daily tasks and maintaining consistently high standards of quality and customer satisfaction.<br/>
            </Paragraph>
          </Timeline.Item>
          <Timeline.Item>
            <Title level={4} style={{ color: 'var(--text-primary)' }}>
              Head Shift Lead - Dairy Queen
            </Title>
            <Paragraph style={{ color: 'var(--text-secondary)' }}>
              2018 - 2021
            </Paragraph>
            <Paragraph style={{ color: 'var(--text-primary)' }}>
              • Orchestrated high-performance teams in a dynamic, high-volume environment, consistently exceeding operational targets.<br/>
              • Cultivated a culture of seamless communication and proactive conflict resolution, resulting in enhanced customer satisfaction and team cohesion.<br/>
              • Mastered advanced team leadership strategies, implementing innovative training protocols that significantly boosted interpersonal effectiveness.<br/>
              • Proactively analyzed and optimized workflow processes, leading to measurable improvements in efficiency and customer throughput.<br/>
            </Paragraph>
          </Timeline.Item>
          <Timeline.Item>
            <Title level={4} style={{ color: 'var(--text-primary)' }}>
              Car Detailing
            </Title>
            <Paragraph style={{ color: 'var(--text-secondary)' }}>
              2018 - Present
            </Paragraph>
            <Paragraph style={{ color: 'var(--text-primary)' }}>
              • Established and managed a thriving entrepreneurial venture, demonstrating exceptional business acumen and client acquisition skills.<br/>
              • Forged strong client relationships through expert negotiation and personalized service, consistently exceeding expectations and fostering repeat business.<br/>
              • Implemented sophisticated financial management systems, accurately tracking revenue, expenses, and profitability to drive strategic growth.<br/>
              • Leveraged cutting-edge digital marketing strategies, including a custom-designed website, to exponentially expand client reach and market penetration.<br/>
            </Paragraph>
          </Timeline.Item>
        </StyledTimeline>
      </Section>

      <Section>
        <SectionTitle level={2}>Education</SectionTitle>
        <StyledTimeline>
          <Timeline.Item>
            <Title level={4} style={{ color: 'var(--text-primary)' }}>
              Bachelor of Science in Software Engineering - Focus in Cyber-Security
            </Title>
            <Paragraph style={{ color: 'var(--text-secondary)' }}>
              Embry-Riddle Aeronautical University • 2020 - 2024
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
            <h3>AI & Machine Learning</h3>
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