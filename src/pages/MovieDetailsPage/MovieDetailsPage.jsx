import { useParams, useLocation } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { BackLink } from "../../components/BackLink/BackLink";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../apiFunctions";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state ?? "/movies";
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(false);
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
  console.log(location.state);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setError(false);
      try {
        const movie = await getMovieDetails(movieId);
        setMovieData(movie);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    console.log(movieData);
  }, [movieData]);

  // 2Do Зробити окремі компоненти для відображення деталей фільму, списку акторів і оглядів?
  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <h2>MovieDetailsPage</h2>
      <div>Now showing Movie details with id - {movieId}</div>
      {error && <p>Error</p>}
      {movieData && (
        <>
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                : defaultImg
            }
            width={250}
            alt={movieData.title}
          />
          <h2>{movieData.title}</h2>
          <p>User Score: {movieData.vote_average}</p>
          <h3>Overview</h3>
          <p>{movieData.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movieData.genres.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <hr />
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
