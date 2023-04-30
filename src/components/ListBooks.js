import React, { useEffect, useState } from "react";
import axios from "axios";

const ListBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/getAllBooks").then((res) => {
      setAllBooks(res.data.message);
    });
  }, []);

  async function deleteBook(id) {
    const newBook = allBooks.filter((book) => book._id !== id);
    await axios.delete("http://localhost:5000/api/deleteBook/" + id);
    setAllBooks(newBook);
  }

  return (
    <div>
      <ul>
        <h2>View All Books</h2>
        {allBooks.map((book, index) => {
          return (
            <li key={book._id}>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <button type="button" onClick={() => deleteBook(allBooks._id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListBooks;
