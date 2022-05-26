import { types } from '../actiontypes';
import { DEFAULT_VALUE, MINIMUM_PAGE } from '../../services/constants';

const initialState = {
  currentpage: MINIMUM_PAGE,
  searchfilm: DEFAULT_VALUE
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SETTINGS_SET_CURRENTPAGE: {
      return {
        ...state,
        currentpage: action.payload
      };
    }

    case types.SETTINGS_SET_CURRENT_SEARCH:
      return {
        ...state,
        searchfilm: action.payload
      };
    case types.SETTINGS_RESET_CURRENTPAGE:
      return {
        ...state,
        currentpage: MINIMUM_PAGE
      };
    default:
      return state;
  }
};
