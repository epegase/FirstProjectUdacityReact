import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import BookList from "../components/BookList";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  /*When the component HomePage is render, 
  side effect is fetch API to get all books 
  and put the list of books in state*/
  useEffect(() => {
    BooksAPI.getAll().then((books) => setBooks(books));
  }, []);

  /*We define here a function to allow user
  to move books between shelves*/
  let arrangeShelf = (bookToUpdate, newShelf) => {
    BooksAPI.update(bookToUpdate, newShelf).then((response) => {
      bookToUpdate.shelf = newShelf;

      const updatedBooks = books.filter((book) => book.id !== bookToUpdate.id);
      updatedBooks.push(bookToUpdate);
      setBooks(updatedBooks);
    });
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookList books={books} arrangeShelf={arrangeShelf} />
      <div className="open-search">
        <Link to="/search">Search</Link>
      </div>
    </div>
  );
};

export default HomePage;
