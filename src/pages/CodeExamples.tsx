import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card, Tag, Space, Typography, Image, List, Divider } from 'antd';
import { GithubOutlined, CheckCircleOutlined, CodeOutlined, BulbOutlined } from '@ant-design/icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const { Paragraph, Title } = Typography;

const ProjectsContainer = styled(motion.div)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(Card)`
  background: var(--card-bg) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: 16px !important;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  .ant-card-head {
    background: transparent;
    border-bottom: 1px solid var(--border-color);
    padding: 1.5rem;
  }

  .ant-card-head-title {
    color: var(--text-primary);
    font-size: 1.5rem;
    font-weight: 600;
  }

  .ant-card-body {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2) !important;
  }
`;

const ProjectImage = styled(Image)`
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const TechTag = styled(Tag)`
  background: var(--hover-color) !important;
  color: var(--primary-blue) !important;
  border: 1px solid var(--border-color) !important;
  padding: 4px 12px;
  margin: 4px;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 243, 255, 0.1) !important;
    border-color: var(--primary-blue) !important;
  }
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--hover-color);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  margin: 8px;

  &:hover {
    background: rgba(0, 243, 255, 0.1);
    color: var(--primary-blue);
    border-color: var(--primary-blue);
  }
`;

const FeatureList = styled(List<string>)`
  .ant-list-item {
    color: var(--text-secondary);
    padding: 8px 0;
  }
`;

const SectionTitle = styled(Title)`
  &.ant-typography {
    color: var(--primary-blue);
    margin-bottom: 1rem;
    font-size: 1.2rem !important;
  }
`;

const CodeBlock = styled(SyntaxHighlighter)`
  margin: 1rem 0;
  border-radius: 8px;
  font-family: 'Inter', monospace !important;
  font-size: 0.9rem;
`;

const ArchitectureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

const ArchitectureItem = styled.div`
  background: var(--hover-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;

  h4 {
    color: var(--primary-blue);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-secondary);
    margin: 0;
  }
