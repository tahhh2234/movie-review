import "./MoviePost.css";

function MoviePost(props) {
  const { movie, onBgClick } = props;
  return (
    <div className="movie-post">
      <div className="movie-post-bg" onClick={onBgClick} />
      <div className="movie-post-content">
        <img src={movie.thumbnail} />
        <h4>{movie.title}</h4>
      </div>
    </div>
  );
}

export default MoviePost;
