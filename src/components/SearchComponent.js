import React, { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

const SearchComponent = ({ books, arrangeShelf }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [queryBooks, setQueryBooks] = useState([]);
  const [error, setError] = useState(false);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(event.target.value);

    if (searchTerm) {
      //search the list of books
      BooksAPI.search(searchTerm.trim()).then((results) => {
        /*if the list of books > 0, put the list of books
        on state. Otherwise, set the value of error to true*/
        if (results.length > 0) {
          /* for every book resulted from search,
          check if id of resulted book is equal to
          id of one of books in prop. If yes,
          update shelf*/
          const NewShelfBooks = results.map((result) => {
            result.shelf = addShelf(result);
            return result;
          });
          setQueryBooks(NewShelfBooks);
          setError(false);
        } else {
          setQueryBooks([]);
          setError(true);
        }
      });

      // if query is empty, reset state to default
    } else {
      setQueryBooks([]);
      setError(false);
    }

    /*This function do this for a book given (parameter) :
    - verify if the book given is in props.books.
    - If this book is in props.book, he return the shelf of the book 
    This function update the state of a book between
    main page and search page*/
    function addShelf(result) {
      let hasShelf = books.filter((book) => book.id === result.id);
      return hasShelf.length ? hasShelf[0].shelf : "none";
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        {queryBooks.length > 0 && (
          <div>
            <ol className="books-grid">
              {queryBooks.map((book) => (
                <Book book={book} key={book.id} arrangeShelf={arrangeShelf} />
              ))}
            </ol>
          </div>
        )}
        {error && (
          <h3>Your terms are not in authorized search terms. Try Again.</h3>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
