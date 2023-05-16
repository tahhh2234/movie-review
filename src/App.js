import "./App.css";
import AppHeader from "./components/AppHeader";
import MovieItem from "./components/MovieItem";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="app-grid">
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
      </div>
    </div>
  );
}

export default App;
