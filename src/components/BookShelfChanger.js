import React from "react";

/*This component represent the control of a book, 
to move a book for one shelf to another.*/

const BookShelfChanger = ({ book, arrangeShelf }) => {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(event) => arrangeShelf(book, event.target.value)}
        defaultValue={book.shelf ? book.shelf : "none"}
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
