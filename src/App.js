import "./App.css";
import AppHeader from "./AppHeader";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="app-grid">
        <div className="movie-item">
          <img src="/pics/puss.jpg" />
          <h4>Puss in boots: The last wish</h4>
        </div>
        <div className="movie-item">
          <img src="/pics/suz.jpg" />
          <h4>Suzume</h4>
        </div>
        <div className="movie-item">
          <img src="/pics/gog3.jpg" />
          <h4>Gaurdians of the galaxy Vol.3</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
