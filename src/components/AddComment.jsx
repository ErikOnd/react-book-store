import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Component } from 'react';

class AddComment extends Component {


    state = {
        commentObject: {
            comment: '',
            rate: '',
            elementId: this.props.bookAsin
        }
    };

    sendComment = async () => {
        console.log(this.state)

        try {
            console.log(JSON.stringify(this.state.commentObject))
            await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
                method: 'POST',
                body: JSON.stringify(this.state.commentObject),
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDNmM2U3MzczODAwMTUzNzQzYjkiLCJpYXQiOjE2NzUzNDMwOTcsImV4cCI6MTY3NjU1MjY5N30._c0I4sL8mFtF5NXSQHQAHBF60mAfVFc4FUVYr7nBI8g",
                    "Content-Type": "application/json"
                }
            })
        } catch (error) {
            console.log(error)
        }
    }




    render() {
        return (
            <Form>
                <h2 className="mt-4">Create a new comment</h2>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control type="text" placeholder="Comment"
                        value={this.state.commentObject.comment}
                        onChange={(e) => {
                            this.setState({
                                commentObject: {
                                    ...this.state.commentObject,
                                    comment: e.target.value,
                                }
                            })
                        }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" placeholder="Rating 1-5"
                        value={this.state.commentObject.rate}
                        onChange={(e) => {
                            this.setState({
                                commentObject: {
                                    ...this.state.commentObject,
                                    rate: e.target.value,
                                }
                            })
                        }} />
                </Form.Group>

                <Button variant="primary" type="submit" className='mt-2 mb-5' onClick={(e) => {
                    e.preventDefault()
                    this.sendComment()
                }}>
                    Submit
                </Button>

            </Form>
        );
    }

}

export default AddComment;