import React from 'react';
import './App.css';
import CardPequeno from './components/CardPequeno/CardPequeno'
import CardGrande from './components/CardGrande/CardGrande'
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components';

function App() {


  return (
    <div className="App">
      <div className="page-section-container">

        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U02N1KQEUMR-b1bd2621fd7f-512"
          nome="Grazielle Maria de Carvalho Martins" 
          descricao="Oi, eu sou Grazielle Martins, formada em Fonoaudiologia e estou passando por uma transição de carreira. Trabalhei na minha área, mas sempre gostei de tecnologia e graças aos estímulos e apoio do meu marido (que é programador) e família estou aqui."     
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno>
          Email: devgraziellebrandao@gmail.com
        </CardPequeno>
        <CardPequeno>
          Endereço: Av. São Paulo, 820 - Bairro dos Estados
          </CardPequeno>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          
          imagem="https://thumbs.dreamstime.com/b/robot-writing-pen-isolated-contains-clipping-path-white-48842225.jpg" 
          nome= "Bem Estar"
          descricao="Fonoaudióloga, realizando audiometrias ocupacionais, particulares e terapias!"
        />
        
        <CardGrande
          
          imagem="https://campinascafe.com.br/wp-content/uploads/2019/07/robo.jpg" 
          nome="Qualidades"
          descricao="Comunicativa, ter empatia."
        /> 
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
