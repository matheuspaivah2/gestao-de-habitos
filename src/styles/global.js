import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, figure, div, input, textarea, p, h1, h2, h3, h4, h5, h6, ul, a{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Londrina Solid', cursive;
}
:root{
        --white: #f5f5f5;
        --green: #2f5d62;
        --boldgreen: #364547;
        --yellow: #ffe268;
        --orange: #ffb037;
        --link: #faf1e6;
        --black: #0c0d0d;
        --gray: #666360;
        --red: #c53030;
    }

`;

export default GlobalStyle;
