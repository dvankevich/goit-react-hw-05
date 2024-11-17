import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../apiFunctions";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setError(false);
      try {
        const review = await getMovieReviews(movieId);
        setMovieReview(review);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  // useEffect(() => {
  //   console.log(movieReview);
  // }, [movieReview]);

  // movies with no reviews
  // http://localhost:5173/movies/597028 - King
  // http://localhost:5173/movies/1144911 - Skincare

  //2Do додати санітайзер для {review.content}

  return (
    <div>
      <h3>Movie reviews</h3>
      {error && <p>Error loading movie reviews</p>}
      {movieReview && (
        <ul>
          {movieReview.map((review) => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>

              <p>{review.content}</p>
              <p>
                <em>Created at {review.created_at.slice(0, 10)}</em>
              </p>
              <hr />
            </li>
          ))}
        </ul>
      )}

      {movieReview !== null && movieReview.length === 0 && (
        <p>No reviews for this movie</p>
      )}
    </div>
  );
};

export default MovieReviews;
