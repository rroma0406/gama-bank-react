import { createGlobalStyle } from "styled-components";

export const mainPurple: string = "#8c52e5";
export const mainGreen: string = "#68de5a";
export const FontDefault: string =  `font-family: 'Roboto', sans-serif;`;

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

body {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        ${FontDefault}
        background: ${mainPurple};
    }

    p {
      padding: 0;
      margin: 0;
    } 
    
    h1, h2, h3, h4, h5 {
      padding: 0;
      margin: 0;
    }

button {
  cursor: pointer;
}
`;