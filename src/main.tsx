import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --neon-blue: #00f3ff;
    --neon-pink: #ff00ff;
    --dark-bg: #1a1a1a;
    --win95-grey: #c0c0c0;
    --win95-border: #dfdfdf #404040 #404040 #dfdfdf;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'VT323', monospace;
    background-color: var(--dark-bg);
    color: var(--neon-blue);
    line-height: 1.5;
  }

  #root {
    min-height: 100vh;
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
) 