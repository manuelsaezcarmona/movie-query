/* eslint-disable implicit-arrow-linebreak */
export const isFavouriteMovie = (moviesfavourites = [], id) =>
  moviesfavourites.favourites.some((movie) => movie.id === id);
