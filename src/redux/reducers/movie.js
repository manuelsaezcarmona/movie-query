import { types } from '../actiontypes';

const initialState = {
  movies: [],
  activemovie: {}
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MOVIE_GET_ALLMOVIES:
      return {
        ...state,
        movies: state.payload
      };
    default:
      return state;
  }
};
