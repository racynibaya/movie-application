import { useContext } from 'react';

import { MoviesContext } from '../../contexts/movies.context';

import { SearchContainer, SearchInput, SearchIcon } from './search.styles';

const Search = () => {
  const { searchField, setSearchField, searchMovies } =
    useContext(MoviesContext);

  return (
    <SearchContainer>
      <SearchInput
        placeholder='Search For movies'
        value={searchField}
        onChange={e => setSearchField(e.target.value)}
      />
      <SearchIcon onClick={() => searchMovies(searchField)} />
    </SearchContainer>
  );
};

export default Search;
