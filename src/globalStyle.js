import { createGlobalStyle }  from 'styled-components';

export default createGlobalStyle`
    
    *{
        padding: 0;
        
    }
    
    body{
        display:flex;
        justify-content:center;
        align-items:center;
        background: #e8ffff;
        font-family: Arial, Helvetica, sans-serif;
        color: #132743;
        font-size: 18px;
        height:100%;
    }

    html{
        height:100%;
    }
`;