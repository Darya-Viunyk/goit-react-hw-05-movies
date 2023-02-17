import React from 'react';
import { MoviesItem } from './MoviesItem';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return <MoviesItem key={movie.id} title={movie.title} id={movie.id} />;
      })}
    </ul>
  );
};
