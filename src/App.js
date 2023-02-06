import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import Container from 'react-bootstrap/Container';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import fantasyBooks from '../src/books/horror.json'
import BookList from './components/BookList';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import CommentArea from './components/CommentArea';
import { Component } from 'react';

class App extends Component {

  state = {
    selectedBook: undefined
  }

  changeSelectedBook = (clickedBook) => {
    this.setState({ selectedBook: clickedBook })
  }

  render() {
    return (
      <div className="App">
        <MyNav></MyNav>
        <Container className='p-0'>
          <Welcome></Welcome>
          <Row>
            <Col>
              <BookList
                books={fantasyBooks}
                changeBook={this.changeSelectedBook}
              ></BookList>
            </Col>
            <Col>
              <CommentArea
                selectedBook={this.state.selectedBook}
              ></CommentArea>
            </Col>
          </Row>
        </Container>
        <MyFooter></MyFooter>
      </div>
    );
  }
}

export default App;
