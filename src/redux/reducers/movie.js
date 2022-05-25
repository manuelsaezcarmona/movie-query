import { types } from '../actiontypes';

const initialState = {
  page: 0,
  movies: [],
  activemovie: {},
  totalpages: 0
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MOVIE_GET_ALLMOVIES:
      return {
        ...state,
        page: action.payload.page,
        movies: action.payload.results,
        totalpages: action.payload.total_pages
      };
    case types.MOVIE_SET_ACTIVE_MOVIE:
      return {
        ...state,
        activemovie: action.payload
      };
    default:
      return state;
  }
};
