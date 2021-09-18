import React from "react";

const BookShelfChanger = ({ book, books, arrangeShelf }) => {
  let currentShelf = "none";
  for (let item of books) {
    if (item.id === book.id) {
      currentShelf = item.shelf;
    }
  }
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(event) => arrangeShelf(book, event.target.value)}
        defaultValue={currentShelf}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
