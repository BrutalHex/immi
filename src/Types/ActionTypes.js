export const Get_Pokemons_List = 'Get_Pokemons_List';
export const Selected_Pokemon = 'Selected_Pokemon';
export const Process_Pending = 'Process_Pending';
export function creatAction(inputType, inputPayload) {
  const result = {
    type: inputType,
    payload: inputPayload,
    error: false,
    meta: null,
  };

  return result;
}
