import React from 'react';
import { useEffect, useState } from 'react';
import { fetchSearchedMovie } from 'service/Movies.api';
import { Outlet, useSearchParams, Link } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesName = searchParams.get('moviesname');

  useEffect(() => {
    if (moviesName === '' || moviesName === null) {
      return;
    }

    fetchSearchedMovie(moviesName).then(setMovies);
  }, [moviesName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ moviesname: form.elements.moviesname.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="moviesname" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
      {/* {movies.map(movie => {
        return(
      <div>
        {movies.length === 0 && <p>Nothing found for your request</p>}
        {movies.length > 0(<MoviesList movies={movies} />)}
      </div>)}} */}
      <Outlet />
    </>
  );
};
