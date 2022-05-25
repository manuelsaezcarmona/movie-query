import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import styles from './styles.module.css';
import { startGetAllMovies } from '../../redux/actions/movie';
import { DEFAULT_VALUE } from '../../services/constants';

export default function MoviesList() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(startGetAllMovies(DEFAULT_VALUE, 1));
    setLoading(true);
  }, []);

  if (!loading) {
    return <div className="spinner" />;
  }
  return (
    <section className={styles.movies}>
      {movies.length ? (
        <ul className={styles.movies__list}>
          {movies.map((movie) => (
            <li className={styles.movies__item} key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.movies__text}>No se han encontrado Películas</p>
      )}
    </section>
  );
}
