import { createContext, useState, useEffect } from 'react';

const API_KEY = 'http://www.omdbapi.com/?apikey=e37f805c';

export const MoviesContext = createContext({});

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchField, setSearchField] = useState('');

  const searchMovies = async (title = 'pokemon') => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  const value = {
    movies,
    setMovies,
    searchField,
    setSearchField,
    searchMovies,
  };
  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
