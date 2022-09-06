import { useContext } from 'react';

import { MoviesContext } from '../../contexts/movies.context';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
const Search = () => {
  const { searchField, setSearchField, searchMovies } =
    useContext(MoviesContext);

  return (
    <div className='search'>
      <input
        placeholder='Search For movies'
        value={searchField}
        onChange={e => setSearchField(e.target.value)}
      />
      <SearchIcon onClick={() => searchMovies(searchField)} />
    </div>
  );
};

export default Search;
