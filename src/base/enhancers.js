const pokemonsReducerEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const defaultEnhancer = (state, action) => {
    const newState = reducer(state, action);
    return newState;
  };
  return createStore(defaultEnhancer, initialState, enhancer);
};
export default pokemonsReducerEnhancer;
