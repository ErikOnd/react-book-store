import { Component } from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CommentArea from './CommentArea';

class SingleBook extends Component {

    state = {
        selected: false
    }

    render() {
        return (
            <Col>
                <Card className='mb-4' onClick={() => {
                    this.state.selected === false ? this.setState({ selected: true }) : this.setState({ selected: false })
                }}>
                    <Card.Img variant="top" className='card-img' src={this.props.book.img} />
                    <Card.Body className={this.state.selected && 'card-selected'}>
                        <Card.Title>{this.props.book.title}</Card.Title>
                    </Card.Body>
                </Card>
                {this.state.selected && (<CommentArea bookAsin={this.props.book.asin}></CommentArea>)}
            </Col>
        );
    }
}
export default SingleBook;