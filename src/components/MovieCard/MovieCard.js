import React from 'react';
import { BsBookmarkPlus, BsBookmarkDashFill } from 'react-icons/bs';
import styles from './styles.module.css';

export default function MovieCard() {
  return (
    <article className={styles['movie-card']}>
      <header className="movie-card__header">
        <img
          className={styles['movie-card__image']}
          src="https://image.tmdb.org/t/p/w500/ugX4WZJO3jEvTOerctAWJLinujo.jpg"
          alt="Jack el destripador"
        />
      </header>

      <div className={styles['movie-card__body']}>
        <h4 className={styles['movie-card__title']}>Jack el destripador</h4>
        <div className={styles['movie-card__data']}>
          <div className={styles['movie-card__datecontainer']}>
            <p className={styles['movie-card__datelabel']}>Estreno</p>
            <p className={styles['movie-card__date']}>1976-09-23</p>
          </div>
          <BsBookmarkPlus className={styles.bookmark} />
          <BsBookmarkDashFill className={styles.bookmark} />
          <div className={styles['movie-card__ratecontainer']}>
            <p className={styles['movie-card__ratelabel']}>Valoración</p>
            <p className={styles['movie-card__rate']}>5.7</p>
          </div>
        </div>
      </div>
    </article>
  );
}
