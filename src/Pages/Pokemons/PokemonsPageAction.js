import { creatAction, Get_Pokemons_List, Selected_Pokemon } from '../../Types/ActionTypes';
import { push } from 'connected-react-router';
import { getData, getDataAsync } from '../../base/apiService';
import { baseUrl } from '../../base/settings';

export const getPokemons = () => {
  return (dispatch) => {
    return getDataAsync(
      baseUrl,
      { limit: 151 },
      (response) => {
        return dispatch(creatAction(Get_Pokemons_List, response.results));
      },

      (error) => {}
    );
  };
};

export const pokemonSelected = (name) => {
  return (dispatch) => {
    return getDataAsync(
      `${baseUrl}/${name}`,
      {},

      (response) => {
        return dispatch(creatAction(Selected_Pokemon, response));
      },

      (error) => {
        dispatch(push(`/pokemon/`));
      }
    );
  };
};
