import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MoviesItem = ({ id, title }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
};
