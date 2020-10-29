import React, { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import SpinnerContainer from '../../components/spinner';
const PokemonsPage = (props) => {
  const { pokemonSelected, getPokemons, pokemons } = props;

  /*to show hooks*/
  const [inti, setInit] = useState(false);

  if (!inti) {
    setInit(true);
    getPokemons();
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
    <SpinnerContainer show={false}>
      <div className="cards-wrapper center">
        <div className="flex">{items}</div>
      </div>
    </SpinnerContainer>
  );
};
export default PokemonsPage;
