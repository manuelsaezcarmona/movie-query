import React from 'react';
import { BsBookmarkPlus, BsBookmarkDashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DEFAULT_WIDTH_POSTER, IMAGE_URL } from '../../services/constants';
import styles from './styles.module.css';
import MovieCardEmptyImage from '../MovieCardEmptyImage/MovieCardEmptyImage';
import { setActiveMovie } from '../../redux/actions/movie';
import { addFavourite, deleteFavourite } from '../../redux/actions/user';
import { selectFavMovieById } from '../../redux/selectors/index';

export default function MovieCard({ movie }) {
  const imgPosterPath = `${IMAGE_URL}/${DEFAULT_WIDTH_POSTER}${movie.poster_path}`;

  const dispatch = useDispatch();

  const handleAddFavourite = () => {
    dispatch(setActiveMovie(movie));
    dispatch(addFavourite(movie));
  };

  const handleDeleteFavourite = () => {
    dispatch(setActiveMovie(movie));
    dispatch(deleteFavourite(movie.id));
  };

  const favMovie = selectFavMovieById(movie.id);

  return (
    <article className={styles['movie-card']}>
      <header className="movie-card__header">
        <Link to={`/id/${movie.id}`}>
          {movie.poster_path ? (
            <img
              className={styles['movie-card__image']}
              src={imgPosterPath}
              alt="Jack el destripador"
            />
          ) : (
            <MovieCardEmptyImage className={styles['movie-card__image']} />
          )}
        </Link>
      </header>

      <div className={styles['movie-card__body']}>
        <h4 className={styles['movie-card__title']}>{movie.title}</h4>
        <div className={styles['movie-card__data']}>
          <div className={styles['movie-card__datecontainer']}>
            <p className={styles['movie-card__datelabel']}>Estreno</p>
            <p className={styles['movie-card__date']}>{movie.release_date}</p>
          </div>

          {!favMovie ? (
            <BsBookmarkPlus className={styles.bookmark} onClick={handleAddFavourite} />
          ) : (
            <BsBookmarkDashFill className={styles.bookmark} onClick={handleDeleteFavourite} />
          )}

          <div className={styles['movie-card__ratecontainer']}>
            <p className={styles['movie-card__ratelabel']}>Valoración</p>
            <p className={styles['movie-card__rate']}>{movie.vote_average}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
