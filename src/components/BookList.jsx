import { Row } from "react-bootstrap"
import SingleBook from "./SingleBook"
import InputGroup from "react-bootstrap/InputGroup"
import { Form } from "react-bootstrap"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import { Component } from "react"

class BookList extends Component {
    state = {
        searchQuery: ''
    }

    filteredBooks = () => {
        return this.props.books.filter(book => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
    }

    render() {
        return (

            <div>
                <InputGroup className="my-3" >
                    <Form.Control aria-label="Text input with dropdown button" type='text' placeholder='Seach'
                        onChange={(e) => {
                            this.setState({ searchQuery: e.target.value })
                            this.filterBooks()
                        }}
                    />
                    <DropdownButton
                        variant="outline-info"
                        title="Category"
                        id="input-group-dropdown-2"
                        align="end"
                    >
                        <Dropdown.Item>Fantasy</Dropdown.Item>
                        <Dropdown.Item>History</Dropdown.Item>
                        <Dropdown.Item>Horror</Dropdown.Item>
                        <Dropdown.Item>Romance</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
                <Row sm={1} md={2} className="g-4">
                    {this.filteredBooks().map((book) => (
                        <SingleBook book={book} key={book.asin} selectedBook={this.props.selectedBook} changeBook={this.props.changeBook}></SingleBook>
                    ))}
                </Row>
            </div >
        )
    }
}
export default BookList