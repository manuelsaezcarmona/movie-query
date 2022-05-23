import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/user';
import { movieReducer } from './reducers/movie';

export default function configureStore(preLoadState) {
  const rootReducer = combineReducers({
    user: userReducer,
    movie: movieReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducer, preLoadState, composeEnhancers(applyMiddleware(thunk)));
}
