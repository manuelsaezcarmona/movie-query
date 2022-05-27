import { types } from '../actiontypes';
import { movieReducer } from './movie';

const initialState = {
  page: 0,
  movies: [],
  activemovie: {},
  totalpages: 0,
  detailedmovie: {}
};

describe('Given the movieReducer', () => {
  test('should return the state by default', () => {
    const action = {};
    const state = movieReducer(initialState, action);

    expect(state).toEqual(initialState);
  });
  test(' With moviesAll should return allmovies', () => {
    const action = {
      type: types.MOVIE_GET_ALLMOVIES,
      payload: {
        page: 1,
        results: ['a', 'b', 'c'],
        total_pages: 3
      }
    };
    const state = movieReducer(initialState, action);
    expect(state).toEqual({
      page: 1,
      movies: ['a', 'b', 'c'],
      activemovie: {},
      totalpages: 3,
      detailedmovie: {}
    });
  });
  test('With SET_ACTIVE_MOVIE should assign to te state', () => {
    const action = {
      type: types.MOVIE_SET_ACTIVE_MOVIE,
      payload: 'pelicula activa'
    };
    const state = movieReducer(initialState, action);
    expect(state).toEqual({
      page: 0,
      movies: [],
      activemovie: 'pelicula activa',
      totalpages: 0,
      detailedmovie: {}
    });
  });
  test('With MOVIE_SET_DETAILED_MOVIE assign to state', () => {
    const action = {
      type: types.MOVIE_SET_DETAILED_MOVIE,
      payload: 'pelicula en detalle'
    };
    const state = movieReducer(initialState, action);
    expect(state).toEqual({
      page: 0,
      movies: [],
      activemovie: {},
      totalpages: 0,
      detailedmovie: 'pelicula en detalle'
    });
  });
});
