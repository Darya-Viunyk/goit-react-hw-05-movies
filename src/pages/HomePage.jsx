import { useTrendingApi } from 'service/Movies.api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Header } from './homepage.styled';
import { Box } from './homepage.styled';

function HomePage() {
  const [movies] = useTrendingApi('/trending/movie/day');

  return (
    movies && (
      <>
        <Box>
          <Header>Trending today</Header>
        </Box>
        <MoviesList movies={movies} />
      </>
    )
  );
}
export default HomePage;
