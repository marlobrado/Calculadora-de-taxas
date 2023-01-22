import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`
body, html{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Source Sans Pro';
}
.mainApp{
    background-color: #FFFFFF;
    display: flex;
    width: 608px;
    height: 350px;
    align-items: center;
    justify-content: space-around;
    font-size: calc(10px + 2vmin);
    border: 1px solid #D1DCE3;
    border-radius: 4px;
}
`