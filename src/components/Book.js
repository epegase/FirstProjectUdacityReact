import React from "react";
import BookShelfChanger from "../components";

// This component represent a book with all the data(props)

const Book = ({ book, books, arrangeShelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks})`,
          }}
        ></div>
        <BookShelfChanger
          book={book}
          books={books}
          arrangeShelf={arrangeShelf}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book;
