import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles['App-header']}>
      <h1 className={styles['App-header__title']}>TMDB Searcher</h1>
      <nav className={styles['App-header__nav']}>
        <ul className={styles['App-header__list']}>
          <li className={styles['App-header__item']}>
            <Link to="/" className={styles['App-header__link']}>
              HomePage
            </Link>
          </li>
          <li className={styles['App-header__item']}>
            <Link to="/favs" className={styles['App-header__link']}>
              Favourites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
