import { getMovieById, getMoviesByTerm } from '../../services/http';
import { types } from '../actiontypes';

export const getAllMovies = (result) => ({ type: types.MOVIE_GET_ALLMOVIES, payload: result });

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

export const setMovieDetail = (movie) => ({
  type: types.MOVIE_SET_DETAILED_MOVIE,
  payload: movie
});

export const startGetMovieById = (id) => async (dispatch) => {
  try {
    const movie = await getMovieById(id);

    dispatch(setMovieDetail(movie));
    return movie;
  } catch (error) {
    return error;
  }
};
