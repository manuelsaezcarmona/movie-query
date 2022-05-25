import { types } from '../actiontypes';

export const addFavourite = (film) => ({
  type: types.USER_ADD_FAVOURITES,
  payload: film
});

export const deleteFavourite = (filmID) => ({
  type: types.USER_REMOVE_FAVOURITES,
  payload: filmID
});
