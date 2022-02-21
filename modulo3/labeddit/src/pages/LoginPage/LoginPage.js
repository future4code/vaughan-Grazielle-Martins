import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../routes/coordinator";
import { goToRegister } from "../../routes/coordinator";
import { Container } from "./LoginStyled";
import logo from "../../assets/logo.jpg"



const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <img src={logo}></img>
        
            <input placeholder="Email"></input>
            <input placeholder="Senha"></input>
            <br/>
            <Button variant="contained" color="primary" onClick={() => goToFeed(navigate)}>Entrar</Button>
            <br/>
            <Button variant="contained" color="primary"  onClick={() => goToRegister(navigate)}>Cadastrar</Button>
        </Container>
    )
}

export default LoginPage;