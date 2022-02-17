import react, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import TripDetailsPage from "./TripDetailsPage";


const Container = styled.div`
    background: gray;
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: 200px;
   font-size: 40px;
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
    display: flex;
    justify-content: space-between;
`
const DivCard = styled.div`
    display: grid;
    justify-items: center;
    
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


function AdminHomePage() {
    useProtectedPage();
    const [viagens, setViagens] = useState([])

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    }
    const goLogout = () => {
        navigate("/login");
    }
    const goCreate = () => {
        navigate("/admin/trips/create")
    }

    const goDetails = (id) => {
        navigate(`/admin/trips/${id}`);
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labeX/grazielle/trips",
                {
                    headers: {
                        auth: token
                    }
                }
            )
            .then((resposta) => {
                setViagens(resposta.data.trips)
                
            })
            .catch((error) => {
                console.log("Deu erro: ", error.response);
            });
    }, []);
    const listarViagens = viagens.map((viagem) => {
        return (<Card key={viagem.id}>
            <p><b>Nome:</b> {viagem.name}</p>
            <button onClick={() => goDetails(viagem.id)}>Detalhes</button>
            <button>X</button>
        </Card>)
    });



    return (
        <div>
            <Container className="App">
                <div>
                    <p>Painel Administrativo</p>
                </div>
                <div>
                    <Button onClick={goHome}>Voltar</Button>
                    <Button onClick={goCreate}>Criar Viagem</Button>
                    <Button onClick={goLogout}>Logout</Button>
                </div>

            </Container>
            <DivCard>
                {listarViagens}
            </DivCard>
        </div>
    );
}

export default AdminHomePage;