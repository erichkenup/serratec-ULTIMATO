import React, {useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom'
import Form  from 'react-bootstrap/lib/Form'
import FormGroup  from 'react-bootstrap/lib/FormGroup'
import Col  from 'react-bootstrap/lib/Col'
import ControlLabel  from 'react-bootstrap/lib/ControlLabel'
import FormControl  from 'react-bootstrap/lib/FormControl'
import Button  from 'react-bootstrap/lib/Button'
import Header from "../../components/header/Header"

const Login = () => { // EM CONSTRUÇÃO
  
    const [username, setUsarname] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState(localStorage.getItem("_NOME"));
    const [token, setToken] = useState(localStorage.getItem("_TOKEN"));
    const [idCliente, setIdCliente] = useState([0]);
    const history = useHistory()
    
    function handleLogin(e) {
        e.preventDefault();
        
        if(username.trim() === '') {
            return;
        }
        if(senha.trim() === '') {
          return;
        }

        const login = {
            username:username,
            senha:senha
        }    
        
        axios.post("http://localhost:8080/api/login", login ).then(
          (response) => {
            localStorage.setItem("_TOKEN", response.data.token);
            localStorage.setItem("_NOME", response.data.usuario.nome); 
            setNome(response.data.usuario.nome);
            setToken(response.data.token);
            localStorage.setItem("_IDCLIENTE", response.data.usuario.id )
            console.log(token)
            history.push(`/`)                             
          }
        )

        console.log(token);
          if(token!=""){
            let logado = true
          }         
    } 

    function handlerCadastrar() {
      history.push(`/cadastro`)
    }

    function handlerLogout(){
      localStorage.setItem("_TOKEN","");
      localStorage.setItem("_NOME","");
      localStorage.setItem("_IDCLIENTE","") 
      history.push(`/`)
    }

    return (
        <div className="Login">
            {/* <form onSubmit={handleLogin}>
                    <input 
                        type="text"
                        placeholder="Informe seu usuario"
                        value={username}
                        onChange={e => setUsarname(e.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder="Informe sua senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    
                    <button type="submit">
                        Login
                    </button>
                    <button type="submit" onClick={handlerCadastrar}>
                        Cadastro
                    </button>
                </form> */}
          <Form horizontal onSubmit={handleLogin}>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={5}>
                Email
              </Col>
              <Col sm={4}>
                <FormControl type="text" placeholder="username" value={username} onChange={e => setUsarname(e.target.value)}  />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={5}>
                Password
              </Col>
              <Col sm={4}>
                <FormControl type="password" placeholder="Password" value={senha} onChange={e => setSenha(e.target.value)}/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col  smOffset={2} sm={10}>
                <Button type="submit">Logar</Button>
              </Col>
            </FormGroup>
            <FormGroup >
              <Col smOffset={2} sm={10}>
                <Button onClick={handlerCadastrar}>Cadastrar</Button>
              </Col>
            </FormGroup>   
          </Form>
          {/* <table>
            <thead>
              <tr>
                <th>Plataforma</th>
                <th>Nome</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto)=> (
                <tr key={produto.id}>
                  <td >{produto.nome}</td>
                  <td >{produto.descricao}</td>
                  <td >{produto.preco}</td>
                  <td >{produto.quantidade}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
      </div>
    )
}

export default Login;