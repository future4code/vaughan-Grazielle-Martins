import React from 'react';
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada';

function Page1() {
  return (
    <div className="App">
      <h1>Primeira etapa - DADOS GERAIS</h1>
     
      <h2>Qual seu nome?</h2>
      <input type='text' ></input>
      <h2>Qual sua idade?</h2>
      <input type='number'></input>
      <h2>Qual seu email?</h2>
      <input type='email'></input>
      <h2>Qual sua escolaridade?</h2>
      <select>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior Incompleto</option>
          <option>Ensino Superior Completo</option>
      </select>
    </div>
  );
}

export default Page1;