/* eslint-disable max-len */
export default function DetailMovie() {
  return (
    <main className="main-container">
      <header className="film-header">
        <h2 className="film-header__title">Jack Reacher: Nunca vuelvas atrás</h2>
        <p className="film-header__tagline">Nunca cedas. Nunca te des por vencido. Nunca vuelvas.</p>
        <p className="film-header__valuation">
          Valoracion: <span clasName="film-header__rate">5.9</span>
        </p>
      </header>
      <section className="film-body">
        <img
          className="film-body__image"
          src="https://image.tmdb.org/t/p/w500//gsIaANx3PVGMkzHfwdCOMUP0o7U.jpg"
          alt="Poster de la pelicula"
        />
        <div className="film-body__data">
          <h3 className="film-body__title">Jack Reacher: Never Go Back</h3>
          <p className="film-body__release">
            Fecha de Estreno: <span clasName="film-body__date">5.9</span>
          </p>
          <p className="film-body__sipnosis">
            La Mayor Susan Turner, líder de la antigua unidad militar de Reacher, es falsamente acusada de traición.
            Jack Reacher tendrá que sacarla de prisión y descubrir la verdad detrás de una conspiración gubernamental
            para limpiar sus nombres y salvar sus vidas. Durante el escape, Reacher descubrirá un secreto de su pasado
            que podría cambiar su vida para siempre. Secuela de Jack Reacher (2012).
          </p>
        </div>
      </section>
    </main>
  );
}
