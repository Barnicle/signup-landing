import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after{
  box-sizing: inherit;
}
body{
  padding: 0;
  margin: 0;
  font-size: 1.6rem;
  line-height: 2;
  font-family: 'Poppins', sans-serif;
}
html, body, #__next {
    min-height: 100%;
}
input, button{
  font-family: 'Poppins', sans-serif;
  outline: none;
}

`;
export default GlobalStyle;
