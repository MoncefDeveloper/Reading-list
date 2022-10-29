import React from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/bookContext";

function App() {
  return (
    <div className="countiner">
      <div className="App">
        <BookContextProvider>
          <Navbar />
          <BookList />
          <BookForm />
        </BookContextProvider>
      </div>
    </div>
  );
}

export default App;
