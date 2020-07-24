import React, { createContext, useState } from "react";
import uuid from "uuid/dist/v1";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The 5AM club", author: "Robin Sharma", id: uuid() },
    {
      title: "The monk who sold his Ferrari",
      author: "Robin Sharma",
      id: uuid(),
    },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
