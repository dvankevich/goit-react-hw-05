import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  return (
    <div>
      <h2>MovieDetailsPage</h2>
      <div>Now showing Movie details with id - {movieId}</div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
