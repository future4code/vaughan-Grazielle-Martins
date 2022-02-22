import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRegister } from "../../routes/coordinator";
import { Container } from "./LoginStyled";
import logo from "../../assets/logo.jpg"
import useForm from "../../hooks/useForm"
import {Form} from "../../pages/LoginPage/LoginStyled"
import axios from "axios";
import {BASE_URL} from "../../constants/urls"
import { goToFeed } from "../../routes/coordinator";



const LoginPage = () => {
    
    const {form, onChange, clear} = useForm({email: "", password:""})
    const navigate = useNavigate();
   
    const logar = (event) => {
        login()
        event.preventDefault()
        goToFeed(navigate)

    }

    const login = () => {
        axios
        .post(`${BASE_URL}/users/login`, form)
        .then((resposta) => {
           localStorage.setItem("token", resposta.data.token)
           clear()
        })
        .catch((erro) =>
            {
                return console.log(erro);
            }
        )
    }

    return (
        <Container>
            <img src={logo}></img>
            <Form onSubmit={logar}>
            <input 
            placeholder="Email"
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"Email"}
            
            variant={"outlined"}
            type={"email"}
            required
            >

            </input>
            <input 
            placeholder="Senha"
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            type={"password"}
            required
            >

            </input>
            <br/>
            <Button variant="contained" color="primary" onClick={logar}>Entrar</Button>
            <h4>Não possui conta? Cadastre-se</h4>
            <Button variant="contained" color="primary"  onClick={() => goToRegister(navigate)}>Cadastrar</Button>
            </Form>
        </Container>
    )
}

export default LoginPage;