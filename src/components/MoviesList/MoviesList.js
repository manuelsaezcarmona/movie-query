import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import styles from './styles.module.css';
import { startGetAllMovies } from '../../redux/actions/movie';

import Pagination from '../Pagination/Pagination';

export default function MoviesList() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movie);
  const { currentpage, searchfilm } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(startGetAllMovies(searchfilm, currentpage));

    setLoading(true);
  }, [currentpage]);

  if (!loading) {
    return <div className="spinner" />;
  }
  return (
    <>
      <Pagination />
      <section className={styles.movies}>
        {movies.length ? (
          <ul className={styles.movies__list}>
            {movies.map((movie) => (
              <li className={styles.movies__item} key={`${movie.id}_mov`}>
                <MovieCard movie={movie} />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.movies__text}>No se han encontrado Películas</p>
        )}
      </section>
    </>
  );
}
