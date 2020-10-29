import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { pokemonsReducer, pokemonsDetailReducer } from '../Pages/Pokemons/PokemonsPageReducer';
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  selectedPokemon: pokemonsDetailReducer,
  router: connectRouter(history),
});

export default rootReducer;
