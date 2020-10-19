import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-items: center; 
    border-radius: 10px;
    height: 80vh;
    width: 45vw;
    background: #70adb5;
    box-shadow: 5px 5px 5px #407088;
    overflow: auto;
`

export const Card = styled.div`
    padding: 5px;
    margin: 10px;
    background: #e8ffff;
    text-decoration: none;
    color: #132743;
    width: 40%;
    height:60%;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #407088;

span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
    font-weight: bold;
    color: #132743;
}
`

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 20px;

button {
    display:flex;
    align-items: center;
    justify-content: center;
    height:25px;
    width: 25px;
    margin: 5px;
    cursor: pointer;
    background: #407088;
    border-radius: 50px;
    border: none;
    box-shadow: 2px 2px 2px #132743; 
    outline-style: none;
    transition: 0.1s;
}

button:hover {
    background-color: #132743;
}
`