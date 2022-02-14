import './App.css';
import HomePage from './Pages/HomePage';
import styled from 'styled-components';

const Container = styled.div`
   margin-top: 40%;
 
`

function App() {
  return (
    
    <Container>
    <HomePage/>
    </Container>
  
  );
}

export default App;
