import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import Login from './pages/login/Login';
import Cadastro from './pages/login/Cadastro'
import Carrinho from './pages/home/Carrinho'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
        <Route path="/cadastrar" exact component={Cadastro} />
        <Route path="/carrinho" exact component={Carrinho}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);