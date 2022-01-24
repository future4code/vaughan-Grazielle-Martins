import React from 'react';
import Post from './components/Post';
import styled from 'styled-components'


const Container = styled.div`
    border: 1px solid gray;
    width: 100%;
    height: 700px;
    background: #CFCFCF;
    border-radius: 0.7em;
    
`
const Corpo = styled.body`
  display:grid;
    justify-content: center;
    margin: 40px 20px;
    
    
`
const Mensagem = styled.main`
    display: flex;
    justify-content: center;
    width: 500px;
    flex-direction: column;

`
const CaixaInputNome = styled.input`
    width: 50%;
    border-radius: 0.5em;
`
const CaixaInputMensagem = styled.input`
    width: 50%;
    height: 70px;
    border-radius: 0.5em;
    
    
`
const Botao = styled.button`
    width: 20%;
    background-color: #C1CDCD;
    &:hover {
    background-color: #838B8B;
    
  }
`


class App extends React.Component {
  state={
    mensagens: []
  };

  guardaNome = (event) => {
    this.setState({inputNome: event.target.value});
  }
  guardaMensagem = (event) => {
    this.setState({inputMensagem: event.target.value});
  }

  adicionarMensagem = () => {
      const mensagem = {
          nome: this.state.inputNome,
          mensagem: this.state.inputMensagem
      }
      const novaMensagem = [...this.state.mensagens, mensagem]
       this.setState({mensagens: novaMensagem});
       this.setState({inputNome:"", inputMensagem:""});


  }
  
  render(){
    const listaDeMensagem = this.state.mensagens.map((mensagem) => {
      return (
        <Post
          nome={mensagem.nome}
          mensagem={mensagem.mensagem}
          
        />
      )
    });

    
      return(
        <Corpo>
            <Container>
    
                
                <Mensagem>
                    {listaDeMensagem}
                </Mensagem>
            </Container>
            
            <CaixaInputNome 
            onChange={this.guardaNome}
            value={this.state.inputNome}
            placeholder='Nome' 
            />
            <CaixaInputMensagem 
            onChange={this.guardaMensagem}
            value={this.state.inputMensagem}
            placeholder='Mensagem' 
            />
            
            <Botao onClick={this.adicionarMensagem} type='submit'>Enviar</Botao>
        </Corpo>
      ); 
    
    };
}

export default App;
