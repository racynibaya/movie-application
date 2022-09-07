import MovieCard from '../movie-card/movie-card.component';
import {
  EmptyContainer,
  EmptyMessage,
  MovieCardsContainer,
} from './movie-card-list.style';

const MovieCardList = ({ movies }) => {
  return (
    <MovieCardsContainer>
      {movies && movies.length > 0 ? (
        movies.map(movie => <MovieCard movie={movie} key={movie.Title} />)
      ) : (
        <EmptyContainer>
          <EmptyMessage>No movies found</EmptyMessage>
        </EmptyContainer>
      )}
    </MovieCardsContainer>
  );
};

export default MovieCardList;
