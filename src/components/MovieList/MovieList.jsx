import { Link, useLocation } from "react-router-dom";

const MovieList = ({ moviesList }) => {
  const location = useLocation();
  return (
    <ul>
      {moviesList &&
        moviesList.map(({ id, title, vote_average }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location}>
              {title} (rating - {vote_average})
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MovieList;
