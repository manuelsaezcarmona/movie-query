import { GoSearch } from 'react-icons/go';
import { useForm } from '../../hooks/useForm';
import styles from './styles.module.css';

export default function SearchForm() {
  const [formValues, handleInputChange] = useForm({ search: '' });

  const { search } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className={styles.search}>
      <form className={styles.search__form}>
        <input
          className={styles.search__inputtext}
          type="text"
          name="search"
          value={search}
          onChange={handleInputChange}
          placeholder="Busca tu pelicula"
        />
        <button className={styles.search__button} type="button" onClick={handleSubmit}>
          <GoSearch className={styles.search__icon} />
        </button>
      </form>
    </div>
  );
}
