
import axios from 'axios'
import React from 'react';
import TelaDeUsuario from './TelaDeUsuarios';




class TelaDeCadastro extends React.Component {

    state = {
        nome: "",
        email:""
    }
    handleInputNome=(event)=>{
        this.setState({nome:event.target.value})
        
    }
    handleInputEmail=(event)=>{
        this.setState({email: event.target.value})
        
    }

    criarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {name: this.state.nome, email: this.state.email}
        const axiosConfig = {headers:{Authorization: "grazielle-martins-vaughan"}}
        
        axios.post(url, body, axiosConfig).then(
            (resposta) => {
                alert("Cadastrado com sucesso!!")
                this.setState({nome:""})
                this.setState({email:""})
                
            }).catch((erro) => {
                console.log(erro.response)
                alert("Ops! Algo deu errado!")
            }
            )
    }


    render (){
    return (
      <div className="App">
        <h2>Tela de Cadastro</h2>
        <hr/>
        <input placeholder='Escreva seu nome' type={"text"} value={this.state.nome} onChange={this.handleInputNome}></input>
        <br/>
        <input placeholder='Escreva seu email' type={"email"} value={this.state.email} onChange={this.handleInputEmail}></input>
        <br/>
        <button type={"submit"} onClick={this.criarUsuario}>Criar Usuário</button>
        <br/>
        <button>Tela de Usuários</button>
      </div>
    )};
  }
  
  export default TelaDeCadastro;
  