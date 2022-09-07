import {
  MovieCardContainer,
  YearContainer,
  ImageContainer,
  Image,
  MovieInformationContainer,
  TypeContainer,
  TitleContainer,
} from './movie-card.styles';

const MovieCard = ({ movie }) => {
  const { Year, Poster, Title, Type } = movie;
  return (
    <MovieCardContainer>
      <YearContainer>
        <p>{Year}</p>
      </YearContainer>
      <ImageContainer>
        <Image
          src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'}
          alt={Title}
        />
      </ImageContainer>
      <MovieInformationContainer>
        <TypeContainer>{Type}</TypeContainer>
        <TitleContainer>{Title}</TitleContainer>
      </MovieInformationContainer>
    </MovieCardContainer>
  );
};

export default MovieCard;
