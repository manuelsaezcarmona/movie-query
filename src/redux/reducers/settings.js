import { types } from '../actiontypes';
import { MINIMUM_PAGE } from '../../services/constants';

const initialState = {
  currentpage: MINIMUM_PAGE,
  totalpages: MINIMUM_PAGE
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SETTINGS_SET_CURRENTPAGE: {
      return {
        ...state,
        currentpage: action.payload
      };
    }
    case types.SETTINGS_SET_TOTALPAGES: {
      return {
        ...state,
        totalpages: action.payload
      };
    }
    default:
      return state;
  }
};
