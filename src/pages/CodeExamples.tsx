import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card, Tag, Space, Typography } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const { Title, Paragraph } = Typography;

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
    title: "Neural Network Visualizer",
    description: "Interactive visualization of neural network architectures using Three.js",
    technologies: ["React", "Three.js", "TypeScript"],
    codeSnippet: `
const NeuralNetwork = () => {
  const [layers, setLayers] = useState([]);
  
  useEffect(() => {
    // Initialize 3D scene
    const scene = new THREE.Scene();
    // Add neural network visualization
    // ...
  }, []);

  return <Canvas>{/* Render network */}</Canvas>;
};`,
    github: "https://github.com/yourusername/neural-network-viz",
  },
  // Add more projects here
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
          
          <div>
            {project.technologies.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>

          <CodeBlock
            language="typescript"
            style={atomOneDark}
            customStyle={{
              padding: '20px',
              fontSize: '14px',
              background: '#1a1a1a'
            }}
          >
            {project.codeSnippet}
          </CodeBlock>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default CodeExamples; 