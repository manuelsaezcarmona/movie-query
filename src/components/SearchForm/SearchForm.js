import styles from './styles.module.css';

export default function SearchForm() {
  return (
    <div className={styles.search}>
      <form action="" className={styles.search__form}>
        <input className={styles.search__inputtext} type="text" name="search" placeholder="Busca tu pelicula" />
        <button className={styles.search__button} type="button">
          Busca
        </button>
      </form>
    </div>
  );
}
