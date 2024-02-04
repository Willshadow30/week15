import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BookItem = ({ book, setSelectedBook, deleteBook }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Author: {book.author}</Card.Subtitle>
          <Card.Text>Price: ${book.price}</Card.Text>
          <Button variant="info" onClick={() => setSelectedBook(book)}>Edit</Button>{' '} 
          <Button variant="danger" onClick={() => deleteBook(book.id)}>Delete</Button>  
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookItem;
/// Buttons added to edit or delete any info on book list.