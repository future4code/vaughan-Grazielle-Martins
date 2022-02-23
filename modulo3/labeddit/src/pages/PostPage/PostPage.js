import React from "react";
import { Button } from "@material-ui/core";
import Headers from "../../components/Header";
import { Container } from "./PostStyled";
import { Card } from "./PostStyled";
import { Button1 } from "./PostStyled";
import { Form } from "../RegisterPage/RegisterStyled"
import useForm from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useNavigate } from "react-router-dom";
import { goToLogin, goToPost } from "../../routes/coordinator";

const useProtectedPage = () => {
    const navigate = useNavigate();
    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token === null) {
            navigate("/login");
        }
    }, []);
};
function PostPage() {
    useProtectedPage();
    const [comentarios, setComentarios] = useState([])
    const { form, onChange, clear } = useForm({ texto: "", body: "", direction: 1 })
    const params = useParams();
    const navigate = useNavigate();

    const post = (event) => {
        event.preventDefault()
        listarcomentarios()
    }

    const listarcomentarios = () => {

        const token = localStorage.getItem("token");
        axios
            .get(`${BASE_URL}/posts/${params.id}/comments`,
                {
                    headers: {
                        Authorization: token
                    }
                })
            .then((resposta) => {

                setComentarios(resposta.data)

            })
            .catch((erro) =>
                console.log(erro.message)
            )
    }

    useEffect(() => {
        listarcomentarios()
    }, []);

    const comentar = () => {
        const token = localStorage.getItem("token");

        axios
            .post(`${BASE_URL}/posts/${params.id}/comments`, form,
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            .then((resposta) => {

                listarcomentarios()
            })
            .catch((erro) =>
                console.log(erro)
            )
    }
    const createcomment = () => {
        const token = localStorage.getItem("token");

        axios
            .post(`${BASE_URL}/comments/${params.id}/votes`, form,
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            .then((resposta) => {

                console.log("curtiu")
            })
            .catch((erro) =>
                console.log(erro)
            )
    }
    const changecomment = () => {

    }
    const deletecomment = () => {

    }

    const goLogout = () => {
        localStorage.removeItem("token")
        goToLogin(navigate);
    }

    const listadecomentarios = comentarios.map((comentario) => {
        return <Card key={comentario.id}>
            <p><b>Usuário:</b> {comentario.username}</p>
            <p><b>Comentário:</b> {comentario.body}</p>
            <p>
                <ArrowUpwardIcon alt={'IconeMais'} onClick={createcomment} />

                {comentario.userVote}
                <ArrowDownwardIcon alt={'Iconemenos'} />
            </p>

        </Card>
    })

    return (
        <div>
            <Headers />
            <Container>
                <Button1>
                    <Button onClick={goLogout}>Logout</Button>
                </Button1>
                <Form onSubmit={post}>

                    <input
                        placeholder="Escreva seu comentário"
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        label={"body"}
                        variant={"outlined"}
                        type={"body"}
                    >

                    </input>
                    <br />
                    <Button variant="contained" color="primary" onClick={comentar}>Comentar</Button>
                </Form>
                {listadecomentarios}
            </Container>
        </div>
    )
}

export default PostPage;

//form de escrever e postar, so pode ser acessada logado, caso não redireciona pra login

// const [comentarios, setComentarios] = useState([])
// const [numerocomentarios, setNumerocomentarios] = useState(0)
// const [comentando, setComentando] = useState(false)

// const Comentarios = () => {
//     setComentarios({ comentando: !comentando})
// }

// const enviarComentario = (comentario) => {
//     const listadecomentarios = [...comentarios, comentario]
//     setComentarios({comentarios: listadecomentarios})
//     setComentando({comentando: false})
//     setNumerocomentarios({numerocomentarios: numerocomentarios + 1})
// }