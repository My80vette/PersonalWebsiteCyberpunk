import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Components (to be created)
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AiArt from './pages/AiArt';
import CodeExamples from './pages/CodeExamples';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import AiAgents from './pages/AiAgents';
import ProjectGraph from './components/ProjectGraph';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  
  :root {
    --neon-blue: #00f3ff;
    --neon-pink: #ff00ff;
    --dark-bg: #1a1a1a;
    --win95-grey: #c0c0c0;
    --win95-border: #dfdfdf #404040 #404040 #dfdfdf;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'VT323', monospace;
    color: var(--neon-blue);
    overflow-x: hidden;
    background: transparent; // Changed from var(--dark-bg)
  }

  * {
    box-sizing: border-box;
  }
`;

const AppWrapper = styled(motion.div)`
  min-height: 100vh;
  background-image: url('/public/assets/Background.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); // Changed from 0.7 to 0.4
    pointer-events: none;
  }
`;

const ContentWrapper = styled(motion.div)`
  padding: 20px;
  margin-top: 60px;
  position: relative;
  z-index: 1;
  background: transparent; // Added to ensure transparency
`;

// Custom theme configuration for Ant Design
const customTheme = {
  token: {
    colorPrimary: '#00f3ff',
    colorBgContainer: '#1a1a1a',
    colorText: '#00f3ff',
    borderRadius: 0,
    fontFamily: '"VT323", monospace',
  },
};

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      <Router>
        <GlobalStyle />
        <AppWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation />
          <ContentWrapper>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ai-art" element={<AiArt />} />
                <Route path="/code" element={<CodeExamples />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/ai-agents" element={<AiAgents />} />
              </Routes>
            </AnimatePresence>
          </ContentWrapper>
        </AppWrapper>
      </Router>
    </ConfigProvider>
  );
}

export default App;