import React, { useState } from 'react';
import api from '../../services/Api';
import { Container, InputFile } from './style';
// import { useHistory } from 'react-router-dom';

const NovoProduto = () => {
    const [loading, setLoading] = useState(false);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [image,setImage] = useState('');
    const [manual, setManual] = useState('');
    // const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        post();
    }

    const post = () => {
        setLoading (true);

        api.post("/Product", {name:nome, description:descricao, logo:image, }).then(res => {
            setLoading(false);
            if(res.data.id){}
        })
    }

    const loadImage = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onloadend = function(e) {
            setImage(reader.result);
        }
        reader.readAsDataURL(file);
    }

    const loadManual = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onloadend = function(e) {
            setManual(reader.result);
        }
        reader.readAsDataURL(file);
    }
    
    return ( 
        loading?
       <div class="spinner"/> :
        <Container>
            
            <h1>Cadastre seu produto</h1>

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
                    type="descricao"
                    name="descricao"
                    placeholder="Descrição"
                    value={descricao}
                    required
                    onChange={(event) => setDescricao(event.target.value)}
                />

                <label htmlFor="image"></label>
                <input 
                className={`custom-file-input input-logo ${image&&'selected'}`}
                id="image"
                    type="file"
                    accept="image/*"
                    name="image"
                    placeholder="Imagem"
                    required
                    onChange={(event) => {
                        loadImage(event);
                    }}
                /> 

                <label htmlFor="manual"></label>
                <input 
                className={`custom-file-input input-manual ${manual&&'selected'}`}
                id="manual"
                    type="file"
                    accept="application/pdf"
                    name="manual"
                    placeholder="Manual"
                    required
                    onChange={(event) => {
                        loadManual(event);
                    }}
                /> 


                <button type="submit">Cadastrar</button>
            </form> 
        </Container>
    );
};

export default NovoProduto;
