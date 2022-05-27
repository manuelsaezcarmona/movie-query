/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Link, MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { BsBookmarkPlus, BsBookmarkDashFill } from 'react-icons/bs';

import { DEFAULT_WIDTH_POSTER, IMAGE_URL } from '../../services/constants';
import MovieCardEmptyImage from '../MovieCardEmptyImage/MovieCardEmptyImage';
import { setActiveMovie } from '../../redux/actions/movie';
import { addFavourite, deleteFavourite } from '../../redux/actions/user';
import { selectFavMovieById } from '../../redux/selectors/index';
import { movieDetail } from '../../services/mockdata';

import MovieCard from './MovieCard';

jest.mock('../../redux/actions/movie', () => ({
  setActiveMovie: jest.fn()
}));

jest.mock('../../redux/actions/user', () => ({
  addFavourite: jest.fn(),
  deleteFavourite: jest.fn()
}));

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

const movieObj = {
  movie: {
    ...movieDetail
  }
};

const store = mockStore(initialState);
store.dispatch = jest.fn();

describe('Given the MovieCard component', () => {
  test('The component is rendered (take a snapshot)', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MovieCard {...movieObj} />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment(<MovieCard />)).toMatchSnapshot();
  });
  test('When add Favourite dispatch', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MovieCard {...movieObj} />
        </MemoryRouter>
      </Provider>
    );
    const iconAddFavourite = screen.getByTitle('bookmark-plus');
    fireEvent.click(iconAddFavourite);
    expect(setActiveMovie).toHaveBeenCalled();
  });
});
