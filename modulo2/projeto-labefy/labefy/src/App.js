import React from "react";
import axios from "axios";
import CriarLista from "./CriarLista";
import VerLista from "./VerLista";
import DetalheDaLista from "./DetalheDaLista";
import AdicionarMusica from "./AdicionarMusica";
//import styled from "styled-components";

export default class App extends React.Component {
  state = {
    mudarTela: "criarlista"
  }



  selectPage = () => {
    switch (this.state.mudarTela) {
    case "criarlista":
      return <CriarLista/>
    case "verlista":
      return <VerLista/>
    case "detalhelista":
      return <DetalheDaLista/>
    case "adicionarmusica":
      return <AdicionarMusica/>
    default:
      return <CriarLista/>
      
  }
  }

   mudarDeTela = (nomeDaTela) => {
      this.setState({mudarTela: nomeDaTela})
   };
  
  render(){
    return (
    <div className="App">
        <button onClick={() => this.mudarDeTela("criarlista")}>Criar Lista</button>
        <button onClick={() => this.mudarDeTela("verlista")}>Ver Lista</button>
        <button onClick={() => this.mudarDeTela("detalhelista")}>Detalhe Da Lista</button>
        <button onClick={() => this.mudarDeTela("adicionarmusica")}>Adicionar Música</button>
        {this.selectPage()}
    </div>
  );
    }
}
