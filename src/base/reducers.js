import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import mainReducer from '../Pages/Pokemons/PokemonsPageReducer';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  main: mainReducer,
  router: connectRouter(history),
});

export default rootReducer;
