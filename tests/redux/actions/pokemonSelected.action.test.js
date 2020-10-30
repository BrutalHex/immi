import { pokemonSelected } from '../../../src/Pages/Pokemons/PokemonsPageAction';
import { reduxStore } from './getPokemons.action.test';

describe('single pokemon', () => {
  describe('start', () => {
    reduxStore.clearActions();

    it('should dispatch the pokemonSelected action', async () => {
      let res = await reduxStore.dispatch(pokemonSelected('charizard'));
      expect(res.payload).toMatchObject({ name: 'charizard' });
    });
  });
});
