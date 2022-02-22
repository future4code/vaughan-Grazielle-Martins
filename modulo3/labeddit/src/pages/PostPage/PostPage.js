import React from "react";
import { Button } from "@material-ui/core";
import Headers from "../../components/Header";
import { Container } from "./PostStyled";
import { Form } from "../RegisterPage/RegisterStyled"
import useForm from "../../hooks/useForm";

const PostPage = () => {

    const { form, onChange, clear } = useForm({ texto: "" })

    const post = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <Headers />
            <Container>
                <Form onSubmit={post}>
                    
                    <div>
                        Post
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default PostPage;

//form de escrever e postar, so pode ser acessada logado, caso não redireciona pra login