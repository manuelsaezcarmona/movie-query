import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import styles from './styles.module.css';
// import { resultMoviesPage } from '../../services/mockdata';

export default function Favourites() {
  const { favourites } = useSelector((state) => state.user);

  return (
    <main className="main-container">
      <h2 className={styles.header}>Mis Peliculas Favoritas</h2>
      <section className={styles.favourites}>
        {favourites.length ? (
          <ul className={styles.favourites__list}>
            {favourites.map((movie) => (
              <li className={styles.favourites__item} key={`${movie.id}_fvt`}>
                <MovieCard movie={movie} />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.favourites__text}>No tienes peliculas Favoritas</p>
        )}
      </section>
    </main>
  );
}
