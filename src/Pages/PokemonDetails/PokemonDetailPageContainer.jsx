import React, { useState } from 'react';
import { useParams } from 'react-router';

import { connect } from 'react-redux';
import ImageLazy from '../../components/ImageLazy';
import CardInfoBar from '../../components/CardInfoBar';
import { pokemonSelected } from '../Pokemons/PokemonsPageAction';
import Spinner from '../../components/spinner';
import { push } from 'connected-react-router';

const PokemonDetailPage = (props) => {
  let { selectedPokemon } = useParams();

  const [inti, setInit] = useState(true);

  let show = true;

  if (inti) {
    setInit(false);
    props.getSelectedPolemon(selectedPokemon);
  }

  if (
    props.selectedPokemon == null ||
    props.selectedPokemon == undefined ||
    selectedPokemon != props.selectedPokemon.name
  ) {
    show = true;
    return (
      <Spinner show={show}>
        <div className="whole">loading data for {props.match.params.selectedPokemon}</div>
      </Spinner>
    );
  } else {
    show = false;
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
