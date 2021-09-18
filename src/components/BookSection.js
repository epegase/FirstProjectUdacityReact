import React from "react";
import Book from "./Book";

const BookSection = ({ books, arrangeShelf }) => {
  return (
    <div>
      <ol className="books-grid">
        {books.map((book) => (
          <Book
            book={book}
            books={books}
            key={book.id}
            arrangeShelf={arrangeShelf}
          />
        ))}
      </ol>
    </div>
  );
};

export default BookSection;
