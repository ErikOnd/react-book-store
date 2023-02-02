import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import AddComment from "./AddComment";
import Button from 'react-bootstrap/Button';
import { format, parseISO } from "date-fns";



class CommentArea extends Component {



    state = {
        comments: []
    }


    fetchComments = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookAsin}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDNmM2U3MzczODAwMTUzNzQzYjkiLCJpYXQiOjE2NzUzNDMwOTcsImV4cCI6MTY3NjU1MjY5N30._c0I4sL8mFtF5NXSQHQAHBF60mAfVFc4FUVYr7nBI8g"
                }
            })
            let userComments = await response.json()
            this.setState({ comments: [userComments] })

        } catch (error) {
            console.log(error)

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






    componentDidMount() {
        this.fetchComments()
    }


    render() {

        return (

            <>
                {this.state.comments.map((userComment) =>
                    userComment.map((singleComment) => (
                        <Card key={this.props.bookAsin} className="my-3">
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
                )}
                <AddComment bookAsin={this.props.bookAsin}></AddComment>
            </>
        )

    }
}

export default CommentArea
