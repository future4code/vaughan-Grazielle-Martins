import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state={
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
          {listaDePost}
        </MainContainer>
    );
  }
}

export default App;
