import { createGlobalStyle } from 'styled-components';

const ResetStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
    body{
        position:relative;
    }
`

export default ResetStyle;