import {
  creatAction,
  Get_Pokemons_List,
  Selected_Pokemon,
  Process_Pending,
} from '../../Types/ActionTypes';
import { push } from 'connected-react-router';
import { getData } from '../../base/apiService';

export const getPokemons = () => {
  return (dispatch) => {
    dispatch(creatAction(Process_Pending, true));

    getData(
      'https://pokeapi.co/api/v2/pokemon',
      { limit: 151 },
      (response) => {
        return dispatch(creatAction(Get_Pokemons_List, response.results, { pending: false }));
      },

      (error) => {}
    );
  };
};

export const pokemonSelected = (name) => {
  return (dispatch) => {
    dispatch(creatAction(Process_Pending, true));

    getData(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
      {},

      (response) => {
        return dispatch(creatAction(Selected_Pokemon, response, { pending: false }));
      },

      (error) => {
        dispatch(creatAction(Process_Pending, false));
        dispatch(push(`/pokemon/`));
      }
    );
  };
};
