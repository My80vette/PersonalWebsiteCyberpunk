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
import GlobalStyles from './styles/GlobalStyles';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  :root {
    --primary-blue: #00f3ff;
    --primary-pink: #ff00ff;
    --dark-bg: #0a0a0a;
    --card-bg: rgba(26, 26, 26, 0.8);
    --text-primary: #ffffff;
    --text-secondary: #b3b3b3;
    --border-color: rgba(0, 243, 255, 0.2);
    --hover-color: rgba(0, 243, 255, 0.1);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    color: var(--text-primary);
    overflow-x: hidden;
    background: transparent;
    line-height: 1.6;
  }

  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    font-family: 'Inter', sans-serif;
  }

  p {
    margin: 0 0 1rem;
  }

  button, input, select, textarea {
    font-family: 'Inter', sans-serif;
  }

  .ant-btn, .ant-input, .ant-select {
    font-family: 'Inter', sans-serif !important;
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
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    pointer-events: none;
  }
`;

const ContentWrapper = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 60px;
  position: relative;
  z-index: 1;
  background: transparent;
`;

// Custom theme configuration for Ant Design
const customTheme = {
  token: {
    colorPrimary: '#00f3ff',
    colorBgContainer: 'rgba(26, 26, 26, 0.8)',
    colorText: '#ffffff',
    borderRadius: 8,
    fontFamily: '"Inter", sans-serif',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
};

function App() {
  return (
    <>
      <GlobalStyles />
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
                </Routes>
              </AnimatePresence>
            </ContentWrapper>
          </AppWrapper>
        </Router>
      </ConfigProvider>
    </>
  );
}

export default App;