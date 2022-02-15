import react from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
function ApplicationFormPage() {
    const navigate = useNavigate();

    const goInscricao = () => {
        navigate("/trips/application");
    }

    const goHome = () => {
        navigate("/");
    }
    return (

        <Container className="App">
            <div>
             <p>Inscreva-se para uma viagem</p>
        
            </div>
            <div>
                <Button onClick={goHome}>Voltar</Button>
                <Button>Enviar</Button>
               
            </div>

        </Container>

    );
}

export default ApplicationFormPage;