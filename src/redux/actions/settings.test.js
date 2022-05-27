import { types } from '../actiontypes';
import { nextPage, previousPage } from './settings';

describe('Given the Settings Action creators', () => {
  test('previouspage should decrement one page', () => {
    const action = previousPage(2);
    expect(action).toEqual({
      type: types.SETTINGS_SET_CURRENTPAGE,
      payload: 1
    });
  });
  test('nextpage should increment one page', () => {
    const action = nextPage(2);
    expect(action).toEqual({
      type: types.SETTINGS_SET_CURRENTPAGE,
      payload: 3
    });
  });
});
