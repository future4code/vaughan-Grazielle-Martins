
import React from "react";
import axios from "axios";
import CriarLista from "./CriarLista";

export default class VerLista extends React.Component {

    componentDidMount(){
        this.verPlaylist()
    }

    verPlaylist = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        
       try{
           const resposta = await axios.get(url, {
                headers: {
                    Authorization: "grazielle-martins-vaughan"
                }
           })
           
           this.setState({resposta: resposta.data})
           
       }catch(error) {
           alert("Ocorreu um erro ao criar a lista, tente novamente!")
       }
    };
      
    removerLista = (event) => {
        console.log(event.target.dataset.id)
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${event.target.dataset.id}`
        const axiosConfig = { headers: { Authorization: "grazielle-martins-vaughan" }, params: {playlistId: event.target.dataset.id} }
        axios.delete(url, axiosConfig).then((resposta) => {
            alert("Removido com sucesso!!")
            this.verPlaylist()
        }).catch((erro) => {
            alert("Erro ao remover!!")
            console.log(erro.response)
        })
    }
  render(){
        
       const listaPlayList = this.state?.resposta?.result?.list.map((playlist)=>{
        
         return <div key={playlist.id}> <p >{playlist.name}</p> <button data-id={playlist.id} onClick={this.removerLista}>Deletar</button> </div> 
      })
  
    return (
    <div className="App">
     <h1>Ver lista</h1>
       {listaPlayList}
       

    </div>
  );
    }
}