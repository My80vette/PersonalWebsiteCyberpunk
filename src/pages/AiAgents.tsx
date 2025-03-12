import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography, Image } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Title } = Typography;
//This is where we import the necessary components from the ant design library, styled-components, and framer-motion
const AgentsContainer = styled(motion.div)`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem 2rem;
  gap: 2rem;
  background: rgba(18, 18, 18, 0.6);
`;
//This is where we create a styled component for the workflow card, which will contain the title, description, image, and github link for each workflow
const WorkflowCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--neon-blue);
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 2rem;
  box-shadow: 0 0 15px rgba(41, 98, 255, 0.3);
`;
//This is where we create styled components for the workflow title, description, and github link
const WorkflowTitle = styled.h2`
  color: var(--neon-blue);
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;
//This is where we create a styled component for the workflow description
const WorkflowDescription = styled.p`
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 1rem 0;
`;
//This is where we create a styled component for the github link
const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--neon-pink);
  font-size: 1.1rem;
  text-decoration: none;
  margin-top: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Allow us to utilize separate containers for each workflow entry
const Section = styled.div`
  margin: 1.5rem 0;
`;
// Allow us to style the section title
const SectionTitle = styled.h3`
  color: var(--neon-pink);
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;
// Allow us to style the bullet list
const BulletList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  
  li {
    color: #ffffff;
    margin: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    
    &:before {
      content: "•";
      color: var(--neon-blue);
      position: absolute;
      left: 0;
    }
  }
`;

//This is where we create all of our workflow objects, any workflows we want to add are added to this array of workflows
const workflows = [
  {
    id: 1,
    title: "Blog Generation Automation Pipeline",
    description: (
      <>

        <Section>
          <SectionTitle>Key Features</SectionTitle>
          <BulletList>
            <li>100% Local Processing: No data leaves your machine. Leveraging n8n, the entire workflow operates locally, ensuring complete privacy and control.</li>
            <li>Modular LLM Integration: Seamless integration with various local LLMs, giving you the flexibility to choose the models that best suit your needs.</li>
            <li>Automated Document-to-Blog Conversion: Simply upload your documents, and the workflow automates the process of extracting content, formatting it, and generating a blog post.</li>
            <li>Human-in-the-Loop Refinement: Built-in checkpoints for human review and editing, allowing you to regenerate poor responses.</li>
            <li>Direct Storage Management: Local MongoDB integration for content management without third-party dependencies.</li>
            <li>Intelligent Date Handling: Automated date appending and formatting for consistent post management.</li>
            <li>Quality Control System: Built-in error handling and response regeneration for poor LLM outputs.</li>
          </BulletList>
        </Section>

        <Section>
          <SectionTitle>Why I Built This</SectionTitle>
          <p>
            I wanted to find a way to generate comprehensive 'blog' posts to track my daily learning. 
            However, writing blog posts gets in the way of real SWE work, so I wanted to use a bot to 
            create the post based on simple text inputs.
            I believe in empowering users to control their data and leverage the power of AI locally. 
            This project is a testament to the capabilities of open-source tools and the importance of 
            reclaiming our digital privacy. By building a completely local solution, I've demonstrated 
            that powerful content creation tools don't need to come at the cost of your data security.
          </p>
        </Section>
        <Section>
          <SectionTitle>How to use?</SectionTitle>
          <BulletList>
            <li>Clone the repository and install dependencies.</li>
            <li>Set up n8n and import the workflow.</li>
            <li>Install and run Ollama locally.</li>
            <li>Set up a Discord server and bot for content review.</li>
            <li>Configure the workflow with your credentials for MongoDB (or other storage method), Discord, and Ollama.</li>
            <li>The workflow can be altered to run at various times, or to constantly poll a folder on the disk.</li>
            <li>Place your text document in the input folder saying what you did (ex. "Utilized web hooks to connect my react site with my MongoDB Database").</li>
            <li>Review and edit the generated content as needed.</li>
            <li>Approve and reject content through the associated Discord channel</li>
          </BulletList>
        </Section>
        <Section>
          <SectionTitle>Technologies Used</SectionTitle>
          <BulletList>
            <li>n8n for workflow automation</li>
            <li>Ollama for local LLM processing</li>
            <li>MongoDB for local data storage</li>
            <li>Node.js for custom functions</li>
            <li>Discord for content approval workflow</li>
          </BulletList>
        </Section>
      </>
    ),
    image: "/workflows/blogBotWorkflow.png",
    githubUrl: "https://github.com/My80vette/N8N_Workflows/tree/AutomatedBlogBot"
  },
  {
    id: 2,
    title: "Test Workflow 2",
    description: "This is a test workflow to verify the component is rendering correctly.",
    image: "/workflows/blogBotWorkflow.png",
    githubUrl: "https://github.com/yourusername/test-workflow"
  }
];
//This is the component that will be rendered when the user navigates to the AiAgents page, 
//so our other components are nested inside of this one
const AiAgents = () => {
  return (
    <AgentsContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title level={1} style={{ color: 'var(--neon-blue)', marginBottom: '2rem' }}>
        AI Automation Workflows
      </Title>
      
      {workflows.map((workflow) => (
        <WorkflowCard
          key={workflow.id}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <WorkflowTitle>{workflow.title}</WorkflowTitle>
          <Image 
            src={workflow.image}
            alt={workflow.title}
            style={{ 
              width: '100%',
              marginBottom: '1rem',
              borderRadius: '4px'
            }}
          />
          <WorkflowDescription>{workflow.description}</WorkflowDescription>
          <GithubLink href={workflow.githubUrl} target="_blank">
            <GithubOutlined /> View on GitHub
          </GithubLink>
        </WorkflowCard>
      ))}
    </AgentsContainer>
  );
};

export default AiAgents;