import React from 'react';
import './MovieCard.css'; // optional: create for styling

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} className="poster" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>⭐ {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
