import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import ImageLazy from '../../components/ImageLazy';
import CardInfoBar from '../../components/CardInfoBar';
import { pokemonSelected } from '../Pokemons/PokemonsPageAction';
import SpinnerContainer from '../../components/spinner';

const PokemonDetailPage = (props) => {
  debugger;

  if (props.selectedPokemon == null) {
    if (!props.pending) {
      props.getSelectedPolemon('charizard');
    }
    return (
      <SpinnerContainer>
        <div className="whole">loading data for charizard</div>
      </SpinnerContainer>
    );
  }

  const data = props.selectedPokemon;

  const link = `https://img.pokemondb.net/sprites/black-white/anim/normal/${data.name}.gif`;

  const properties = ['id', 'height'];
  const infoBar = properties.map((item, indi) => {
    return (
      <CardInfoBar
        itemTitle={item}
        itemValue={data[item]}
        key={`parentListDetails${item}${indi}`}
      />
    );
  });
  infoBar.push(
    <CardInfoBar
      itemTitle="Type"
      key={`parentListDetailsType`}
      itemValue={data.types.map((a) => a.type.name)}
    />
  );
  infoBar.push(
    <CardInfoBar
      itemTitle="Abilities"
      key={`parentListDetailsAbilities}`}
      itemValue={data.abilities.map((a) => a.ability.name)}
    />
  );

  return (
    <div className="centered-flex">
      <div className="card info-card">
        <div className="whole">
          <div className="close" onClick={props.close}>
            X
          </div>
        </div>
        <div className="whole img-wrapper">
          <ImageLazy link={link} classes="card-img center" />
        </div>
        <div className="whole card-text"> {data.name}</div>
        {infoBar}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => {
      dispatch(push(`/pokemon/`));
    },
    getSelectedPolemon: (name) => {
      dispatch(pokemonSelected(name));
    },
  };
};

const PokemonDetailPageContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonDetailPage);
export default PokemonDetailPageContainer;