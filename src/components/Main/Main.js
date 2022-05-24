import MovieCard from '../MovieCard/MovieCard';
import SearchForm from '../SearchForm/SearchForm';

export default function Main() {
  return (
    <main className="main-container">
      <div className="searchContainer">
        <SearchForm />
      </div>
      <section className="movies">
        <p className="movies__text">No se han encontrado Peliculas</p>
        <ul className="movies__list">
          <li className="movies__item">
            {' '}
            <MovieCard />
          </li>
        </ul>
      </section>
    </main>
  );
}
