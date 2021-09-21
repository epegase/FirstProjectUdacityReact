import React from "react";
// import * as BooksAPI from "../BooksAPI";
import BookList from "../components/BookList";
import { Link } from "react-router-dom";

const HomePage = ({ books, arrangeShelf }) => {
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
