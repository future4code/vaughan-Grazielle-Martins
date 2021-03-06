import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
 display: flex;
 justify-content: space-around;
 
`
const Div1 = styled.div`
  background: #D14B4B;
  width: 60%;
`
const Div2 = styled.div`
 display: flex;
 border-style: groove;
 width: 99%;
 
`
const Button = styled.button`
  width: 40%;
  height: 60%;
  margin-top: 15px;
`
const ImgButton = styled.img`
  width:60%;
`
const Img = styled.img`
  width:40px;
`
const H2 = styled.h2`
      background-image: linear-gradient(to right, red , yellow); 
`


export default function Match(props) {
  const [listadematch, setListadeMatch] = useState([])


  const pegarMatch = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/grazielle/matches`)
      .then((resposta) => {
        setListadeMatch(resposta.data.matches)


      }).catch((erro) => {
        console.log(erro.response);
      })
  }
  const limparLista = () =>{
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/grazielle/clear`)
    .then((res) => {
      pegarMatch()
      console.log("limpou")
    }).catch((erro) => {
      console.log(erro.response);
    })
  }

  useEffect(() => {
    pegarMatch();
  }, []);
  return (
    <>
      <Div>
        <H2>Matches</H2>
        <Button onClick={props.mudarParaProfiles}> Voltar </Button>
      </Div>
      <Div1>
        {listadematch.map((pessoa) =>{
          return <Div2>
            <Img src={pessoa.photo}></Img>
                <p>{pessoa.name}</p>
              </Div2>
        })}
      </Div1>
      <Div>
        <button onClick={limparLista}>Limpar</button>
      </Div>
    </>
  )
}