`;

const ChallengeSection = styled.div`
  background: var(--hover-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;

  h4 {
    color: var(--primary-blue);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    margin: 0;
  }
`;

const SetupList = styled(List<string>)`
  .ant-list-item {
    color: var(--text-secondary);
    padding: 8px 0;
    display: flex;
    align-items: center;
    gap: 8px;
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
  },
  {
    id: 2,
    title: "MNIST Handwritten Digit Classification - Convolutional Neural Network",
    description: "This project involved the development of a Convolutional Neural Network (CNN) for handwritten digit classification using the MNIST dataset. The goal was to build a robust model capable of accurately identifying digits from 0 to 9. As the sole developer, I designed, implemented, and iteratively improved the CNN architecture using TensorFlow and Keras, achieving a final accuracy of 99%.",
    image: "/workflows/MNISTArchitecture.PNG", // Make sure this image exists in your public folder
    technicalDetails: {
      features: [
        "Developed custom CNN architecture from scratch achieving 99% accuracy",
        "Implemented multiple convolutional layers for feature extraction",
        "Utilized MaxPooling, Batch Normalization, and Dropout for optimization",
        "Integrated dynamic learning rate adjustment using ReduceLROnPlateau",
        "Conducted comprehensive performance evaluation and testing"
      ],
      architecture: {
        title: "Neural Network Architecture",
        components: [
          {
            name: "Input Layer & Preprocessing",
            description: "Handles MNIST dataset input with normalization and reshaping for optimal processing"
          },
          {
            name: "Feature Extraction Layers",
            description: "Multiple convolutional layers (32 to 512 filters) with ReLU activation for hierarchical feature detection"
          },
          {
            name: "Optimization Layers",
            description: "MaxPooling layers for dimensionality reduction, Batch Normalization for training stability, and Dropout for preventing overfitting"
          },
          {
            name: "Classification Layers",
            description: "Flattening layer followed by Dense layers (128 nodes) and final Softmax output layer for 10-class classification"
          }
        ]
      },
      implementation: "The CNN was implemented using TensorFlow and Keras, featuring a sequential model architecture. The network incorporates multiple convolutional layers with increasing filter sizes (32 to 512), MaxPooling for dimensionality reduction, and Batch Normalization for training stability. ReLU activation functions were used throughout, with a Softmax activation in the output layer for classification. The model was optimized using SGD with a 0.005 learning rate and categorical cross-entropy loss.",
      challenges: "The development process began with a basic model achieving only 10% accuracy. Through iterative improvements and extensive experimentation with network architecture, we addressed challenges including overfitting (solved with dropout and batch normalization) and optimization difficulties. Learning the intricacies of CNNs and their various layers required significant research and experimentation to achieve the final 99% accuracy."
    },
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Matplotlib",
      "CNN Architecture",
      "Deep Learning",
      "Image Classification"
    ],
    github: "https://github.com/yourusername/mnist-classification" // Replace with actual GitHub link
  },
  {
    id: 3,
    title: "Blog Generation Automation Pipeline",
    description: "A fully local, privacy-focused blog generation system that leverages AI to automate content creation while maintaining complete data control. I wanted to find a way to generate comprehensive 'blog' posts to track my daily learning without interrupting my development workflow. Built with n8n for workflow automation and Ollama for local LLM processing, this system transforms simple text inputs into comprehensive blog posts while ensuring complete data privacy and control.",
    image: "/workflows/blogBotWorkflow.png",
    technicalDetails: {
      features: [
        "100% Local Processing - All operations run locally, ensuring complete privacy and control",
        "Modular LLM Integration with Ollama - Flexible model selection for different use cases",
        "Automated Document-to-Blog Conversion with intelligent content extraction",
        "Human-in-the-Loop Refinement with regeneration capability for poor outputs",
        "Direct MongoDB Storage Management without third-party dependencies",
        "Intelligent Date Handling for consistent post management",
        "Comprehensive Quality Control System with error handling",
        "Discord-based content review and approval system"
      ],
      architecture: {
        title: "System Architecture",
        components: [
          {
            name: "Input Processing",
            description: "Monitors input folder for new text documents and triggers workflow. Handles initial document parsing and metadata extraction."
          },
          {
            name: "LLM Processing",
            description: "Uses Ollama for local LLM processing, with configurable model selection and intelligent prompt engineering for optimal content generation"
          },
          {
            name: "Storage Layer",
            description: "MongoDB integration for local content management and persistence, ensuring complete data sovereignty and efficient retrieval"
          },
          {
            name: "Review System",
            description: "Discord bot integration enabling human review, content approval, and regeneration requests for subpar outputs"
          },
          {
            name: "Workflow Automation",
            description: "n8n orchestration handling the entire pipeline from input to publication, with comprehensive error handling and recovery mechanisms"
          }
        ]
      },
      implementation: "The system is built around n8n for workflow automation, integrating Ollama for local LLM processing, MongoDB for data storage, and Discord for content review. The workflow monitors an input folder for new documents, processes them through the LLM, and stages them for review. Users can trigger content regeneration through Discord commands if the output doesn't meet quality standards. The MongoDB integration ensures all data remains under user control, while the n8n workflow can be customized to run on schedule or monitor for new inputs continuously.",
      challenges: "Key challenges included ensuring 100% local processing while maintaining performance, implementing robust error handling for LLM outputs, and creating a seamless approval workflow. The solution demonstrates that powerful content creation tools can operate entirely locally without compromising on features or usability. Initial setup complexity was addressed through comprehensive documentation and streamlined configuration processes.",
      setup: [
        "Clone the repository and install dependencies",
        "Set up n8n and import the workflow",
        "Install and run Ollama locally",
        "Set up Discord server and bot for content review",
        "Configure credentials for MongoDB, Discord, and Ollama",
        "Customize workflow timing and monitoring settings",
        "Place text documents in input folder",
        "Review and manage content through Discord interface"
      ]
    },
    technologies: [
      "n8n",
      "Ollama",
      "MongoDB",
      "Node.js",
      "Discord API",
      "LLM Integration",
      "Workflow Automation",
      "Local AI Processing"
    ],
    github: "https://github.com/My80vette/N8N_Workflows/tree/AutomatedBlogBot"
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
        <ProjectCard key={project.id}>
          <ProjectImage
            src={project.image}
            alt={project.title}
            preview={false}
          />
          
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Title level={3}>{project.title}</Title>
              <Paragraph>{project.description}</Paragraph>
            </div>

            <div>
              <SectionTitle level={4}>
                <CheckCircleOutlined /> Key Features
              </SectionTitle>
              <FeatureList
                dataSource={project.technicalDetails.features}
                renderItem={(item) => (
                  <List.Item>{item}</List.Item>
                )}
              />
            </div>

            <div>
              <SectionTitle level={4}>
                <CodeOutlined /> Architecture
              </SectionTitle>
              <ArchitectureGrid>
                {project.technicalDetails.architecture.components.map((component, index) => (
                  <ArchitectureItem key={index}>
                    <h4>{component.name}</h4>
                    <p>{component.description}</p>
                  </ArchitectureItem>
                ))}
              </ArchitectureGrid>
            </div>

            <div>
              <SectionTitle level={4}>
                <BulbOutlined /> Technologies Used
              </SectionTitle>
              <Space wrap>
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </Space>
            </div>

            {project.technicalDetails.challenges && (
              <ChallengeSection>
                <h4>Key Challenges & Solutions</h4>
                <p>{project.technicalDetails.challenges}</p>
              </ChallengeSection>
            )}

            {project.technicalDetails.setup && (
              <div>
                <SectionTitle level={4}>Setup Instructions</SectionTitle>
                <SetupList
                  dataSource={project.technicalDetails.setup}
                  renderItem={(item) => (
                    <List.Item>{item}</List.Item>
                  )}
                />
              </div>
            )}

            <LinkButton href={project.github} target="_blank">
              <GithubOutlined /> View on GitHub
            </LinkButton>
          </Space>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default CodeExamples;