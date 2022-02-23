import React from "react";
import { Button } from "@material-ui/core";
import Headers from "../../components/Header";
import { Container } from "./FeedStyled";
import { Form } from "./FeedStyled"
import { A } from "./FeedStyled"
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls"
import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "./FeedStyled";
import { Button1 } from "./FeedStyled";
import { Divcard } from "./FeedStyled";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { goToLogin, goToPost } from "../../routes/coordinator";
import { useParams } from "react-router-dom";


const useProtectedPage = () => {
    const navigate = useNavigate();
    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token === null) {
            navigate("/login");
        }
    }, []);
};

const FeedPage = () => {
    useProtectedPage();
    const token = localStorage.getItem("token");
    const { form, onChange, clear } = useForm({ title: "", body: ""})
    const [posts, setPosts] = useState([]);
    const [curtido, setCurtido] = useState(false)
    const [numerodecurtidas, setNumerodecurtidas] = useState(0)
    const navigate = useNavigate()
    const params = useParams();

    const post = (event) => {
        criarPost()
        event.preventDefault()
    }

    const criarPost = () => {

        axios
            .post(`${BASE_URL}/posts`, form,
                {
                    headers: {
                        Authorization: token
                    }
                })
            .then((resposta) => {
                listarPosts()
                console.log(resposta)
            })
            .catch((erro) =>
                console.log(erro)
            )
    }
    const listarPosts = () => {

        axios
            .get(`${BASE_URL}/posts`,
                {
                    headers: {
                        Authorization: token
                    }
                })
            .then((resposta) => {
                setPosts(resposta.data)


            })
            .catch((erro) =>
                console.log(erro)
            )
    }

    useEffect(() => {
        listarPosts()
    }, []);
    
    const createvote = () => {
        const token = localStorage.getItem("token");

        axios
            .post(`${BASE_URL}/posts/${params.id}/votes`, form,
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            .then((resposta) => {

                console.log("curti")
            })
            .catch((erro) =>
                console.log(erro)
            )
    }
    const changevote = () => {

    }
    const deletevote = () => {

    }

    const onClickcard = (id) => {
        goToPost(navigate, id)
    }

    const goLogout = () => {
        localStorage.removeItem("token")
        goToLogin(navigate);
    }

    const cardPosts = posts.map((post) => {

        return <Card key={post.id} onClick={() => onClickcard(post.id)}>
            <p><b>Usuário:</b> {post.username}</p>
            <p><b>Texto:</b> {post.body}</p>
            <Divcard>
                <p>
                    <ArrowUpwardIcon alt={'IconeMais'} onClick={() => createvote}/>

                    {post.userVote}
                    <ArrowDownwardIcon alt={'Icone'} /> </p>

                <p> <AddCommentIcon />{post.commentCount} comentários </p>
            </Divcard>
        </Card >
    })





    return (
        <div>
            <Headers
            />
            <Container>
                <Button1>
                <Button onClick={goLogout}>Logout</Button>
                </Button1>
                <h1>Feed</h1>
                <Form onSubmit={post}>
                    <input
                        placeholder="Escreva seu titulo"
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={"title"}
                        variant={"outlined"}
                        type={"title"}
                        required

                    />
                    <input
                        placeholder="Escreva seu post"
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        label={"body"}
                        variant={"outlined"}
                        type={"body"}
                        required

                    />
                    <br />
                    <Button variant="contained" color="primary" onClick={post}>
                        Postar
                    </Button>
                </Form>
                {cardPosts}
            </Container>
        </div>
    )
}

export default FeedPage;


// const curtidas = () => {
//     console.log(curtido)
//     if (curtido === false) {
//         setCurtido({
//             curtido: !curtido,
//             numerodecurtidas: numerodecurtidas + 1
//         })

//     }
// }
// const naocurtido = () => {
//     if (curtido === true) {
//         setCurtido({
//             curtido: !curtido,
//             numerodecurtidas: numerodecurtidas - 1
//         })
//     }
// }