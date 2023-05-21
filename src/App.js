import { useState } from "react";
import movies from "./data/movies";
import "./App.css";
import AppHeader from "./components/AppHeader";
import MovieItem from "./components/MovieItem";
import MoviePost from "./components/MoviePost";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  function onMovieOpenClick(choosen) {
    setSelectedMovie(choosen);
  }

  function onMovieCloseClick() {
    setSelectedMovie(null);
  }

  const movieElements = movies.map((movie, index) => {
    return (
      <MovieItem key={index} movie={movie} onMovieClick={onMovieOpenClick} />
    );
  });

  let moviePost = null;
  if (!!selectedMovie) {
    moviePost = (
      <MoviePost movie={selectedMovie} onBgClick={onMovieCloseClick} />
    );
  }

  return (
    <div className="app">
      <AppHeader />
      <div className="app-grid">{movieElements}</div>
      {moviePost}
    </div>
  );
}

export default App;
