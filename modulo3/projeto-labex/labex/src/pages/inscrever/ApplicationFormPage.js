import react from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import {Container} from "../inscrever/ApplicationFormstyled"
import {Button} from "../inscrever/ApplicationFormstyled"
import {Form} from "../inscrever/ApplicationFormstyled"

function ApplicationFormPage() {
    const { form, onChange, cleanFields } = useForm({ nome: "", idade: "", texto: "", profissao: "" })
    const navigate = useNavigate();

    const goInscricao = () => {
        navigate("/trips/application");
    }

    const goHome = () => {
        navigate("/");
    }

    const enviar = (event) => {
        event.preventDefault();
        cleanFields();
    }
    return (
        <div>
            <Container className="App">
                <div>
                    <p>Inscreva-se para uma viagem</p>

                </div>
                <div>
                    <Button onClick={goHome}>Voltar</Button>

                </div>

            </Container>
            <Form onSubmit={enviar}>


                 {/* //fazer o dropdowns das viagens */}
                <input
                    placeholder="Nome"
                    name={"nome"}
                    value={form.nome}
                    onChange={onChange}
                    required
                    pattern={"^.{3,}"}
                    title={"O nome deve ter no mínimo 3 letras"}
                />
                <input
                    placeholder="Idade"
                    name={"idade"}
                    value={form.idade}
                    onChange={onChange}
                    required
                    type={"number"}
                    min={18}
                />
                <input
                    placeholder="Texto"
                    name={"texto"}
                    value={form.texto}
                    onChange={onChange}
                    required
                    min={30}
                />
                <input
                    placeholder="Profissão"
                    name={"profissao"}
                    value={form.profissao}
                    onChange={onChange}
                    required
                    min={10}
                />
                 {/* //fazer o dropdowns dos paises */}
                <Button>Enviar</Button>
            </Form>
        </div>
    );
}

export default ApplicationFormPage;