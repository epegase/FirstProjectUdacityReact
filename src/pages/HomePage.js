import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import BookList from "../components/BookList";

const HomePage = () => {
  const [books, setBooks] = useState({});
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks({ books });
    });
  }, []);

  let arrangeShelf = (updatedCategory, newShelf) => {
    BooksAPI.update(updatedCategory, newShelf).then((response) => {
      updatedCategory.shelf = newShelf;

      const updatedBooks = books.filter(
        (book) => book.id !== updatedCategory.id
      );
      updatedBooks.push(updatedCategory);
      setBooks({ books: updatedBooks });
    });
  };

  return (
    <div className="list-books">
      <div>
        <h1>MyReads</h1>
        <BookList books={books} arrangeShelf={arrangeShelf} />
      </div>
    </div>
  );
};

export default HomePage;
