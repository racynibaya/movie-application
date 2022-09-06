import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoviesProvider } from './contexts/movies.context';

//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </React.StrictMode>
);
