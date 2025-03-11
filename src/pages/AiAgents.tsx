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

//This is where we create all of our workflow objects, any workflows we want to add are added to this array of workflows
const workflows = [
  {
    id: 1,
    title: "Test Workflow 1",
    description: "This is a test workflow to verify the component is rendering correctly.",
    image: "/workflows/blogBotWorkflow.png",
    githubUrl: "https://github.com/yourusername/test-workflow"
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