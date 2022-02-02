import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
    } 


    body{
        background-color:${(props) => props.theme.background}
    }

`;
