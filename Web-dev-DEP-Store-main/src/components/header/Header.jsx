import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand  from 'react-bootstrap/lib/NavbarBrand';
import { useHistory } from 'react-router-dom'
import Button  from 'react-bootstrap/lib/Button';
import NavItem  from 'react-bootstrap/lib/NavItem';
import NavDropdown  from 'react-bootstrap/lib/NavDropdown';
import MenuItem  from 'react-bootstrap/lib/MenuItem';
import Nav  from 'react-bootstrap/lib/Nav';
import IconeCarrinho from '../carrinho/IconeCarrinho'
import axios from "axios";

const Header = (props) => {

    let nome = localStorage.getItem("_NOME")
    const history = useHistory()

    function handlerDelete(){   
      
      let id =localStorage.getItem("_IDCLIENTE")
      let config = {
      headers: {
        Authorization: localStorage.getItem("_TOKEN")        
      }
    }    
      axios.delete(`http://localhost:8080/api/usuarios/${id}`, config)   
      localStorage.setItem("_TOKEN","");
      localStorage.setItem("_NOME","");
      localStorage.setItem("_IDCLIENTE","")       
    }

    // function handlerNome(){   
      
    //   let id =localStorage.getItem("_IDCLIENTE")
    //   let config = {
    //   headers: {
    //     Authorization: localStorage.getItem("_TOKEN")        
    //   }
    // }    
    //   let clienteNome= {          
    //       nome: (pegarformulario)
    //   }
    //   axios.put(`http://localhost:8080/api/usuarios/${id}`, config)          
    // }

    function handlerLogout(){
        localStorage.setItem("_TOKEN","");
        localStorage.setItem("_NOME",""); 
        history.push(`/`)
    }
    
    return (
      <div className="Header">
          {/* <Navbar inverse >
              <NavbarHeader>
                  <NavbarBrand>
                      <a href="/">DEP Store</a>
                  </NavbarBrand>
                  <NavbarBrand>
                      <a href="/login">Login</a> 
                  </NavbarBrand> 
                  <Nav pullRight>
                  <NavbarBrand >                    
                      <Button bsStyle="danger" onClick={handlerLogout}> Logout {nome}</Button>
                  </NavbarBrand>    
                  </Nav>               
              </NavbarHeader>
          </Navbar> */}
          <Navbar inverse >
            <NavbarHeader>
              <NavbarBrand>
                <a href="/">DEP Store</a>
              </NavbarBrand>
              <Navbar.Toggle />
            </NavbarHeader>
              <Nav>
                <NavItem eventKey={1} href="/login">
                Login
                </NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="/">
                <h5>{nome}</h5>
                </NavItem>
                <NavItem eventKey={1} href="/">
                <Button bsStyle="danger" onClick={handlerLogout}> Logout</Button>
                </NavItem>
                <NavItem eventKey={1} href="/">
                <Button bsStyle="danger" onClick={handlerDelete}> Deletar Conta</Button>
                </NavItem>
                <NavItem eventKey={1} href="/carrinho">
                   <IconeCarrinho total={props.total} />
                </NavItem>
              </Nav>
          </Navbar>
      </div>    
    )
}

export default Header;