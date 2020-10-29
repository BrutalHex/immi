import React from 'react';
import ImageLazy from './ImageLazy';

const PokemonCard = (prop) => {
  const link = `https://img.pokemondb.net/sprites/black-white/anim/normal/${prop.data.name}.gif`;

  return (
    <div onClick={() => prop.onSelect(prop.data)} className="card">
      <div className="whole img-wrapper">
        <ImageLazy link={link} classes="card-img center" />
      </div>
      <div className="whole card-text"> {prop.data.name}</div>
    </div>
  );
};

export default PokemonCard;
