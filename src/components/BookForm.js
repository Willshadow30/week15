import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
// import necessary stuff

//initial state for form fields
const initialState = {
    title: '',
    author: '',
    price: '',
};
//BookForm component define
const BookForm = ({ selectedBook, addBook, updateBook }) => {
    const [bookData, setBookData] = useState(initialState);
    //State for managing data
    // Effect to populate form when editing book
    useEffect(() => {
        if (selectedBook) {
            setBookData(selectedBook); // If editing, fill form with book data
        } else {
            setBookData(initialState);// Reset Form when not in use
        }
    }, [selectedBook]);

      // Handling form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent default  of form submission behavior
        if(bookData.title && bookData.author && bookData.price) {
            if(selectedBook) {
                updateBook(bookData); // updates book if edit
            } else {
                addBook(bookData); // Add new book if not edit
            }
            setBookData(initialState); // Reset form after use
        } else {
            alert('Please fill in all fields'); // Alert pops up to warn user to fill info 
        }
    };
    // Render Book form
    return (
        <div>
            <h2>{selectedBook ? 'Edit Book' : 'Add New Book'}</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="title">Title</Form.Label>
                    <Form.Control
                        id="title"
                        type="text"
                        placeholder="Enter title"
                        value={bookData.title}
                        onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="author">Author</Form.Label>
                    <Form.Control
                        id="author"
                        type="text"
                        placeholder="Enter Author"
                        value={bookData.author}
                        onChange={(e) => setBookData({...bookData, author: e.target.value })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="price">Price</Form.Label>
                    <Form.Control
                        id="price"
                        type="number"
                        placeholder="Enter price"
                        value={bookData.price}
                        onChange={(e) => setBookData({ ...bookData, price: e.target.value })}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {selectedBook ? 'Update' : 'Add'}
                </Button>
            </Form>
        </div>
    );
};

export default BookForm;