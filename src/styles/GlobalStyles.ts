import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --color-black-lighter: #5B575C;
  --color-purple-lighter: #D992E1;
  --color-gray-lighter: #DAD1DB;
  --color-purple-darker: #593C5C;
  --color-gray-darker: #A7A0A8;
}

html, body {
  background-color: var(--color-gray-lighter);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1, h2, h3, h4, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}

p { 
  font-family: 'Roboto', serif;
}

input {
  outline: none;
}

`;

export default GlobalStyles;
