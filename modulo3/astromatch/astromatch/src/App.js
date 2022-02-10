import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Match from "./Componentes/Match"
import Profiles from "./Componentes/Profiles";

const Div1 = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`

const Container = styled.div`
    width:40%;
    height: 600px;
    border:solid 1px;
    border-radius:20px;
   display:flex;
   flex-direction: column;
   align-content: space-between;
    justify-items: center;
`

export default function App() {
  const [page, setPage] = useState("profiles");

  const mudarParaMatch = () => {
    setPage("matches")
  }
  const mudarParaProfiles = () => {
    setPage("profiles")
  }
  const selectPage = () => {
    switch(page){
      case "profiles":
        return <Profiles  mudarParaMatch={mudarParaMatch}/>
      case "matches":
        return <Match mudarParaProfiles={mudarParaProfiles} />
      default:
        return <Profiles  mudarParaMatch={mudarParaMatch}/>

    }
  }
  
    
  return (
    <Div1>
      <Container className="App">
        {selectPage()}
      </Container>
    </Div1>
  );
}

