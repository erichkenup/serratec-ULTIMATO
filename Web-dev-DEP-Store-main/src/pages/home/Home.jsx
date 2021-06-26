import React, { useState } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import axios from "axios";
import Table from 'react-bootstrap/lib/Table'
import { BrowserRouter, Route } from "react-router-dom";
import Botao from '../../components/carrinho/Botao';
import TrocaCor from '../../components/troca/TrocaCor';
import './Home.css'

const Home = (props) => {
       
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = React.useState([]);
    const [alerta, setAlerta] = React.useState(false);
    const [Id, setIdPedido] = React.useState(false);
    
    const addCarrinho = (produto) => {
        // axios.get(`http://localhost:8080/api/pedidos`).then(response => setIdPedido(response));
        
        // let pedidoId= {          
        //     numeroDoPedido: localStorage.getItem("_IDCLIENTE")
        // }

        // let produtosPedido = {            
        //     produtoId: [produto.id]
        // }
        // axios.post("http://localhost:8080/api/pedidos", pedidoId).then(response => {
        //     let idPedido = response.data;
            
            //momento dois
            // axios.post(`http://localhost:8080/api/pedidos/adicionarProdutos`, pedido).then(response => {
                //     setCarrinho((anterior) => [...anterior, produto]);
                //     setAlerta(true);
                // })
                setCarrinho((anterior) => [...anterior, produto]);
            //   });
        }

    React.useEffect(()=> {
        axios.get("http://localhost:8080/api/produtos").then((response)=> setProdutos(response.data));
      }, []);
      
    return (
      <TrocaCor>
        <div className="Home">     
          <Header total={carrinho.length}/>        
              <Grid>
                  <PageHeader>
                      <h1>DEP Store</h1> 
                      <small><em>Blusas, Camisas, Ténis, Bonés e muito mais!!</em></small>
                  </PageHeader>
                  <Row className="show-grid">
              {produtos.map((produto)=> (
                      <Col key= {produto.id} sm={4} className="card">
                          <code>
                              <img src={produto.linkImagem} alt={produto.descricao} width="250"/>
                              <h3>{produto.nome}</h3>
                              <h3>R$ {produto.preco}</h3>
                              <Botao className="btn btn-primary" onClick={() => addCarrinho(produto)} >Adicionar no Carrinho</Botao>
                          </code>
                      </Col>))}
                  </Row>
              </Grid>  
            <Footer/>  
          </div> 
      </TrocaCor>  
    ) 
}

export default Home;