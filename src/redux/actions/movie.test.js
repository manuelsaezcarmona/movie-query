import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { types } from '../actiontypes';
import {
  getAllMovies,
  startGetMovieById,
  setMovieDetail,
  setActiveMovie,
  startGetAllMovies
} from './movie';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  user: {
    username: 'test',
    favourites: []
  },
  movie: {
    page: 1,
    movies: [],
    activemovie: {},
    totalpages: 3,
    detailedmovie: {}
  },
  settings: {
    currentpage: 1,
    searchfilm: 'Avengers'
  }
};

let store = mockStore(initialState);

describe('Given the Movie Action creators', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    jest.clearAllMocks();
  });
  test('getAllMovies should return an result', () => {
    const result = 'es un result';
    const action = getAllMovies(result);
    expect(action).toEqual({
      type: types.MOVIE_GET_ALLMOVIES,
      payload: result
    });
  });
  test('startGetAllMovies dispatch getAllMovies', async () => {
    await store.dispatch(startGetAllMovies('bingueros', 1));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: '@movie/getall',
      payload: {
        page: expect.any(Number),
        results: expect.any(Array),
        total_pages: expect.any(Number),
        total_results: expect.any(Number)
      }
    });
  });

  test('StartGetMoviesById dispatch setMovieDetail with a Movie', async () => {
    await store.dispatch(startGetMovieById(71808));
    const actions = store.getActions();

    expect(actions[0]).toStrictEqual(expect.any(Object));
  });
});
