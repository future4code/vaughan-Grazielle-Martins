import React from "react";
import { Button } from "@material-ui/core";
import Headers from "../../components/Header";
import { Container } from "./FeedStyled";
import { Form } from "./FeedStyled"
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../../constants/urls"
import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "./FeedStyled";

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

    const cardPosts = posts.map((post) =>{
        return <Card key={post.id}>
            <p><b>Usuário:</b> {post.username}</p>
            <p><b>Texto:</b> {post.body}</p>
            <p>{post.userVote}</p>
            <p>{post.commentCount}</p>
        </Card>
    })
    return (
        <div>
            <Headers />
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