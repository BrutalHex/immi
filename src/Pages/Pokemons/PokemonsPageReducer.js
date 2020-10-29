import { createReducer } from '../../base/reducerUtils';
import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';

const Pokemons = (initstate, action) => {
  return [...action.payload];
};

export const pokemonsReducer = createReducer([], {
  Get_Pokemons_List: Pokemons,
});

const PokemonDetail = (initstate, action) => {
  return { ...action.payload };
};

export const pokemonsDetailReducer = createReducer(null, {
  Selected_Pokemon: PokemonDetail,
});

const ProcessPending = (initstate, action) => {
  return action.payload;
};

export const processPendingReducer = createReducer(false, {
  Process_Pending: ProcessPending,
});

const reducers = combineReducers({
  pokemons: pokemonsReducer,
  selectedPokemon: pokemonsDetailReducer,
  pending: processPendingReducer,
});

function pendingStatus(initstate, action) {
  if (action.meta != null) {
    return { ...initstate, pending: action.meta.pending };
  }

  return { ...initstate };
}

const pendingStatusReducer = createReducer(null, {
  Selected_Pokemon: pendingStatus,
  Get_Pokemons_List: pendingStatus,
});

const mainReducer = reduceReducers(reducers, pendingStatusReducer);

export default mainReducer;
