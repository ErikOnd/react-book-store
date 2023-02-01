import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fantasyBooks from '../books/fantasy.json';
import historyBooks from '../books/history.json';
import horrorBooks from '../books/horror.json';
import romanceBooks from '../books/romance.json';
import scifiBooks from '../books/scifi.json';
import Badge from 'react-bootstrap/Badge';
import { Component } from 'react';


class AllTheBooks extends Component {

    state = {
        category: null,
    }


    render() {

        return (
            <div className='booksAndCategories'>

                <Row className='mt-3'>
                    <Col className='mr-3'>
                        <Row className='justify-content-center'>
                            <p className='category'
                                onClick={() => {
                                    this.setState({
                                        category: fantasyBooks
                                    })
                                }}
                            >📚</p>
                        </Row>
                        <Row className='justify-content-center'>
                            <h2>Fanatsy</h2>
                        </Row>
                    </Col>
                    <Col className='mr-3'>
                        <Row className='justify-content-center'>
                            <p className='category'
                                onClick={() => {
                                    this.setState({
                                        category: historyBooks
                                    })
                                }}
                            >📚</p>
                        </Row>
                        <Row className='justify-content-center'>
                            <h2>History</h2>
                        </Row>
                    </Col>
                    <Col className='mr-3'>
                        <Row className='justify-content-center'>
                            <p className='category'
                                onClick={() => {
                                    this.setState({
                                        category: horrorBooks
                                    })
                                }}
                            >📚</p>
                        </Row>
                        <Row className='justify-content-center'>
                            <h2>Horror</h2>
                        </Row>
                    </Col>
                    <Col className='mr-3'>
                        <Row className='justify-content-center'>
                            <p
                                className='category'
                                onClick={() => {
                                    this.setState({
                                        category: romanceBooks
                                    })
                                }}
                            >📚</p>
                        </Row>
                        <Row className='justify-content-center'>
                            <h2>Romace</h2>
                        </Row>
                    </Col>
                    <Col className='mr-3'>
                        <Row className='justify-content-center'>
                            <p
                                className='category'
                                onClick={() => {
                                    this.setState({
                                        category: scifiBooks
                                    })
                                }}
                            >📚</p>
                        </Row>
                        <Row className='justify-content-center'>
                            <h2>Scifi</h2>
                        </Row>
                    </Col>
                </Row>
                <Row xs={1} sm={2} md={3} className="g-4 mt-5 justify-content-center">
                    {console.log(this.state.category)}
                    {this.state.category !== null ?
                        this.state.category.map((book) => (
                            <Col className='mb-4' key={book.asin}>
                                <Card className='card-style'>
                                    <Card.Img variant="top" src={book.img} />
                                    <Card.Body className='d-flex align-items-end'>
                                        <Card.Title>{book.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Badge className='book-price' bg="success"><h2>{book.price} €</h2></Badge>
                            </Col>
                        ))
                        : <h3>Select a Category</h3>}

                </Row>
            </div>
        );
    }
}

export default AllTheBooks;