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
import { Divcard } from "./FeedStyled";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { goToLogin, goToPost } from "../../routes/coordinator";
import { useParams } from "react-router-dom";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import useProtectedPage from "../../hooks/useProtectPage";


const FeedPage = () => {
    useProtectedPage();
    const token = localStorage.getItem("token");
    const { form, onChange, clear } = useForm({ title: "", body: ""})
    const [posts, setPosts] = useState([]);
    const [card, setCard] = useState({});
    const navigate = useNavigate()
    const params = useParams();

    const post = (event) => {
        criarPost()
        event.preventDefault()
    }

    const criarPost = () => {
        const token = localStorage.getItem("token");

        axios
            .post(`${BASE_URL}/posts`, form,
                {
                    headers: {
                        Authorization: token
                    }
                })
            .then((resposta) => {
                listarPosts()
               
            })
            .catch((erro) =>
                console.log(erro)
            )
    }
    const listarPosts = () => {
        const token = localStorage.getItem("token");
       
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
    
    const createvote = (id) => {
        
        const token = localStorage.getItem("token");
        
        const body = {
            direction: 1
        }
        axios
            .post(`${BASE_URL}/posts/${id}/votes`, body,
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            .then((resposta) => {
              listarPosts()
            })
            .catch((erro) =>
                console.log(erro)
            )
    }
    const changevote = (id) => {
        const token = localStorage.getItem("token");
        
        const body = {
            direction: -1
        }
        axios
            .put(`${BASE_URL}/posts/${id}/votes`, body,
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            .then((resposta) => {
                listarPosts()
            })
            .catch((erro) =>
                console.log(erro)
            )
    }
    const deletevote = (id) => {
        const token = localStorage.getItem("token");

        axios
            .delete(`${BASE_URL}/posts/${id}/votes`,
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            .then((resposta) => {
                listarPosts()
            })
            .catch((erro) =>
                console.log(erro)
            )
    }

    const onClickcard = (id) => {
        goToPost(navigate, id)
    }

    
    const cardPosts = posts.map((post) => {

        return <Card key={post.id} >
            <p><b>Usuário:</b> {post.username}</p>
            <p><b>Texto:</b> {post.body}</p>
            <Divcard>
                <p>
                    <ArrowUpwardIcon alt={'IconeMais'} onClick={()=>createvote(post.id)}/>

                    {post.userVote}
                    <ArrowDownwardIcon alt={'Icone'} onClick={()=>changevote(post.id)} /> 
                    <HighlightOffIcon alt={'Iconedeletar'} onClick={() =>deletevote(post.id)}/></p>

                <p> <AddCommentIcon onClick={() => onClickcard(post.id)}/>{post.commentCount} comentários </p>

            </Divcard>
        </Card >
    })





    return (
        <div>
            <Headers 
            />
            <Container>
                    
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

