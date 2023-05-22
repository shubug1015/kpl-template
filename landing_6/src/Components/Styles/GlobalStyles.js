import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Jua', sans-serif;
        /* font-size: 15px; */
        font-weight: 100;
        padding-top: ${(props) => props.theme.headerHeight};
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.fontColor};
    }    
`;

export default globalStyles;
