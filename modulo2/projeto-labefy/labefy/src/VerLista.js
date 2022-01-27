//ver todas as playlists e poder deletar alguma
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
      
    
  render(){
     console.log(this.state)
       const listaPlayList = this.state?.resposta?.result?.list.map((playlist)=>{
         return <p key={playlist.id}>{playlist.name}</p>
      })
  
    return (
    <div className="App">
     <h1>Ver lista</h1>
       {listaPlayList}
    </div>
  );
    }
}