import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../apiFunctions";

const HomePage = () => {
  const [trendingMoviesList, setTrendingMoviesList] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setError(false);
      try {
        const movies = await getTrendingMovies();
        setTrendingMoviesList(movies);
        console.log(movies);
      } catch (error) {
        setError(error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>
      {error && <p>Error loading data.</p>}
      <MovieList moviesList={trendingMoviesList} />
    </div>
  );
};

export default HomePage;
