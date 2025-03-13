import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card, Tag, Space, Typography, Image } from 'antd'; // Add Image import
import { GithubOutlined } from '@ant-design/icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const { Paragraph } = Typography;

const ProjectsContainer = styled(motion.div)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProjectCard = styled(Card)`
  background: rgba(0, 0, 0, 0.7) !important;
  border: 2px solid var(--win95-border) !important;
  
  .ant-card-head {
    background: var(--win95-grey);
    border-bottom: 2px solid var(--win95-border);
  }

  .ant-card-head-title {
    color: #000;
  }

  &:hover {
    box-shadow: 0 0 15px var(--neon-blue) !important;
  }
`;

const CodeBlock = styled(SyntaxHighlighter)`
  margin: 1rem 0;
  border-radius: 4px;
  font-family: 'VT323', monospace !important;
`;

const TechTag = styled(Tag)`
  background: var(--neon-blue) !important;
  color: #000 !important;
  border: none !important;
  padding: 4px 8px;
  margin: 4px;
  font-family: 'VT323', monospace;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--win95-grey);
  border: 2px solid var(--win95-border);
  color: #000;
  text-decoration: none;
  font-family: 'VT323', monospace;
  margin: 8px;

  &:hover {
    background: #000;
    color: var(--neon-blue);
    box-shadow: 0 0 10px var(--neon-blue);
  }
`;

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Retrieval Augmented Generation Platform for Mission Critical Operations - Sponsored by JPL",
    description: "This project culminated in the development of a sophisticated Retrieval Augmented Generation (RAG) system for the Jet Propulsion Laboratory (JPL), addressing the critical need for accurate and contextually relevant information retrieval in mission-critical operations. As the technical lead, I spearheaded the design and implementation of this system, leveraging cutting-edge Azure services and AI models.",
    image: "/workflows/CapstoneBlockDiagram.PNG",
    technicalDetails: {
      features: [
        "Achieved 72% reduction in AI hallucinations through context-aware prompting",
        "Implemented comprehensive document processing pipeline with Azure AI Search",
        "Developed vector-based semantic search using Ada embeddings",
        "Built real-time response validation system using GPT-3.5",
        "Created user-friendly interface with Python StreamLit"
      ],
      architecture: {
        title: "System Architecture and Data Flow",
        components: [
          {
            name: "Azure Blob Storage",
            description: "Primary repository for context documents and chat logs, ensuring persistent storage and efficient access to the knowledge base"
          },
          {
            name: "Document Processing Pipeline",
            description: "Transforms raw documents using Azure AI Search for indexing and vectorization, with Ada-powered embedding generation for semantic relationship capture"
          },
          {
            name: "Chat Interface",
            description: "User interaction through StreamLit-powered ChatBot that triggers the RAG process"
          },
          {
            name: "Retrieval and Contextualization",
            description: "Vectorizes user prompts via Ada Instance for similarity search within Azure AI Search index"
          },
          {
            name: "Response Generation",
            description: "Leverages GPT-3.5 Instance with retrieved context to generate grounded responses"
          }
        ]
      },
      implementation: "The system achieves a sophisticated balance between accuracy and performance through its multi-layered architecture. The integration of Azure services provides a robust foundation, while the vector-based search capabilities enable semantic understanding beyond simple keyword matching. The StreamLit interface offers an intuitive user experience, making complex technology accessible to end users.",
      challenges: "We began this project in August 2023, the term 'RAG' wasnt as widespread as it is today. I didnt understand the term fully until I had submitted my initial design. We had to learn about and implement things like embedding models, vector stores, prompt engineering, etc. I feel eternally grateful for the opportunity to work on a project like this as AI has absolutely exploded and I now feel confident in designing and working with these systems."
    },
    technologies: [
      "Azure Blob Storage",
      "Azure AI Search",
      "Vector Embeddings",
      "GPT-3.5",
      "Ada-text-embedder",
      "Python",
      "StreamLit",
      "Vector Stores"
    ],
    github: "https://github.com/ERAU-PRCOE-Capstones/CESE-NASA-JPL-IngenuityHelicopterLandingSystem-F2023"
  }
];

const CodeExamples = () => {
  return (
    <ProjectsContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          extra={
            <Space>
              <LinkButton href={project.github} target="_blank">
                <GithubOutlined /> GitHub
              </LinkButton>
            </Space>
          }
        >
          <Paragraph style={{ color: 'var(--neon-blue)' }}>
            {project.description}
          </Paragraph>
          
          <Image
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              marginBottom: '2rem',
              borderRadius: '4px',
              border: '1px solid var(--neon-blue)',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '80%' // This helps ensure the image isn't too wide while centered
            }}
          />

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--neon-blue)', marginBottom: '1rem' }}>Key Features</h3>
            <ul style={{ color: '#fff' }}>
              {project.technicalDetails.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--neon-blue)', marginBottom: '1rem' }}>System Architecture and Data Flow</h3>
            {project.technicalDetails.architecture.components.map((component, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <h4 style={{ color: 'var(--neon-blue)' }}>{component.name}</h4>
                <Paragraph style={{ color: '#fff' }}>{component.description}</Paragraph>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--neon-blue)', marginBottom: '1rem' }}>Implementation</h3>
            <Paragraph style={{ color: '#fff' }}>
              {project.technicalDetails.implementation}
            </Paragraph>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--neon-blue)', marginBottom: '1rem' }}>Challenges</h3>
            <Paragraph style={{ color: '#fff' }}>
              {project.technicalDetails.challenges}
            </Paragraph>
          </div>

          <div>
            <h3 style={{ color: 'var(--neon-blue)', marginBottom: '1rem' }}>Technologies</h3>
            {project.technologies.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default CodeExamples;