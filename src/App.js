import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter as Switch, Route } from "react-router-dom";
function App() {
  const [books, setBooks] = useState([]);
  /*When the component HomePage is render, 
  side effect is fetch API to get all books 
  and put the list of books in state*/
  useEffect(() => {
    BooksAPI.getAll().then((books) => setBooks(books));
  }, []);

  /*We define here a function to allow user
  to move books between shelves*/
  let arrangeShelf = (bookToUpdate, newShelf) => {
    BooksAPI.update(bookToUpdate, newShelf).then((response) => {
      bookToUpdate.shelf = newShelf;

      const updatedBooks = books.filter((book) => book.id !== bookToUpdate.id);
      updatedBooks.push(bookToUpdate);
      setBooks(updatedBooks);
    });
  };

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <HomePage books={books} arrangeShelf={arrangeShelf} />
        </Route>
        <Route path="/search">
          <SearchPage books={books} arrangeShelf={arrangeShelf} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
