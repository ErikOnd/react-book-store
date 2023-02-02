import { Component } from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

class SingleBook extends Component {

    state = {
        selected: false
    }

    render() {
        return (
            <Col className='mb-4' onClick={() => {
                this.state.selected === false ? this.setState({ selected: true }) : this.setState({ selected: false })
                console.log(this.state.selected)
            }}>
                <Card>
                    <Card.Img variant="top" className='card-img' src={this.props.book.img} />
                    <Card.Body className={this.state.selected && 'card-selected'}>
                        <Card.Title>{this.props.book.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}
export default SingleBook;