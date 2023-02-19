import React from 'react';
import { useEffect, useState } from 'react';
import { fetchSearchedMovie } from 'service/Movies.api';
import { useSearchParams } from 'react-router-dom';
import { HomeSubPage } from './HomeSubPage';

export const Movies = () => {
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
      <HomeSubPage movies={movies} />
      {/* <ul>
        {movies.map(movie => {
          return <Link key={movie.id}>{movie.name}</Link>;
        })}
      </ul>
      <Outlet /> */}
    </>
  );
};
