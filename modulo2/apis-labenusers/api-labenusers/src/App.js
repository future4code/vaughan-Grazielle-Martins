import axios from 'axios'
import React from 'react';
import './App.css';
import TelaDeCadastro from './TelaDeCadastro';
import TelaDeUsuario from './TelaDeUsuarios';

function App() {
  return (
    <div className="App">
     <TelaDeCadastro/>
      <hr/>
     <TelaDeUsuario/>
    
     
    </div>
  );
}

export default App;
