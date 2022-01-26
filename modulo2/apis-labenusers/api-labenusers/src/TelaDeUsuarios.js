//  cada um tem um botão remover para deletar da api, tanto em erro ou suceesso exibir um alert, botao voltar, para a tela de cadastro
import axios from 'axios'
import React from 'react';
import TelaDeCadastro from './TelaDeCadastro';

class TelaDeUsuario extends React.Component {

    state={
        usuarios:[],
        
    }

    componentDidMount(){
        this.getUsuarios()
      }

    getUsuarios = () => {
            const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
            const axiosConfig = {headers: {Authorization:"grazielle-martins-vaughan"}}
            
            axios.get(url, axiosConfig).then ((resposta)=>{
                this.setState({usuarios:resposta.data})
                console.log(this.state.usuarios)
            }).catch((erro)=>{
                console.log( erro)
            })
    }
       
    removerUsuario = (event) => {
        console.log(event.target.dataset.id)
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${event.target.dataset.id}`
        const axiosConfig={headers: {Authorization:"grazielle-martins-vaughan"}}
        axios.delete(url, axiosConfig).then((resposta)=>{
            alert("Removido com sucesso!!")
            this.getUsuarios()
        }).catch((erro)=>{
            alert("Erro ao remover!!")
            console.log(erro)
        })
    }
    render () {
        const usuarios= this.state.usuarios.map((usuarios)=>{
            return(
                <div key={usuarios.id}>
                    <p>{usuarios.name}</p>
                    <button data-id={usuarios.id} onClick={this.removerUsuario}>Remover</button>
                </div>
            )
        })
        console.log(this.state)
    return (
      <div className="App">
        <h2>Tela de Usuário</h2>
        <h3>Lista Dos Nomes Cadastrados</h3>
        {this.state.nome}
        {this.state.usuarios.length>0? (usuarios): <p>Carregando ...</p>}
        <br/>
        
      </div>
    );}
  }
  
  export default TelaDeUsuario;
  