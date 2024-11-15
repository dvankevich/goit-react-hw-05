import axios from "axios";
const apiBearer = import.meta.env.VITE_API_BEARER;
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiBearer}`,
  },
};

/**
 *
 * @param {string} timeWindow - day, week.
 * @returns - films Array
 */
export const getTrendingMovies = async (timeWindow = "day") => {
  const response = await axios.get(`trending/movie/${timeWindow}`, options);
  return response.data.results;
};

/**
 *
 * @param {movieId} movieId
 * @returns {*} movie details
 */
export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}`, options);
  return response.data;
};
