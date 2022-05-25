import { getMoviesByTerm } from '../../services/http';
import { types } from '../actiontypes';

export const getAllMovies = (result) => ({
  type: types.MOVIE_GET_ALLMOVIES,
  payload: result
});

export const startGetAllMovies = (term, page) => async (dispatch) => {
  try {
    const result = await getMoviesByTerm(term, page);

    if (!result.success) {
      return result.status_message;
    }
    dispatch(getAllMovies(result));
    return result;
  } catch (error) {
    return error;
  }
};
