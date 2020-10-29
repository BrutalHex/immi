import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import SharedLayout from './Layout/SharedLayout';
import { DashboardLayoutRoute } from './Layout/DashboardLayout';
import PokemonsPageContainer from './Pages/Pokemons/PokemonsPageContainer';
import PokemonDetailPageContainer from './Pages/PokemonDetails/PokemonDetailPageContainer';

function App() {
  return (
    <SharedLayout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/pokemon" />
        </Route>

        <Route path={['/pokemon']}>
          <DashboardLayoutRoute>
            <Switch>
              <Route exact path="/pokemon" component={PokemonsPageContainer} />
              <Route path="/pokemon/:selectedPokemon" component={PokemonDetailPageContainer} />
            </Switch>
          </DashboardLayoutRoute>
        </Route>
      </Switch>
    </SharedLayout>
  );
}

export default App;
