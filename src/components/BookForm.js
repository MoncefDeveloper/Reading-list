import React, { useContext, useState } from "react";
import { bookContext } from "../contexts/bookContext";

const BookForm = () => {
  const { addBook, showForm, setShowForm } = useContext(bookContext);
  return (
    <>
      {showForm && (
        <div
          className="bookForm"
          onClick={(e) =>
            [...e.target.classList].includes("bookForm") && setShowForm(false)
          }
        >
          <form onSubmit={addBook}>
            <input type="text" placeholder="Book's Name..." required />
            <input type="text" placeholder="Author..." required />
            <button>Add</button>
          </form>
        </div>
      )}
    </>
  );
};

export default BookForm;
