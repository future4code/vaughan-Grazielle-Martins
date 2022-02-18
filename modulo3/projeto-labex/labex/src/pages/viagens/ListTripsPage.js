import react from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {Container} from "../viagens/ListTripsstyled"
import {Button} from "../viagens/ListTripsstyled"
import {Card} from "../viagens/ListTripsstyled"
import {DivCard} from "../viagens/ListTripsstyled"

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