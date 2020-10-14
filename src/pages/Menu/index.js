import React from 'react';
import { useHistory} from 'react-router-dom';
import { Container } from './style';
import rocket from '../../assets/rocket-start.svg';


const Menu = () => {


    const history = useHistory();
    const minhaFuncao = (path)=>{
        history.push('/'+path);
    }

    return (

        <Container>

            <h1>Selecione uma das opções abaixo:</h1>
            <img src={rocket} alt="foguete"/>

            <button onClick={minhaFuncao} >Cadastrar Produto</button>
            <br/>
            <button onClick={()=>{minhaFuncao('EditarProduto')}} >Lista de Produtos</button>
            
        </Container>
    )
}

export default Menu;
