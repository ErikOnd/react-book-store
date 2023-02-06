import { Component } from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

class SingleBook extends Component {

    state = {
        selected: false
    }

    render() {
        return (
            <Col>
                <Card className='mb-4' onClick={() => {

                    this.props.changeBook(this.props.book.asin)
                }}>
                    <Card.Img variant="top" className='card-img' src={this.props.book.img} />
                    <Card.Body className={this.state.selected && 'card-selected'}>
                        <Card.Title id='card-title'>{this.props.book.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}
export default SingleBook;