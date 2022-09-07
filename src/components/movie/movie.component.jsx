import Search from '../search/search.component';
import MovieCardList from '../movie-card-list/movie-card-list.component';
import { MainTitle, MovieApplicationContainer } from './movie.styles';

const Movie = ({ movies }) => {
  return (
    <MovieApplicationContainer>
      <MainTitle>Movie Land: React</MainTitle>
      <Search />

      <MovieCardList movies={movies} />
    </MovieApplicationContainer>
  );
};

export default Movie;
