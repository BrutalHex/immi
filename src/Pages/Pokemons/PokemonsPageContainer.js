import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import PokemonsPage from './PokemonsPage';
import { getPokemons, pokemonSelected } from './PokemonsPageAction';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: () => {
      dispatch(getPokemons());
    },

    pokemonSelected: (selectedPokemon) => {
      dispatch(push(`/pokemon/${selectedPokemon.name}`));
    },
  };
};

const PokemonsPageContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonsPage);
export default PokemonsPageContainer;
