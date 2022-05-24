import React from 'react';

export default function MovieCard() {
  return (
    <article className="movie-card">
      <header className="movie-card__header">
        <img
          className="movie-card__image"
          src="https://image.tmdb.org/t/p/w500/ugX4WZJO3jEvTOerctAWJLinujo.jpg"
          alt="Jack el destripador"
        />
      </header>

      <div className="movie-card__body">
        <h4 className="movie-card__title">Jack el destripador</h4>
        <div className="movie-card__data">
          <div className="movie-card__datecontainer">
            <p className="movie-card__datelabel">Estreno</p>
            <p className="movie-card__date">1976-09-23</p>
          </div>
          <div className="movie-card__ratecontainer">
            <p className="movie-card__ratelabel">Valoración</p>
            <p className="movie-card__rate">5.7</p>
          </div>
        </div>
      </div>
    </article>
  );
}
