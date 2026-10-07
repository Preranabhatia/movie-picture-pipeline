import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `${process.env.REACT_APP_MOVIE_API_URL}/movies`
        );

        setMovies(response.data.movies);
      } catch (fetchError) {
        console.error('Error fetching movies:', fetchError);
        setError('Failed to load movies.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {movies.map((movie) => (
        <li
          className="movieItem"
          key={movie.id}
          onClick={() => onMovieClick(movie)}
          style={{ cursor: 'pointer' }}
        >
          {movie.title}
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
