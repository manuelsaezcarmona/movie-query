import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { resultMoviesPage } from '../../services/mockdata';

export default function MoviesList() {
  const movies = resultMoviesPage.results;
  return (
    <section className="movies">
      <p className="movies__text">No se han encontrado Peliculas</p>
      <ul className="movies__list">
        {movies.map((movie) => (
          <li className="movies__item">
            <MovieCard key={movie.id} movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}
