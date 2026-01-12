import { useState } from "react";

function MovieList() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Jurassic Park" },
    { id: 2, title: "The Matrix" },
    { id: 3, title: "Inception" },
  ]);

  const [newMovie, setNewMovie] = useState("");

  const addMovie = () => {
    if (newMovie.trim() === "") return;

    const newMovieItem = {
      id: movies.length + 1,
      title: newMovie.trim(),
    };

    setMovies([...movies, newMovieItem]);
    setNewMovie("");
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <br />
      <input
        type="text"
        value={newMovie}
        placeholder="Enter movie title"
        onChange={(e) => setNewMovie(e.target.value)}
      />
      <button onClick={addMovie}>Add Movie</button>

      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}{" "}
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
