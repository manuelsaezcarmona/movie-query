import { types } from '../actiontypes';
import { userReducer } from './user';

const initialState = {
  username: 'Manu',
  favourites: []
};

describe('Given the userReducer', () => {
  test('when add movie then favourites incremented ', () => {
    const action = {
      type: types.USER_ADD_FAVOURITES,
      payload: 12345
    };
    const state = userReducer(initialState, action);
    expect(state).toEqual({
      username: 'Manu',
      favourites: [12345]
    });
  });
  test('when deleted movie then favourites decremented ', () => {
    const actualState = {
      username: 'Manu',
      favourites: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    };
    const action = {
      type: types.USER_REMOVE_FAVOURITES,
      payload: 3
    };
    const state = userReducer(actualState, action);
    expect(state.favourites.length).toBe(4);
    expect(state).toEqual({
      username: 'Manu',
      favourites: [{ id: 1 }, { id: 2 }, { id: 4 }, { id: 5 }]
    });
  });
});
