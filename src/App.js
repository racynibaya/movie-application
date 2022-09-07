import { useContext } from 'react';

import { MoviesContext } from './contexts/movies.context';
import './App.css';
import Movie from './components/movie/movie.component';
import Logo from './components/logo/logo.component';

const App = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <>
      <Logo />
      <Movie movies={movies} />
    </>
  );
};

export default App;
