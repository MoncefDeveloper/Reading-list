import React, { useContext, useState } from "react";
import { bookContext } from "../contexts/bookContext";
import { AiFillSetting } from "react-icons/ai";
import { MdBookmarkRemove } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";

const BookDetail = ({ books, removeBook, id2 }) => {
  const { title, author, id, image } = books;

  const [state, setState] = useState({
    isForUpdate: false,
    realtitle: title,
    realauthor: author,
  });

  const updateTitle = (e) => {
    const realtitle = e.target.value;
    setState({ ...state, realtitle });
  };

  const updateAuthor = (e) => {
    const realauthor = e.target.value;
    setState({ ...state, realauthor });
  };

  const { updateBook, authorsImage } = useContext(bookContext);
  const change = () => {
    setState({ ...state, isForUpdate: !state.isForUpdate });
  };

  const updateEvrithing = (e) => {
    e.preventDefault();
    const { realauthor, realtitle } = state;
    updateBook(realtitle, realauthor, id2);
    change();
    e.target[0].value = "";
    e.target[1].value = "";
  };

  const one = () => {
    return (
      <form onSubmit={updateEvrithing} className="form-update">
        <img src={authorsImage[image]} alt="" />
        <div className="textInput">
          <input
            type="text"
            defaultValue={title}
            placeholder={title}
            onChange={updateTitle}
            required
          />
          <input
            type="text"
            defaultValue={author}
            placeholder={author}
            onChange={updateAuthor}
            required
          />
        </div>
        <button className="accept" type="submit">
          <FiCheckCircle />
        </button>
      </form>
    );
  };
  const two = () => {
    return (
      <div className="book">
        <img src={authorsImage[image]} alt="" />
        <div className="title">
          <div>
            <b>Title :</b> {title}
          </div>
          <div>
            <b>Author :</b> {author}
          </div>
        </div>
        <div className="options">
          <button className="btn" onClick={change}>
            <AiFillSetting />
          </button>
          <span onClick={() => removeBook(id)}>
            <MdBookmarkRemove />
          </span>
        </div>
      </div>
    );
  };

  return <li>{state.isForUpdate ? one() : two()}</li>;
};

export default BookDetail;
