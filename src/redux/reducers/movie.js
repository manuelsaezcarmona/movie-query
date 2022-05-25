import { types } from '../actiontypes';

const initialState = {
  page: 0,
  movies: [],
  activemovie: {}
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MOVIE_GET_ALLMOVIES:
      return {
        ...state,
        page: state.payload.page,
        movies: state.payload.results
      };
    default:
      return state;
  }
};
