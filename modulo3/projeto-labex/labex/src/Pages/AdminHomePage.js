import react from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const Container = styled.div`
    background: gray;
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: 200px;
   font-size: 55px;
   margin-top: 40%;
   background-image: linear-gradient(180deg, #2d2b2b, #8d8889);

`

const Button = styled.button`
    background: #989a98;
    border-radius: 12px;
    width: 150px;
`
function AdminHomePage() {
    return (

        <Container className="App">
            <div>
                <p>Painel Administrativo</p>
            </div>
            <div>
                <Button>Voltar</Button>
                <Button>Criar Viagem</Button>
                <Button>Logout</Button>
            </div>

        </Container>

    );
}

export default AdminHomePage;