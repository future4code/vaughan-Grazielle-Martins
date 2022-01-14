import React from 'react';
import styled from 'styled-components'


const BlocoMsg = styled.p`
    padding: 5px;
    margin: 5px;
    background: #DDF7C8;
    word-wrap: break-word;
    border-radius: 0.5em;
    width: 30rem;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`

class Post extends React.Component {
    render(){

    
      return(
        
          <BlocoMsg><b>{this.props.nome}</b>: {this.props.mensagem}</BlocoMsg>
          
      ); 
    
    };
}

export default Post