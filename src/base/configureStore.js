import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { defaultMiddleware } from './middlewares';
import rootReducer, { history } from './reducers';

export default function configureStore(preloadedState) {
  const definedMiddlewares = [thunkMiddleware, routerMiddleware(history), defaultMiddleware];
  const middlewareEnhancer = applyMiddleware(...definedMiddlewares);
  const store = createStore(rootReducer, preloadedState, middlewareEnhancer);
  return store;
}
