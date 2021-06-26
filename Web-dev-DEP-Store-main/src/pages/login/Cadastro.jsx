import React from 'react';
import Col  from 'react-bootstrap/lib/Col'
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap/lib/InputGroup';


const Cadastro = () => {   
  
  const alertando = () => {
    alert("Cadastro finalizado com sucesso!");
  }
  
  return (
    <>
      <form>
        <FormGroup controlId="formValidationSuccess1">
          <ControlLabel>seu nome e sobrenome</ControlLabel>
          <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationSucess2">
          <ControlLabel>Telefone</ControlLabel>
          <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationSucess3">
          <ControlLabel>E-mail</ControlLabel>
          <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationSucess3">
          <ControlLabel>CPF</ControlLabel>
          <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationSucess3">
          <ControlLabel>Data de Nascimento</ControlLabel>
          <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationSucess3">
          <ControlLabel>Senha</ControlLabel>
          <FormControl type="text" />
        </FormGroup>
        
        <FormGroup>
          <Col smOffset={-1} sm={5}>
            <Button onClick={alertando}>Enviar</Button>
          </Col>
        </FormGroup>
      </form>
    </>
  )
}

export default Cadastro;