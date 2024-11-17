import { useParams } from "react-router-dom";
import { getMovieCast } from "../../apiFunctions";
import { useEffect, useState } from "react";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(false);
  const defaultImg =
    "https://dummyimage.com/100x150/cdcdcd/000.jpg&text=No+Image";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setError(false);
      try {
        const cast = await getMovieCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    console.log("CAST: ", movieCast);
  }, [movieCast]);

  return (
    <>
      <h3>Movie cast </h3>
      {error && <p>Error when get movie cast.</p>}
      <div className={s.actorsPage}>
        {movieCast && (
          <ul className={s.actorsList}>
            {movieCast.map((actor) => (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : defaultImg
                  }
                  alt={actor.name}
                  width={120}
                />
                <h4 className={s.actorName}>{actor.name}</h4>
                {/* <p>Popularity: {actor.popularity}</p>
                <p>Character: {actor.character}</p> */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MovieCast;
