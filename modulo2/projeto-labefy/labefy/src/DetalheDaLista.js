//ver os detalhes de uma playlist, ver nome e  músicas e as música com botao play e pause

// import React from "react";
// import axios from "axios";


// export default class DetalheDaLista extends React.Component {

//         componentDidMount(){
//             this.verMusicas()
//         }
    
//         verMusicas = async (event) => {
//             const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`
            
//            try{
//                const resposta = await axios.get(url, {
//                     headers: {
//                         Authorization: "grazielle-martins-vaughan"
//                     },
//                     params: {
//                         playlistId: event.target.dataset.id
//                     }
                    
//                }) 
              
               
//                this.setState({resposta: resposta.data})
               
//            }catch(error) {
//                alert("Ocorreu um erro ao visualizar a lista, tente novamente!")
//                console.log(error.respose)
//            }
//         };
          
    
//       render(){
            
//         return (
//         <div className="App">
//          <h1>Detalhe Da Lista </h1>
//            {this.verMusicas()}
           
    
//         </div>
//       );
//         }
    
// }