import React from 'react';
import { Table, Button } from 'react-bootstrap';

const BookList = ({ books, setSelectedBook, deleteBook }) => {
  return (
    <div>
      <h2>Book List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>${book.price}</td>
              <td>
                <Button variant="info" onClick={() => setSelectedBook(book)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => deleteBook(book.bookId)}>
                Delete
                </Button>

              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookList;
