import { types } from '../actiontypes';

export const previousPage = (page) => {
  const decrementedPage = page - 1;
  return { type: types.SETTINGS_SET_CURRENTPAGE, payload: decrementedPage };
};

export const nextPage = (page) => {
  const incrementedPage = page + 1;
  return { type: types.SETTINGS_SET_CURRENTPAGE, payload: incrementedPage };
};

export const setTotalPages = (totalPages) => ({
  type: types.SETTINGS_SET_TOTALPAGES,
  payload: totalPages
});
