import { useTrendingApi } from 'service/Movies.api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Header } from './homepage.styled';

function HomePage() {
  const [movies] = useTrendingApi('/trending/movie/day');

  return (
    movies && (
      <>
        <Header>Trending today</Header>;
        <MoviesList movies={movies} />
      </>
    )
  );
}
export default HomePage;
