import { creatAction, Get_Pokemons_List, Selected_Pokemon } from '../../Types/ActionTypes';
import { push } from 'connected-react-router';
import { getData } from '../../base/apiService';

export const getPokemons = () => {
  return (dispatch) => {
    getData(
      'https://pokeapi.co/api/v2/pokemon',
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
    getData(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
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
