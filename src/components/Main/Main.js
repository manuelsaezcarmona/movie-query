import MoviesList from '../MoviesList/MoviesList';
import SearchForm from '../SearchForm/SearchForm';

export default function Main() {
  return (
    <main className="main-container">
      <SearchForm />

      <MoviesList />
    </main>
  );
}
