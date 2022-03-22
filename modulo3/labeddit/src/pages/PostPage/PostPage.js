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
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import useProtectedPage from "../../hooks/useProtectPage";

function PostPage() {
    useProtectedPage();
    const [comentarios, setComentarios] = useState([])
    const { form, onChange, clear } = useForm({ texto: "", body: "", direction: "" })
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
                console.log(erro.response)
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
    const createcommentvote = (id) => {
        const token = localStorage.getItem("token");
        const body = {
            direction: 1
        }
        axios
            .post(`${BASE_URL}/comments/${id}/votes`, body,
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
    const changecommentvote = (id) => {
        const token = localStorage.getItem("token");
        const body = {
            direction: -1
        }
        axios
            .put(`${BASE_URL}/comments/${id}/votes`, body,
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
    const deletecommentvote = (id) => {
        const token = localStorage.getItem("token");
       
        axios
            .delete(`${BASE_URL}/comments/${id}/votes`,
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

    const goLogout = () => {
        localStorage.removeItem("token")
        alert("Logout feito!!")
        goToLogin(navigate);
    }

    const listadecomentarios = comentarios.map((comentario) => {
        return <Card key={comentario.id}>
            <p><b>Usuário:</b> {comentario.username}</p>
            <p><b>Comentário:</b> {comentario.body}</p>
            <p>
            <b>Curtir:</b>
                <ArrowUpwardIcon alt={'IconeMais'} onClick={() => createcommentvote(comentario.id)} />

                {comentario.userVote}
                <ArrowDownwardIcon alt={'Iconemenos'} onClick={() =>changecommentvote(comentario.id)}/>
                <HighlightOffIcon alt={'Iconedeletar'} onClick={() =>deletecommentvote(comentario.id)}/>
            </p>

        </Card>
    })

    return (
        <div>
            <Headers />
            <Container>


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
