import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, query) {
  const clearMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(query.toLowerCase().trim()) ||
      movie.description.toLowerCase().includes(query.toLowerCase().trim())
    );
  });

  return clearMovies;
}

export const App = () => {
  const movies = moviesFromServer;
  const [query, setQuery] = useState('');

  const visibleMovies = filterMovies(movies, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
