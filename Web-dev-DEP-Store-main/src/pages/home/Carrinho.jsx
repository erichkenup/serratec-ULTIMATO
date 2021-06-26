import React, { useState } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import PageHeader from 'react-bootstrap/lib/PageHeader';

const Carrinho = () => {
       
    // let [produtos, setProdutos] = useState([]);
    
    return (
        <div> 
            {/* <Header/> */}
            <Grid>
                <PageHeader>
                    <h1>DEP Store</h1> 
                    <small><em>Blusas, Camisas, Ténis, Bonés e muito mais!!</em></small>
                </PageHeader>
                <Row className="show-grid">
                <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Nome</th>
      <th scope="col">Último</th>
      <th scope="col">Preço</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                </Row>
            </Grid>
            {/* <Footer/> */}
        </div>        
    ) 
}

export default Carrinho;