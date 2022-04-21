import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-primary: #E6E6E6;

    --table-primary: #0059BD;
    --table-shadows: rgba(65, 27, 0, 0.75);

    --boton-save: #00BD59;
  }
`;

export default GlobalStyle;
