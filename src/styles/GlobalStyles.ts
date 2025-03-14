import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url('/your-background-image.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
  }

  /* Ensure content sits below the navbar */
  main {
    margin-top: 0;
    flex: 1;
    position: relative;
    z-index: 1;
  }
`;

export default GlobalStyles;