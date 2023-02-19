import React from 'react';
import { useEffect, useState } from 'react';
import { fetchSearchedMovie } from 'service/Movies.api';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
export const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesName = searchParams.get('username');

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
          return <Link key={movie.id}>{movie.name}</Link>;
        })}
      </ul>
      <Outlet />
    </>
  );
};
