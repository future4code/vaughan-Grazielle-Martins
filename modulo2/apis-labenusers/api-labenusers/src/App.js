import axios from 'axios'
import React from 'react';
import './App.css';
import TelaDeCadastro from './TelaDeCadastro';
import TelaDeUsuario from './TelaDeUsuarios';

class App extends React.Component {

    state= {
      tela: "cadastro"
    }

  mudarTela = () => {
    if (this.state.tela === "cadastro"){
      this.setState({tela: "usuario"})
    }else {
      this.setState({tela: "cadastro"})
    }
    }
  
    
  render () {

  return (
    <div className="App">
     {this.state.tela === "cadastro" ? <TelaDeCadastro/> : <TelaDeUsuario/>}
     <br/>
     <button onClick={this.mudarTela}>Trocar de tela</button>
      
    
  
    </div>
  );
  }
}

export default App;
