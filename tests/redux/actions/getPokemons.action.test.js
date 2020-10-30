import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getPokemons } from '../../../src/Pages/Pokemons/PokemonsPageAction';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

export const reduxStore = mockStore();

describe('app start', () => {
  describe('get pokemon information', () => {
    it('should dispatch the getPokemons action', async () => {
      let data = await reduxStore.dispatch(getPokemons());

      expect(data.payload).toEqual(
        expect.arrayContaining([
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
          },
        ])
      );
    });
  });
});
