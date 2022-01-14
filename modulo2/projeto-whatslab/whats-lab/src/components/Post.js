import React from 'react';
import styled from 'styled-components'


const BlocoMsg = styled.p`
    padding: 0 10px;
`


class Post extends React.Component {
    render(){

    
      return(
        
        <BlocoMsg><b>{this.props.nome}</b>: {this.props.mensagem}</BlocoMsg>
        
      ); 
    
    };
}

export default Post