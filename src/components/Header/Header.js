import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="App-header">
      <h1 className="App-header__title">TMDB Searcher</h1>
      <nav className="App-header__nav">
        <ul className="App-header__list">
          <li className="App-header__item">
            <Link to="/" className="App-header__link">
              HomePage
            </Link>
          </li>
          <li className="App-header__item">
            <Link to="/favs" className="App-header__link">
              Favourites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
