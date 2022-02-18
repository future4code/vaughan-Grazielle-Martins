import react, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import TripDetailsPage from "../detalhes/TripDetailsPage";
import { Container } from "../pageadmin/AdminHomestyled"
import { Button } from "../pageadmin/AdminHomestyled"
import { Card } from "../pageadmin/AdminHomestyled"
import { DivCard } from "../pageadmin/AdminHomestyled"
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


function AdminHomePage() {
    useProtectedPage();
    const token = localStorage.getItem("token");
    const [viagens, setViagens] = useState([])
    const params = useParams();
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    }
    const goLogout = () => {
        localStorage.removeItem("token")
        navigate("/");
    }
    const goCreate = () => {
        navigate("/admin/trips/create")
    }

    const goDetails = (id) => {
        navigate(`/admin/trips/${id}`);
    }
    useEffect(() => {

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
    const removeTrip = () => {

        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/grazielle/trips/${params.id}`,
            {
                headers: {
                    auth: token
                }
            }
        ).then((resposta) => {
          
            console.log("removeu")
            navigate("/admin/trips/list");


        }).catch((erro) => {
            alert("Ops! Algo deu errado")
            console.log(erro.response)
        })
    }
    
    const listarViagens = viagens.map((viagem) => {
        return (<Card key={viagem.id}>
            <p><b>Nome:</b> {viagem.name}</p>
            <button onClick={() => goDetails(viagem.id)}>Detalhes</button>
            <button onClick={removeTrip}>X</button>
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