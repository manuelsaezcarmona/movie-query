import MovieCard from '../MovieCard/MovieCard';

export default function Favourites() {
  return (
    <main className="main-container">
      <h2>Mis Peliculas Favoritas</h2>
      <section className="favourites">
        <p className="favourites__text">No se han encontrado Peliculas</p>
        <ul className="favourites__list">
          <li className="favourites__item">
            <MovieCard />
          </li>
        </ul>
      </section>
    </main>
  );
}
