import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';
import { startGetAllMovies } from '../../redux/actions/movie';

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

jest.mock('../../redux/actions/movie', () => ({
  startGetAllMovies: jest.fn()
}));

describe('Given the SearchForm', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );
  });
  test('The component is rendered', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );
    expect(asFragment(<SearchForm />)).toMatchSnapshot();
  });
  describe('Given the Search Button', () => {
    test('The button must called to handleSubmit with text', () => {
      const search = 'something';
      const button = screen.getByRole('button', { options: { name: 'searchButton' } });
      const inputText = screen.getByRole('textbox');
      fireEvent.change(inputText, { target: { value: search } });

      fireEvent.click(button);
      expect(startGetAllMovies).toHaveBeenCalledWith(search, 1);
    });
  });
});
