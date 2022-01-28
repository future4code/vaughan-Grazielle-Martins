
import React from "react";
import axios from "axios";
import CriarLista from "./CriarLista";

export default class VerLista extends React.Component {

    state = {
        mudarTela: "verlista"
    }
    
    mudarDeTela = (nomeDaTela) => {
        this.setState({mudarTela: nomeDaTela})
    };

    componentDidMount() {
        this.verPlaylist()
    }

    verPlaylist = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        try {
            const resposta = await axios.get(url, {
                headers: {
                    Authorization: "grazielle-martins-vaughan"
                }
            })

            this.setState({ resposta: resposta.data })

        } catch (error) {
            alert("Ocorreu um erro ao criar a lista, tente novamente!")
        }
    };

    removerLista = (event) => {
        console.log(event.target.dataset.id)
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${event.target.dataset.id}`
        const axiosConfig = { headers: { Authorization: "grazielle-martins-vaughan" }, params: { playlistId: event.target.dataset.id } }
        axios.delete(url, axiosConfig).then((resposta) => {
            alert("Removido com sucesso!!")
            this.verPlaylist()
        }).catch((erro) => {
            alert("Erro ao remover!!")
            console.log(erro.response)
        })
    }

    detalheDaLista = async (event) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${event.target.dataset.id}/tracks`

        try {
            const resposta = await axios.get(url, {
                headers: {
                    Authorization: "grazielle-martins-vaughan"
                },
                params: {
                    playlistId: event.target.dataset.id
                }

            })
            this.setState({ musicas: resposta.data })
            this.setState({ mudarTela: "verdetalhes" })
            this.setState({ nomeplaylist: event.target.dataset.nome })

        } catch (error) {
            alert("Ocorreu um erro ao visualizar a lista, tente novamente!")
        }
    };

render(){

    const listaPlayList = this.state?.resposta?.result?.list.map((playlist) => {
        return <div key={playlist.id}> <h3 >{playlist.name}</h3> <button data-id={playlist.id} data-nome={playlist.name} onClick={this.detalheDaLista}>Ver Detalhes</button> <button data-id={playlist.id} onClick={this.removerLista}>Deletar</button> </div>
    })

    const musicaList = this.state?.musicas?.result?.tracks.map((musica) => {
        return <div key={musica.id}> <p>{musica.name}</p></div>
    })

    const nomeplaylist = () => {
        if(this.state.mudarTela === "verdetalhes"){
            return <h3>{this.state.nomeplaylist}</h3>
        }

    } 

    return (
        <div className="App">
            
            <h1>{this.state.mudarTela === "verlista" ? "Ver Listas" : "Ver Detalhes"}</h1>
            {nomeplaylist()}
            {this.state.mudarTela === "verlista" ? listaPlayList : musicaList}
   



        </div>
    );
}
}