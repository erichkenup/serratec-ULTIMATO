import React, { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
    const [produtos, setJogos] = useState([]);
    const [username, setUsarname] = useState("");
    const [senha, setSenha] = useState(0);

  React.useEffect(()=> {
    axios.get("http://localhost:8080/api/produtos").then((response)=> setJogos(response.data));
  }, []);




  function handleLogin(e) {
    e.preventDefault();
    
    if(username.trim() === '') {
        return;
    }
    if(senha.trim() === '') {
      return;
  }
    axios.post("http://localhost:8080/api/login", username, senha )

}

  return (
    <div className="App">
      <header className="App-header">
        <h1> GameStore 🎮 </h1>

        <form onSubmit={handleLogin}>
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
        </form>

        <table>
          <thead>
            <th>Plataforma</th>
            <th>Nome</th>
            <th>Preço</th>
          </thead>
          <tbody>
            {produtos.map((produto)=> (
              <tr>
                <td key={produto.id}>{produto.nome}</td>
                <td key={produto.id}>{produto.descricao}</td>
                <td key={produto.id}>{produto.preco}</td>
                <td key={produto.id}>{produto.qantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
