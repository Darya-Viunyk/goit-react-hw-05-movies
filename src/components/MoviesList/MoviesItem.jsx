import React from 'react';
import { useLocation } from 'react-router-dom';
import { Item } from './moviesItem.styled';

export const MoviesItem = ({ id, title }) => {
  const location = useLocation();
  return (
    <li key={id}>
      <Item to={`${id}`} state={{ from: location }}>
        {title}
      </Item>
    </li>
  );
};
