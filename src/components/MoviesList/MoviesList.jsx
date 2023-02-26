import React from 'react';
import MoviesItem from './MoviesItem';
import { List } from './moviesList.styled';

function MoviesList({ movies }) {
  return (
    <List>
      {movies.map(movie => {
        return <MoviesItem key={movie.id} title={movie.title} id={movie.id} />;
      })}
    </List>
  );
}
export default MoviesList;
