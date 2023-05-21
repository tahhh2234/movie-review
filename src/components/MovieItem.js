import "./MovieItem.css";

function MovieItem(props) {
  const { movie, onMovieClick } = props;
  return (
    <div className="movie-item">
      <img
        src={movie.thumbnail}
        onClick={() => {
          onMovieClick(movie);
        }}
      />
      <h4>{movie.title}</h4>
    </div>
  );
}

export default MovieItem;
