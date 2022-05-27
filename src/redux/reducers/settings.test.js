import { types } from '../actiontypes';
import { settingsReducer } from './settings';
import { DEFAULT_VALUE, MINIMUM_PAGE } from '../../services/constants';

const initialState = {
  currentpage: MINIMUM_PAGE,
  searchfilm: DEFAULT_VALUE
};

describe('Given the settingsReducer', () => {
  test('SETTINGS_SET_CURRENTPAGE should return new page', () => {
    const action = {
      type: types.SETTINGS_SET_CURRENTPAGE,
      payload: 3
    };
    const state = settingsReducer(initialState, action);
    expect(state).toEqual({
      currentpage: 3,
      searchfilm: DEFAULT_VALUE
    });
  });
  test('SETTINGS_SET_CURRENT_SEARCH should return other search', () => {
    const action = {
      type: types.SETTINGS_SET_CURRENT_SEARCH,
      payload: 'mi busqueda'
    };
    const state = settingsReducer(initialState, action);
    expect(state).toEqual({
      currentpage: MINIMUM_PAGE,
      searchfilm: 'mi busqueda'
    });
  });
  test('When reset the current page should be return the MINIMUM_PAGE', () => {
    const actualState = { currentpage: 10, searchfilm: DEFAULT_VALUE };

    const action = { type: types.SETTINGS_RESET_CURRENTPAGE };

    const state = settingsReducer(actualState, action);
    expect(state).toEqual({
      currentpage: MINIMUM_PAGE,
      searchfilm: DEFAULT_VALUE
    });
  });
});
