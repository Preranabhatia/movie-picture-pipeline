import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieDetails({ movie }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!movie?.id) {
      setDetails(null);
      setLoading(false);
      return undefined;
    }

    const fetchMovieDetails = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`${process.env.REACT_APP_MOVIE_API_URL}/movies/${movie.id}`);

        setDetails(response.data.movie);
      } catch (fetchError) {
        console.error('Error fetching movie details:', fetchError);
        setDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();

    return undefined;
  }, [movie?.id]);

  if (!movie) {
    return <p>Please select a movie.</p>;
  }

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  if (!details) {
    return <p>Movie details not available.</p>;
  }

  return (
    <div>
      <h2>{details.title}</h2>
      <p>{details.description}</p>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
};

MovieDetails.defaultProps = {
  movie: null,
};

export default MovieDetails;
