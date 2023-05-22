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
        font-family: 'Noto Sans KR', sans-serif;
        /* font-size: 15px; */
        font-weight: 400;
        margin-top: ${(props) => props.theme.headerHeight};
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.fontColor};
        overflow-x: hidden;
    }    
`;

export default globalStyles;
