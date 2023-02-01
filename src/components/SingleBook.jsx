import { Component } from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

class SingleBook extends Component {

    state = {
        selected: false
    }

    render() {
        return (
            <Col key={this.props.book.asin} onClick={() => {
                this.state.selected === false ? this.setState({ selected: true }) : this.setState({ selected: false })
                console.log(this.state.selected)
            }}>
                <Card>
                    <Card.Img variant="top" src={this.props.book.img} />
                    <Card.Body className={this.state.selected && 'cardBorder'}>
                        <Card.Title>{this.props.book.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}
export default SingleBook;