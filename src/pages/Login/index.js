import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/Api';
import { Container } from './style';
import user from '../../assets/astronauta-ingravity.svg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const[loading, setLoading] = useState(false);
    const history = useHistory();


    function handleSubmit (event) {
        event.preventDefault();
        post();
    }

    const post = ()=> {
        setLoading(true);

        api.post("/Sessions", {email, password}).then(res => {
            if(res.data.token){
                history.push("/Menu")
            }
            else{
                alert("Não foi possível cadastrar.")
            }
            setLoading(false)
        },err => {
            setLoading(false);
             alert("confira se seu dados estão corretos")
        })
    }
    
    return (
         loading?
        <div class="spinner"/> :
        <Container>
        
            <h1>Login</h1>
            <img src={user} alt="user" color='red'/>

        <form onSubmit={handleSubmit}>
            <input
                id="email"
                type="text" 
                name="email"
                placeholder="E-mail"
                value={email} 
                required
                onChange={(event) =>
                    {
                        console.log(event.target.value)
                        setEmail(event.target.value)

                    }} 
            />

            <input 
                id="password"
                type="password"
                name="password"
                placeholder="Senha"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Entrar</button>
        </form>

        <p>Aproveite a viagem!</p>
        </Container>
    );
};

export default Login;
