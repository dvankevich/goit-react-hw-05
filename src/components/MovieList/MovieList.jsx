import { Link, useLocation } from "react-router-dom";

const MovieList = ({ moviesList }) => {
  const location = useLocation();
  return (
    <ul>
      {moviesList &&
        moviesList.map(({ id, title, release_date, vote_average }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location}>
              {title} ({release_date.slice(0, 4)}) [rating - {vote_average}]
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MovieList;
