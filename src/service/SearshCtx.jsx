import { createContext, useMemo, useRef } from 'react';

const initCtx = {
  search: '',
  movies: [],
};

export const searchMoviesCtx = createContext(initCtx);

export const SearchMoviesCtx = ({ children }) => {
  const searchRef = useRef(initCtx.search);
  const moviesRef = useRef(initCtx.movies);
  const providerValue = useMemo(() => ({ searchRef, moviesRef }), []);

  return (
    <searchMoviesCtx.Provider value={providerValue}>
      {children}
    </searchMoviesCtx.Provider>
  );
};
