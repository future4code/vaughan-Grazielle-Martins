//criar a lista so com o nome
import axios from "axios";
import React from "react";
import VerLista from "./VerLista";

export default class CriarLista extends React.Component {

    state = {
        listas: [],
        inputValue:""
    }

    handleInput=(event)=>{
        this.setState({inputValue: event.target.value})
    }
    criarNovaLista = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {name:this.state.inputValue}
       try{
           const resposta = await axios.post(url, body, {
                headers: {
                    Authorization: "grazielle-martins-vaughan"
                }
           })
           alert("PlayList criada com sucesso!")
           this.setState({inputValue:""})
       }catch(error) {
           alert("Ocorreu um erro ao criar a lista, tente novamente!")
       }
    }
  render(){
    return (
    <div className="App">
        <h1>Criar lista</h1>
        <input 
        placeholder="Nome Da Lista"
        value={this.state.inputValue}
        onChange={this.handleInput}
        />
        <button onClick={this.criarNovaLista}>Criar</button>
    </div>
  );
    }
}