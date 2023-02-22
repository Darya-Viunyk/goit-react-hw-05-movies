import React from 'react';
import { useEffect, useState } from 'react';
import { fetchSearchedMovie } from 'service/Movies.api';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

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
  const handleInputChange = event => {
    const newMoviesName = event.currentTarget.value.toLowerCase();
    setMovies(newMoviesName);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="moviesname" onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => {
          return <Link key={movie.id}>{movie.title}</Link>;
        })}
      </ul>
      <Outlet />
    </>
  );
};
