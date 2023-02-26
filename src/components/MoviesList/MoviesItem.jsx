import React from 'react';
import { useLocation } from 'react-router-dom';
import { Item } from './moviesItem.styled';

function MoviesItem({ id, title }) {
  const location = useLocation();
  return (
    <li key={id}>
      <Item to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Item>
    </li>
  );
}
export default MoviesItem;
