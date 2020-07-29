import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

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
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="navbar"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <h1>Your Book List</h1>
      <p>You currently have {display}</p>
    </div>
  );
};

export default Navbar;
