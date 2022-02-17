import react from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const Card = styled.div`
    background: gray;
    width: 80%;
    margin-top: 10px;
    margin-bottom: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
`
const DivCard = styled.div`
    display: grid;
    justify-items: center;
    height:40px;
`
const Container = styled.div`
    background: gray;
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: 200px;
   font-size: 55px;
   background-image: linear-gradient(180deg, #2d2b2b, #8d8889);
`

const Button = styled.button`
    background: #989a98;
    border-radius: 12px;
    width: 150px;
`
const useProtectedPage = () => {
    const navigate = useNavigate();
    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token !== null) {
            navigate("/admin/trips/list");
        }
    }, []);
};

function LoginPage() {
    useProtectedPage();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const submitLogin = () => {
        const body = {
            email: email,
            password: password
        };

        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/grazielle/login", body
        ).then((resposta) => {
            localStorage.setItem("token", resposta.data.token)
            navigate("/admin/trips/list");

        }).catch((erro) => {
            alert("Email ou senha inválida")
        })
    }

    return (
        <div>
            <Container className="App">
                <div>
                    <p>Login</p>
                </div>
                <Button onClick={goHome}>Voltar</Button>
            </Container>
            <DivCard>
                <Card>
                    <form>
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={onChangeEmail}
                        required
                        type={"email"}
                    >
                    </input>
                    <input
                        placeholder="Senha"
                        value={password}
                        onChange={onChangePassword}
                        required
                        pattern={"^.{5,}"}
                        title={"A senha deve ter no mínimo 5 caracteres"}
                    ></input>
                    <button onClick={submitLogin}>Enviar</button>
                    </form>
                </Card>
            </DivCard>
        </div>
    );
}

export default LoginPage;