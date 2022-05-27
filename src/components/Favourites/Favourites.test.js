import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import Favourites from './Favourites';

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
const store = mockStore(initialState);
store.dispatch = jest.fn();

describe('given the Favourites Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Favourites />
      </Provider>
    );
  });
  test('The component is rendered (take a snapshot)', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Favourites />
      </Provider>
    );
    expect(asFragment(<Favourites />)).toMatchSnapshot();
  });
});
