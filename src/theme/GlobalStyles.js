import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        font-family: 'Comic Neue', cursive;
    }
`;

export default GlobalStyles;
