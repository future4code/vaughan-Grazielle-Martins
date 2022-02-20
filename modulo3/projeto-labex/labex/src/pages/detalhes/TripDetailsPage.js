import react, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Container } from "../detalhes/TripDetailsstyled"
import { Button } from "../detalhes/TripDetailsstyled"
import { useParams } from "react-router-dom";

const useProtectedPage = () => {
    const navigate = useNavigate();
    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token === null) {
            navigate("/login");
        }
    }, []);
};


function TripDetailsPage() {
    useProtectedPage();

    const [viagem, setViagem] = useState({});
    const [candidates, setCandidates] = useState([]);
    const [approved, setApproved] = useState([]);
    const navigate = useNavigate();
    const params = useParams();
    const goListAdmin = () => {
        navigate("/admin/trips/list")
    }
   

    const getTrip = () => {
        const token = localStorage.getItem("token");
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/grazielle/trip/${params.id}`,
                {
                    headers: {
                        auth: token
                    }
                }
            )
            .then((resposta) => {

                setViagem(resposta.data.trip)
              
                setCandidates(resposta.data.trip.candidates)
                setApproved(resposta.data.trip.approved)
              
            })
            .catch((error) => {
                console.log("Deu erro: ", error);
            });
        }
    useEffect(() => {
        getTrip()
    }, []);

    const decide = (id, approve) => {

        const body = {
            approve: approve
        }
        console.log(body)
        const token = localStorage.getItem("token");

        axios
            .put(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/grazielle/trips/${viagem.id}/candidates/${id}/decide`, body,
                {
                    headers: {
                        auth: token
                    }
                }
            )
            .then((resposta) => {
                getTrip()
            })
            .catch((error) => {
                console.log("Deu erro: ", error.message);
            });
    }

    const candidatesPending = candidates.map((candidato) => {
        return <div><p>Nome: {candidato.name}</p>
            <p>Texto: {candidato.applicationText}</p>
        <button onClick={() => decide(candidato.id, true)}>Aprovar</button>
        <button onClick={() => decide(candidato.id, false)}>Reprovar</button>
        </div>
    })
    
    const approveds = approved.map((aprovados) => {
        return <div>
            <p>{aprovados.name}</p>
        </div>
    })

    return (
        <div>
            <Container className="App">

                <div>
                    <p>Detalhes</p>
                </div>
                <div>
                    <Button onClick={goListAdmin}>Voltar</Button>
                </div>

            </Container>

            <div key={viagem.name} >
                <p><b>Nome:</b> {viagem.name}</p>
                <p><b>Descrição:</b> {viagem.description}</p>
                <p><b>Duração da viagem:</b> {viagem.durationInDays}</p>
                <p><b>Data:</b> {viagem.date}</p>
            </div>
            <h2>Candidatos Pendentes:</h2>
           {candidatesPending}
            <h2>Candidatos Aprovados:</h2>
            {approveds}
        </div>
    );
}

export default TripDetailsPage;