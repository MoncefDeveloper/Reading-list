import React, { useContext } from "react";
import { bookContext } from "../contexts/bookContext";
import BookDetail from "./BookDetails";

const BookList = () => {
  const { books, removeBook } = useContext(bookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book, id) => {
          return (
            <BookDetail
              books={book}
              key={id}
              id2={id}
              removeBook={removeBook}
            />
          );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">
      You D'ont Have Any Books Right Now Try To Add One....(Right bottom)
    </div>
  );
};

export default BookList;
