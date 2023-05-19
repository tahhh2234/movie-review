import movies from "../data/movies";
import "./App.css";
import AppHeader from "./components/AppHeader";
import MovieItem from "./components/MovieItem";

function App() {
  const movieElements = movies.map((movie, index) => {
    return <MovieItem key={index} movie={movie} />;
  });
  return (
    <div className="app">
      <AppHeader />
      <div className="app-grid">{movieElements}</div>
    </div>
  );
}

export default App;
