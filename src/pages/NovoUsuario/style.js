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
    margin-top: 60px;
    margin-left: 400px;
    box-shadow: 5px 5px 5px #407088;

h1 {
    color: #132743;
    font-size: 5rem;
    margin-top: 30px;
    margin-bottom: 15px;

}

p {
    display: inline-block;
    font-size: 25px;
    margin-bottom: 15px;
}

span {
    margin-bottom: 50px;
    font-size: 25px;
}


a {
    text-decoration: none;
    color: #e8ffff;
}

a:hover {
    color: #132743;
}


button {
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 300px;
    cursor: pointer;
    font-size: 18px;
    color: #e8ffff;
    background: #132743;
    border-radius: 50px;
    margin: 10px 0px 30px 20px;
    border: none;
    box-shadow: 5px 5px 5px #407088; 
    outline-style: none;
    transition: 0.3s;
}

button:hover {
    background-color: #e8ffff;
    color: #132743;
}

input {
    display: flex;
    text-align: center;
    outline: 0;
    background-color: #e8ffff;
    border: none;
    border-radius: 50px;
    height:45px;
    width: 300px;
    margin-left: 20px;
}

input::placeholder {
    color: #132743;
    background-color: transparent;
} 
`
