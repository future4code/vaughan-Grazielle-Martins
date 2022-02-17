import react, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";


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
const Form = styled.form`
    display:grid;
    justify-items: center;
    margin-top: 20%;
   
`
const useProtectedPage = () => {

    const navigate = useNavigate();
    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token === null) {
            navigate("/login");
        }
    }, []);
};

function CreateTripPage() {
    const { form, onChange, cleanFields } = useForm({ nome: "", planeta: "", data: "", descricao: "", duracao: "" })

    useProtectedPage();

    const criar = (event) => {
        event.preventDefault();
        cleanFields();
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
                    value={form.nome}
                    onChange={onChange}
                    required
                    pattern={"^.{5,}"}
                    title={"O nome deve ter no mínimo 5 letras"}
                />
              {/* //fazer o dropdowns dos planetas */}
                <input
                    placeholder="Data"
                    name={"data"}
                    value={form.data}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder="Descrição"
                    name={"descricao"}
                    value={form.descricao}
                    onChange={onChange}
                    required
                    pattern={"^.{30,}"}
                    title={"O texto deve ter no mínimo 30 letras"}
                />
                <input
                    placeholder="Duração"
                    name={"duracao"}
                    value={form.duracao}
                    onChange={onChange}
                    required
                    min={50}
                    title={"A duração deve ter no mínimo 50 dias"}
               />
                <Button>Criar Viagem</Button>
            </Form>
        </div>
    );
}

export default CreateTripPage;