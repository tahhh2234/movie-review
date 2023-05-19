import { useState } from "react";
import movies from "./data/movies";
import "./App.css";
import AppHeader from "./components/AppHeader";
import MovieItem from "./components/MovieItem";
import MoviePost from "./components/MoviePost";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const movieElements = movies.map((movie, index) => {
    return <MovieItem key={index} movie={movie} />;
  });

  let moviePost = null;
  if (!!selectedMovie) {
    moviePost = <MoviePost movie={selectedMovie} />;
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
