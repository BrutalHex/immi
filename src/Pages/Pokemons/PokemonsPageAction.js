import {
  creatAction,
  Get_Pokemons_List,
  Selected_Pokemon,
  Process_Pending,
} from '../../Types/ActionTypes';
import { getData } from '../../base/apiService';
import { push } from 'connected-react-router';
export const getPokemons = () => {
  return (dispatch) => {
    dispatch(creatAction(Process_Pending, true));

    getData(
      'https://pokeapi.co/api/v2/pokemon',
      { limit: 151 },
      (response) => {
        dispatch(creatAction(Process_Pending, false));
        return dispatch(creatAction(Get_Pokemons_List, response.results));
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
        dispatch(creatAction(Process_Pending, false));
        return dispatch(creatAction(Selected_Pokemon, response));
      },

      (error) => {}
    );
  };
};
