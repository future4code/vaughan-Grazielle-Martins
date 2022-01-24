import React from 'react';


function PerguntaFechada() {
  return (
    <div className="App">
     
      {this.props.pergunta}
      {this.props.opcoes}
    </div>
  );
}

export default PerguntaFechada;