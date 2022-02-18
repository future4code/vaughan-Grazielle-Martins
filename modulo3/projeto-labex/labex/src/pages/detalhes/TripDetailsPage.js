import react, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {Container} from "../detalhes/TripDetailsstyled"
import {Button} from "../detalhes/TripDetailsstyled"
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
    const navigate = useNavigate();
    const params = useParams();
    const goListAdmin = () => {
        navigate("/admin/trips/list")
    }
    useEffect(() => {
    
        
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
               
                
            })
            .catch((error) => {
                console.log("Deu erro: ", error);
            });
    }, []);
 


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
            <h2>Candidatos Aprovados:</h2>
        </div>
    );
}

export default TripDetailsPage;