import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Navigation from "./Navigation/Navigation";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";
import { useEffect } from "react";
import { apiTest } from "../apiFunctions";

function App() {
  useEffect(() => {
    // Тут виконуємо асинхронну операцію,
    // наприклад HTTP-запит за інформацією про користувача

    async function fetchTest() {
      await apiTest();
    }

    fetchTest();
  }, []);

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
