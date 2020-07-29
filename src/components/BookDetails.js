import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book, theme }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li
      style={{ background: theme.bg }}
      onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
    >
      <div style={{ color: theme.syntax }} className="title">
        {book.title}
      </div>
      <div style={{ color: theme.syntax }} className="author">
        {book.author}
      </div>
    </li>
  );
};

export default BookDetails;
