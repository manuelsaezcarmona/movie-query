import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/user';
import { movieReducer } from './reducers/movie';
import { settingsReducer } from './reducers/settings';

export default function configureStore(preLoadState) {
  const rootReducer = combineReducers({
    user: userReducer,
    movie: movieReducer,
    settings: settingsReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducer, preLoadState, composeEnhancers(applyMiddleware(thunk)));
}
