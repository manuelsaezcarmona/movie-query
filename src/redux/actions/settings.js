import { types } from '../actiontypes';

export const previousPage = (page) => {
  const decrementedPage = page - 1;
  return { type: types.SETTINGS_SET_CURRENTPAGE, payload: decrementedPage };
};

export const nextPage = (page) => {
  const incrementedPage = page + 1;
  return { type: types.SETTINGS_SET_CURRENTPAGE, payload: incrementedPage };
};

export const setCurrentPage = (page) => ({
  type: types.SETTINGS_SET_CURRENTPAGE,
  payload: page
});

export const setCurrentSearch = (searchFilm) => ({
  type: types.SETTINGS_SET_CURRENT_SEARCH,
  payload: searchFilm
});
