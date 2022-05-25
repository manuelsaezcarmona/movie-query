import React from 'react';
import { BsBookmarkPlus, BsBookmarkDashFill } from 'react-icons/bs';
import { DEFAULT_WIDTH_POSTER, IMAGE_URL } from '../../services/constants';
import styles from './styles.module.css';

export default function MovieCard({ movie }) {
  const imgPosterPath = `${IMAGE_URL}/${DEFAULT_WIDTH_POSTER}${movie.poster_path}`;

  return (
    <article className={styles['movie-card']}>
      <header className="movie-card__header">
        <img
          className={styles['movie-card__image']}
          src={imgPosterPath}
          alt="Jack el destripador"
        />
      </header>

      <div className={styles['movie-card__body']}>
        <h4 className={styles['movie-card__title']}>{movie.title}</h4>
        <div className={styles['movie-card__data']}>
          <div className={styles['movie-card__datecontainer']}>
            <p className={styles['movie-card__datelabel']}>Estreno</p>
            <p className={styles['movie-card__date']}>{movie.release_date}</p>
          </div>
          <BsBookmarkPlus className={styles.bookmark} />
          <BsBookmarkDashFill className={styles.bookmark} />
          <div className={styles['movie-card__ratecontainer']}>
            <p className={styles['movie-card__ratelabel']}>Valoración</p>
            <p className={styles['movie-card__rate']}>{movie.vote_average}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
