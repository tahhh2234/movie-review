import { useState } from "react";
import movies from "./data/movies";
import "./App.css";
import AppHeader from "./components/AppHeader";
import MovieItem from "./components/MovieItem";
import MoviePost from "./components/MoviePost";
import AppSearch from "./components/AppSearch";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onMovieOpenClick(choosen) {
    setSelectedMovie(choosen);
  }

  function onMovieCloseClick() {
    setSelectedMovie(null);
  }

  const movieElements = movies
    .filter((movie) => {
      return movie.title.includes(searchText);
    })
    .map((movie, index) => {
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
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{movieElements}</div>
        </div>
      </section>
      {moviePost}
    </div>
  );
}

export default App;
