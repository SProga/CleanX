import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --ctaColor:#1CFFF1;
    --primaryText:#1C0F68;
    --text-color-bright:#FFFFFF;
    --text-color-primary:#696969;
    --text-color-secondary:#ECF7FA;
    --primary-color:#057871;
    --secondary-color:#0188C2;
    --secondary-color-lighter:#0089d7;
    --max-width:140rem;
    --display-font:'Righteous';
    //font-sizes 
    --mobile-heading:2.4rem;
    --paragraph-text:1.8;

}
*,
*::after,
*::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
}

body,
html {
    height: 100%;
}
html {
    font-size: 62.5%;
    font-family:"Poppins",sans-serif;
}

body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

ul li {
    list-style-type: none;
}
`;

export default GlobalStyles;
