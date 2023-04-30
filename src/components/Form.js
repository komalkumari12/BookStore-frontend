import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [addBook, setBookStore] = useState([]);

  async function SubmitTask(event) {
    event.preventDefault();

    if (title === "" || author === "") {
      alert("Fill Required Details to add a Book");
      return;
    }
    const response = await axios.post("http://localhost:5000/api/addNewBook", {
      title: title,
      author: author,
    });

    console.log(response);
    const newBook = {
      id: addBook.length + 1,
      title,
      author,
    };

    setBookStore([...addBook, newBook]);
    settitle("");
    setauthor("");
  }

  return (
    <div>
      <h2>Book Store</h2>
      <form onSubmit={SubmitTask}>
        <label>title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            settitle(event.target.value);
          }}
        ></input>
        <br></br>
        <label>author</label>
        <input
          type="text"
          value={author}
          onChange={(event) => {
            setauthor(event.target.value);
          }}
        ></input>

        <br></br>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default Form;
