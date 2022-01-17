import React from 'react';
import logo from './logo.svg';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import FinalPage from './components/FinalPage';
import './App.css';
import styled from 'styled-components'

const BlocoForm = styled.div`
    padding: 5px;
    margin: 5px;
    background: #DDF7C8;
    border-radius: 0.5em;
    width: 30rem;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`
const BlocoBody = styled.body`
  display: flex;
  justify-content: center;
`

class App extends React.Component {

  state = {
    etapa: 1
  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })

  }

  renderizaPage = () => {
    switch (this.state.etapa) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      case 4:
        return <FinalPage />;
    }


  }

  render() {

    return (
      <BlocoBody>
        <BlocoForm className="App">
          {this.renderizaPage()}
          {this.state.etapa < 4 &&
            <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
          }
        </BlocoForm>
      </BlocoBody>
    );
  };
}

export default App;
