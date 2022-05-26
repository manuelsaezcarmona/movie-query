import { types } from '../actiontypes';

export const addFavourite = (movie) => ({
  type: types.USER_ADD_FAVOURITES,
  payload: movie
});

export const deleteFavourite = (movieID) => ({
  type: types.USER_REMOVE_FAVOURITES,
  payload: movieID
});
