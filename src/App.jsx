import { useState } from "react";
import BookList from "./BookList.jsx";
import MovieList from "./MovieList.jsx";
import MusicList from "./MusicList.jsx";
import "./cssfiles/App.css";

function App() {
  const [category, setCategory] = useState("books");

  return (
    <>
      <h1>Media Lists</h1>
      <div>
        <button onClick={() => setCategory("books")}>Books</button>
        <button onClick={() => setCategory("movies")}>Movies</button>
        <button onClick={() => setCategory("music")}>Music</button>
      </div>

      <div>
        {category === "books" && <BookList />}
        {category === "movies" && <MovieList />}
        {category === "music" && <MusicList />}
      </div>
    </>
  );
}

export default App;
