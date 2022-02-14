import react from "react";
import styled from "styled-components";

const Container = styled.div`
    background: gray;
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: 200px;
   font-size: 55px;
`
function HomePage() {
    return (

        <Container className="App">
            <div>
                <p>LabeX</p>
            </div>
            <div>
                <button>Viagens</button>
                <button>Admin</button>
            </div>

        </Container>

    );
}

export default HomePage;