/* eslint-disable max-len */

import styles from './styles.module.css';

export default function DetailMovie() {
  return (
    <main className="main-container">
      <div className={styles['film-detail']}>
        <header className={styles['film-header']}>
          <h2 className={styles['film-header__title']}>Jack Reacher: Nunca vuelvas atrás</h2>
          <p className={styles['film-header__tagline']}>Nunca cedas. Nunca te des por vencido. Nunca vuelvas.</p>
          <p className={styles['film-header__valuation']}>
            Valoracion: <span className={styles['film-header__rate']}>5.9</span>
          </p>
        </header>
        <section className={styles['film-body']}>
          <img
            className={styles['film-body__image']}
            src="https://image.tmdb.org/t/p/w500//gsIaANx3PVGMkzHfwdCOMUP0o7U.jpg"
            alt="Poster de la pelicula"
          />

          <div className={styles['film-body__data']}>
            <h3 className={styles['film-body__title']}>Jack Reacher: Never Go Back</h3>
            <p className={styles['film-body__release']}>
              Fecha de Estreno: <span className={styles['film-body__date']}>12-09-2009</span>
            </p>
            <p className={styles['film-body__sipnosis']}>
              La Mayor Susan Turner, líder de la antigua unidad militar de Reacher, es falsamente acusada de traición.
              Jack Reacher tendrá que sacarla de prisión y descubrir la verdad detrás de una conspiración gubernamental
              para limpiar sus nombres y salvar sus vidas. Durante el escape, Reacher descubrirá un secreto de su pasado
              que podría cambiar su vida para siempre. Secuela de Jack Reacher (2012).
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
