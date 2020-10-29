import { createReducer } from '../../base/reducerUtils';
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

const reducers = combineReducers({
  pokemons: pokemonsReducer,
  selectedPokemon: pokemonsDetailReducer,
});
