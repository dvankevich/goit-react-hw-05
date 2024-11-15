import axios from "axios";
const apiBearer = import.meta.env.VITE_API_BEARER;

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/trending/movie/day",
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiBearer}`,
  },
};

export function apiTest() {
  axios
    .request(options)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
}
