import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const formEditado = styled.div`
   display: grid;
  
`
const buttonNovo = styled.button`
   ;
`
class App extends React.Component {
  state={

    inputNome: "",
    inputFotoUsuario: "",
    inputPost: "",

    posts: [
      {
        nomeUsuario: "Grazi",
        fotoUsuario: 'https://ca.slack-edge.com/TLAVDH7C2-U02N1KQEUMR-b1bd2621fd7f-512',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: "Arthur",
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151' 
      },
      {
        nomeUsuario: "Levi",
        fotoUsuario: 'https://th.bing.com/th/id/OIP.9tgqlyci6jQ0BlC9BiR9fwHaFj?pid=ImgDet&rs=1',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ]
  };

  guardaNome = (event) => {
      this.setState({ inputNome: event.target.value});
    }
  guardaFotoUsuario = (event) => {
      this.setState({ inputFotoUsuario: event.target.value});
    }
  guardaPost = (event) => {
      this.setState({ inputPost: event.target.value});
    }

  adicionarPost = () => {
    const novoPost = {
          nome: this.state.inputNome,
          fotoUsuario:  this.state.inputFotoUsuario, 
          fotoPost:  this.state.inputPost
    }

    const post = [...this.state.posts, novoPost];
      this.setState({posts: post});
      this.setState({inputNome:"", inputFotoUsuario:"", inputPost:""});
  }
  render() {
    const listaDePost = this.state.posts.map((posts) => {
      return (
        <Post
          nomeUsuario={posts.nomeUsuario}
          fotoUsuario={posts.fotoUsuario}
          fotoPost={posts.fotoPost} 
        />
      );

    });
    return (
        <MainContainer>
          
        
         <h1>Postar</h1>
        <formEditado>
         <div>
          <input
          onChange={this.guardaNome}
          value={this.state.inputNome}
          placeholder="Nome"
          />
         <input
          onChange={this.guardaFotoUsuario}
          value={this.state.inputFotoUsuario}
          placeholder="Foto do Usuário"
         />
         <input 
          onChange={this.guardaPost}
          value={this.state.inputPost}
          placeholder="Foto do Post"
         />
         </div>
        </formEditado>
        <buttonNovo>
          <button onClick={this.adicionarPost}> Adicionar </button>
        </buttonNovo>
          {listaDePost}
        
        </MainContainer>
    );
  }
}

export default App;
