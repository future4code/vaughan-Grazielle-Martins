import react, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useState} from "react";
import axios from "axios";
import {Container} from "../criar/Createstyles.js"
import {Form} from "../criar/Createstyles.js"
import {Button} from "../criar/Createstyles.js"

const useProtectedPage = () => {

    const navigate = useNavigate();
    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token === null) {
            navigate("/admin/trips/list");
        }
    }, []);
};

function CreateTripPage() {
    const { form, onChange, cleanFields } = useForm({ nome: "", planeta: "", data: "", descricao: "", duracao: "" })
    const [nome, setNome] = useState("");
    const [planeta, setPlaneta] = useState("");
    const [data, setData] = useState("");
    const [descricao, setDescricao] = useState("");
    const [duracao, setDuracao] = useState(0);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useProtectedPage();

    const criar = (event) => {
        event.preventDefault();
        cleanFields();
    }

    const onChangeNome = (event) => {
        setNome(event.target.value);
    }
    const onChangePlaneta = (event) => {
        setPlaneta(event.target.value);
    }
    const onChangeData = (event) => {
        setData(event.target.value);
    }
    const onChangeDescricao = (event) => {
        setDescricao(event.target.value);
    }
    const onChangeDuracao = (event) => {
        setDuracao(event.target.value);
    }
    const submitCreate = () => {
      
        const body = {
            name: nome,
            planet: planeta,
            date: data,
            description: descricao,
            durationInDays: duracao
        };
    
        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/grazielle/trips", body,
            {
                headers: {
                    auth: token
                }
            }
        ).then((resposta) => {
           
            navigate("/admin/trips/list");


        }).catch((erro) => {
            alert("Ops! Algo deu errado")
            console.log(erro.response)
        })
    }
    return (
        <div>
            <Container className="App">
                <div>
                    <p>Criar Viagens</p>
                </div>

            </Container>
            <Form onSubmit={criar}>
                <input
                    placeholder="Nome"
                    name={"nome"}
                    value={form.name}
                    onChange={onChangeNome}
                    required
                    pattern={"^.{5,}"}
                    title={"O nome deve ter no mínimo 5 letras"}
                />
            
                <input
                    placeholder="Planeta"
                    name={"planeta"}
                    value={form.planet}
                    onChange={onChangePlaneta}
                    required
                />
                <input
                    placeholder="Data"
                    name={"data"}
                    value={form.date}
                    onChange={onChangeData}
                    required
                />
                <input
                    placeholder="Descrição"
                    name={"descricao"}
                    value={form.description}
                    onChange={onChangeDescricao}
                    required
                    pattern={"^.{30,}"}
                    title={"O texto deve ter no mínimo 30 letras"}
                />
                <input
                    placeholder="Duração"
                    name={"duracao"}
                    value={form.durationInDays}
                    onChange={onChangeDuracao}
                    required
                    min={50}
                    title={"A duração deve ter no mínimo 50 dias"}
               />
                <Button onClick={submitCreate}>Criar Viagem</Button>
            </Form>
        </div>
    );
}

export default CreateTripPage;