import { useContext } from 'react';

import { MoviesContext } from './contexts/movies.context';
import './App.css';
import MovieCard from './components/movie-card/movie-card.component';
import Search from './components/search/search.component';

const App = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <>
      <div className='logo'>
        <div>
          {' '}
          <span>Racyn.</span>
        </div>
      </div>
      <div className='app'>
        <h1>Movie Land: React</h1>
        <Search />

        <div className='container'>
          {movies && movies.length > 0 ? (
            movies.map(movie => <MovieCard movie={movie} key={movie.Title} />)
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
