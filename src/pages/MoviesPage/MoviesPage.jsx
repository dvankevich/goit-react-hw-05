import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../apiFunctions";

const MoviesPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    setError(false);
    if (query === "") return;
    const fetchMovies = async () => {
      try {
        const movies = await searchMovies(query);
        setMovieList(movies);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovies();
  }, [query]);

  useEffect(() => {
    console.log("search movieList", movieList);
  }, [movieList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <div>
      <h2>MoviesPage</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {error && <p>Error loading movie data.</p>}
      {movieList.length !== 0 && <MovieList moviesList={movieList} />}
    </div>
  );
};

export default MoviesPage;
