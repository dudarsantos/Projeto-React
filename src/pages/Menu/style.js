import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    height: 80vh;
    width: 45vw;
    background: #70adb5;
    box-shadow: 5px 5px 5px #407088;

h1 {
    color: #132743;
    font-size: 2rem;
    margin-bottom: 50px;
}

img {
    height: 150px;
    width:150px;
    margin-bottom: 50px;
}


button {
    align-items: center;
    justify-content: center;
    height: 75px;
    width: 400px;
    cursor: pointer;
    font-size: 18px;
    color: #e8ffff;
    background: #132743;
    border-radius: 50px;
    border: none;
    box-shadow: 5px 5px 5px #407088; 
    outline-style: none;
    transition: 0.3s;
    margin:25px;
    margin-top: 10px;
}

button:hover {
    background-color: #e8ffff;
    color: #132743;
}
`