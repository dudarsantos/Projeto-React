import React, { useState } from 'react';
import api from '../../services/Api';
import { Container } from './style';
import { Link, useHistory } from 'react-router-dom';


const Editar = (props) => {
    const [loading, setLoading] = useState(false);
    const [nome, setNome] = useState(props.location.state.name);
    const [descricao, setDescricao] = useState(props.location.state.description);

    const handleSubmit = (event) => {
        event.preventDefault();
        Edit(props.location.state.id);
    }

    const history = useHistory();

    
    const Edit = (id) => {
        setLoading (true);

        api.put(`/Product/${id}`, {name:nome, description:descricao }).then(function(res) {
            setLoading(false);
            if(res.data.id){
                history.push("/Produtos")
            }
            else{
                alert("Não foi possível editar o produto")
            }
        })
    }

    
    return ( 
        loading?
       <div class="spinner"/> :

        <Container>
            
            <h1>Editar produto</h1>

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

                <label htmlFor="descrição"></label>
                <input 
                    id="descrição"
                    type="text"
                    name="descricao"
                    placeholder="Descrição"
                    value={descricao}
                    required
                    onChange={(event) => setDescricao(event.target.value)}
                />

                <label htmlFor="image"></label>
                {/* <input 
                className={`custom-file-input input-logo ${image&&'selected'}`}
                id="image"
                    type="file"
                    accept="image/*"
                    name="image"
                    placeholder="Imagem"
                    required
                />  */}

                <label htmlFor="manual"></label>
                {/* <input 
                className={`custom-file-input input-manual ${manual&&'selected'}`}
                id="manual"
                    type="file"
                    accept="application/pdf"
                    name="manual"
                    placeholder="Manual"
                    required
                />  */}


                <button type="submit">Salvar</button>
            </form> 
            <Link to="/Produtos">Voltar</Link>
        </Container>
    );
};

export default Editar;