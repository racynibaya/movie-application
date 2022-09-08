import Search from '../search/search.component';
import MovieCardList from '../movie-card-list/movie-card-list.component';
import {
  MainTitle,
  SubTitle,
  MovieApplicationContainer,
  MovieWrapper,
} from './movie.styles';

const Movie = ({ movies }) => {
  return (
    <MovieWrapper>
      <MovieApplicationContainer>
        <MainTitle>
          Next<SubTitle>flix</SubTitle>
        </MainTitle>
        <Search />

        <MovieCardList movies={movies} />
      </MovieApplicationContainer>
    </MovieWrapper>
  );
};

/* .search button {
  padding: 20px 40px;
  border-radius: 0.5rem;
  margin-left: 15px;
  color: #a1a1a1;
  font-family: var(--font-raleway);
  font-weight: 900;
  letter-spacing: 0.75px;
  font-size: 1.25rem;
  cursor: pointer;
  background: #1f2123;
  -webkit-box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
  box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
} */

export default Movie;
