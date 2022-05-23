import { types } from '../actiontypes';

const initialState = {
  username: 'Manu',
  favourites: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_ADD_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };

    default:
      return state;
  }
};
