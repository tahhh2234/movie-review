import "./MovieItem.css";

function MovieItem(props) {
  const { movie } = props;
  return (
    <div className="movie-item">
      <img src={movie.thumbnail} />
      <h4>{movie.title}</h4>
    </div>
  );
}

export default MovieItem;
