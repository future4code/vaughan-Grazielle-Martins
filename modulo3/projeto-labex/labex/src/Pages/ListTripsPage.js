import react from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
    background: gray;
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: 200px;
   font-size: 55px;
   background-image: linear-gradient(180deg, #2d2b2b, #8d8889);
`

const Button = styled.button`
    background: #989a98;
    border-radius: 12px;
    width: 150px;
`
const Card = styled.div`
    background: gray;
    width: 40%;
    margin-top: 10px;
    margin-bottom: 5px;
    border-radius: 10px;
`
const DivCard = styled.div`
    display: grid;
    justify-items: center;
    
`
function ListTripsPage() {
    const [viagens, setViagens] = useState([])
    const navigate = useNavigate();

    const goInscricao = () => {
        navigate("/trips/application");
    }

    const goHome = () => {
        navigate("/");
    }
    
    const getTrips = () => {
        axios
          .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/grazielle/trips")
          .then((resposta) => {
             setViagens(resposta.data.trips)
             console.log(resposta.data)
            
    
          }).catch((erro) => {
            console.log(erro.response);
          })
      }
      useEffect(() => {
        getTrips();
      }, []);

    const listarViagens = viagens.map((viagem) => {
        return (<Card key={viagem.id}>
            <p><b>Nome:</b> {viagem.name}</p>
            <p><b>Descrição:</b> {viagem.description}</p>
            <p><b>Duração da viagem:</b> {viagem.durationInDays}</p>
            <p><b>Data:</b> {viagem.date}</p>
        </Card>)
    })

    return (
        <div>
        <Container className="App">
            <div>
                <p>Lista de Viagens</p>
            </div>
            <div>
                <Button onClick={goInscricao}>Inscreva-se</Button>
                <Button onClick={goHome}>Voltar</Button>
            </div>

        </Container>
        <DivCard>
            {listarViagens}
        </DivCard>
        </div>
    );
}

export default ListTripsPage;