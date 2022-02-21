import React from "react";
import { Button } from "@material-ui/core";
import Headers from "../../components/Header";
import { Container } from "./RegisterStyled";
const RegisterPage = () => {
    return (
        <div>
            <Headers />
            <Container>

                <h1>Cadastrar</h1>
                <input placeholder="Nome"></input>
                <input placeholder="Email"></input>
                <input placeholder="Senha"></input>
                <br/>
                <Button variant="contained" color="primary">
                    Cadastrar
                </Button>
            </Container>
        </div>
        //após cadastrar, o usuário deverá ser redirecionado para a página de feed, já estando logado (ou seja, com o token salvo no LocalStorage).
    )
}

export default RegisterPage;