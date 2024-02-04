import React,{useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import axios from 'axios';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
// Import all the necessary stuff 
const API_URL = 'https://65befe60dcfcce42a6f312b5.mockapi.io/Books';
// mock API for books 
function App(){
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
// State for storing book list and for selected book that can be edit
 // Fetching book data on component mount 
useEffect(() => {
    axios.get(API_URL)
    .then((response) =>{
      setBooks(response.data); //Set Book List to fetch data
    })
    .catch((error)=> {
      console.error('Error fectching books:', error); // Log any fetching errors
    });
  }, []); 
// Function to add new book
  const addBook = (newBook) => {
    axios.post(API_URL, newBook)
    .then((response)=> {
      setBooks([...books, response.data]); // update book list with new book
    })
    .catch((error) =>{
      console.error('Error adding book:', error); //Log any add errors
    });
  };
// Function to edit any existing book on list
  const updateBook = (updatedBook) => {
    axios.put(`${API_URL}/${updatedBook.bookId}`, updatedBook) ]
      .then(() => {
        setBooks((prevBooks) => prevBooks.map((book) => 
          (book.bookId === updatedBook.bookId ? updatedBook : book))); // update book list with new correction
        setSelectedBook(null);
      })
      .catch((error) => {
        console.error('Error updating book:', error); // log any update errors
      });
  };
  
  // Function to delete book
  const deleteBook = (bookId) => {
    axios.delete(`${API_URL}/${bookId}`)
      .then(() => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.bookId !== bookId)); // updates list by deleting book
        setSelectedBook(null); // Reset selected book
      })
      .catch((error) => {
        console.error('Error deleting book:', error); // log any delete error
      });
  };
  
  
  
// Render Main app cotainer, book list, and book form
return(
  <Container>
    <h1>Favorite Books</h1>
    <BookList
    books={books}
    setSelectedBook={setSelectedBook}
    deleteBook={deleteBook}
    />
    <BookForm
    selectedBook={selectedBook}
    addBook={addBook}
    updateBook={updateBook}
    />
  </Container>
);

}

export default App;
