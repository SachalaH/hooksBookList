import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Book title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={author}
        placeholder="Book author"
        required
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="Add book" />
    </form>
  );
};

export default NewBookForm;
