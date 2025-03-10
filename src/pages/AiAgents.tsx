import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography, Image } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Title } = Typography;

const AgentsContainer = styled(motion.div)`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem 2rem;
  gap: 2rem;
  background: #121212;
`;

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

const WorkflowTitle = styled.h2`
  color: var(--neon-blue);
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

const WorkflowDescription = styled.p`
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 1rem 0;
`;

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

const workflows = [
  {
    id: 1,
    title: "Blog Post Generation Pipeline",
    description: "An N8N workflow that automates the process of generating blog posts using Ollama LLM. Includes content extraction, processing, and Discord integration for approval.",
    image: "/BasicChatbotWorkflow.png",
    githubUrl: "https://github.com/yourusername/workflow-repo"
  },
  // Add more workflows here
];

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
            style={{ width: '100%', marginBottom: '1rem' }}
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