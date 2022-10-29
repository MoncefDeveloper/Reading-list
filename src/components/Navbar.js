import React, { useContext } from "react";
import { bookContext } from "../contexts/bookContext";
import { FaFeatherAlt, FaBook } from "react-icons/fa";

const Navbar = () => {
  const { books, setShowForm } = useContext(bookContext);
  return (
    <div className="navbar">
      <h1>Your LM Reading List</h1>
      <div className="book-logo">
        <FaBook /> <div className="counter">{books.length}</div>
      </div>
      <div onClick={() => setShowForm(true)} className="tweet-btn">
        <FaFeatherAlt />
      </div>
    </div>
  );
};

export default Navbar;
