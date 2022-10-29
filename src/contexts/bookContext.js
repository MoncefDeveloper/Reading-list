import React from "react";
import { createContext, useEffect, useState } from "react";

export const bookContext = createContext();

const BookContextProvider = (props) => {
  const localData = localStorage.getItem("books");
  const getBooks = localData ? JSON.parse(localData) : [];
  const [showForm, setShowForm] = useState(false);
  const authorsImage = [
    "https://c7.alamy.com/zoomsfr/9/f18586937a494c71a7a16118221e5ada/2hxf0he.jpg",
    "https://c7.alamy.com/zoomsfr/9/ffa1f56546c543b2840d9fcaf3e57e73/2hxf0g8.jpg",
    "https://c7.alamy.com/zoomsfr/9/fe27a31cf80a4d70bc17cbeebf136ef0/2hxf0pk.jpg",
    "https://c7.alamy.com/zoomsfr/9/ee4dc89181b5465494d22fc0a18014ef/2hxf0hm.jpg",
    "https://c7.alamy.com/zoomsfr/9/e355e556228641eb9c99b160c9b5f929/2hxf0g5.jpg",
    "https://c7.alamy.com/zoomsfr/9/d649fab7f6a94769b93d7143c08d0a63/2hxf12y.jpg",
    "https://c7.alamy.com/zoomsfr/9/c176364b9e7e497999ad857d5de0b26a/2hxf0g2.jpg",
    "https://c7.alamy.com/zoomsfr/9/afa64291ccdf45208999f4990cfd1d75/2hxf0dn.jpg",
    "https://c7.alamy.com/zoomsfr/9/954bad96c3734abeac7961ad396fda2c/2hxf0mg.jpg",
  ];

  const [state, setState] = useState({
    books: getBooks,
  });
  const addBook = (e) => {
    e.preventDefault();
    const realID = state.books.length
      ? state.books[state.books.length - 1].id * 1 + 1
      : 1;
    state.books.unshift({
      title: e.target[0].value,
      author: e.target[1].value,
      id: realID,
      image: Math.floor(Math.random() * authorsImage.length),
    });
    setState({ ...state });
    e.target[0].value = "";
    e.target[1].value = "";
    setShowForm(false);
  };

  useEffect(() => {
    // const localData=localStorage.getItem("books");
    // const getBooks=localData?JSON.parse(localData):[];
    localStorage.setItem("books", JSON.stringify(state.books));
  }, [state]);

  const removeBook = (id) => {
    setState({ ...state, books: state.books.filter((book) => book.id !== id) });
  };

  const updateBook = (book, Author, id) => {
    state.books[id].title = book;
    state.books[id].author = Author;
    setState({ ...state });
  };
  return (
    <bookContext.Provider
      value={{
        ...state,
        addBook,
        removeBook,
        updateBook,
        showForm,
        setShowForm,
        authorsImage,
      }}
    >
      {props.children}
    </bookContext.Provider>
  );
};

export default BookContextProvider;
