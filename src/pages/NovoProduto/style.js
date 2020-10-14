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
  
form{
    display: flex;
    flex-direction:column;
    align-items:center;
}

h1 {
    color: #132743;
    font-size: 3rem;
    margin-bottom: 100px;
}


button {
    display:flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 300px;
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

input {
    display: flex;
    align-items: center;
    text-align: center;
    outline: 0;
    background-color: #e8ffff;
    border: none;
    border-radius: 50px;
    height:45px;
    width: 300px;
    margin:10px;
}


input::placeholder {
    color: #132743;
    background-color: transparent;
} 

.custom-file-input {
    /* width: 350px; */
    padding: 0;
  }
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100%;
    color: #132743;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border-radius: 3px;
    cursor: pointer;
  }
  .custom-file-input:hover::before {
    color: white;
    background-color: #132743;
  }

  .input-manual::before {
    content: 'Carregar manual';
   }
   .input-logo::before {
    content: 'Carregar logo';
   }

   .selected::before{
    content: 'Arquivo selecionado';
    color: white;
    background-color: #132743;
   }

`