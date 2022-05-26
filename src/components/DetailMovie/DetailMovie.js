import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { IMAGE_URL, DEFAULT_WIDTH_BACKDROP, DEFAULT_WIDTH_POSTER } from '../../services/constants';
import { startGetMovieById } from '../../redux/actions/movie';

export default function DetailMovie() {
  const { detailedmovie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const { movieid } = useParams();

  useEffect(() => {
    dispatch(startGetMovieById(movieid));
  }, []);
  const imgPosterPath = `${IMAGE_URL}/${DEFAULT_WIDTH_POSTER}${detailedmovie.poster_path}`;
  // eslint-disable-next-line no-unused-vars
  const imgHeroPath = `${IMAGE_URL}/${DEFAULT_WIDTH_BACKDROP}${detailedmovie.backdrop_path}`;

  return (
    <main className="main-container">
      <div className={styles['film-detail']}>
        <header className={styles['film-header']}>
          <img
            className={styles['film-header__background']}
            src={imgHeroPath}
            alt={`background ${detailedmovie.title}`}
          />
          <h2 className={styles['film-header__title']}>{detailedmovie.title}</h2>
          <p className={styles['film-header__tagline']}>{detailedmovie.tagline}.</p>
          <p className={styles['film-header__valuation']}>
            Valoración:{' '}
            <span className={styles['film-header__rate']}>{detailedmovie.vote_average}</span>
          </p>
        </header>
        <section className={styles['film-body']}>
          <img
            className={styles['film-body__image']}
            src={imgPosterPath}
            alt={`Poster de la pelicula ${detailedmovie.title}`}
          />

          <div className={styles['film-body__data']}>
            <h3 className={styles['film-body__title']}>{detailedmovie.original_title}</h3>
            <p className={styles['film-body__release']}>
              Fecha de Estreno:{' '}
              <span className={styles['film-body__date']}>{detailedmovie.release_date}</span>
            </p>
            <p className={styles['film-body__sipnosis']}>{detailedmovie.overview}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
