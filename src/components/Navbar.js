import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Stark Book List</h1>
      <p>You currently have {books.length} number of books to go through</p>
    </div>
  );
};

export default Navbar;
