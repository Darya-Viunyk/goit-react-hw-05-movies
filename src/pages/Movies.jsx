import React from 'react';
import { useEffect, useState } from 'react';
import { fetchSearchedMovie } from 'service/Movies.api';
import { Outlet, useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesName = searchParams.get('moviesname');

  useEffect(() => {
    if (moviesName === '' || moviesName === null) {
      return;
    }
    fetchSearchedMovie(moviesName).then(setMovies);
  }, [moviesName]);

  return (
    movies && (
      <>
        <SearchForm setSearchParams={setSearchParams} />
        <MoviesList movies={movies} />

        <Outlet />
      </>
    )
  );
}
export default Movies;
