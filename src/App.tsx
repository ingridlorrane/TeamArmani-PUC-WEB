import { BrowserRouter } from 'react-router-dom';
import { Container } from './style';
import Navbar from './components/navbar';
import Router from './routes/Router';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Router />
      </Container>
    </BrowserRouter>
  );
}

export default App;
