import React from 'react';

export default function SearchForm() {
  return (
    <div className="search">
      <form action="" className="search__form">
        <input className="search__inputtext" type="text" name="search" placeholder="Busca tu pelicula" />
        <button className="search__button" type="button">
          Busqueda
        </button>
      </form>
    </div>
  );
}
