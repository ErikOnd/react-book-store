import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import Container from 'react-bootstrap/Container';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <Container>
        <Welcome></Welcome>
        <AllTheBooks></AllTheBooks>
      </Container>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
