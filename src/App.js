import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through dream-sharing technology.',
      posterURL: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg',
      rating: 9
    },
    {
      title: 'The Dark Knight',
      description: 'Batman faces the Joker, a criminal mastermind who wants to see Gotham descend into anarchy.',
      posterURL: 'https://m.media-amazon.com/images/I/51EbJjlLg4L._AC_.jpg',
      rating: 9.1
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg',
      rating: 8.6
    },
    {
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
      posterURL: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg',
      rating: 8.7
    },
    {
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, and others intertwine in tales of violence and redemption.',
      posterURL: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg',
      rating: 8.9
    },
    {
      title: 'Stranger Things',
      description: 'A group of young friends witness supernatural forces and secret experiments in their town.',
      posterURL: 'https://m.media-amazon.com/images/I/71wGCZQkJjL._AC_SL1200_.jpg',
      rating: 8.8
    },
    {
      title: 'Breaking Bad',
      description: 'A chemistry teacher turned meth kingpin navigates crime, family, and consequences.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png',
      rating: 9.5
    },
    {
      title: 'Avengers: Endgame',
      description: 'The Avengers assemble once more to reverse Thanos\'s actions and restore balance to the universe.',
      posterURL: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg',
      rating: 8.4
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= ratingFilter
  );

  const addMovie = (movie) => setMovies([...movies, movie]);

  return (
    <div className="app">
      <h1>🎬 My Movie App</h1>
      <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
      <AddMovie onAdd={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
