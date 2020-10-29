import React, { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import Spinner from '../../components/spinner';
const PokemonsPage = (props) => {
  const { pokemonSelected, getPokemons, pokemons } = props;

  /*to show hooks*/
  const [inti, setInit] = useState(true);

  if (inti) {
    setInit(false);

    getPokemons();
  }

  let show = true;
  if (pokemons == null || pokemons == undefined || pokemons.length == 0) {
    show = true;
  } else {
    show = false;
  }
  const items = pokemons.map((item, index) => {
    return (
      <PokemonCard
        key={'key' + index + '_' + item.name}
        data={item}
        index={index + 1}
        onSelect={pokemonSelected}
      />
    );
  });

  return (
    <Spinner show={show}>
      <div className="cards-wrapper center">
        <div className="flex">{items}</div>
      </div>
    </Spinner>
  );
};
export default PokemonsPage;
