import react, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
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
    const [viagem, setViagem] = useState([]);
    const navigate = useNavigate();
    const goListAdmin = () => {
        navigate("/admin/trips/list")
    }
    useEffect((id) => {
        const token = localStorage.getItem("token");
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/grazielle/trip/${id}`,
                {
                    headers: {
                        auth: id
                    }
                }
            )
            .then((resposta) => {
                setViagem(resposta.data.trips)
                console.log(resposta.data);
            })
            .catch((error) => {
                console.log("Deu erro: ", error.response);
            });
    }, []);
    const listarViagens = viagem.map((viagem) => {
        return (<div key={viagem.id}>
            <p><b>Nome:</b> {viagem.name}</p>
            <p><b>Descrição:</b> {viagem.description}</p>
            <p><b>Duração da viagem:</b> {viagem.durationInDays}</p>
            <p><b>Data:</b> {viagem.date}</p>
        </div>)
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
            {listarViagens}
            <h2>Candidatos Pendentes:</h2>
            <h2>Candidatos Aprovados:</h2>
        </div>
    );
}

export default TripDetailsPage;