//adicionar música informando nome, artista e o link 

import React from "react";
import styled from "styled-components";

const Imagem = styled.img`
    width: 50%;
`
export default class AdicionarMusica extends React.Component {
  render(){
    return (
    <div className="App">
       <h1>Adicionar Músicas</h1>

       <Imagem src="https://th.bing.com/th/id/R.8adb150081a92fd6bf0f392a7a3154fa?rik=fnVIhC2tWFynaQ&riu=http%3a%2f%2fwww.andrefelizardo.com.br%2fblog%2fwp-content%2fuploads%2f2015%2f11%2fem_construcao1.jpg&ehk=4jgsfV1Jb1zo7AcUYMvUVK3FfHrfHE7O1bbya6pjVgg%3d&risl=&pid=ImgRaw&r=0"></Imagem>
    </div>
  );
    }
}
