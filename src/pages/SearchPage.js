import React from "react";
import SearchComponent from "../components/SearchComponent";

const SearchPage = ({ books, arrangeShelf }) => {
  return (
    <div className="list-books">
      <SearchComponent books={books} arrangeShelf={arrangeShelf} />
    </div>
  );
};

export default SearchPage;
