import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  const num_books = books.length;
  var display = "";
  if (num_books === 0) {
    display = "no book to read, add one!";
  } else if (num_books === 1) {
    display = `${num_books} book to go through.`;
  } else {
    display = `${num_books} books to go through.`;
  }
  return (
    <div className="navbar">
      <h1>Stark Book List</h1>
      <p>You currently have {display}</p>
    </div>
  );
};

export default Navbar;
