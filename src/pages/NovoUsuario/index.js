import React, { useState } from 'react';
import api from '../../services/Api';
import { Container } from './style';
import { Link, useHistory } from 'react-router-dom';
import ovni from '../../assets/ovni.svg'

const NovoUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    function handleSubmit (event) {
        event.preventDefault();
        post();
    }

    function post() {
        api.post("/Users", {name:nome, email, password}).then(res => {
            if(res.data.id){
                history.push("/Login")
            }
            else{
                alert("Não foi possível cadastrar.")
            }
        },err => {
             alert("E-mail já existe")
        })
    }
    
    return ( 
        <Container>
            
            <h1>Registre-se</h1>
            <p>Venha fazer parte dessa galáxia</p>
            <img src={ovni} alt="ovni"/>

            <form onSubmit={handleSubmit}>
                <label htmlFor="nome"></label>
                <input
                    id="nome"
                    type="text" 
                    name="nome"
                    placeholder="Nome"
                    value={nome} 
                    required
                    onChange={(event) => setNome(event.target.value)} 
                />

                <label htmlFor="email"></label>
                <input 
                    id="email"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    required
                    onChange={(event) => setEmail(event.target.value)}
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
                /> <br/>
                <button type="submit">Enviar</button>
            </form>

            <span>Você já tem uma conta?
           <Link to="/Login">Login</Link>
            </span>
        </Container>
    );
};

export default NovoUsuario;
