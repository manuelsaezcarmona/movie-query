import { getMoviesByTerm } from '../../services/http';
import { types } from '../actiontypes';

export const getAllMovies = (result) => ({ type: types.MOVIE_GET_ALLMOVIES, payload: result });

// eslint-disable-next-line consistent-return
export const startGetAllMovies = (term, page) => async (dispatch) => {
  try {
    const result = await getMoviesByTerm(term, page);

    if (result.success === false) {
      return result.status_message;
    }

    dispatch(getAllMovies(result));
  } catch (error) {
    return error;
  }
};

export const setActiveMovie = (movie) => ({
  type: types.MOVIE_SET_ACTIVE_MOVIE,
  payload: movie
});
