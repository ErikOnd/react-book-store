import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import AddComment from "./AddComment";
import Button from 'react-bootstrap/Button';
import { format, parseISO } from "date-fns";
import Spinner from 'react-bootstrap/Spinner';
import ErrorComponent from "./ErrorComponent";



class CommentArea extends Component {

    //getting asin from book that was klicked

    state = {
        comments: [],
        isLoading: true,
        error: false,
        asin: null
    }

    componentDidMount() {
        this.fetchComments()
    }


    fetchComments = async () => {
        try {
            console.log(this.props.selectedBook)
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.selectedBook}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDNmM2U3MzczODAwMTUzNzQzYjkiLCJpYXQiOjE2NzUzNDMwOTcsImV4cCI6MTY3NjU1MjY5N30._c0I4sL8mFtF5NXSQHQAHBF60mAfVFc4FUVYr7nBI8g"
                }
            })
            let userComments = await response.json()
            this.setState({
                comments: [userComments],
                isLoading: false,
            })

        } catch (error) {
            console.log(13)
            this.setState({
                isLoading: false,
                error: true,
            })
        }
    }

    deleteComment = async (commentId) => {
        try {
            await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDNmM2U3MzczODAwMTUzNzQzYjkiLCJpYXQiOjE2NzUzNDMwOTcsImV4cCI6MTY3NjU1MjY5N30._c0I4sL8mFtF5NXSQHQAHBF60mAfVFc4FUVYr7nBI8g",
                }
            })
        } catch (error) {
            console.log(error)

        }
    }


    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.selectedBook !== this.props.selectedBook)
            this.fetchComments()
    }

    render() {
        return (

            <>
                {this.state.isLoading && (<Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                </Spinner>)}
                { }
                {this.state.error && this.state.asin !== null ? <ErrorComponent></ErrorComponent> : ''}
                {this.props.selectedBook && (this.state.comments.map((userComment) =>
                    userComment.map((singleComment) => (
                        <Card key={this.props.selectedBook} className="my-3">
                            <Card.Header>Author: {singleComment.author}</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Comment: {singleComment.comment}</ListGroup.Item>
                                <ListGroup.Item>Rating: {singleComment.rate}</ListGroup.Item>
                                <ListGroup.Item> Created at: {format(parseISO(singleComment.createdAt), "MMMM, do, yyyy")}</ListGroup.Item>
                                <ListGroup.Item> <Button variant="danger" onClick={() => { this.deleteComment(singleComment._id) }}>Delete Comment</Button></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    )
                    )
                ))}
                {this.props.selectedBook !== undefined &&
                    <AddComment bookAsin={this.props.selectedBook}></AddComment>
                }

            </>
        )
    }
}

export default CommentArea
