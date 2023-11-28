import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
}

body{
  font-size: 2.4;
  font-family: ${({ theme }) => theme.fonts.family.default};
}

h1, h2, h3, h4, h5, h6{
  font-family: ${({ theme }) => theme.fonts.family.default};
}
`;