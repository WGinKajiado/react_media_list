import { useState } from "react";

function BookList() {
  const [books, setBooks] = useState([
    { id: 1, title: "The River Between" },
    { id: 2, title: "Things Fall Apart" },
    { id: 3, title: "Facing Mount Kenya" },
  ]);

  const [newBook, setNewBook] = useState("");

  // Function to add a new book
  const addBook = () => {
    if (newBook.trim() === "") return;

    const newBookItem = {
      id: books.length + 1,
      title: newBook.trim(),
    };

    setBooks([...books, newBookItem]);
    setNewBook("");
  };

  // Function to delete a book by id
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <br />
      <input
        type="text"
        value={newBook}
        placeholder="Enter book title"
        onChange={(e) => setNewBook(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>

      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}{" "}
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
