import React from "react";
import { Button } from "@material-ui/core";
import Headers from "../../components/Header";
import { Container } from "./RegisterStyled";
import { Form } from "../RegisterPage/RegisterStyled"
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls"
import axios from "axios";
import { goToFeed } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {

    const { form, onChange, cleanFields } = useForm({ username: "", email: "", password: "" })
    const navigate = useNavigate();

    const cadastrar = (event) => {
        cadastro()
        event.preventDefault()
        goToFeed(navigate)
        cleanFields();
    }

    const cadastro = () => {

        axios
            .post(`${BASE_URL}/users/signup`, form)
            .then((resposta) =>
               alert("Cadastro realizado!")
            )
            .catch((erro) =>
                console.log(erro)
            )
    }

    return (
        <div>
            <Headers />
            <Container>
                <Form onSubmit={cadastrar}>
                    <h1>Cadastrar</h1>
                    <input
                        placeholder="name"
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label={"name"}
                        variant={"outlined"}
                        type={"name"}
                        required
                    />
                    <input
                        placeholder="Email"
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"Email"}
                        variant={"outlined"}
                        type={"email"}
                        required
                    />
                    <input
                        placeholder="Senha"
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        type={"password"}
                        required
                        pattern={"^.{8,}"}
                        title={"A senha deve ter no mínimo 8 caracteres"}
                    />
                    <br />
                    <Button variant="contained" color="primary" onClick={cadastrar}>
                        Cadastrar
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default RegisterPage;

