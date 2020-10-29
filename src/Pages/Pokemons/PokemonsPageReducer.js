import { createReducer } from '../../base/reducerUtils';

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

const ProcessPending = (initstate = false, action) => {
  return action.payload;
};

export const processPendingReducer = createReducer(null, {
  Process_Pending: ProcessPending,
});
