import React from "react";
import Book from "./Book";

/*This component represent liste of books per shelf.*/

const BookSection = ({ books, arrangeShelf }) => {
  return (
    <div>
      <ol className="books-grid">
        {books.map((book) => (
          <Book
            book={book}
            key={book.id}
            books={books}
            arrangeShelf={arrangeShelf}
          />
        ))}
      </ol>
    </div>
  );
};

export default BookSection;
