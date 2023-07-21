import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`

${normalize};
body {
    font-family: 'Source Code Pro', 'Courier New', monospace;
    font-style: normal;
    color: #000000;
    min-width: 320px;
  }
`;

export default GlobalStyle;
