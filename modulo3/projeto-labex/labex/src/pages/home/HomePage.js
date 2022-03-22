import react from "react";
import {useNavigate} from 'react-router-dom';
import {Container} from "../home/Homestyled"
import {Button} from "../home/Homestyled"

function HomePage() {
    const navigate = useNavigate();

    const goList = () => {
        navigate("/trips/list");
    }

    const goAdmin = () => {
        navigate("/login");
    }

    return (
        <div>
        <Container className="App">
            <div>
                <p>LabeX</p>
            </div>
            <div>
                <Button onClick={goList}>Viagens</Button>
                <Button onClick={goAdmin}>Admin</Button>
            </div>

        </Container>
        </div>
    );
}

export default HomePage;