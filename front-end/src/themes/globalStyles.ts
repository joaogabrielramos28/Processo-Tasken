import { createGlobalStyle } from "styled-components";
import BgImage from "../assets/background.jpg";
export default createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        text-decoration:none;
    } 


    body{
        background-image:url(${BgImage})
    }

`;
