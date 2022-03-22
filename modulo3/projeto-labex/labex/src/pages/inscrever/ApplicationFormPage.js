import react from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { Container } from "../inscrever/ApplicationFormstyled"
import { Button } from "../inscrever/ApplicationFormstyled"
import { Form } from "../inscrever/ApplicationFormstyled"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import ListTripsPage from "../viagens/ListTripsPage";

function ApplicationFormPage() {
    const { form, onChange, cleanFields } = useForm({ nome: "", idade: "", texto: "", profissao: "", pais: "" })
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    const [texto, setTexto] = useState("");
    const [profissao, setProfissao] = useState("");
    const [pais, setPais] = useState("BRA");
    const [viagens, setViagens] = useState([]);
    const [viagem, setViagem] = useState("");
    const navigate = useNavigate();
    const params = useParams();

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
    const viagensOptions = viagens.map((viagem) => {
        return <option key={viagem.id} value={viagem.id}>{viagem.name}</option>

    })

    const onChangeNome = (event) => {
        setNome(event.target.value);
    }
    const onChangeIdade = (event) => {
        setIdade(Number(event.target.value));
    }
    const onChangeTexto = (event) => {
        setTexto(event.target.value);
    }
    const onChangeProfissao = (event) => {
        setProfissao(event.target.value);
    }
    const onChangePais = (event) => {
        setPais(event.target.value);
    }
    const onChangeViagem = (event) => {
        setViagem(event.target.value);
    }

    const getTrips = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/grazielle/trips")
            .then((resposta) => {
                setViagens(resposta.data.trips)
                setViagem(resposta.data.trips[0].id)
                console.log(resposta.data)


            }).catch((erro) => {
                console.log(erro.response);
            })
    }

    const inscrever = () => {
        const body = {
            name: nome,
            age: idade,
            applicationText: texto,
            profession: profissao,
            country: pais
        };
        console.log(body)
        axios
            .post(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/grazielle/trips/${viagem}/apply`, body

            )
            .then((resposta) => {
                alert("Inscrição feita!")


            })
            .catch((error) => {
                console.log("Deu erro: ", error.response);
            })
    }

    useEffect(() => {
        getTrips()
    }, []);
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

                <select
                onChange={onChangeViagem}
                >
                    {viagensOptions}
                </select>
                <input
                    placeholder="Nome"
                    name={"nome"}
                    value={form.name}
                    onChange={onChangeNome}
                    required
                    pattern={"^.{3,}"}
                    title={"O nome deve ter no mínimo 3 letras"}
                />
                <input
                    placeholder="Idade"
                    name={"idade"}
                    value={form.age}
                    onChange={onChangeIdade}
                    required
                    type={"number"}
                    min={18}
                />
                <input
                    placeholder="Texto"
                    name={"texto"}
                    value={form.applicationText}
                    onChange={onChangeTexto}
                    required
                    min={30}
                />
                <input
                    placeholder="Profissão"
                    name={"profissao"}
                    value={form.profession}
                    onChange={onChangeProfissao}
                    required
                    min={10}
                />
                <select onChange={onChangePais}>
                    <option>BRA</option>
                    <option>EUA</option>
                    <option>PER</option>
                </select>
                <Button onClick={inscrever}>Enviar</Button>
            </Form>
        </div>
    );
}

export default ApplicationFormPage;