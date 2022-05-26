import { GoSearch } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import styles from './styles.module.css';
import { startGetAllMovies } from '../../redux/actions/movie';
import { resetCurrentPage, setCurrentSearch } from '../../redux/actions/settings';
import { MINIMUM_PAGE } from '../../services/constants';

export default function SearchForm() {
  const [formValues, handleInputChange, reset] = useForm({ search: '' });
  const dispatch = useDispatch();
  const { search } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startGetAllMovies(search, MINIMUM_PAGE));
    dispatch(setCurrentSearch(search));
    dispatch(resetCurrentPage());
    reset();
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
