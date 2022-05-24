import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { resultMoviesPage } from '../../services/mockdata';
import styles from './styles.module.css';

export default function MoviesList() {
  const movies = resultMoviesPage.results;
  return (
    <section className={styles.movies}>
      <p className={styles.movies__text}>No se han encontrado Peliculas</p>
      <ul className={styles.movies__list}>
        {movies.map((movie) => (
          <li className={styles.movies__item} key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}
