import React, { useContext } from "react";
import BookDetails from "./BookDetails";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { books } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return books.length ? (
    <div className="book-list" style={{ background: theme.ui }}>
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} theme={theme} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty" style={{ color: theme.syntax }}>
      No books to read, take a break, enjoy free time.
    </div>
  );
};

export default BookList;
