import styled from 'styled-components';
import { MovieCardsContainer } from '../movie-card-list/movie-card-list.style';
import { MovieCardContainer } from '../movie-card/movie-card.styles';

import {
  SearchContainer,
  SearchInput,
  SearchIcon,
} from '../search/search.styles';

export const MovieApplicationContainer = styled.div`
  padding: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const MainTitle = styled.h1`
  font-family: 'Permanent Marker', cursive;
  font-size: 4rem;
  margin-top: 30px;

  letter-spacing: 5px;
  background: linear-gradient(
    90deg,
    rgba(249, 211, 180, 1) 0%,
    rgba(249, 211, 180, 0) 100%
  );
  color: red;
  text-transform: uppercase;
  background-clip: text;
  -webkit-background-clip: text;
  /* -webkit-text-fill-color: transparent; */
  /* width: fit-content; */
`;

export const SubTitle = styled.span`
  color: #fff;
  font-size: 4.5rem;
`;

export const MovieWrapper = styled.div`
  @media screen and (max-width: 600px) {
    ${MovieApplicationContainer} {
      padding: 4rem 2rem;
    }

    ${SearchContainer} {
      padding: 1rem 1.75rem;
      width: 100%;
    }

    ${SearchInput} {
      font-size: 1rem;
    }

    ${SearchIcon} {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (max-width: 400px) {
    ${MovieApplicationContainer} {
      padding: 4rem 1rem;
    }

    ${MainTitle} {
      font-size: 2rem;
    }

    ${MovieCardsContainer} {
      margin-top: 2rem;
    }

    ${MovieCardContainer} {
      width: '100%';
      margin: 1rem;
    }
  }
`;
