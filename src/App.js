import React, { useState } from "react";
import MovieList from "./components/MovieList";
import { Data } from "./Data";
import stylelist from "./components/stylelist.css";
import Filter from "./components/Filter";
import Addmovie from "./components/Addmovie";

function App() {
  const [movies, setMovies] = useState(Data);
  const addmovie = (newmovie) => setMovies([...movies, newmovie]);
  return (
    <div>
      <Filter />
      <Addmovie addmovie={addmovie} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
