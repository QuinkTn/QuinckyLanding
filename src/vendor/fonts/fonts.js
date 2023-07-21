import { createGlobalStyle } from 'styled-components';

import SourceCodeProWoff from './SourceCodePro-Regular.woff';
import SourceCodeProWoff2 from './SourceCodePro-Regular.woff2';

const GlobalFonts = createGlobalStyle`
    @font-face {
      font-family: 'Source Code Pro';
        src: local('Source Code Pro'), local('SourceCodePro'),
        url(${SourceCodeProWoff2}) format('woff2'),
        url(${SourceCodeProWoff}) format('woff');
        font-weight: 400;
        font-display: swap;
        font-style: normal;
    }
`;

export default GlobalFonts;
