import { createGlobalStyle } from "styled-components";
import BgImage from "../assets/background.jpg";
export default createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
    } 


    body{
        background-image:url(${BgImage})
    }

`;
