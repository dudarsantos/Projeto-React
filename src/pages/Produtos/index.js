import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/Api';
import { Container, Card, Buttons } from './style';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';



const Produtos = () => {
    const [loading, setLoading] = useState(false);
    const [produtos, setProdutos] = useState([]);

    
    const history = useHistory();
    const minhaFuncao = (path, list)=>{
        history.push({pathname:'/'+path, state:list });
    }


    useEffect (() => {
        loadData();
    }, []);

    const loadData = () => {
        setLoading (true);

        api.get("/Product", ).then((res)=> {
            setLoading(false);

            if(res.statusText === "OK"){
                setProdutos(res.data)
            }
            else {
                alert("Nenhum produto encontrado")
            }
        });
    };
    return ( 
        loading?
       <div class="spinner"/> :

        <Container>
            
             {produtos.map((list) => {
              return(
                <Card>
                    <Buttons>
                  <button onClick={()=>{Remove(list.id)}}><MdDelete color="#e8ffff" /></button>
                  <button onClick={()=>{minhaFuncao('Editar', list)}}><MdEdit color="#e8ffff"/></button>
                    </Buttons>
                  <span> Nome: {list.name} </span>
                  <br/>
                  <span> Descricao: {list.description} </span>

                </Card>
             )
            })}   
            
        </Container>
    )

    function Remove(id) {
        api.delete (`/Product/${id}`).then((res) => {
            if(res.statusText === "OK"){
                setProdutos(res.id)
                alert("Produto deletado")
            }
        })
        }
    }


export default Produtos;