import React, { useState } from "react";
import Book from "../components";
import * as BooksAPI from "../BooksAPI";

const SearchComponent = ({ books, arrangeShelf }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [queryBooks, setQueryBooks] = useState([]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (searchTerm) {
      BooksAPI.search(searchTerm, 20).then((books) => {
        return setQueryBooks({ queryBooks: books });
      });
    }
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search">Close</button>
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
        <ol className="books-grid">
          {queryBooks.map((book) => (
            <Book
              book={book}
              books={books}
              key={book.id}
              arrangeShelf={arrangeShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchComponent;
