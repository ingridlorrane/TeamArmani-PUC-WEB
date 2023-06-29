import { BrowserRouter } from 'react-router-dom';
import { Container } from './style';
import Navbar from './components/navbar';
import Router from './routes/Router';
import Divisor from './components/divisor';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Router />
      </Container>
      <Divisor />
    </BrowserRouter>
  );
}

export default App;
