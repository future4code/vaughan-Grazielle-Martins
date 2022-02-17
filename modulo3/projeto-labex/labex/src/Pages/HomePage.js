import react from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';
const Container = styled.div`
    background: gray;
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: 200px;
   font-size: 55px;
   margin-top: 25%;
   background-image: linear-gradient(180deg, #2d2b2b, #8d8889);
`

const Button = styled.button`
    background: #989a98;
    border-radius: 12px;
    width: 150px;
`
function HomePage() {
    const navigate = useNavigate();

    const goList = () => {
        navigate("/trips/list");
    }

    const goAdmin = () => {
        navigate("/login");
    }

    return (

        <Container className="App">
            <div>
                <p>LabeX</p>
            </div>
            <div>
                <Button onClick={goList}>Viagens</Button>
                <Button onClick={goAdmin}>Admin</Button>
            </div>

        </Container>

    );
}

export default HomePage;