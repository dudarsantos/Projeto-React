import React, { useState } from 'react';
import api from '../../services/Api';
import { Container } from './style';
import user from '../../assets/astronauta-ingravity.svg';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password,setPassword] = useState('');

    function handleSubmit (event) {
        event.preventDefault();
        console.log(usuario, password);
    }

    
    return ( 
        <Container>
            <h1>Login</h1>
            <img src={user} alt="user"/>

        <form onSubmit={handleSubmit}>
            <label htmlFor="usuario"></label>
            <input
                id="usuario"
                type="text" 
                name="nome"
                placeholder="Usuário"
                value={usuario} 
                required
                onChange={(event) => setUsuario(event.target.value)} 
            />

            <label htmlFor="password"></label>
            <input 
                id="password"
                type="password"
                name="password"
                placeholder="Senha"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
            />
            <button>Entrar</button>
        </form>

        <p>Aproveite a viagem!</p>
        </Container>
    );
};

export default Login;
