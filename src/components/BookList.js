import React from "react";
import BookSection from "./BookSection";

/*This component represent a list of books.*/

const BookList = ({ books, arrangeShelf }) => {
  const BookCategories = [
    { category: "currentlyReading", name: "Currently Reading " },
    { category: "wantToRead", name: "Want To Read" },
    { category: "read", name: "Read" },
  ];

  return (
    <div className="list-books-content">
      {BookCategories.map((shelf, index) => {
        const shelfBooks = books.filter(
          (book) => book.shelf === shelf.category
        );
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
              <BookSection books={shelfBooks} arrangeShelf={arrangeShelf} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
