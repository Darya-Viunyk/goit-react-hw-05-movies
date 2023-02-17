import { useTrendingApi } from 'service/Movies.api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const HomePage = () => {
  const [movies] = useTrendingApi('/trending/movie/day');

  return (
    movies && (
      <>
        <h1>Trending today</h1>;
        <MoviesList movies={movies} />
      </>
    )
  );
};
