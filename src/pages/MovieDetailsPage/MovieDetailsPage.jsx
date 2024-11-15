import { useParams, useLocation } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { BackLink } from "../../components/BackLink/BackLink";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state ?? "/movies";
  console.log(location.state);

  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
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
